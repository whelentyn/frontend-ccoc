import React, { useEffect, useState } from "react";
import "./Documente.css";
import { getAllReports } from "../../api/rapoarte";
import { getPageBySlug } from "../../api/pages";
import { DOMAIN } from "../../api";
import he from "he";

const DocumentePage = () => {
    const [activityReports, setActivityReports] = useState([]);
    const [operationalPlans, setOperationalPlans] = useState([]);
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const reports = await getAllReports();
                const raports = reports
                    .filter((r) => r.type === "raport")
                    .sort((a, b) => b.year - a.year);
                const plans = reports
                    .filter((r) => r.type === "plan")
                    .sort((a, b) => b.year - a.year);

                setActivityReports(raports);
                setOperationalPlans(plans);
            } catch (error) {
                console.error("Error loading reports:", error);
            }
        };

        const fetchPageContent = async () => {
            try {
                const content = await getPageBySlug("despre/documente");
                setPageContent(content);
            } catch (error) {
                console.error("Error loading page content:", error);
            }
        };

        fetchReports();
        fetchPageContent();
    }, []);

    const renderButtons = (items) =>
        items.map((item, index) => (
            <button
                key={index}
                className={`doc-button h5-regular ${index === 0 ? "active" : ""}`}
                onClick={() => window.open(`${DOMAIN}${item.file}`, "_blank")}
            >
                {item.label || (
                    index === 0
                        ? `${item.type === "raport" ? "Raport de activitate" : "Plan operațional"} ${item.year}`
                        : item.year
                )}
            </button>
        ));

    const pageTitle = he.decode(
        pageContent?.name?.trim() || "Documente"
    );

    const pageSubtitle = he.decode(
        pageContent?.shortDescription?.trim() || "Aici găsești rapoartele despre activitatea și planificarea CCOC."
    );

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
