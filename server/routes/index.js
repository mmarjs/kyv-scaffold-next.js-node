const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const candidateRoutes = require("./candidate");
const candidateProfileUpdatesRoutes = require("./candidateProfileUpdate");
const issueResponseRoutes = require("./issueResponse");
const eventRoutes = require("./event");
const residentRoutes = require("./resident");
const kidsRoutes = require("./kid");

router.use("/auth", authRoutes);
router.use("/candidates", candidateRoutes);
router.use("/candidate-profile-updates", candidateProfileUpdatesRoutes);
router.use("/issue-responses", issueResponseRoutes);
router.use("/events", eventRoutes);
router.use("/residents", residentRoutes);
router.use("/kids", kidsRoutes);

module.exports = router;
