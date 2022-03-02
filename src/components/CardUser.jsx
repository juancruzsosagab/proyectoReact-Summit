import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardUser = ({ users, removeUser }) => {
  const { username, full_name, _id } = users;

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light"
      >
        <Card.Img
          variant="top"
          src="http://themes.iamabdus.com/dealsy/1.0/img/user/user-thumb.jpg"
        />
        <Card.Body>
          <Card.Title>User name: {username}</Card.Title>
          <Card.Text>Full name: {full_name}</Card.Text>
          <Link to={_id}>
            <Button variant="primary" className="">
              Edit
            </Button>
          </Link>
          <Button variant="danger" className="" onClick={() => removeUser(_id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardUser;
