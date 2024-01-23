const mongoose = require('mongoose')

const issueResponseSuggestionSchema = new mongoose.Schema(
  {
    issueResponse: { type: String, required: true },
    issueSlug: { type: String, required: true }, // Like "housing"
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Candidate',
      required: true,
    }, // Candidate Object ID
    candidateSlug: { type: String, required: true }, // Like "sarah-climenhaga"
    wardSlug: { type: String, required: true }, // Like "toronto-mayor"
    approved: { type: Boolean, default: false },
    approved2: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const IssueResponseSuggestion = mongoose.model(
  'IssueResponseSuggestion',
  issueResponseSuggestionSchema
)

module.exports.IssueResponseSuggestion = IssueResponseSuggestion
