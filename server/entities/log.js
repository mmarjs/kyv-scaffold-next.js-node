var mongoose = require("mongoose");

var LogSchema = new mongoose.Schema({
  event: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model("Log", LogSchema);
