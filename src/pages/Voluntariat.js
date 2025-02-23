import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import imagine_carusel from "../assets/imagine_carusel.svg";
import CardAnunturi from "../components/CardAnunturi";
import servicii_mainpage from "../assets/servicii_mainpage.svg";
import proiecte_mainpage from "../assets/proiecte_mainpage.svg";
import studentoffice_mainpage from "../assets/studentoffice_mainpage.svg";
import contact_mainpage from "../assets/contact_mainpage.svg";
import React from "react";

const Voluntariat = ({ volunteerContent }) => {
    return (
        <div className="container py-5">
            <div className="h1 g6">
                <h1>Voluntariat</h1>
                <p className="g3 body-regular">Voluntariatul este o activitate foarte distractivă.</p>
            </div>

            {/* Announcements Section */}
            <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-8">
                    <Col md={6} className="text-start col-md-12">
                        <div className="ccoc-text">
                            <h2 className="h2 g5">Ce înseamnă să fii voluntar?</h2>
                            <div
                                className="body-regular g5"
                                dangerouslySetInnerHTML={{ __html: volunteerContent }}
                            ></div>
                            <a href="#" className="custom-button h5-regular">
                                Înscrie-te aici!
                            </a>
                        </div>
                    </Col>
                </div>

                {/* Useful Information Section */}
                <div className="col-md-4">
                    <div className="g3 h6">BENEFICIILE VOLUNTARIATULUI</div>
                    <div style={{ marginTop: "20px" }} className="row row-cols-2 g-0">
                        <div className="col text-center">
                            <div className="d-flex flex-column align-items-center">
                                <a href="/servicii" className="svg-hover">
                                    <img className="svg-icon" style={{ height: "150px", width: "150px" }} src={servicii_mainpage} alt="Servicii logo" />
                                </a>
                                <p className="h5-regular g6 mt-2">Servicii</p>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="d-flex flex-column align-items-center">
                                <a href="/proiecte" className="svg-hover">
                                    <img className="svg-icon" style={{ height: "150px", width: "150px" }} src={proiecte_mainpage} alt="Proiecte logo" />
                                </a>
                                <p className="h5-regular g6 mt-2">Proiecte</p>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="d-flex flex-column align-items-center">
                                <a href="/student-office" className="svg-hover">
                                    <img className="svg-icon" style={{ height: "150px", width: "150px" }} src={studentoffice_mainpage} alt="Student Office logo" />
                                </a>
                                <p className="h5-regular g6 mt-2">Student Office</p>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="d-flex flex-column align-items-center">
                                <a href="/contact" className="svg-hover">
                                    <img className="svg-icon" style={{ height: "150px", width: "150px" }} src={contact_mainpage} alt="Contact logo" />
                                </a>
                                <p className="h5-regular g6 mt-2">Contact</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Section */}
                <Carousel className="carousel-container">
                    <Carousel.Item>
                        <img className="d-block w-100 rounded" src={imagine_carusel} alt="First slide" />
                        <Carousel.Caption>
                            <h3>Slide 1 Title</h3>
                            <p>Discover your opportunities after graduation.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 rounded" src={imagine_carusel} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Slide 2 Title</h3>
                            <p>Join exciting projects and start your career.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 rounded" src={imagine_carusel} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Slide 3 Title</h3>
                            <p>Connect with inspiring people and ideas.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Voluntariat;
