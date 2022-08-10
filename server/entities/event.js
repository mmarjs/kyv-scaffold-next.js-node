const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true },
    dateTime: { type: Date, required: true },
    issues: [
      {
        type: String,
      },
    ],
    location: { type: String },
    address: { type: String },
    link: { type: String },
  },
  {
    timestamps: { createdAt: 'createdon', updatedAt: 'modifiedon' },
  }
)

const Event = mongoose.model('Event', eventSchema)

module.exports.Event = Event
