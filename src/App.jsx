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
				<BrowserRouter>
					{/* <NavBar /> */}
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/weather/:city" element={<WeatherCard />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</>
	);
}

export default App;
