import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		handleSubmit();
	};

	const handleSubmit = async () => {
		try {
			let response = await fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "edbcf3d5f073c29e84fdb738c61b9c2b"
			);
			if (response.ok) {
				let weather = await response.json()
				console.log("meteo:", weather);
				
			}
		}
	}

	return (
		<div>
			<Container className="mt-5">
				<Row className="d-flex flex-column align-items-center">
					<Col xs={6}>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Control
									type="search"
									placeholder="Search Your City Here!"
									className="border rounded-5 text-center"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</Col>
					<Col xs={12}>
						<button className="button py-2 px-4" type="submit" onClick={handleSearch}>
							Go!
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SearchBar;
