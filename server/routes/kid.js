const mongoose = require("mongoose");
const { KidVote } = require("../entities/kidVote");

const express = require("express");
const router = express.Router();

router.post("/post-vote", async (req, res, next) => {
    let newVote = {
        candidate: req.body.candidate,
    };

    KidVote.create(newVote, (err, newKidVoteResponse) => {
        console.log(newKidVoteResponse);
        res.send(newKidVoteResponse._id);
    });
});

module.exports = router;
