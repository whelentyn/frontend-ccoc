import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import anunturiImage from "../assets/anunturi.svg";
import servicii_mainpage from "../assets/servicii_mainpage.svg";
import proiecte_mainpage from "../assets/proiecte_mainpage.svg";
import studentoffice_mainpage from "../assets/studentoffice_mainpage.svg";
import contact_mainpage from "../assets/contact_mainpage.svg";
import imagine_carusel from "../assets/imagine_carusel.svg";
import "./HomePage.css";
import CardAnunturi from "../components/CardAnunturi";

const partners = [
    {
        id: 1,
        name: "Universitatea Politehnica Timișoara",
        logo: "https://via.placeholder.com/100x50", // Replace with actual logo URL
    },
    {
        id: 2,
        name: "Facultatea de Automatică și Calculatoare",
        logo: "https://via.placeholder.com/100x50", // Replace with actual logo URL
    },
    {
        id: 3,
        name: "Consiliul Elevilor",
        logo: "https://via.placeholder.com/100x50", // Replace with actual logo URL
    },
    {
        id: 4,
        name: "CJE Timiș",
        logo: "https://via.placeholder.com/100x50", // Replace with actual logo URL
    },
];

const institutionalPartners = [
    {
        id: 1,
        name: "Primăria Municipiului Timișoara",
        logo: "https://via.placeholder.com/80x40", // Replace with actual logo URL
    },
    {
        id: 2,
        name: "Consiliul Județean Timiș",
        logo: "https://via.placeholder.com/80x40", // Replace with actual logo URL
    },
    {
        id: 3,
        name: "STPT",
        logo: "https://via.placeholder.com/80x40", // Replace with actual logo URL
    },
];

const announcements = Array(4).fill(null).map((_, index) => ({
    date: "12 Iulie 2024",
    title: "Uneori este important să ne reconectăm cu natura",
    description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `,
    image: anunturiImage,
    link: "#", // Replace with actual link
}));

const HomePage = () => {
    return (
        <div style={{ marginTop: "-70px" }}>
            {/* Main Content */}
            <div className="container py-5">
                {/* Carousel Section */}
                <div className="row mb-6">
                    <div className="col-12">
                        <Carousel className="carousel-container">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={imagine_carusel}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="h3">Slide 1 Title</div>
                                    <p className="body-regular">Discover your opportunities after graduation.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={imagine_carusel}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="h3">Slide 1 Title</div>
                                    <p className="body-regular">Discover your opportunities after graduation.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={imagine_carusel}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="h3">Slide 1 Title</div>
                                    <p className="body-regular">Discover your opportunities after graduation.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-md-8">
                        <div className="h6 g3">ULTIMELE ANUNȚURI</div>
                        {/* Use CardAnunturi */}
                        <CardAnunturi items={announcements} />
                    </div>

                    {/* Useful Information Section */}
                    <div className="col-md-4">
                        <div className="g3 h6">INFORMAȚII UTILE</div>
                        <div style={{ marginTop: "20px" }} className="row row-cols-2 g-0">
                            <div className="col text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/servicii" className="svg-hover">
                                        <img
                                            className="svg-icon"
                                            style={{ height: "150px", width: "150px" }}
                                            src={servicii_mainpage}
                                            alt="Servicii logo"
                                        />
                                    </a>
                                    <p className="h5-regular g6 mt-2">Servicii</p>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/proiecte" className="svg-hover">
                                        <img
                                            className="svg-icon"
                                            style={{ height: "150px", width: "150px" }}
                                            src={proiecte_mainpage}
                                            alt="Proiecte logo"
                                        />
                                    </a>
                                    <p className="h5-regular g6 mt-2">Proiecte</p>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/student-office" className="svg-hover">
                                        <img
                                            className="svg-icon"
                                            style={{ height: "150px", width: "150px" }}
                                            src={studentoffice_mainpage}
                                            alt="Student Office logo"
                                        />
                                    </a>
                                    <p className="h5-regular g6 mt-2">Student Office</p>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="d-flex flex-column align-items-center">
                                    <a href="/contact" className="svg-hover">
                                        <img
                                            className="svg-icon"
                                            style={{ height: "150px", width: "150px" }}
                                            src={contact_mainpage}
                                            alt="Contact logo"
                                        />
                                    </a>
                                    <p className="h5-regular g6 mt-2">Contact</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className="g3 h6">UNDE NE GĂSEȘTI?</div>
                                <div className="card">
                                    <div className="card-body p-0">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.212107901478!2d21.226624275817155!3d45.7468935145332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d837dc4a3af%3A0x6c8e75967cce7c64!2sCentrul%20de%20Consiliere%20%C8%99i%20Orientare%20%C3%AEn%20Carier%C4%83%20UPT!5e0!3m2!1sro!2sro!4v1733661883671!5m2!1sro!2sro"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            title="Google Maps"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container fluid>
                    {/* CCOC Section */}
                    <Container fluid className="my-5">
                        {/* Ce este CCOC Section */}
                        <Row className="align-items-center gx-5">
                            <Col md={6} className="text-start">
                                <div className="ccoc-text">
                                    <h2 className="h2 g5">Ce este CCOC?</h2>
                                    <p className="body-regular g5">
                                        Centrul Consiliere și Orientare în Carieră (CCOC) este o structură a
                                        Universității Politehnica Timișoara (UPT) cu misiunea de a asigura o cât
                                        mai bună informare, orientare profesională și integrare socială a
                                        studenților.
                                    </p>
                                    <a href="#afla-mai-mult" className="body-underline electric-iris-regular">
                                        Află mai mult
                                    </a>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex justify-content-center">
                                <div className="image-stack">
                                    <img
                                        src="https://via.placeholder.com/400x250"
                                        alt="Image 1"
                                        className="stack-image main-image"
                                    />
                                    <img
                                        src="https://via.placeholder.com/400x250"
                                        alt="Image 2"
                                        className="stack-image middle-image"
                                    />
                                    <img
                                        src="https://via.placeholder.com/400x250"
                                        alt="Image 3"
                                        className="stack-image back-image"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* Partner Section */}
                    <div style={{marginTop: "100px"}}></div>
                    <Row className="my-5 text-center">
                        <Col md={12}>
                            <h3 className="h3">Parteneri</h3>
                            <div className="d-flex flex-wrap justify-content-center">
                                {partners.map((partner) => (
                                    <Card
                                        key={partner.id}
                                        className="mx-3 my-2"
                                        style={{ width: "150px", border: "none" }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={partner.logo}
                                            alt={partner.name}
                                            style={{ height: "50px", objectFit: "contain" }}
                                        />
                                        <Card.Body>
                                            <Card.Text className="text-center">{partner.name}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    </Row>

                    {/* Institutional Partner Section */}
                    <Row className="my-5 text-center">
                        <Col md={12}>
                            <h3>Parteneri instituționali</h3>
                            <div className="d-flex flex-wrap justify-content-center">
                                {institutionalPartners.map((partner) => (
                                    <Card
                                        key={partner.id}
                                        className="mx-3 my-2"
                                        style={{ width: "120px", border: "none" }}
                                    >
                                        <Card.Img
                                            variant="top"
                                            src={partner.logo}
                                            alt={partner.name}
                                            style={{ height: "40px", objectFit: "contain" }}
                                        />
                                        <Card.Body>
                                            <Card.Text className="text-center">
                                                {partner.name}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
