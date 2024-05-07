import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = () => {
	const handleSearch = (event) => {
		event.preventDefault();
		console.log("User input:", {});
	};

	return (
		<div>
			<Container className="mt-5">
				<Row className="d-flex flex-column align-items-center">
					<Col xs={6}>
						<Form onSubmit={handleSearch}>
							<Form.Group className="mb-3">
								<Form.Control
									type="search"
									placeholder="Search Your City Here!"
									className="border rounded-5 text-center"
								/>
							</Form.Group>
						</Form>
					</Col>
					<Col xs={12}>
						<button className="button py-2 px-4" type="submit">
							Go!
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SearchBar;
