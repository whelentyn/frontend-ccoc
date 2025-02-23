import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardAnunturi.css";

const CardAnunturi = ({ items }) => {
    const navigate = useNavigate(); // Use React Router's useNavigate

    // Define categories and their corresponding colors
    const categories = [
        { name: "Evenimente", color: "#5D5FEF" }, // Electric Iris
        { name: "Resurse pentru studenți", color: "#E78147" }, // Coral Blaze
        { name: "Oportunități", color: "#BAE313" }, // Lemon Zest
        { name: "Prezentare", color: "#E74764" }, // Ruby Blush
        { name: "Voluntariat", color: "#2C2FD5" }, // Electric Iris Focused
    ];

    // Helper function to randomly assign a category
    const assignCategory = () => categories[Math.floor(Math.random() * categories.length)];

    return (
        <div className="d-flex flex-column gap-1 card-anunturi-wrapper">
            {items.map((item) => {
                const category = assignCategory(); // Randomly assign a category
                return (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/anunturi/${item.id}`, { state: { item } })} // Navigate to detail page
                        className="card-anunturi-link"
                        style={{ cursor: "pointer" }} // Add pointer cursor for better UX
                    >
                        <div className="card" style={{ border: "none", background: "none", boxShadow: "none" }}>
                            <div className="card-body d-md-flex align-items-start flex-column flex-md-row">
                                {/* Icon/Image */}
                                <img
                                    className="card-anunturi-image"
                                    src={item.image}
                                    alt="Anunturi logo"
                                />
                                {/* Content */}
                                <div
                                    className="text-content"
                                    style={{
                                        marginLeft: "12px",
                                        wordWrap: "break-word",
                                        wordBreak: "break-word",
                                        marginTop: "10px", // Space between image and text on mobile
                                        textAlign: "left", // Align text to left
                                    }}
                                >
                                    {/* Category and Date */}
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <div
                                            style={{
                                                backgroundColor: category.color,
                                                color: "white",
                                                padding: "4px 12px",
                                                borderRadius: "12px",
                                                fontSize: "12px",
                                                fontWeight: "bold",
                                                display: "inline-block",
                                            }}
                                        >
                                            <span className="body-regular">{category.name}</span>
                                        </div>
                                        <div className="body-regular g5">{item.date}</div>
                                    </div>
                                    {/* Title */}
                                    <div
                                        className="h3 g6"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            WebkitLineClamp: 2, // Limit to 2 lines
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    {/* Description with Reduced Line Height */}
                                    <div
                                        className="body-regular g5"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            WebkitLineClamp: 3, // Limit to 3 lines
                                            textOverflow: "ellipsis",
                                            lineHeight: "1.2", // Reduced line height
                                        }}
                                    >
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardAnunturi;