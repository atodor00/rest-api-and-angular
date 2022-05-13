const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  day: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  reminder: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
