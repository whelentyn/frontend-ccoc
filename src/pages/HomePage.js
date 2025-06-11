import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import "./HomePage.css";
import CardAnunturi from "../components/CardAnunturi";
import { getArticles } from "../api/articles";
import { getAllShortcuts } from "../api/shortcuts";
import { getAllPartners } from "../api/partners";
import { getCarouselPage } from "../api/carouselMainPage";
import { getPageBySlug } from "../api/pages";
import { DOMAIN } from "../api";
import he from "he";

const HomePage = () => {
    const [data, setData] = useState({
        announcements: [],
        shortcuts: [],
        carouselItems: [],
        partnersByType: {},
        pageContent: {},
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [articles, shortcutsData, partnersData, carouselItems] = await Promise.all([
                    getArticles(4),
                    getAllShortcuts(),
                    getAllPartners(),
                    getCarouselPage(),
                ]);

                let pageContentData = {};
                try {
                    pageContentData = await getPageBySlug("acasa");
                } catch (pageError) {
                    console.error("Failed to fetch page content:", pageError);
                }

                const groupedByType = partnersData.reduce((acc, partner) => {
                    const type = partner.partnerType || "other";
                    if (!acc[type]) acc[type] = [];
                    acc[type].push(partner);
                    return acc;
                }, {});

                setData({
                    announcements: articles,
                    shortcuts: shortcutsData,
                    pageContent: pageContentData,
                    carouselItems,
                    partnersByType: groupedByType,
                });

                setTimeout(() => setLoading(false), 200);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-danger mt-5">Error: {error}</div>;
    }

    const { announcements, shortcuts, carouselItems, pageContent, partnersByType } = data;

    return (
        <div style={{ marginTop: "-40px" }}>
            <div className="container py-5">
                {/* Carousel Section */}
                <div className="row mb-6">
                    <div className="col-12">
                        <Carousel className="carousel-container">
                            {carouselItems.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <a href={item.linkTo} target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="d-block w-100 rounded"
                                            src={`${DOMAIN}${item.image}`}
                                            alt={item.name}
                                        />
                                    </a>
                                    <Carousel.Caption>
                                        <div className="h3">{item.name}</div>
                                        <p className="body-regular">{item.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>

                {/* Announcements and Shortcuts Section */}
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-md-8">
                        <div className="h6 g3">ULTIMELE ANUNȚURI</div>
                        <CardAnunturi items={announcements} />
                    </div>
                    <div className="col-md-4">
                        <div className="g3 h6">INFORMAȚII UTILE</div>
                        <div className="row row-cols-2 g-0 mt-3">
                            {shortcuts.map((shortcut) => (
                                <div key={shortcut.id} className="col text-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <a href={shortcut.link} className="svg-hover" target="_blank" rel="noopener noreferrer">
                                            <div style={{ width: "140px", height: "140px", overflow: "hidden", borderRadius: "25px" }}>
                                                <img
                                                    className="svg-icon"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "fill"
                                                    }}
                                                    src={`${DOMAIN}${shortcut.image}`}
                                                    alt={shortcut.name}
                                                />
                                            </div>
                                        </a>
                                        <p className="h5-regular g6 mt-2">{shortcut.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
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

                {/* CCOC Section */}
                <Container fluid className="my-5">
                    <Row className="align-items-center gx-5">
                        <Col md={6} className="text-start">
                            <div
                                className="ccoc-text body-regular"
                                dangerouslySetInnerHTML={{ __html: he.decode(pageContent?.description || "") }}
                            />
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <div className="image-stack">
                                {pageContent?.images?.slice(0, 3).map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={`${DOMAIN}${img}`}
                                        alt={`Image ${idx + 1}`}
                                        className={`stack-image ${["main-image", "middle-image", "back-image"][idx]}`}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Partner Section */}
                <Container fluid className="mt-5">
                    {Object.entries(partnersByType).map(([type, partners]) => (
                        <Row key={type} className="my-5 text-center">
                            <Col md={12}>
                                <h3>{`Parteneri ${type === "institutional" ? "instituționali" : type}`}</h3>
                                <div className="d-flex flex-wrap justify-content-center">
                                    {partners.map((partner) => (
                                        <Card
                                            key={partner.$id}
                                            className="mx-3 my-2"
                                            style={{ width: type === "institutional" ? "120px" : "150px", border: "none" }}
                                        >
                                            <a href={partner.link} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={`${DOMAIN}${partner.image}`}
                                                    alt={partner.name}
                                                    style={{ height: "50px", objectFit: "contain" }}
                                                />
                                            </a>
                                            <Card.Body>
                                                <Card.Text className="text-center">{partner.name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default HomePage;