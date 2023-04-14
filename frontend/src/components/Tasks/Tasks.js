import React from "react";

import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

import Task from "./Task/Task";


const Tasks = () => {
    const tasks = useSelector((state) => state.task)
  return (
    <div>
      {tasks.map((task) => 
          <Card key={task._id}>
            <Card.Body>
              <Task title={task.title}  isDone={task.isDone} id={task._id}/>
            </Card.Body>
          </Card>
        )}
    </div>
  );
};

export default Tasks;
