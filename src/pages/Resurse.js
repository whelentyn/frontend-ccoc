import React, { useEffect, useState } from "react";
import { getResourcesByType } from "../api/resurse"; // Adjust path as needed
import { getPageBySlug } from "../api/pages";
import he from "he";
import { Spinner } from "react-bootstrap";

// Helper to group by type (only "altele" here, but kept generic for future use)
const groupResourcesByType = (resources) => {
    const grouped = {};

    resources.forEach((res) => {
        const type = res.type || "Altele";
        if (!grouped[type]) {
            grouped[type] = [];
        }

        grouped[type].push({
            label: res.file.split("/").pop(),
            year: res.year,
            file: res.file,
            description: res.description?.replace(/<\/?[^>]+(>|$)/g, ""),
            authors: res.authors,
        });
    });

    return Object.entries(grouped).map(([type, resources]) => ({
        type,
        resources,
    }));
};

const ResursePage = () => {
    const [resourceData, setResourceData] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [resourcesRes, pageRes] = await Promise.allSettled([
                    getResourcesByType("altele"),
                    getPageBySlug("resurse"),
                ]);

                if (resourcesRes.status === "fulfilled") {
                    const grouped = groupResourcesByType(resourcesRes.value);
                    setResourceData(grouped);
                } else {
                    setError("A apărut o eroare la încărcarea resurselor.");
                }

                if (pageRes.status === "fulfilled") {
                    setPageContent(pageRes.value);
                }
            } catch (err) {
                console.error(err);
                setError("Eroare generală la încărcare.");
            } finally {
                setTimeout(() => setLoading(false), 200);
            }
        };

        fetchAll();
    }, []);

    const pageTitle = he.decode(pageContent?.name?.trim() || "Resurse CCOC");
    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() ||
        "Aici găsești toate documentele și materialele utile puse la dispoziție de către CCOC."
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
            <h1 className="g6 mb-3">{pageTitle}</h1>
            <p className="body-regular g3 mb-5">{pageSubtitle}</p>

            {error && <div className="alert alert-danger">{error}</div>}

            {resourceData.map((category, idx) => (
                <section key={idx} className="mb-5">
                    <div className="row gy-3">
                        {category.resources.map((res, index) => (
                            <div className="col-md-2" key={index}>
                                <a
                                    href={res.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="doc-button h5-regular d-block"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <div>
                                        <h5
                                            className="h5 g6 mb-1"
                                            style={{
                                                overflow: "hidden",
                                                whiteSpace: "nowrap",
                                                textOverflow: "ellipsis",
                                            }}
                                            title={res.label}
                                        >
                                            {res.label}
                                        </h5>
                                        <p className="body-regular g3 mb-0">{res.year}</p>
                                        <p className="body-regular g6 mb-0">{res.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ResursePage;
