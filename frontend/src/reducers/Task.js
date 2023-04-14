import { CREATE_TASK, DELETE_TASK, TOGGLE_TASK, FETCH_TASK } from "../constants/constant";

const reducers = (tasks = [], action) => {
    switch(action.type)
    {
        case FETCH_TASK:
            return action.payload
        case CREATE_TASK:
            return [...tasks, action.payload]
        case DELETE_TASK:
            return tasks.filter((task) => task._id !== action.payload )
        case TOGGLE_TASK:
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task)
        default:
            return tasks;
    }

};

export default reducers;


