import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import zcar from "../assets/zcar.svg";
import zcons from "../assets/zcons.svg";
import "./Proiecte.css";

export const projects = [
    {
        id: 1,
        title: "Zilele Consilierii",
        description:
            "Zilele Consilierii este un eveniment organizat de Centrul de Consiliere și Orientare în Carieră (CCOC), dedicat sprijinirii studenților și absolvenților în dezvoltarea personală și profesională. Scopul acestui eveniment este de a oferi participanților resursele necesare pentru a-și planifica și gestiona eficient cariera, prin accesul la ateliere tematice și sesiuni de consiliere personalizată.",
        buttonLabel: "Află mai mult",
        buttonColor: "btn-danger",
        date: "2025-03-12",
        location: "Centrul CCOC",
        imageUrl: zcons,
    },
    {
        id: 2,
        title: "Zilele Carierei",
        description:
            "Zilele Carierei este un eveniment bianual desfășurat pe parcursul a două zile. Ne dăm întâlnire în fiecare primăvară și toamnă în Cantina UPT, împreună cu diferite companii sau instituții de profil locale, naționale și internaționale.",
        buttonLabel: "Află mai mult",
        buttonColor: "btn-success",
        date: "2025-05-18",
        location: "Cantina UPT",
        imageUrl: zcar,
    },
];

const ProjectCard = ({ id, title, description, buttonLabel, buttonColor, date, location, imageUrl }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="proiecte-card">
                <img style={{ height: "150px" }} src={imageUrl} alt={title} className="img-fluid m-lg-4" />
                <div className="card-body p-4">
                    <p className="body-regular">{description}</p>
                    <p className="body-regular"><strong>Data:</strong> {new Date(date).toLocaleDateString()}</p>
                    <p className="body-regular"><strong>Locație:</strong> {location}</p>
                    <Link to={`/proiecte/${id}`} style={{ alignSelf: "flex-start",
                        marginTop: "auto"}} className={`custom-button`}>
                        {buttonLabel}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
