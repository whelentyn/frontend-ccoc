import React from "react";
import "./Documente.css";

const DocumentePage = () => {
    const activityReports = [
        { year: 2023, label: "Raport de activitate 2023", active: true },
        { year: 2022 },
        { year: 2021 },
        { year: 2020 },
        { year: 2019 },
        { year: 2018 },
        { year: 2017 },
        { year: 2016 },
        { year: 2015 },
        { year: 2014 },
        { year: 2013 },
    ];

    const operationalPlans = [
        { year: 2024, label: "Plan operațional 2024", active: true },
        { year: 2023 },
        { year: 2022 },
        { year: 2021 },
        { year: 2020 },
        { year: 2019 },
        { year: 2018 },
        { year: 2017 },
        { year: 2016 },
        { year: 2015 },
        { year: 2014 },
    ];

    const renderButtons = (items) =>
        items.map((item, index) => (
            <button
                key={index}
                className={`doc-button ${item.active ? "active" : ""}`}
            >
                {item.label || item.year}
            </button>
        ));

    return (
        <div className="container py-5">
            <h1 className="h1 g6">Documente</h1>
            <p className="body-regular g3">Lorem ipsum dolor sit amet</p>
            <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                    <p className="h3 g6">Rapoarte de activitate</p>
                    <div className="d-flex flex-wrap gap-2">
                        {renderButtons(activityReports)}
                    </div>
                </div>
                {/* Right Column */}
                <div className="col-md-6">
                    <p className="h3 g6">Planuri operaționale</p>
                    <div className="d-flex flex-wrap gap-2">
                        {renderButtons(operationalPlans)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentePage;
