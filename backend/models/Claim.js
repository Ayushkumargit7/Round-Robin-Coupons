const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  cookieId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Claim", ClaimSchema);
