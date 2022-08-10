const jwt = require("jsonwebtoken");

module.exports = function tokenauth(req, res, next) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async function (err, decoded) {
    if (err) {
      if (err.name == "TokenExpiredError") {
        return res.status(201).send("Token Expired");
      } else if (err) {
        return res.status(401).send("Failed to authenticate token.");
      }
    } else {
      req.user = decoded;
      next();
    }
  });
};
