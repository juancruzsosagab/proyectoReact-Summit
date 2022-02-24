import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import AlertCustom from "../components/AlertCustom";

const Login = ({ logIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({});
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const handleChange = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/auth/login",
      data: {
        username: dataLogin.username,
        password: dataLogin.password,
      },
    })
      .then((data) => {
        const token = data.data.token;
        if (token) {
          logIn();
        } else {
          setAlert({
            variant: "danger",
            text: "Ha ocurrido un error, inténtelo de nuevo",
          });
        }
      })
      .catch((err, e) => {
        setIsLoading(false);
        setAlert({ variant: "danger", text: err.response.data.message });
      });
  };

  return (
    <>
      {!isLoading ? (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleChange}
            >
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="username"
              />
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
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <AlertCustom variant={alert.variant} text={alert.text} />
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Login;
