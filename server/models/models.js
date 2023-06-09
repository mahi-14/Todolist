const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  todo: String,
  desc: String,
  isComplete: Boolean,
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
