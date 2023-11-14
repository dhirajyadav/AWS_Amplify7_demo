import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Contacts() {
	return (
		<Container>
			<Row className="pz-4 my-5">
				<Col>
					<h1>Contacts</h1>
				</Col>
			</Row>
			<Row>
				<Col className="px-2 my-2">
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="/img/contact_1.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col className="px-2 my-2">
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="/img/contact_2.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col className="px-2 my-2">
					<Card style={{ width: "12rem" }}>
						<Card.Img variant="top" src="/img/contact_3.png" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contacts;
