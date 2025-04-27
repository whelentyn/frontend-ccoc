import React, { useEffect, useState } from "react";
import "./Documente.css";
import { getAllReports } from "../../api/rapoarte";
import { getPageBySlug } from "../../api/pages";
import { DOMAIN } from "../../api";
import he from "he";
import { Spinner } from "react-bootstrap";

const DocumentePage = () => {
    const [activityReports, setActivityReports] = useState([]);
    const [operationalPlans, setOperationalPlans] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAll = async () => {
            const [reportsRes, pageRes] = await Promise.allSettled([
                getAllReports(),
                getPageBySlug("despre/documente"),
            ]);

            if (reportsRes.status === "fulfilled") {
                const reports = reportsRes.value;
                const raports = reports
                    .filter((r) => r.type === "raport")
                    .sort((a, b) => b.year - a.year);
                const plans = reports
                    .filter((r) => r.type === "plan")
                    .sort((a, b) => b.year - a.year);
                setActivityReports(raports);
                setOperationalPlans(plans);
            }

            if (pageRes.status === "fulfilled") {
                setPageContent(pageRes.value);
            }

            setTimeout(() => setLoading(false), 200);
        };

        fetchAll();
    }, []);

    const renderButtons = (items) =>
        items.map((item, index) => (
            <button
                key={index}
                className={`doc-button h5-regular ${index === 0 ? "active" : ""}`}
                onClick={() => window.open(`${DOMAIN}${item.file}`, "_blank")}
            >
                {item.label ||
                    (index === 0
                        ? `${item.type === "raport" ? "Raport de activitate" : "Plan operațional"} ${item.year}`
                        : item.year)}
            </button>
        ));

    const pageTitle = he.decode(pageContent?.name?.trim() || "Documente");
    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() ||
        "Aici găsești rapoartele despre activitatea și planificarea CCOC."
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
            <h1 className="g6">{pageTitle}</h1>
            <p className="body-regular g3">{pageSubtitle}</p>
            <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                    <h3 className="h3 g6 mt-2">Rapoarte de activitate</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {renderButtons(activityReports)}
                    </div>
                </div>
                {/* Right Column */}
                <div className="col-md-6">
                    <h3 className="h3 g6 mt-2">Planuri operaționale</h3>
                    <div className="d-flex flex-wrap gap-2">
                        {renderButtons(operationalPlans)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentePage;
