import React, { useState } from 'react';
import './Header.css';
import '../index.css'
import ccoc_logo from '../assets/logo_ccoc.png';
import upt_logo from '../assets/logo_upt.svg';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen); // Toggle the state
    };

    return (
        <Navbar expand="lg" bg="light" variant="light" className="p-0">
            <Container fluid className="d-flex align-items-center justify-content-between p-0">
                {/* Left Logo (CCOC) */}
                <Navbar.Brand href="/" className="m-0 h5-regular g6">
                    <img src={ccoc_logo} alt="CCOC Logo" />
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
                        <span className="navbar-toggler-icon h5-regular g6"></span> // Default hamburger icon
                    )}
                </button>

                {/* Navbar Menu */}
                <Navbar.Collapse
                    id="navbar-nav"
                    className={`justify-content-center ${menuOpen ? 'show' : ''}`}
                >
                    <Nav className="mx-auto">
                        <NavDropdown title={<span className="h5-regular g6">Despre</span>} id="despre-dropdown">
                            <NavDropdown.Item href="#" className="h5-regular g6">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#" className="h5-regular g6">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#" className="h5-regular g6">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/servicii" className="h5-regular g6">Servicii CCOC</Nav.Link>
                        <Nav.Link href="/voluntariat" className="h5-regular g6">Voluntariat</Nav.Link>
                        <Nav.Link href="/anunturi" className="h5-regular g6">Anunțuri</Nav.Link>
                        <Nav.Link href="/evenimente" className="h5-regular g6">Evenimente</Nav.Link>
                        <Nav.Link href="/proiecte" className="h5-regular g6">Proiecte</Nav.Link>
                        <Nav.Link href="/contact" className="h5-regular g6">Contact</Nav.Link>
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
