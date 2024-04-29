import React from "react";
import SearchBar from "./SearchBar";

const Welcome = () => {
	return (
		<>
			<div className="mt-5">
				<div className="welcome-text">
					<h1 className="welcome">Welcome to WeatherCode!</h1>
				</div>
				<SearchBar />
			</div>
		</>
	);
};

export default Welcome;
