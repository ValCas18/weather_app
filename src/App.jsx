import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BarSearch from "./components/BarSearch";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<BarSearch />
				<Routes>
					<Route></Route>
					<Route></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
