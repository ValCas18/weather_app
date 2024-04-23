import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
	return (
		<Container className="App">
			<BrowserRouter>
				<Welcome />
				<Routes>
					<Route></Route>
					<Route></Route>
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</Container>
	);
}

export default App;
