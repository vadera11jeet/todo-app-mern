import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { toggleDone, deleteTask, getTasks } from "../../../action/tasksActions";

const Task = (props) => {
  const dispatch = useDispatch();
  const [isDone, setISDone] = useState(props.isDone);
  const deleteHandler = () => {
    dispatch(deleteTask(props.id));
    dispatch(getTasks());
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: isDone ? "line-through" : "" }}>
        {props.title}
      </span>
      <div>
        <Form.Check
          inline
          type="checkbox"
          defaultChecked={isDone}
          onChange={() => {
            setISDone(!isDone);
            dispatch(toggleDone(props.id));
          }}
        />
        <Button
          variant="outline-danger"
          className="m-2"
          value={isDone}
          onClick={deleteHandler}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default Task;
