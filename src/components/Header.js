import React, {useEffect, useState} from 'react';
import './Header.css';
import ccoc_logo from '../assets/logo_ccoc.svg';
import upt_logo from '../assets/logo_upt.svg';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getAllProjects} from "../api/projects";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavItemClick = () => {
        if (window.innerWidth <= 1127) {
            setMenuOpen(false);
        }
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getAllProjects();
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <Navbar expand="lg" className="p-0">
            <Container fluid className="d-flex align-items-center justify-content-between p-0">
                <Navbar.Brand href="/" className="ccoc">
                    <img src={ccoc_logo} alt="CCOC Logo" style={{ height: '35px', marginLeft: '15px' }} />
                </Navbar.Brand>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbar-nav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    {menuOpen ? (
                        <span className="close-icon h5-regular g6">&times;</span>
                    ) : (
                        <span className="navbar-toggler-icon h5-regular g6"></span>
                    )}
                </button>

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
                            <NavDropdown.Item as={Link} to="/despre/misiune-si-scop" className="dropdown-item" onClick={handleNavItemClick}>
                                Misiune și scop
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/personal" className="dropdown-item" onClick={handleNavItemClick}>
                                Personal CCOC
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/sefi-de-oficii" className="dropdown-item" onClick={handleNavItemClick}>
                                Șefi de oficii
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/despre/documente" className="dropdown-item" onClick={handleNavItemClick}>
                                Documente
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/servicii" className="h5-regular g6" onClick={handleNavItemClick}>
                            Servicii CCOC
                        </Nav.Link>
                        <Nav.Link as={Link} to="/voluntariat" className="h5-regular g6" onClick={handleNavItemClick}>
                            Voluntariat
                        </Nav.Link>
                        <Nav.Link as={Link} to="/anunturi" className="h5-regular g6" onClick={handleNavItemClick}>
                            Anunțuri
                        </Nav.Link>

                        <NavDropdown
                            title={<span className="h5-regular">Evenimente</span>}
                            id="evenimente-dropdown"
                            className="animated-dropdown"
                        >
                            {projects
                                .filter(project => project.type === 'eveniment')
                                .map(project => (
                                    <NavDropdown.Item
                                        as={Link}
                                        to={`/evenimente/${project.slug}`}
                                        className="dropdown-item"
                                        key={project.title}
                                        onClick={handleNavItemClick}
                                    >
                                        {project.title}
                                    </NavDropdown.Item>
                                ))}
                        </NavDropdown>

                        <NavDropdown
                            title={<span className="h5-regular">Proiecte</span>}
                            id="proiecte-dropdown"
                            className="animated-dropdown"
                        >
                            {projects
                                .filter(project => project.type === 'proiect')
                                .map(project => (
                                    <NavDropdown.Item
                                        as={Link}
                                        to={`/proiecte/${project.slug}`}
                                        className="dropdown-item"
                                        key={project.title}
                                        onClick={handleNavItemClick}
                                    >
                                        {project.title}
                                    </NavDropdown.Item>
                                ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand href="https://www.upt.ro" className="m-0 h5-regular g6">
                    <img src={upt_logo} alt="UPT Logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
