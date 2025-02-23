import React from "react";
import "./AnunturiDetail.css";
import { useLocation } from "react-router-dom";
import anunturiImage from "../../assets/anunturi.svg"; // Example image

const recentArticles = [
    {
        id: 1,
        date: "12 iulie 2024",
        title: "Consiliere psihologică pentru studenți",
        description: "CCOC oferă servicii de consiliere psihologică pentru studenți...",
        image: anunturiImage
    },
    {
        id: 2,
        date: "7 mai 2024",
        title: "Zilele Consilierii: Ateliere și Zilele Porților Deschise",
        description: "CCOC facilitează interacțiunea dintre studenții UPT...",
        image: anunturiImage
    },
    {
        id: 3,
        date: "17 martie 2024",
        title: "Oportunități de voluntariat pentru dezvoltare profesională",
        description: "CCOC colaborează cu diverse organizații pentru a oferi...",
        image: anunturiImage
    },
];

const AnunturiDetail = () => {
    const location = useLocation();
    const item = location.state?.item;

    if (!item) {
        return (
            <div className="container py-5">
                <h1>Announcement Not Found</h1>
                <p>It seems this announcement doesn't exist or the state wasn't passed correctly.</p>
            </div>
        );
    }

    return (
        <div className="container-anunturi-detail">
            <div
                style={{
                    marginLeft: "-55px", // Adjust for Bootstrap padding
                    marginRight: "-55px",
                }}
            >
                <img
                    src={item.image}
                    alt={item.title}
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
                    <div className="g2 h5-regular">Publicat în {item.date}</div>
                    <h2 className="g6 h1">{item.title}</h2>
                    <div
                        className="body-regular g4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                </div>
            </div>
            <div style={{
                marginLeft: "-30px",
                marginRight: "-30px",
            }} className="recent-articles mt-5">
                <div className="g3 h6">ALTE ARTICOLE RECENTE</div>
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
    );
};

export default AnunturiDetail;
