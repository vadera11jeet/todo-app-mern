import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TaskSchema = mongoose.model("Tasks", taskSchema);
export default TaskSchema;
