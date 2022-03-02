import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardUser from "../components/CardUser";
import AlertCustom from "../components/AlertCustom";
import { deleteUser, getUsers } from "../Services/UserServices";

const Home = ({ logOut }) => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);

  const removeArray = (id) => {
    const userNew = users.filter((user) => user._id !== id);
    setUsers(userNew);
  };

  const removeUser = (id) => {
    removeArray(id);
    deleteUser(id)
      .then(() =>
        setAlert({
          variant: "success",
          text: "Usuario eliminado con éxito",
        })
      )
      .catch((err) =>
        setAlert({
          variant: "danger",
          text: err.response.data.message,
        })
      );
  };

  return (
    <Container>
      <Link to="signup">
        <Button>+ Create user</Button>
      </Link>
      <AlertCustom variant={alert.variant} text={alert.text} />
      {users.map((user) => (
        <CardUser key={user._id} users={user} removeUser={removeUser} />
      ))}
    </Container>
  );
};

export default Home;
