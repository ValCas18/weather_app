import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";

function App() {
	return (
		<>
			<div className="App">
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/weather/:city" element={<WeatherCard />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</div>
		</>
	);
}

export default App;
