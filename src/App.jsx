import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";

function App() {
	const weather = useSelector((state) => state.city.weather?.weather?.[0]?.main);

	const getBg = (weather) => {
		switch (weather) {
			case "Clouds":
				return "bg-cloud";
			case "Rain":
				return "bg-rain";
			case "Snow":
				return "bg-snow";
			default:
				return "bg-sun";
		}
	};

	const backgroundClass = weather ? getBg(weather) : "bg-sun";

	return (
		<div className={`App ${backgroundClass}`}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/weather/:city" element={<WeatherCard />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
