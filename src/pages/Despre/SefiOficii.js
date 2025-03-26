import React, { useState, useEffect } from 'react';
import './SefiOficii.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SefiOficiiCard from "../../components/SefiOficiiCard";
import { getAllPersonal } from '../../api/personal';
import { getPageBySlug } from '../../api/pages'; // Import the API
import he from "he";

const SefiOficii = () => {
    const [sefiOficii, setSefiOficii] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageContent, setPageContent] = useState(null);

    // Fetch staff data
    useEffect(() => {
        const fetchSefiOficii = async () => {
            try {
                const data = await getAllPersonal();
                const filteredSefi = data
                    .filter(person => person.type === "sef-oficiu")
                    .map(person => ({
                        avatar: person.image.startsWith('/')
                            ? `https://ccoc.edicz.com${person.image}`
                            : person.image,
                        name: person.name,
                        faculty: person.location,
                        phone: person.phoneNumber || "N/A",
                        email: person.email,
                    }));
                setSefiOficii(filteredSefi);
            } catch (error) {
                console.error("Error fetching sefi oficii:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSefiOficii();
    }, []);

    // Fetch page title/subtitle
    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const page = await getPageBySlug("despre/sefi-de-oficii");
                setPageContent(page);
            } catch (error) {
                console.error("Error fetching page content:", error);
            }
        };

        fetchPageContent();
    }, []);

    // Use fallback if content not available
    const pageTitle = he.decode(
        pageContent?.name?.trim() || "Şefii Oficiilor de Consiliere a Studenţilor din fiecare facultate"
    );

    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() || "Ce face un șef de oficii? Află care sunt atribuțiile lor aici."
    );

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
