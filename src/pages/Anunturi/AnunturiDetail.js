import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getArticlesByTag, getArticleBySlug } from "../../api/articles"; // Import fetch function
import "./AnunturiDetail.css";
import { formatDate } from "../../utils";
import he from "he";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnunturiDetail = () => {
    const { slug } = useParams(); // Get slug from URL
    const location = useLocation();
    const navigate = useNavigate();

    const [article, setArticle] = useState(location.state?.item || null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [loading, setLoading] = useState(!article);
    const [error, setError] = useState(null);

    // Fetch article by slug if not available from navigation state
    useEffect(() => {
        setArticle(null); // Reset before fetching new article
        setLoading(true); // Show loading while fetching
        setError(null);

        const fetchArticle = async () => {
            try {
                const response = await getArticleBySlug(slug);
                console.log("Fetched Article:", response);
                setTimeout(() => {
                    setArticle(response);
                    setLoading(false);
                }, 500);
            } catch (error) {
                console.error("Failed to fetch article:", error);
                setError("Anunțul nu a fost găsit.");
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);



    useEffect(() => {
        if (article?.tags?.length > 0) {
            const fetchRelatedArticles = async () => {
                try {
                    const tagNames = article.tags.map(tag => tag.name);
                    const responses = await Promise.all(tagNames.map(tag => getArticlesByTag(tag, 3)));

                    const allArticles = responses.flat();
                    const uniqueArticles = allArticles.filter((a, index, self) =>
                        a.slug !== article.slug && self.findIndex(t => t.slug === a.slug) === index
                    );

                    setRelatedArticles(uniqueArticles);
                } catch {
                    setError("Failed to load related articles.");
                }
            };

            fetchRelatedArticles();
        }
    }, [article]);


    if (loading) {
        return (
            <div className="container-anunturi-detail px-3 px-md-5 py-4">
                <div>
                    <Skeleton height={300} borderRadius={20} />
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <Skeleton width={80} height={16} />
                            <Skeleton width={100} height={16} />
                        </div>
                        <Skeleton width="70%" height={24} />
                        <Skeleton width="90%" height={16} />
                        <Skeleton width="85%" height={16} />
                        <Skeleton width="80%" height={16} />
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5 text-center">
                <h1>{error}</h1>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="container py-5 text-center">
                <h1>Nu au fost găsite anunțuri.</h1>
            </div>
        );
    }

    const decodedContent = he.decode(article.content);

    return (
        <div className="container-anunturi-detail px-3 px-md-5 py-4">
            <div>
                <img
                    src={`https://ccoc.edicz.com${article.image}`}
                    alt={article.title}
                    className="img-anunturi-detail w-100 mb-4"
                    style={{
                        borderRadius: "20px",
                        height: "300px",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        {article?.tags?.length > 0 ? (
                            article.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: tag.hexColor || "#ccc", // Fallback color
                                        color: "#fff",
                                        padding: "4px 12px",
                                        borderRadius: "12px",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        display: "inline-block",
                                    }}
                                >
                                    <span style={{
                                        whiteSpace: "nowrap",
                                        alignSelf: "center", // Ensures alignment with the tags
                                    }} className="body-regular">{tag.name}</span>
                                </div>
                            ))
                        ) : (
                            <span className="body-regular text-muted">Nicio etichetă disponibilă</span>
                        )}
                        <div className="body-regular g5">{formatDate(article.publishDate)}</div>
                    </div>
                    <h2 className="g6 h1">{article.title}</h2>
                    <div
                        className="body-regular g4"
                        dangerouslySetInnerHTML={{ __html: decodedContent }}
                    ></div>
                </div>
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
                <div style={{ marginLeft: "-30px", marginRight: "-30px" }} className="recent-articles mt-5 px-4 px-md-4">
                    <div className="mb-4 g3 h6">ARTICOLE SIMILARE</div>
                    <div className="row">
                        {relatedArticles.map((article) => (
                            <div
                                className="col-md-4 mb-4"
                                key={article.id}
                                onClick={() => {
                                    setArticle(null);
                                    navigate(`/anunturi/${article.slug}`, { state: { item: article } });
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-altele h-100 shadow-sm">
                                    <img
                                        src={`https://ccoc.edicz.com${article.image}`}
                                        alt={article.title}
                                        className="card-img-top"
                                        style={{
                                            height: "150px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="card-body">
                                        <div className="body-regular g5">{formatDate(article.publishDate)}</div>
                                        <div className="g6 h5">{article.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AnunturiDetail;
