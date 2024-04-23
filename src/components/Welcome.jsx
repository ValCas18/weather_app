import React from "react";
import logo from "../assets/logo.png";

const Welcome = () => {
	return (
		<div className="">
			<h1 className="mb-3">Welcome to WeatherCode!</h1>
			<img src={logo} alt="logo meteo" width={200}></img>
		</div>
	);
};

export default Welcome;
