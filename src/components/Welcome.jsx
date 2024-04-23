import React from "react";
import logo from "../assets/logo.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Welcome = () => {
	return (
		<>
			<div className="mt-5">
				<h1 className="mb-3 fw-bold">Welcome to WeatherCode!</h1>
				<img src={logo} alt="logo meteo" width={200}></img>
			</div>
			<Container className="mt-5">
				<Row className="d-flex flex-column align-items-center">
					<Col xs={6}>
						<Form>
							<Form.Group className="mb-3">
								<Form.Control
									type="search"
									placeholder="Search Your City Here!"
									className="border rounded-5 text-center"
								/>
							</Form.Group>
						</Form>
					</Col>
					<Col xs={6} className="">
						<Button>search</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Welcome;
