import React, { useState, useEffect } from 'react';
import './SefiOficii.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SefiOficiiCard from "../../components/SefiOficiiCard";
import { getAllPersonal } from '../../api/personal';
import { getPageBySlug } from '../../api/pages';
import he from "he";
import { DOMAIN } from "../../api";
import { Spinner } from "react-bootstrap";

const SefiOficii = () => {
    const [sefiOficii, setSefiOficii] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [personalRes, pageRes] = await Promise.allSettled([
                getAllPersonal(),
                getPageBySlug("despre/sefi-de-oficii"),
            ]);

            if (personalRes.status === "fulfilled") {
                const filteredSefi = personalRes.value
                    .filter(person => person.type === "sef-oficiu")
                    .map(person => ({
                        avatar: person.image.startsWith('/')
                            ? `${DOMAIN}${person.image}`
                            : person.image,
                        name: person.name,
                        faculty: person.location,
                        phone: person.phoneNumber || "N/A",
                        email: person.email,
                    }));
                setSefiOficii(filteredSefi);
            }

            if (pageRes.status === "fulfilled") {
                setPageContent(pageRes.value);
            }

            setTimeout(() => setLoading(false), 200);
        };

        fetchData();
    }, []);

    const pageTitle = he.decode(
        pageContent?.name?.trim() ||
        "Şefii Oficiilor de Consiliere a Studenţilor din fiecare facultate"
    );

    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() ||
        "Ce face un șef de oficii? Află care sunt atribuțiile lor aici."
    );

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Se încarcă...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="g6 h5">{pageTitle}</h1>
                    <p className="body-regular g3">{pageSubtitle}</p>
                    <div className="row">
                        {sefiOficii.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                                <SefiOficiiCard sefOficiu={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SefiOficii;
