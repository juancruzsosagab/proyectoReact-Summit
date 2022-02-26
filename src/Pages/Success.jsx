import { Card, Button, Container } from "react-bootstrap";
const Success = ({ logOut }) => {
  return (
    <Container>
    <Card style={{ width: "18rem" }} className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
      <Card.Img variant="top" src="https://gumlet.assettype.com/freepressjournal/2021-10/c52576e3-5769-491e-bee7-bc01d793b833/wellness_anchor_holding.jpg?format=webp&w=400&dpr=2.6" />
      <Card.Body>
        <Card.Title>Keep it simple</Card.Title>
        <Card.Text>
          Hello, as you know, this is my test. I
          wanted to keep it simple! I hope you like it.
        </Card.Text>
        <Button variant="primary" onClick={logOut}>
          Log Out
        </Button>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default Success;
