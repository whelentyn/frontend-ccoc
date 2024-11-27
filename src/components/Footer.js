import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ccoc_logo from '../assets/logo_ccoc.svg';
import upt_logo from '../assets/logo_upt.svg';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer bg-light py-4">
            <div className="container">
                <div style={{ marginTop: '40px' }} className="row">
                    {/* Left Section */}
                    <div className="col-md-4 mb-3">
                        <div className="row mb-2">
                            <div>
                                <img
                                    src={ccoc_logo}
                                    alt="CCOC Logo"
                                    className="me-2"
                                    style={{ height: '30px', width: '110px' }}
                                />
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <img
                                    src={upt_logo}
                                    alt="UPT Logo"
                                    style={{ height: '60px', width: '110px' }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '5px' }} className="d-flex">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-facebook g6 fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-instagram g6 fa-lg"></i>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="me-4">
                                <i className="fab fa-tiktok g6 fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="col-md-4 mb-3">
                        <div className="body-bold">Contact</div>
                        <div style={{marginTop: "8px"}} className="body-regular g3">
                            Clădirea Bibliotecii Universității Politehnica Timișoara,<br />
                            Bulevardul Vasile Pârvan, nr: 2B, sala A001
                        </div>
                            <div style={{marginTop: "8px"}} className="body-regular g6">+4 0256 404703</div>
                            <a style={{marginTop: "8px"}} href="mailto:loredana.stanciu@upt.ro" className="text-decoration-none body-underline g6">loredana.stanciu@upt.ro</a>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-4 mb-3">
                        <div className="body-bold">Explorează</div>
                        <div className="row">
                            {/* First Column */}
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li><a href="#servicii" className="text-decoration-none body-regular g6">Servicii CCOC</a></li>
                                    <li><a href="#proiecte" className="text-decoration-none body-regular g6">Proiecte</a></li>
                                    <li><a href="#articole" className="text-decoration-none body-regular g6">Articole</a></li>
                                </ul>
                            </div>
                            {/* Second Column */}
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li><a href="#echipa" className="text-decoration-none body-regular g6">Echipă</a></li>
                                    <li><a href="#student-office" className="text-decoration-none body-regular g6">Student Office</a></li>
                                    <li><a href="#despre" className="text-decoration-none body-regular g6">Despre</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
