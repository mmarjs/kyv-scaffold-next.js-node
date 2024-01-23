const mongoose = require('mongoose')

const residentSchema = new mongoose.Schema(
  {
    ward: { type: String },
    email: { type: String },
    issues: [
      {
        type: String,
      },
    ],
    toggle1: { type: Boolean, default: false },
    toggle2: { type: Boolean, default: false },
    toggle3: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const Resident = mongoose.model('Resident', residentSchema)

module.exports.Resident = Resident
