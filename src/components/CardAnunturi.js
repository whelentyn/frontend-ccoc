import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardAnunturi.css";
import he from "he";
import { formatDate } from "../utils";
import {DOMAIN} from "../api";


const CardAnunturi = ({ items }) => {
    const navigate = useNavigate(); // Use React Router's useNavigate


    return (
        <div className="d-flex flex-column gap-1 card-anunturi-wrapper">
            {items.map((item) => {
                const decodedContent = he.decode(item.content);// Randomly assign a category
                return (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/anunturi/${item.slug}`, { state: { item } })}
                        className="card-anunturi-link"
                        style={{ cursor: "pointer" }}
                    >
                        <div className="card" style={{ border: "none", background: "none", boxShadow: "none" }}>
                            <div className="card-body d-md-flex align-items-start flex-column flex-md-row">
                                {/* Icon/Image */}
                                <img
                                    className="card-anunturi-image"
                                    src={`${DOMAIN}${item.image}`}
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
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        {/* Tags container: will wrap tags if needed */}
                                        <div className="d-flex flex-wrap gap-2">
                                            {item.tags.map((tag, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        backgroundColor: tag.hexColor,
                                                        color: "#fff",
                                                        padding: "4px 12px",
                                                        borderRadius: "12px",
                                                        fontSize: "12px",
                                                        fontWeight: "bold",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    <span className="body-regular">{tag.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Date: always stays in the top right */}
                                        <div className="body-regular g5" style={{ whiteSpace: "nowrap", paddingTop: "5px" }}>
                                            {formatDate(item.publishDate)}
                                        </div>
                                    </div>


                                    {/* Title */}
                                    <h3
                                        className="g6"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            WebkitLineClamp: 2, // Limit to 2 lines
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
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
                                        dangerouslySetInnerHTML={{ __html: decodedContent }}
                                    />
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