import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Login = ({ logIn }) => {
  const [dataLogin, setDataLogin] = useState({});

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    logIn();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        onChange={handleChange}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={handleChange}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
