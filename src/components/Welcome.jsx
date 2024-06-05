import React from "react";
import SearchBar from "./SearchBar";

const Welcome = () => {
	return (
		<>
			<div className="mt-5">
				<div className="welcome-text">
					<h1 className="welcome">WeatherCode</h1>
				</div>
				<h2 className="subtext m-0">The ultimate weather forecast app!</h2>
				<SearchBar />
			</div>
		</>
	);
};

export default Welcome;
