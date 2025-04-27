import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getArticles } from "../../api/articles";
import { getTags } from "../../api/tags";
import CardAnunturi from "../../components/CardAnunturi";
import "./Anunturi.css";

const AnnouncementsPage = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    const announcementsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [articlesRes, tagsRes] = await Promise.allSettled([
                    getArticles(),
                    getTags(),
                ]);

                if (articlesRes.status === "fulfilled") {
                    setAnnouncements(articlesRes.value);
                } else {
                    setError("Eroare la încărcarea anunțurilor.");
                }

                if (tagsRes.status === "fulfilled") {
                    setCategories(tagsRes.value.map(tag => tag.name));
                }
            } catch (err) {
                setError("Eroare generală.");
            } finally {
                setTimeout(() => setLoading(false), 200); // simulate UX delay
            }
        };

        fetchData();
    }, []);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const filteredAnnouncements = selectedCategories.length
        ? announcements.filter((announcement) =>
            announcement.tags?.some((tag) =>
                selectedCategories.includes(tag.name)
            )
        )
        : announcements;

    const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);
    const indexOfLastAnnouncement = currentPage * announcementsPerPage;
    const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
    const currentAnnouncements = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // scroll will be triggered via useEffect
    };

    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row">
                {/* Title */}
                <div className="col-12">
                    <h1 className="g6">Anunțuri</h1>
                    <p className="body-regular g3">Află ultimele noutăți de interes pentru tine.</p>
                </div>

                {/* Mobile Categories */}
                <div className="col-12 d-md-none mb-3">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-wrap gap-2 mobile-category-container">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-button body-regular ${selectedCategories.includes(category) ? "active" : ""}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Announcements Section */}
                <div className="col-md-9">
                    {error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        <>
                            {/* Pagination */}
                            <div className="d-flex align-items-center">
                                <nav className="pagination-wrapper overflow-hidden" style={{ maxWidth: "100%" }}>
                                    <ul className="pagination mb-0 d-flex flex-nowrap gap-2">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className="page-item body-regular">
                                                <button
                                                    className={`custom-pagination-button ${currentPage === index + 1 ? "active" : ""}`}
                                                    onClick={() => handlePageChange(index + 1)}
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <CardAnunturi items={currentAnnouncements} />
                        </>
                    )}
                </div>

                {/* Desktop Categories */}
                <div className="col-md-3 d-none d-md-block">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-column gap-2 electric-iris-regular">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-button body-regular ${selectedCategories.includes(category) ? "active" : ""}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementsPage;
