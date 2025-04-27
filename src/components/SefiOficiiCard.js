import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SefiOficiiCard.css';

const SefiOficiiCard = ({ sefOficiu }) => {
    return (
        <div className="card card-persona-sef h-100 d-flex flex-row align-items-center">
            {/* Left: Image */}
            <img
                src={sefOficiu.avatar}
                alt={sefOficiu.name}
                className="rounded-circle"
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    margin: '16px',
                }}
            />
            {/* Right: Content */}
            <div className="card-body">
                {/* Name */}
                <div className="h6 g6">{sefOficiu.name}</div>
                {/* Faculty */}
                <div className="body-regular g4">
                    <i className="bi bi-building me-2"></i>
                    {sefOficiu.faculty}
                </div>
                {/* Phone */}
                <div className="body-regular g4">
                    <i className="bi bi-telephone me-2"></i>
                    {sefOficiu.phone}
                </div>
                {/* Email */}
                <div className="body-regular g4">
                    <i className="bi bi-envelope me-2"></i>
                    <a
                        href={`mailto:${sefOficiu.email}`}
                        className="text-decoration-none"
                    >
                        {sefOficiu.email}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SefiOficiiCard;
