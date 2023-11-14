import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function HomePage() {
	return (
		<Container>
			<Row className="px-4 my-5">
				<Col xs={4} md={6}>
					<Image src="/img/logo.png" rounded />
				</Col>
				<Col sm={6}>
					<h1 className="font-weight-light">Contacts App</h1>
					<p className="mt-4">
						Lorem Ipsum
						<br />
						<br />
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<Button variant="outline-primary">Get Started &gt;&gt;</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default HomePage;
