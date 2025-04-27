import React, { useState, useEffect } from "react";
import "./Personal.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PersonaCard from "../../components/PersonaCard";
import { getAllPersonal, getAllPersonalTags } from "../../api/personal";
import { DOMAIN } from "../../api";
import { getPageBySlug } from "../../api/pages";
import he from "he";
import { Spinner, Alert } from "react-bootstrap";

const Personal = () => {
    const [categories, setCategories] = useState([]);
    const [staff, setStaff] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const fetchAll = async () => {
            const newErrors = [];

            try {
                const [tagsData, staffData, pageData] = await Promise.allSettled([
                    getAllPersonalTags(),
                    getAllPersonal(),
                    getPageBySlug("despre/personal"),
                ]);

                if (tagsData.status === "fulfilled") {
                    setCategories(tagsData.value);
                } else {
                    newErrors.push("Nu s-au putut încărca categoriile.");
                }

                if (staffData.status === "fulfilled") {
                    const formattedStaff = staffData.value
                        .filter((person) => person.type === "angajat")
                        .map((person) => ({
                            name: person.name,
                            role: person.type,
                            location: person.location,
                            phone: person.phoneNumber || "N/A",
                            email: person.email,
                            avatar: person.image.startsWith("/") ? `${DOMAIN}${person.image}` : person.image,
                            description: person.description,
                            badges: person.tags ? person.tags.map((tag) => tag.name) : [],
                        }));
                    setStaff(formattedStaff);
                } else {
                    newErrors.push("Nu s-a putut încărca lista de personal.");
                }

                if (pageData.status === "fulfilled") {
                    setPageContent(pageData.value);
                } else {
                    newErrors.push("Nu s-a putut încărca conținutul paginii.");
                }

                setTimeout(() => {
                    setErrors(newErrors);
                    setLoading(false);
                }, 200);
            } catch (e) {
                setErrors(["Eroare necunoscută."]);
                setLoading(false);
            }
        };

        fetchAll();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category.name)
                ? prev.filter((name) => name !== category.name)
                : [...prev, category.name]
        );
    };

    const filteredStaff =
        selectedCategories.length > 0
            ? staff.filter((person) =>
                person.badges.some((badge) => selectedCategories.includes(badge))
            )
            : staff;

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
        <div className="container py-3">
            <div className="row">
                {/* Sidebar */}
                <div style={{ marginTop: "13px" }} className="col-lg-2 col-md-4 mb-4">
                    <div className="d-flex flex-column gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`body-regular filter-button-personal ${
                                    selectedCategories.includes(category.name) ? "active" : ""
                                }`}
                                style={{ textAlign: "left" }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9 col-md-8">
                    {/* Mobile View */}
                    <div className="d-block d-md-none">
                        <h1 className="g6 h5">
                            {he.decode(pageContent?.title?.trim() || "Personal angajat")}
                        </h1>
                        <p className="body-regular g3">
                            {he.decode(
                                pageContent?.shortDescription?.trim() ||
                                "Descoperă echipa CCOC"
                            )}
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`body-regular filter-button-personal-mobile ${
                                        selectedCategories.includes(category.name) ? "active" : ""
                                    }`}
                                    style={{ fontSize: "14px", padding: "6px 12px" }}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="d-none d-md-block">
                        <h1 className="g6 h5">Personal angajat</h1>
                        <p className="body-regular g3">Descoperă cine formează echipa CCOC.</p>
                    </div>

                    <div className="row">
                        {filteredStaff.map((person, index) => (
                            <div className="col-lg-6 col-md-12 mb-4" key={index}>
                                <PersonaCard person={person} categories={categories} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
