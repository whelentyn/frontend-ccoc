import React, { useState } from 'react';
import './Header.css';
import '../index.css'
import ccoc_logo from '../assets/logo_ccoc.svg';
import upt_logo from '../assets/logo_upt.svg';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen); // Toggle the state
    };

    return (

        <Navbar expand="lg" bg="light" variant="light" className="p-0">
            <Container fluid className="d-flex align-items-center justify-content-between p-0">
                {/* Left Logo (CCOC) */}
                <Navbar.Brand href="/" className="ccoc">
                    <img src={ccoc_logo} alt="CCOC Logo" style={{height: '35px', marginLeft: '15px' }} />
                </Navbar.Brand>

                {/* Navbar Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbar-nav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    {menuOpen ? (
                        <span className="close-icon h5-regular g6">&times;</span> // X icon
                    ) : (
                        <span className="navbar-toggler-icon h5-regular g6"></span>
                    )}
                </button>

                {/* Navbar Menu */}
                <Navbar.Collapse
                    id="navbar-nav"
                    className={`justify-content-center ${menuOpen ? 'show' : ''}`}
                >
                    <Nav className="mx-auto">
                        <NavDropdown title={<span className="h5-regular g6">Despre</span>} id="despre-dropdown">
                            <NavDropdown.Item as={Link} to="/misiune" className="h5-regular g6">Misiune și scop</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/personal" className="h5-regular g6">Personal CCOC</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sefi" className="h5-regular g6">Șefi de oficii</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/documente" className="h5-regular g6">Documente</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/servicii" className="h5-regular g6">Servicii CCOC</Nav.Link>
                        <Nav.Link as={Link} to="/voluntariat" className="h5-regular g6">Voluntariat</Nav.Link>
                        <Nav.Link as={Link} to="/anunturi" className="h5-regular g6">Anunțuri</Nav.Link>
                        <Nav.Link as={Link} to="/evenimente" className="h5-regular g6">Evenimente</Nav.Link>
                        <Nav.Link as={Link} to="/proiecte" className="h5-regular g6">Proiecte</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="h5-regular g6">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right Logo (UPT) */}
                <Navbar.Brand href="https://www.upt.ro" className="m-0 h5-regular g6">
                    <img src={upt_logo} alt="UPT Logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
