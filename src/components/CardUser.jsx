import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteUser } from "../Services/UserServices";
import { useState } from "react";

const CardUser = ({ users }) => {
  const { username, full_name, _id } = users;
  const [alert, setAlert] = useState({});

  const removeItem = (e) => {
    deleteUser(_id)
      .then(() =>
        setAlert({ variant: "success", text: "Usuario elinado con con éxito" })
      )
      .catch((err) =>
        setAlert({ variant: "danger", text: err.response.data.message })
      );
  };
  return (
    <Card
      style={{ width: "18rem" }}
      className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light"
    >
      <Card.Img
        variant="top"
        src="https://gumlet.assettype.com/freepressjournal/2021-10/c52576e3-5769-491e-bee7-bc01d793b833/wellness_anchor_holding.jpg?format=webp&w=400&dpr=2.6"
      />
      <Card.Body>
        <Card.Title>User name: {username}</Card.Title>
        <Card.Text>Full name: {full_name}</Card.Text>
        <Link to={_id}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="danger" onClick={removeItem}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardUser;

//onClick={hola}
