import React, { useState } from 'react';
import './Header.css';
import ccoc_logo from '../assets/logo_ccoc.svg';
import upt_logo from '../assets/logo_upt.svg';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navbar expand="lg" className="p-0">
            <Container fluid className="d-flex align-items-center justify-content-between p-0">
                {/* Left Logo (CCOC) */}
                <Navbar.Brand href="/" className="ccoc">
                    <img src={ccoc_logo} alt="CCOC Logo" style={{ height: '35px', marginLeft: '15px' }} />
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
                        <NavDropdown
                            title={<span className="h5-regular">Despre</span>}
                            id="despre-dropdown"
                            className="animated-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/despre/misiune-si-scop" className="dropdown-item">
                                Misiune și scop
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/personal" className="dropdown-item">
                                Personal CCOC
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/sefi-de-oficii" className="dropdown-item">
                                Șefi de oficii
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/documente" className="dropdown-item">
                                Documente
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Other Navbar Links */}
                        <Nav.Link as={Link} to="/servicii" className="h5-regular g6">Servicii CCOC</Nav.Link>
                        <Nav.Link as={Link} to="/voluntariat" className="h5-regular g6">Voluntariat</Nav.Link>
                        <Nav.Link as={Link} to="/anunturi" className="h5-regular g6">Anunțuri</Nav.Link>
                        <NavDropdown
                            title={<span className="h5-regular">Evenimente</span>}
                            id="evenimente-dropdown"
                            className="animated-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/evenimente/zilele-carierei" className="dropdown-item">
                                Zilele Carierei
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/evenimente/zilele-consilierii" className="dropdown-item">
                                Zilele Consilierii
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/evenimente/sexed" className="dropdown-item">
                                SexEd
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/evenimente/connecting-bridges" className="dropdown-item">
                                Connecting Bridges
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={<span className="h5-regular">Proiecte</span>}
                            id="proiecte-dropdown"
                            className="animated-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/proiecte/fdi" className="dropdown-item">
                                FDI
                            </NavDropdown.Item>
                        </NavDropdown>

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
