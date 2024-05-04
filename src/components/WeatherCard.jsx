import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

const WeatherCard = () => {
	return (
		<Container className="text-dark">
			<Row>
				<Col xs={12} md={6}>
					<span className="fs-1">Rome</span>
				</Col>
				<Col xs={12} md={6}>
					<span>icona</span>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={4}>
					min-max
				</Col>
				<Col xs={12} md={4}>
					umidità
				</Col>
				<Col xs={12} md={4}>
					tempo
				</Col>
			</Row>
		</Container>
	);
};

export default WeatherCard;
