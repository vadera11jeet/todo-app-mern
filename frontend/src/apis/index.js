import axios from "axios";

const url = "http://localhost:5000/task";

export const fetchTasks = () => axios.get(url);
export const createTask = (task) => axios.post(url, task);

export const updateTask = (id, updatedTask) =>
  axios.patch(`${url}/${id}`, updatedTask);

export const deleteTask = (id) => axios.delete(`${url}/${id}`);

export const toggleDone = (id) => axios.patch(`${url}/${id}/toggle`);
