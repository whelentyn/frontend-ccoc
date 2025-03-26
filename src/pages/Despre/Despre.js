import React, { useEffect, useState } from "react";
import "./Despre.css";
import { getPageBySlug } from "../../api/pages";
import he from "he";
import {DOMAIN} from "../../api"; // decode HTML entities

const Despre = () => {
    const [pageContent, setPageContent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const content = await getPageBySlug("despre/misiune-si-scop");
                setPageContent(content);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPageContent();
    }, []);

    if (error) return <div className="text-danger">Eroare: {error}</div>;
    if (!pageContent) return <div>Se încarcă...</div>;

    const {
        name: title,
        shortDescription: subtitle,
        description,
        images,
    } = pageContent;

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
                        )
                    }}
                ></p>

                {imageUrl && (
                    <div className="image-container d-block d-md-none my-4 text-center">
                        <img src={imageUrl} alt="CCOC" className="responsive-image" />
                    </div>
                )}
            </div>

            <div className="row align-items-start">
                {/* Left Column - Dynamic Content */}
                <div className="col-lg-8">
                    <div
                        className="body-regular g4 rich-text-content"
                        dangerouslySetInnerHTML={{ __html: he.decode(description) }}
                    ></div>
                </div>

                {/* Right Column - Desktop Image */}
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
