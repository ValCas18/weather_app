import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const WeatherCard = () => {
	const city = useSelector((state) => state.city);
	return (
		<>
			<SearchBar />
			<Container className="mt-5">
				<div className="weatherCard">
					<Row className="">
						<Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
							<span className="fs-1">{city.weather.name}</span>
						</Col>
						<Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
							<img
								src={`http://openweathermap.org/img/wn/${city.weather.weather[0].icon}@2x.png`}
								alt="weather icon"
							></img>
						</Col>
					</Row>
					<Row className="cardSub">
						<Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
							<span>Temp: {city.weather.main.temp}°C</span>
						</Col>
						<Col xs={12} md={4} className="d-flex flex-column justify-content-center">
							<span>Min: {city.weather.main.temp_min}°C</span> <span>Max: {city.weather.main.temp_max}°C</span>
						</Col>
						<Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
							<span>Humidity: {city.weather.main.humidity}%</span>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default WeatherCard;
