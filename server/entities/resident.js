const mongoose = require('mongoose')

const residentSchema = new mongoose.Schema(
  {
    ward: { type: String, required: true },
    email: { type: String },
    issues: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const Resident = mongoose.model('Resident', residentSchema)

module.exports.Resident = Resident
