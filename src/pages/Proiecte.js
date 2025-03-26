import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Proiecte.css";
import {DOMAIN} from "../api";
import {getAllProjects} from "../api/projects";

const ProjectCard = ({ slug, title, description, titleImage }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="proiecte-card">
                <img
                    style={{ height: "150px", objectFit: "cover" }}
                    src={`${DOMAIN}${titleImage}`}
                    alt={title}
                    className="img-fluid m-lg-4"
                />
                <div className="card-body p-4">
                    <p className="body-regular" dangerouslySetInnerHTML={{ __html: description }} />
                    <Link
                        to={`/proiecte/${slug}`}
                        style={{ alignSelf: "flex-start", marginTop: "auto" }}
                        className="custom-button"
                    >
                        Află mai mult
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getAllProjects();
                const filtered = data.filter(p => p.type === 'proiect');
                setProjects(filtered);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container py-5">
            <div className="row">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
