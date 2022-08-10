// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
// const Joi = require("joi");
const mongoose = require("mongoose");
const { User, validateUserCreate, validateUserLogin, validateUserEmail } = require("../entities/user");


const express = require("express");
const router = express.Router();


router.get("/server-live", async (req, res, next) => {
  return res.send(
    "Server is live.",
  );
});


// Register a new user w/ an admin password
router.post("/register", async (req, res, next) => {
  const { error } = validateUserCreate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.body.admin_password !== process.env.ADMINPASSWORD) {
    return res.status(400).send("You are not authorized for this action.")
  }

  let user = await User.findOne({
      email: req.body.email ? req.body.email.toLowerCase() : "",
  });
  if (user) return res.status(400).send("User already registered.");

  user = new User({
    email: req.body.email,
    password: req.body.password,
    roles: req.body.roles ? req.body.roles : ["User"],
  });

  //hash the password
  const salt = await bcrypt.genSalt(11);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  user = await User.findOne({
      email: { $regex: new RegExp("^" + req.body.email.toLowerCase(), "i") },
  });

  const accessToken = user.generateAuthToken();
  const refreshToken = user.generateAuthRefreshToken();

  //auth token and refresh token
  res.header("x-auth-token", accessToken)
  .header("x-auth-refresh-token", refreshToken)
  .header("access-control-expose-headers", "x-auth-token")
  .header("access-control-expose-headers", "x-auth-refresh-token")
  .send({
      ..._.pick(user, [
          "_id",
          "email",
          "roles",
          "hidetranscript",
      ]),
      accessToken,
      refreshToken,
  }); 
})


router.post("/login", async (req, res) => {
  try {
      console.log(req.body);

      const { error } = validateUserLogin(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let user = await User.findOne({
          email: {
              $regex: new RegExp("^" + req.body.email.toLowerCase(), "i"),
          },
      });

      if (!user) return res.status(400).send("Invalid email or password.");

      const isvalid = await bcrypt.compare(req.body.password, user.password);
      if (!isvalid) return res.status(400).send("Invalid email or password.");

      const token = user.generateAuthToken();
      const refreshtoken = user.generateAuthRefreshToken();

      res.header("x-auth-token", token)
          .header("x-auth-refresh-token", refreshtoken)
          .header("access-control-expose-headers", [
              "x-auth-token",
              "x-auth-refresh-token",
          ])
          .send({
              ..._.pick(user, [
                  "_id",
                  "firstname",
                  "lastname",
                  "email",
                  "roles",
              ]),
              accessToken: token,
              refreshToken: refreshtoken,
          });
  } catch (ex) {
      throw ex;
  }
});


module.exports = router;