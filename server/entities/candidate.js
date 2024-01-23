const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const candidateSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        ward: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        submitIssueResponses: { type: Boolean, default: false },
        publicEmail: { type: String },
        phonePrimary: { type: String },
        phoneSecondary: { type: String },
        websiteUrl: { type: String },
        profilePhotoUrl: { type: String },
        facebookUrl: { type: String },
        twitterUrl: { type: String },
        instagramUrl: { type: String },
        tiktokUrl: { type: String },
        linkedinUrl: { type: String },
        internalApproval: { type: Boolean, default: false },
        finalApproval: { type: Boolean, default: false },
    },
    {
        timestamps: { createdAt: "createdon", updatedAt: "modifiedon" },
    }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

//validation for API level
// function validateUserCreate(user) {
//     const schema = Joi.object({
//         email: Joi.string().required().min(5).max(255).email(),
//         password: Joi.string().required().min(8).max(1024),
//         roles: Joi.array().items(Joi.string()),
//         admin_password: Joi.string().required().min(8).max(1024),
//     });

//     return schema.validate(user);
// }

module.exports.Candidate = Candidate;
// module.exports.validateUserEmail = validateUserEmail;
