import { Container, Navbar /*Nav, NavDropdown */ } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<Navbar expand="lg" className="bg-darkblue sticky-top">
				<Container className="d-flex justify-content-center g-2">
					<Link to="/" className="d-flex gap-2 text-light align-items-center text-decoration-none">
						<img src={logo} alt="logo meteo" width={51}></img>
						<span>WeatherCode</span>
					</Link>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse> */}
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
