import React from "react";
import SearchBar from "./SearchBar";
import Logo1 from "../assets/Logo2.png";

const Welcome = () => {
	return (
		<div className="mt-1">
			<img src={Logo1} alt="" className="w-50 logo1" />
			<h1 className="font1 mb-4">Welcome to WeatherCode!</h1>
			<SearchBar />
		</div>
	);
};

export default Welcome;
