import React, { useEffect, useState } from "react";
import "./Servicii.css";
import "bootstrap/dist/css/bootstrap.min.css";
import he from "he";
import { Spinner } from "react-bootstrap";

import { getAllParents, getChildren } from "../api/projects";
import { getPageBySlug } from "../api/pages";
import { DOMAIN } from "../api";

const colorVariables = [
    "var(--electric-iris-focused)",
    "var(--coral-blaze-focused)",
    "var(--lemon-zest-focused)",
    "var(--ruby-blush-focused)",
];

const getRandomColor = () =>
    colorVariables[Math.floor(Math.random() * colorVariables.length)];

const Proiecte = () => {
    const [projects, setProjects] = useState([]);
    const [expandedProjects, setExpandedProjects] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let parentError = null;

            try {
                const [parentsRes, pageRes] = await Promise.allSettled([
                    getAllParents(),
                    getPageBySlug("proiecte"),
                ]);

                if (parentsRes.status === "fulfilled") {
                    const enrichedParents = await Promise.all(
                        parentsRes.value.map(async (parent) => {
                            const children = await getChildren(parent.slug);
                            return {
                                ...parent,
                                description: he.decode(parent.description),
                                children: (children || []).map((child) => ({
                                    ...child,
                                    description: he.decode(child.description),
                                    presentationImage: child.presentationImage
                                        ? `${DOMAIN}${child.presentationImage}`
                                        : null,
                                    fallbackColor: getRandomColor(),
                                })),
                            };
                        })
                    );
                    setProjects(enrichedParents);
                    setExpandedProjects(enrichedParents.map((_, idx) => idx === 0)); // only first expanded
                } else {
                    parentError = parentsRes.reason?.message || "Failed to load projects.";
                }

                if (pageRes.status === "fulfilled") {
                    setPageContent(pageRes.value);
                }

                setLoading(false);
                if (parentError) setError(parentError);
            } catch (err) {
                setError("Eroare la încărcarea datelor.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleProject = (index) => {
        setExpandedProjects((prev) =>
            prev.map((val, i) => (i === index ? !val : val))
        );
    };

    const pageTitle = he.decode(pageContent?.name?.trim() || "Proiecte");
    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() ||
        "Descoperă proiectele dezvoltate de CCOC."
    );

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="mb-5">
                <h1 className="g6 mb-3">{pageTitle}</h1>
                <p className="body-regular g3 mb-5">{pageSubtitle}</p>
            </div>

            {error && (
                <div className="text-center text-danger mb-4">⚠️ {error}</div>
            )}

            {projects.map((project, idx) => (
                <section key={project.$id} id={project.slug} className="mb-5 border-bottom pb-4">
                    {/* Title row with arrow and click behavior */}
                    <div
                        className="d-flex justify-content-between align-items-center cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleProject(idx)}
                    >
                        <h2 className="g6 mb-2 d-flex align-items-center gap-2">
                            <span
                                style={{
                                    display: "inline-block",
                                    transition: "transform 0.3s",
                                    transform: expandedProjects[idx]
                                        ? "rotate(0deg)"
                                        : "rotate(-90deg)",
                                }}
                            >
                                ▼
                            </span>
                            {project.title}
                        </h2>
                    </div>

                    {expandedProjects[idx] && (
                        <>
                            <div
                                className="g3 body-regular mb-3"
                                dangerouslySetInnerHTML={{ __html: project.description }}
                            ></div>

                            {project.children.length > 0 ? (
                                <div className="row gy-4 mt-4">
                                    {project.children.map((sub, childIdx) => (
                                        <div className="col-md-6" key={childIdx}>
                                            <div className="d-flex h-100 flex-row rounded overflow-hidden service-card">
                                                <div
                                                    className="flex-shrink-0 d-none d-sm-block"
                                                    style={{
                                                        backgroundColor: sub.presentationImage
                                                            ? "transparent"
                                                            : sub.fallbackColor,
                                                        backgroundImage: sub.presentationImage
                                                            ? `url(${sub.presentationImage})`
                                                            : "none",
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        width: "40%",
                                                        minHeight: "200px",
                                                    }}
                                                ></div>
                                                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                                                    <div>
                                                        <h3 className="g6 h3">{sub.title}</h3>
                                                        <div
                                                            className="body-regular g6"
                                                            dangerouslySetInnerHTML={{
                                                                __html: sub.description,
                                                            }}
                                                        ></div>
                                                    </div>
                                                    {sub.slug && (
                                                        <a
                                                            href={sub.externalUrl}
                                                            className="custom-button h5-regular mt-3"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Află mai multe
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="g4">—</p>
                            )}
                        </>
                    )}
                </section>
            ))}
        </div>
    );
};

export default Proiecte;
