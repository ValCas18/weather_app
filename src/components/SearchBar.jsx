import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, setQuery } from "../redux/actions";
import { useNavigate } from "react-router";

const SearchBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const city = useSelector((state) => state.city.query);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getWeather());
		navigate(`/weather/${city}`);
	};

	return (
		<div>
			<Container>
				<Row className="align-items-center justify-content-center">
					<Col xs={12} md={7} className="pt-3">
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3">
								<Form.Control
									type="search"
									placeholder="Search Your City Here!"
									className="border rounded-5 text-center"
									onChange={(e) => dispatch(setQuery(e.target.value))}
								/>
							</Form.Group>
						</Form>
					</Col>
					<Col xs={12} md={2} className="d-flex align-items-center justify-content-center justify-content-md-center">
						<button className="button py-2 px-4 font1" type="submit" onClick={handleSubmit}>
							Go
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SearchBar;
