const express = require('express')
const next = require('next')
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const routes = require("./server/routes/index");
const initMongo = require("./db");

const LogService = require('./server/services/logs')

initialize();

async function initialize() {
  await initMongo();
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.PROJECT_ENV !== 'production'
  const app = next({ dev })
  const handle = app.getRequestHandler()

  app.prepare().then(() => {

    const server = express()
    server.use(bodyParser.json());
    server.use(cookieParser());
    server.use(cors());
    server.use("/api", routes);

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)

      LogService.newLog(`Server loaded in ${process.env.PROJECT_ENV} environment`)
    })
  })
}