import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
            Todo App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppBar;
