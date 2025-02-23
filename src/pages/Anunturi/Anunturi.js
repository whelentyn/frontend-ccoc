import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import CardAnunturi from "../../components/CardAnunturi";
import anunturiImage from "../../assets/anunturi.svg";
import "./Anunturi.css";

const AnnouncementsPage = () => {
    const announcements = Array(20).fill(null).map((_, index) => ({
        id: uuidv4(),
        date: `12 iulie 202${index % 10}`,
        title: `Announcement Title ${index + 1}`,
        description: `Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        image: anunturiImage,
    }));

    const categories = [
        "Evenimente",
        "Resurse pentru studenți",
        "Oportunități",
        "Prezentare",
        "Voluntariat",
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const announcementsPerPage = 6;

    const totalPages = Math.ceil(announcements.length / announcementsPerPage);
    const paginationRef = useRef(null);

    const indexOfLastAnnouncement = currentPage * announcementsPerPage;
    const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
    const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((c) => c !== category)
                : [...prevCategories, category]
        );
        setCurrentPage(1);
    };

    // Scroll left/right in pagination
    const scrollPagination = (direction) => {
        if (paginationRef.current) {
            const scrollAmount = 150; // Adjust scroll step if necessary
            paginationRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="g6 h1">Anunțuri</h1>
                    <p className="body-regular g3">Află ultimele noutăți de interes pentru tine.</p>

                    {/* Pagination with Scrolling */}
                    <div className="d-flex align-items-center">
                        {totalPages > 20 && (
                            <button
                                className="scroll-button"
                                onClick={() => scrollPagination("left")}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "var(--electric-iris-regular)",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    marginRight: "5px",
                                }}
                            >
                                &#9665;
                            </button>
                        )}

                        <nav className="pagination-wrapper overflow-hidden" style={{ maxWidth: "100%" }}>
                            <ul
                                className="pagination mb-0 d-flex flex-nowrap gap-2"
                                ref={paginationRef}
                                style={{
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                            >
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

                        {totalPages > 20 && (
                            <button
                                className="scroll-button"
                                onClick={() => scrollPagination("right")}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "var(--electric-iris-regular)",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    marginLeft: "5px",
                                }}
                            >
                                &#9655;
                            </button>
                        )}
                    </div>

                    <CardAnunturi items={currentAnnouncements} />
                </div>

                <div className="col-md-3">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-column gap-2 electric-iris-regular">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`filter-button body-regular ${
                                    selectedCategories.includes(category) ? "active" : ""
                                }`}
                                style={{
                                    borderRadius: "25px",
                                    textAlign: "left",
                                }}
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
