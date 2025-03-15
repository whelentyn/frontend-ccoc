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
    const paginationRef = useRef(null);

    useEffect(() => {
        document.body.addEventListener("touchstart", () => {}, { passive: true });
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const tags = await getTags();
                setCategories(tags.map(tag => tag.name)); // Extract only the category names
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };

        const fetchData = async () => {
            try {
                const articles = await getArticles();
                setAnnouncements(articles);
            } catch (error) {
                console.error("Error fetching articles:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
        fetchData();
    }, []);

    const filteredAnnouncements = selectedCategories.length
        ? announcements.filter(
            (announcement) =>
                announcement.tags?.some((tag) => selectedCategories.includes(tag.name)) // Use "tags" instead of "categories"
        )
        : announcements;


    const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);
    const indexOfLastAnnouncement = currentPage * announcementsPerPage;
    const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
    const currentAnnouncements = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((c) => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });

        // Always reset to first page after filtering
        setCurrentPage(1);
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Title should always be at the top */}
                <div className="col-12">
                    <h1 className="g6 h1">Anunțuri</h1>
                    <p className="body-regular g3">Află ultimele noutăți de interes pentru tine.</p>
                </div>

                {/* Categories on mobile (move to top, but below the title) */}
                <div className="col-12 d-md-none mb-3">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-wrap gap-2 mobile-category-container">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-button body-regular ${
                                    selectedCategories.includes(category) ? "active" : ""
                                }`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Announcements Section */}
                <div className="col-md-9">
                    {loading ? (
                        <p>Loading announcements...</p>
                    ) : error ? (
                        <p className="text-danger">Error: {error}</p>
                    ) : (
                        <>
                            <div className="d-flex align-items-center">
                                <nav className="pagination-wrapper overflow-hidden" style={{ maxWidth: "100%" }}>
                                    <ul className="pagination mb-0 d-flex flex-nowrap gap-2" ref={paginationRef}>
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className="page-item body-regular">
                                                <button
                                                    className={`custom-pagination-button ${
                                                        currentPage === index + 1 ? "active" : ""
                                                    }`}
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

                {/* Categories on Desktop (keep on right) */}
                <div className="col-md-3 d-none d-md-block">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-column gap-2 electric-iris-regular">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-button body-regular ${
                                    selectedCategories.includes(category) ? "active" : ""
                                }`}
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