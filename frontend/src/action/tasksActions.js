import * as api from "../apis";
import {
  CREATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  FETCH_TASK,
} from "../constants/constant";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();
    dispatch({ type: FETCH_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    console.log(task);
    const { data } = await api.createTask(task);
    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (currentId) => async (dispatch) => {
  try {
    await api.deleteTask(currentId);
    dispatch({ type: DELETE_TASK, payload: currentId });
  } catch (error) {
    console.log(error);
  }
};

export const toggleDone = (id) => async (dispatch) => {
  try {
    const { data } = await api.toggleDone(id);

    dispatch({ type: TOGGLE_TASK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
