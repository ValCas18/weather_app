import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const BarSearch = () => {
	return (
		<>
			<Container className="mt-5">
				<Row className="d-flex justify-content-center">
					<Col xs={6}>
						<Form>
							<Form.Group className="mb-3">
								<Form.Control
									type="search"
									placeholder="Search Your City Here!"
									className="border rounded-5 text-center"
								/>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BarSearch;
