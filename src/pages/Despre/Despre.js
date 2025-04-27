import React, { useEffect, useState } from "react";
import "./Despre.css";
import { getPageBySlug } from "../../api/pages";
import he from "he";
import { DOMAIN } from "../../api";
import { Spinner } from "react-bootstrap";

const Despre = () => {
    const [pageContent, setPageContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const content = await getPageBySlug("despre/misiune-si-scop");
                setPageContent(content);
                setTimeout(() => setLoading(false), 200);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPageContent();
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

    if (error) return <div className="text-danger text-center mt-4">Eroare: {error}</div>;

    const {
        name: title,
        shortDescription: subtitle,
        description,
        images,
    } = pageContent || {};

    const imageUrl = images?.[0] ? `${DOMAIN}${images[0]}` : null;

    return (
        <div className="container py-5">
            <div className="section-header">
                <h1
                    className="h1 g6"
                    dangerouslySetInnerHTML={{ __html: title ?? "Misiune și Scop" }}
                ></h1>
                <p
                    className="g3 body-regular"
                    dangerouslySetInnerHTML={{
                        __html: he.decode(
                            subtitle && subtitle.trim() !== ""
                                ? subtitle
                                : "Descoperă mai multe despre activitatea noastră"
                        ),
                    }}
                ></p>

                {imageUrl && (
                    <div className="image-container d-block d-md-none my-4 text-center">
                        <img src={imageUrl} alt="CCOC" className="responsive-image" />
                    </div>
                )}
            </div>

            <div className="row align-items-start">
                <div className="col-lg-8">
                    <div
                        className="body-regular g4 rich-text-content"
                        dangerouslySetInnerHTML={{ __html: he.decode(description) }}
                    ></div>
                </div>
                <div className="col-lg-4 d-none d-md-flex flex-column align-items-end">
                    {imageUrl && (
                        <div className="image-container">
                            <img src={imageUrl} alt="CCOC" className="responsive-image" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Despre;
