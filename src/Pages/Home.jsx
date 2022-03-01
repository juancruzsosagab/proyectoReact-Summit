import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUsers } from "../Services/UserServices";
import CardUser from "../components/CardUser";
import { Link } from "react-router-dom";

const Home = ({ logOut }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data.data));
  }, []);

  return (
    <Container>
      <Link to="signup">
        <Button>+ Create</Button>
      </Link>

      {users.map((user) => (
        <CardUser key={user._id} users={user} />
      ))}
    </Container>
  );
};
//

export default Home;
