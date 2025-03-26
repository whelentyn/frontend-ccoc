import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useParams} from "react-router-dom";
import { getProjectBySlug } from "../api/projects"; // import your API method
import he from "he";
import anunturiImage from "../assets/anunturi.svg";
import {DOMAIN} from "../api";
import {getArticleByString} from "../api/articles";
import {formatDate} from "../utils";

const ProiectePage = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProjectBySlug(slug);
                setProject(data);
            } catch (err) {
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
                console.log(project.title)
                const data = await getArticleByString(project.title);
                setArticles(data); // Ensure this returns an array of articles
            } catch (error) {
                console.error("Failed to load articles:", error);
                setArticles([]); // Fallback to empty
            }
        };

        fetchArticles();
    }, [project]);

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
                                    style={{height: "fit-content"}}
                                />
                            ) : (
                                <div className="">
                                    <h2 className="">{project.title}</h2>
                                </div>
                            )}
                            <div
                                className="body-regular"
                                dangerouslySetInnerHTML={{ __html: he.decode(project.description) }}
                            />
                        </div>
                        <div className="col-md-6">
                            <img
                                src={project.presentationImage ? `${DOMAIN}${project.presentationImage}` : project.title}
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
                        <div className="g3 h6 mb-4">ARTICOLE RELEVANTE</div>
                        <div className="row">
                            {articles.map((article) => (
                                <div className="col-md-4 mb-4" key={article.id}>
                                    <Link to={`/anunturi/${article.slug}`} className="text-decoration-none text-dark">
                                        <div className="card-altele h-100 shadow-sm">
                                            <img
                                                src={article.image ? `${DOMAIN}${article.image}` : anunturiImage}
                                                alt={article.title}
                                                className="card-img-top"
                                                style={{ height: "150px", objectFit: "cover" }}
                                            />
                                            <div className="card-body">
                                                <div className="body-regular">{formatDate(article.publishDate)}</div>
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

        </div>
    );
};

export default ProiectePage;