import { create } from "../Services/Authervices";
import { useState } from "react";
import AlertCustom from "../components/AlertCustom";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const UserDetail = () => {
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState({ variant: "", text: "" });


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      create(user)
      .then(() =>
        setAlert({ variant: "success", text: "Usuario editado con éxito" })
      )
      .catch((err) =>
        setAlert({ variant: "danger", text: err.response.data.message })
      );
  };

  return (
    <Container className="align-items-center">
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>User information</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={handleChange}
          >
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              name="username"
              defaultValue={user.username}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={handleChange}
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              name="full_name"
              defaultValue={user.full_name}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={handleChange}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="Email" name="email" defaultValue={user.email} />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={handleChange}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              defaultValue={user.password}
            />
          </Form.Group>

          <div className="text-center justify-content-center">
            <Button
              variant="primary"
              type="submit"
              className="text-center"
              size="sm"
            >
              Edit
            </Button>
          </div>
        </Form>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </div>
    </Container>
  );
};

export default UserDetail;
