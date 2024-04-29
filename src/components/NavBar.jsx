import { Container, Navbar /*Nav, NavDropdown */ } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavBar = () => {
	return (
		<>
			<Navbar expand="lg" className="bg-nav">
				<Container className="d-flex justify-content-center">
					<Navbar.Brand href="#home" className="fw-bold text-light">
						<img src={logo} alt="logo meteo" width={50}></img>
						WeatherCode
					</Navbar.Brand>
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
