import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { projects } from "./Proiecte";
import imgcz from "../assets/zcimg.svg";
import anunturiImage from "../assets/anunturi.svg";

const recentArticles = [
    {
        id: 1,
        date: "12 iulie 2024",
        title: "Consiliere psihologică pentru studenți",
        description: "CCOC oferă servicii de consiliere psihologică pentru studenți...",
        image: anunturiImage,
    },
    {
        id: 2,
        date: "7 mai 2024",
        title: "Zilele Consilierii: Ateliere și Zilele Porților Deschise",
        description: "CCOC facilitează interacțiunea dintre studenții UPT...",
        image: anunturiImage,
    },
    {
        id: 3,
        date: "17 martie 2024",
        title: "Oportunități de voluntariat pentru dezvoltare profesională",
        description: "CCOC colaborează cu diverse organizații pentru a oferi...",
        image: anunturiImage,
    },
];

const ProiectePage = () => {
    const { projectId } = useParams(); // Get the projectId from the URL params
    const project = projects.find((p) => p.id === parseInt(projectId)); // Find the matching project

    if (!project) {
        return <div className="text-center mt-5">Proiectul nu a fost găsit!</div>;
    }

    return (
        <div className="container mt-5">
            {/* Upper Section: Project Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                style={{ height: "150px" }}
                                src={project.imageUrl}
                                className="img-fluid mb-4"
                                alt={project.title}
                            />
                            <p className="body-regular">{project.description}</p>
                            <p className="body-regular"><strong>Data:</strong> {new Date(project.date).toLocaleDateString()}</p>
                            <p className="body-regular"><strong>Locație:</strong> {project.location}</p>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={imgcz}
                                className="img-fluid rounded"
                                alt="Additional Project Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="row justify-content-center mt-5">
                <div className="col-lg-8">
                    <div className="g3 h6 mb-4">ARTICOLE DESPRE EVENIMENT</div>
                    <div className="row">
                        {recentArticles.map((article) => (
                            <div className="col-md-4 mb-4" key={article.id}>
                                <div className="card-altele h-100 shadow-sm">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="card-img-top"
                                        style={{
                                            height: "150px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="card-body">
                                        <div className="body-regular g5">{article.date}</div>
                                        <div className="g6 h5">{article.title}</div>
                                        <div className="body-regular g5">{article.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProiectePage;
