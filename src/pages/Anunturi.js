import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardAnunturi from "../components/CardAnunturi";
import anunturiImage from "../assets/anunturi.svg"; // Example image
import './Anunturi.css'

const AnnouncementsPage = () => {
    const announcements = Array(20).fill(null).map((_, index) => ({
        date: `12 iulie 202${index % 10}`,
        title: `Announcement Title ${index + 1}`,
        description: `Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Description for Announcement ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        image: anunturiImage,
    }));

    const categories = [
        "Evenimente",
        "Resurse pentru studenți",
        "Oportunități",
        "Prezentare",
        "Voluntariat",
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const announcementsPerPage = 6;

    // Calculate the announcements to display for the current page
    const indexOfLastAnnouncement = currentPage * announcementsPerPage;
    const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
    const currentAnnouncements = announcements.slice(
        indexOfFirstAnnouncement,
        indexOfLastAnnouncement
    );

    // Calculate total pages
    const totalPages = Math.ceil(announcements.length / announcementsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container py-5">
            <div className="row">
                {/* Left Column: Announcements */}
                <div className="col-md-9">

                    {/* Title and Subtitle */}
                    <h1 className="g6 h1">Anunțuri</h1>
                    <p className="body-regular g3">Află ultimele noutăți de interes pentru tine.</p>
                    <div className="d-flex">
                        {/* Pagination Controls */}
                        <nav className="pagination-wrapper">
                            <ul className="pagination mb-0 d-flex flex-wrap gap-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index} className="page-item">
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
                </div>

                <div className="col-md-3">
                    <h5 className="h5 g6">Caută după categorii</h5>
                    <div className="d-flex flex-column gap-2 electric-iris-regular">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="filter-button body-regular"
                                style={{ borderRadius: "25px", textAlign: "left" }}
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
