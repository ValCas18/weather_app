import React from "react";
import SearchBar from "./SearchBar";
import Logo1 from "../assets/Logo2.png";

const Welcome = () => {
	return (
		<div className="mt-5">
			<img src={Logo1} alt="" className="logo1" />
			<h1 className="font110">Welcome to WeatherCode!</h1>
			<SearchBar />
		</div>
	);
};

export default Welcome;
