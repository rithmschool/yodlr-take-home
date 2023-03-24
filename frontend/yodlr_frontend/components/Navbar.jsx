import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
            <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link to="/Home" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/Admin" as={NavLink}>Admin</Nav.Link>
                        <Nav.Link to="/Register" as={NavLink}>Register</Nav.Link>
                    </Nav>
                </Container>
            </NavbarBs>
        )
    };

    export default Navbar;