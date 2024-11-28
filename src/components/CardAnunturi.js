import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardAnunturi = ({ items }) => {
    return (
        <div className="d-flex flex-column gap-1">
            {items.map((item, index) => (
                <div key={index} className="card" style={{ border: "none" }}>
                    <div style={{paddingLeft: "0px"}} className="card-body d-flex align-items-center">
                        {/* Icon/Image */}
                        <img
                            style={{ height: "100%x", width: "40%", objectFit: "cover", borderRadius: "8px" }}
                            src={item.image}
                            alt="Anunturi logo"
                        />
                        {/* Content */}
                        <div
                            style={{
                                marginLeft: "12px",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                            }}
                        >
                            <div className="body-regular g5">{item.date}</div>
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
                            <div
                                className="body-regular g5"
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    WebkitLineClamp: 4, // Limit to 4 lines
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardAnunturi;
