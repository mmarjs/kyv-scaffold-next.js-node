const mongoose = require('mongoose')

const issueResponseSchema = new mongoose.Schema(
  {
    issueResponse: { type: String, required: true },
    issueSlug: { type: String, required: true }, // Like "housing"
    candidate: { type: String, required: true }, // Candidate Object ID
    candidateSlug: { type: String, required: true }, // Like "sarah-climenhaga"
    wardSlug: { type: String, required: true }, // Like "toronto-mayor"
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const IssueResponse = mongoose.model('IssueResponse', issueResponseSchema)

module.exports.IssueResponse = IssueResponse
