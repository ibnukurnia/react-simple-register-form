import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.confirm_password
    )
      //   return alert("Field Tidak boleh kosong");
      return setError("Field Cannot Empty!");
    if (formData.password !== formData.confirm_password) return setError("Password doesnt match");

    setSuccess(`Register Success! Username ${formData.username}`);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <div>
      <Form className="d-flex flex-column gap-2 p-3 border border-1 border-danger">
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form.Group className="d-sm-flex">
          <div>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={changeHandler}
            ></Form.Control>
          </div>
          <div className="ms-auto">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={changeHandler}
            ></Form.Control>
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" value={formData.email} onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Button onClick={submitHandler} className="mt-2">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default FormRegister;
