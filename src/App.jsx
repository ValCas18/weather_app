import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
	return (
		<>
			<Container className="App">
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route></Route>
					</Routes>
				</BrowserRouter>
				<Footer />
			</Container>
		</>
	);
}

export default App;
