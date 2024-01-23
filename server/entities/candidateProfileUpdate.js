const Joi = require('joi')
const _ = require('lodash')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const candidateProfileUpdateSchema = new mongoose.Schema(
  {
    // fullname: { type: String, required: true },
    // ward: { type: String, required: true },
    // slug: { type: String, required: true, unique: true },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
      required: true,
    },
    phonePrimary: { type: String },
    phoneSecondary: { type: String },
    websiteUrl: { type: String },
    profilePhotoUrl: { type: String },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    instagramUrl: { type: String },
    tiktokUrl: { type: String },
    linkedinUrl: { type: String },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const CandidateProfileUpdate = mongoose.model(
  'CandidateProfileUpdate',
  candidateProfileUpdateSchema
)

module.exports.CandidateProfileUpdate = CandidateProfileUpdate
