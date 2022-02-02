import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormRegister from "./components/FormRegister";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center app">
      <Container>
        <Row className="d-flex justify-content-center align-items-center ">
          <Col md="6">
            <h2>Simple Register Form</h2>
            <FormRegister />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
