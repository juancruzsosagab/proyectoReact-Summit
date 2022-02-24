import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import AlertCustom from "../components/AlertCustom";
import { Container } from "react-bootstrap";

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
    //setLoading(true);
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
          setIsLoading(false);
          logIn();
        } else {
          setIsLoading(false);
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
         <Container className="align-items-center">
        <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>User Login</h3></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              onChange={handleChange}
            >
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
              />
              <Form.Text className="text-muted">
                We'll never share your information with anyone else.
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
            <div className="text-center justify-content-center">
            <Button variant="primary" type="submit" className="text-center" size="sm">
              Log In
            </Button>
            </div>
          </Form>
          <AlertCustom variant={alert.variant} text={alert.text} />
          </div>
          </Container>
   
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Login;
