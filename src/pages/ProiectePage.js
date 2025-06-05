import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, getChildren } from "../api/projects";
import he from "he";
import anunturiImage from "../assets/anunturi.svg";
import { DOMAIN } from "../api";
import { getArticleByString } from "../api/articles";
import { formatDate } from "../utils";

const ProiectePage = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);
    const [editions, setEditions] = useState([]);

    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const [currentEditionIndex, setCurrentEditionIndex] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProjectBySlug(slug);
                setProject(data);

                const children = await getChildren(data.slug);
                setEditions(children || []);
            } catch (err) {
                console.error("Error:", err);
                setError("Proiectul nu a fost găsit!");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [slug]);

    useEffect(() => {
        if (!project?.title) return;

        const fetchArticles = async () => {
            try {
                const data = await getArticleByString(project.title);
                setArticles(data || []);
            } catch (error) {
                console.error("Failed to load articles:", error);
                setArticles([]);
            }
        };

        fetchArticles();
    }, [project]);

    // Pagination logic
    const visibleArticles = articles.slice(currentArticleIndex, currentArticleIndex + 3);
    const visibleEditions = editions.slice(currentEditionIndex, currentEditionIndex + 3);

    const handlePrevArticles = () => {
        setCurrentArticleIndex((prev) => Math.max(prev - 3, 0));
    };

    const handleNextArticles = () => {
        setCurrentArticleIndex((prev) =>
            Math.min(prev + 3, articles.length - (articles.length % 3 || 3))
        );
    };

    const handlePrevEditions = () => {
        setCurrentEditionIndex((prev) => Math.max(prev - 3, 0));
    };

    const handleNextEditions = () => {
        setCurrentEditionIndex((prev) =>
            Math.min(prev + 3, editions.length - (editions.length % 3 || 3))
        );
    };

    if (error || !project) return <div className="text-center mt-5">{error}</div>;

    return (
        <div className="container mt-5">
            {/* Upper Section: Project Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            {project.titleImage ? (
                                <img
                                    src={`${DOMAIN}${project.titleImage}`}
                                    className="img-fluid rounded w-100"
                                    alt="Presentation"
                                    style={{ height: "fit-content" }}
                                />
                            ) : (
                                <div>
                                    <h2>{project.title}</h2>
                                </div>
                            )}
                            <div
                                className="body-regular"
                                dangerouslySetInnerHTML={{ __html: he.decode(project.description) }}
                            />
                        </div>
                        <div className="col-md-6">
                            <img
                                src={
                                    project.presentationImage
                                        ? `${DOMAIN}${project.presentationImage}`
                                        : project.title
                                }
                                className="img-fluid rounded"
                                alt="Presentation"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            {articles.length > 0 && (
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="g3 h6 mb-0">ARTICOLE RELEVANTE</div>
                            <div>
                                <button
                                    className="btn btn-outline-secondary btn-sm me-2"
                                    onClick={handlePrevArticles}
                                    disabled={currentArticleIndex === 0}
                                >
                                    ◀
                                </button>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={handleNextArticles}
                                    disabled={currentArticleIndex + 3 >= articles.length}
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {visibleArticles.map((article) => (
                                <div className="col-md-4 mb-4" key={article.id}>
                                    <Link
                                        to={`/anunturi/${article.slug}`}
                                        className="text-decoration-none text-dark"
                                    >
                                        <div className="card-altele h-100 shadow-sm">
                                            <img
                                                src={
                                                    article.image
                                                        ? `${DOMAIN}${article.image}`
                                                        : anunturiImage
                                                }
                                                alt={article.title}
                                                className="card-img-top"
                                                style={{ height: "150px", objectFit: "cover" }}
                                            />
                                            <div className="card-body">
                                                <div className="body-regular">
                                                    {formatDate(article.publishDate)}
                                                </div>
                                                <div className="g6 h5">{article.title}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Editions Section */}
            {visibleEditions.length > 0 && (
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="g3 h6 mb-0">EDIȚII PRECEDENTE</div>
                            <div>
                                <button
                                    className="btn btn-outline-secondary btn-sm me-2"
                                    onClick={handlePrevEditions}
                                    disabled={currentEditionIndex === 0}
                                >
                                    ◀
                                </button>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={handleNextEditions}
                                    disabled={currentEditionIndex + 3 >= editions.length}
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            {visibleEditions.map((edition) => (
                                <div className="col-md-4 mb-4" key={edition.$id || edition.id}>
                                    <Link
                                        to={`/proiecte/${edition.slug}`}
                                        className="text-decoration-none text-dark"
                                    >
                                        <div className="card-altele h-100 shadow-sm">
                                            <img
                                                src={
                                                    edition.presentationImage
                                                        ? `${DOMAIN}${edition.presentationImage}`
                                                        : anunturiImage
                                                }
                                                alt={edition.title || "Ediție anterioară"}
                                                className="card-img-top"
                                                style={{ height: "150px", objectFit: "cover" }}
                                            />
                                            <div className="card-body">
                                                <div className="g6 h5">{edition.title || "Fără titlu"}</div>
                                                <div
                                                    className="body-regular text-truncate-two-lines"
                                                    dangerouslySetInnerHTML={{
                                                        __html: he.decode(
                                                            edition.description || "Fără descriere"
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProiectePage;
