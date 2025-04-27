import React, { useEffect, useState } from "react";
import "./Servicii.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllServices } from "../api/servicii";
import { getPageBySlug } from "../api/pages";
import { DOMAIN } from "../api";
import he from "he";
import { Spinner } from "react-bootstrap";

const colorVariables = [
    "var(--electric-iris-focused)",
    "var(--coral-blaze-focused)",
    "var(--lemon-zest-focused)",
    "var(--ruby-blush-focused)",
];

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colorVariables.length);
    return colorVariables[index];
};

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            const [servicesRes, pageRes] = await Promise.allSettled([
                getAllServices(),
                getPageBySlug("servicii"),
            ]);

            if (servicesRes.status === "fulfilled") {
                const coloredServices = servicesRes.value.map((service) => ({
                    ...service,
                    color: getRandomColor(),
                }));
                setServices(coloredServices);
            }

            if (pageRes.status === "fulfilled") {
                setPageContent(pageRes.value);
            }

            setTimeout(() => setLoading(false), 500);
        };

        fetchAll();
    }, []);

    const pageTitle = he.decode(
        pageContent?.name?.trim() || "Servicii CCOC"
    );

    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() ||
        "Descoperă serviciile de personal CCOC. Află de serviciile de voluntariat în:"
    );

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Se încarcă...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="mb-5">
                <h1 className="g6">{pageTitle}</h1>
                <p className="g3 body-regular">{pageSubtitle}</p>
            </div>
            <div className="row gy-4">
                {services.map((service, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="d-flex h-100 flex-row rounded overflow-hidden service-card">
                            <div
                                className="flex-shrink-0 service-image"
                                style={{
                                    backgroundColor: service.color,
                                    backgroundImage: `url(${DOMAIN}${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100px",
                                }}
                            ></div>
                            <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                                <div>
                                    <h3 className="g6 h3">{service.name}</h3>
                                    <div
                                        className="body-regular g6"
                                        dangerouslySetInnerHTML={{ __html: service.description }}
                                    ></div>
                                </div>
                                {service.formLink && (
                                    <a
                                        href={service.formLink}
                                        className="custom-button h5-regular mt-3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Fă o programare!
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
