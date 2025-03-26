import React, { useState, useEffect } from 'react';
import './Personal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PersonaCard from '../../components/PersonaCard';
import { getAllPersonal, getAllPersonalTags } from '../../api/personal';
import {DOMAIN} from "../../api";
import {getPageBySlug} from "../../api/pages"; // Ensure correct import
import he from "he";

const Personal = () => {
    const [categories, setCategories] = useState([]);
    const [staff, setStaff] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingStaff, setLoadingStaff] = useState(true);
    const [pageContent, setPageContent] = useState(null);
    const [error, setError] = useState(null);

    // Fetch categories (tags)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllPersonalTags();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const content = await getPageBySlug("despre/personal");
                setPageContent(content);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPageContent();
    }, []);

    // Fetch personal (staff)
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const data = await getAllPersonal();
                const formattedStaff = data
                    .filter(person => person.type === "angajat")
                    .map(person => ({
                        name: person.name,
                        role: person.type,
                        location: person.location,
                        phone: person.phoneNumber || "N/A",
                        email: person.email,
                        avatar: person.image.startsWith('/') ? `${DOMAIN}${person.image}` : person.image,
                        description: person.description,
                        badges: person.tags ? person.tags.map(tag => tag.name) : [],
                    }));
                setStaff(formattedStaff);
            } catch (error) {
                console.error("Error fetching staff:", error);
            } finally {
                setLoadingStaff(false);
            }
        };

        fetchStaff();
    }, []);

    // Handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category.name)
                ? prevSelected.filter((name) => name !== category.name)
                : [...prevSelected, category.name]
        );
    };

    // Filter staff based on selected categories
    const filteredStaff =
        selectedCategories.length > 0
            ? staff.filter((person) =>
                person.badges.some((badge) =>
                    selectedCategories.includes(badge)
                )
            )
            : staff;

    return (
        <div className="container py-3">
            <div className="row">
                {/* Left Sidebar */}
                <div style={{ marginTop: '13px' }} className="col-lg-2 col-md-4 mb-4">
                    <div className="d-flex flex-column gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`body-regular filter-button-personal ${
                                    selectedCategories.includes(category.name) ? 'active' : ''
                                }`}
                                style={{ textAlign: 'left' }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9 col-md-8">
                    {/* Mobile Layout */}
                    <div className="d-block d-md-none">
                        <h1 className="g6 h5">
                            {he.decode(
                                pageContent?.title?.trim()
                                    ? pageContent.title
                                    : "Personal angajat"
                            )}
                        </h1>

                        <p className="body-regular g3">
                            {he.decode(
                                pageContent?.shortDescription?.trim()
                                    ? pageContent.shortDescription
                                    : "Descoperă echipa CCOC"
                            )}
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`body-regular filter-button-personal-mobile ${
                                        selectedCategories.includes(category.name) ? 'active' : ''
                                    }`}
                                    style={{ fontSize: '14px', padding: '6px 12px' }}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
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

}

export default Personal;
