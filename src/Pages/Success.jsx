import { Card, Button } from "react-bootstrap";
const Success = ({ logOut }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://gumlet.assettype.com/freepressjournal/2021-10/c52576e3-5769-491e-bee7-bc01d793b833/wellness_anchor_holding.jpg?format=webp&w=400&dpr=2.6" />
      <Card.Body>
        <Card.Title>Keep it simple</Card.Title>
        <Card.Text>
          Hello, as you know, this is my test. I've done this work quickly, i
          wanted to keep it simple! I hope you like it.
        </Card.Text>
        <Button variant="primary" onClick={logOut}>
          Log Out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Success;
