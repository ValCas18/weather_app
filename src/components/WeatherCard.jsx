import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";

const WeatherCard = () => {
	return (
		<>
			<SearchBar />
			<Container className="mt-5">
				<div className="weatherCard">
					<Row className="">
						<Col xs={12} md={6}>
							<span className="fs-1">Rome</span>
						</Col>
						<Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
							<span>icona</span>
						</Col>
					</Row>
					<Row className="cardSub">
						<Col xs={12} md={4}>
							<span>min-max</span>
						</Col>
						<Col xs={12} md={4}>
							<span>umidità</span>
						</Col>
						<Col xs={12} md={4}>
							<span>tempo</span>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default WeatherCard;
