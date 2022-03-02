import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import AlertCustom from "../components/AlertCustom";
import { create } from "../Services/AuthServices";

const SignUp = () => {
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
    if (!user.username || !user.full_name || !user.email || !user.password) {
      setAlert({
        variant: "danger",
        text: "Todos los campos son obligatorios",
      });
    } else {
      create(user)
        .then(() =>
          setAlert({
            variant: "success",
            text: "Usuario creado con éxito",
          })
        )
        .catch((err) =>
          setAlert({
            variant: "danger",
            text: err.response.data.message,
          })
        );
    }
  };

  return (
    <Container className="align-items-center">
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>NEW USER</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicUserName"
            onChange={handleChange}
          >
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá el username"
              name="username"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicFull_name"
            onChange={handleChange}
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá el nombre completo"
              name="full_name"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={handleChange}
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Ingresá el email"
              name="email"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={handleChange}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá el password"
              name="password"
            />
          </Form.Group>

          <div className="text-center justify-content-center">
            <Button
              variant="success"
              type="submit"
              className="text-center"
              size="sm"
            >
              Save
            </Button>
          </div>
        </Form>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </div>
    </Container>
  );
};

export default SignUp;
