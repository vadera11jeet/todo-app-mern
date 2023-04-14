import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../action/tasksActions";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (taskData.trim().length > 0) {
        console.log(taskData);
      const task = { title: taskData.trim() };
      dispatch(createTask(task));
    }
    setTaskData("")
  };
  return (
    <Form onSubmit={addTodoHandler}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={taskData}
          onChange={(e) => {
            setTaskData(e.target.value);
          }}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit" className="m-2">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
