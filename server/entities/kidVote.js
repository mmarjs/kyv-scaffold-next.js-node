const mongoose = require("mongoose");

const kidVoteSchema = new mongoose.Schema(
    {
        candidate: { type: String, required: true },
    },
    {
        timestamps: { createdAt: "createdon", updatedAt: "modifiedon" },
    }
);

const KidVote = mongoose.model("KidVote", kidVoteSchema);

module.exports.KidVote = KidVote;
