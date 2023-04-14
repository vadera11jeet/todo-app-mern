import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { getTasks } from "./action/tasksActions";
import AppBar from "./components/NavBar/NavBar";
import TaskForm from "./components/TaskForm/TaskForm";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Container className="p-4 w-50">
        <TaskForm />
        <Tasks />
      </Container>
    </>
  );
}

export default App;
