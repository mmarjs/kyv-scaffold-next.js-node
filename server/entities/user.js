const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
    {
        // firstname: { type: String, required: true },
        // lastname: { type: String, required: true },
        email: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 255,
            unique: true,
        },
        password: { type: String, required: true, min: 8, max: 1024 },
        passwordResetToken: { type: String },
        roles: [{ type: String }],
        isdeleted: {
            type: Boolean,
            default: false,
        },
        deletedon: {
            type: Date,
        },
        deletedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        modifiedby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: { createdAt: "createdon", updatedAt: "modifiedon" },
    }
);

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            id: this._id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            roles: this.roles,
        },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: process.env.JWT_EXPIRATION_TIME }
    );
    return token;
};

// userSchema.methods.generatePasswordResetToken = function () {
//     const token = jwt.sign(
//         {
//             email: this.email,
//         },
//         process.env.JWT_PRIVATE_KEY,
//         { expiresIn: process.env.JWT_EXPIRATION_TIME }
//     );
//     return token;
// };

userSchema.methods.generateAuthRefreshToken = function () {
    const refreshtoken = jwt.sign(
        {
            id: this._id,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
        },
        process.env.JWT_REFRESH_PRIVATE_KEY,
        { expiresIn: process.env.JWT_EXPIRATION_TIME }
    );
    return refreshtoken;
};

const User = mongoose.model("User", userSchema);

//validation for API level
function validateUserCreate(user) {
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(1024),
        roles: Joi.array().items(Joi.string()),
        admin_password: Joi.string().required().min(8).max(1024),
    });

    return schema.validate(user);
}

function validateUserPassword(user) {
    const schema = Joi.object({
        password: Joi.string().required().min(8).max(1024),
    });

    return schema.validate(user);
}

function validateUserEmail(user) {
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
    });

    return schema.validate(user);
}

function validateUserUpdate(user) {
    const schema = Joi.object({
        firstname: Joi.string(),
        lastname: Joi.string(),
        password: Joi.string().min(8).max(1024),
        roles: Joi.array().items(Joi.string()),
    });

    return schema.validate(user);
}

function validateUserLogin(req) {
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(1024),
    });
    return schema.validate(req);
}

module.exports.User = User;
module.exports.validateUserEmail = validateUserEmail;
module.exports.validateUserCreate = validateUserCreate;
module.exports.validateUserUpdate = validateUserUpdate;
module.exports.validateUserLogin = validateUserLogin;
module.exports.validateUserPassword = validateUserPassword;
