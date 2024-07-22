import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import Logo1 from "../assets/Logo2.png";
import { useNavigate } from "react-router";

const WeatherCard = () => {
	const city = useSelector((state) => state.city);
	const kelvinToCelsius = (kelvinTemp) => {
		return Math.round(kelvinTemp - 273.15);
	};
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	return (
		<>
			<Container className="mt-1 pb-5">
				<img src={Logo1} alt="" className="w-50" onClick={goHome} />
				<SearchBar />
				<div className="weatherCard">
					<Row className="d-flex flex-column align-items-center">
						<Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
							<img
								src={`http://openweathermap.org/img/wn/${city.weather.weather && city.weather.weather[0].icon}@2x.png`}
								alt="weather icon"
								width={200}
							></img>
						</Col>
						<Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
							<span className="cityName font1">{city.weather.name}</span>
						</Col>
					</Row>
					<Row className="cardSub">
						<Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
							<span>
								<strong>Temp:</strong> {kelvinToCelsius(city.weather.main && city.weather.main.temp)}°C
							</span>
						</Col>
						<Col xs={12} md={4} className="d-flex flex-column justify-content-center">
							<span>
								<strong>Min:</strong> {kelvinToCelsius(city.weather.main && city.weather.main.temp_min)}°C
							</span>{" "}
							<span>
								<strong>Max:</strong> {kelvinToCelsius(city.weather.main && city.weather.main.temp_max)}°C
							</span>
						</Col>
						<Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
							<span>
								<strong>Humidity:</strong> {city.weather.main && city.weather.main.humidity}%
							</span>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
};

export default WeatherCard;
