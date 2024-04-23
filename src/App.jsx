import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarSearch from "./components/BarSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Container>
					<Welcome />
					<BarSearch />
					<Routes>
						<Route></Route>
						<Route></Route>
					</Routes>
				</Container>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
