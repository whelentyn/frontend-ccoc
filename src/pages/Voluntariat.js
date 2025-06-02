import React, { useEffect, useState } from "react";
import { Card, Carousel, Col } from "react-bootstrap";
import { getAllVoluntariat } from "../api/voluntariat";
import { DOMAIN } from "../api";

const Voluntariat = () => {
    const [volunteerData, setVolunteerData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllVoluntariat();
                setVolunteerData(data);
            } catch (err) {
                console.error("Failed to fetch volunteering content", err);
                setError("Eroare la încărcarea datelor.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center py-5">Se încarcă...</div>;
    }

    if (error || !volunteerData) {
        return <div className="text-center text-danger py-5">{error || "Conținut indisponibil."}</div>;
    }

    return (
        <div style={{ marginTop: "-70px" }} className="container py-5">
            <Carousel className="carousel-container mb-5">
                {volunteerData.carouselPages.map((page, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 rounded"
                            src={`${DOMAIN}${page.image}`}
                            alt={page.name}
                        />
                        <Carousel.Caption>
                            <h3>{page.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-8">
                    <Col md={6} className="text-start col-md-12">
                        <div className="ccoc-text">
                            <h2 className="h2 g5">Ce înseamnă să fii voluntar?</h2>
                            <div
                                className="body-regular g5"
                                dangerouslySetInnerHTML={{ __html: volunteerData.text }}
                            ></div>
                            {volunteerData.linkTo && (
                                <a href={volunteerData.linkTo} className="custom-button h5-regular" target="_blank" rel="noopener noreferrer">
                                    Înscrie-te aici!
                                </a>
                            )}
                        </div>
                    </Col>
                </div>

                <div className="col-md-4">
                    <div className="g3 h6">BENEFICIILE VOLUNTARIATULUI</div>
                    <div style={{ marginTop: "20px" }} className="row row-cols-2 g-0">
                        {volunteerData.benefits.map((benefit, index) => (
                            <div key={index} className="col text-center mb-3">
                                <div className="d-flex flex-column align-items-center">
                                    <img
                                        className="svg-icon"
                                        style={{ height: "100px", width: "100px" }}
                                        src={`${DOMAIN}${benefit.image}`}
                                        alt={benefit.name}
                                    />
                                    <p className="h5-regular g6 mt-2">{benefit.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voluntariat;
