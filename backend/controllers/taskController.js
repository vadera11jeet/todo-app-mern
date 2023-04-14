import mongoose from "mongoose";
import TaskSchema from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  console.log(req.body);
  const newTask = new TaskSchema(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No task found with that id");
  const updateTask = await TaskSchema.findByIdAndUpdate(
    _id,
    { ...task, _id },
    {
      new: true,
    }
  );

  res.status(204).json(updateTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post found with that id");
  await TaskSchema.findByIdAndDelete(id);
  res.status(200);
};

export const toggleDone = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post found with that id");

  const task = await TaskSchema.findById(id);
  const updatedTask = await TaskSchema.findByIdAndUpdate(
    id,
    { isDone: !task.isDone },
    { new: true }
  );

  res.json(updatedTask);
};
