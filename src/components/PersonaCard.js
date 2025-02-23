import React, { useState } from 'react';
import "./PersonaCard.css";
import { Modal } from 'react-bootstrap';

const PersonaCard = ({ person, categories }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div
                className="card card-persona h-100 d-flex flex-row align-items-center"
                onClick={handleShowModal}
                style={{ cursor: 'pointer' }}
            >
                {/* Left: Image */}
                <img
                    src={person.avatar}
                    alt={person.name}
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
                    {/* Badges */}
                    <div className="mt-2 mb-2">
                        {person.badges.map((badge, badgeIndex) => {
                            const badgeCategory = categories.find(
                                (cat) => cat.name === badge
                            );
                            return (
                                <span
                                    className="badge text-white mt-1 me-1 body-regular"
                                    key={badgeIndex}
                                    style={{
                                        backgroundColor: `var(${badgeCategory?.color})`,
                                    }}
                                >
                                    {badge}
                                </span>
                            );
                        })}
                    </div>
                    {/* Name */}
                    <div className="h6 g6">{person.name}</div>
                    {/* Location */}
                    <div className="body-regular g4">
                        <i className="bi bi-geo-alt me-2"></i>
                        {person.location}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered className="rounded-modal">
                <Modal.Header closeButton className="modal-header-custom">
                    <Modal.Title>{person.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-custom">
                    <div className="text-center">
                        <img
                            src={person.avatar}
                            alt={person.name}
                            className="rounded-circle mb-3"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    {/* Badges */}
                    <div className="text-center mb-3">
                        {person.badges.map((badge, badgeIndex) => {
                            const badgeCategory = categories.find(
                                (cat) => cat.name === badge
                            );
                            return (
                                <span
                                    className="badge text-white mt-1 me-1 body-regular"
                                    key={badgeIndex}
                                    style={{
                                        backgroundColor: `var(${badgeCategory?.color})`,
                                    }}
                                >
                                    {badge}
                                </span>
                            );
                        })}
                    </div>
                    <div>
                        {/* Location */}
                        <p className="body-regular g4">
                            <i className="bi bi-geo-alt me-2"></i>
                            {person.location}
                        </p>
                        {/* Phone */}
                        <p className="body-regular g4">
                            <i className="bi bi-telephone me-2"></i>
                            {person.phone}
                        </p>
                        {/* Email */}
                        <p className="body-regular g4">
                            <i className="bi bi-envelope me-2"></i>
                            <a
                                href={`mailto:${person.email}`}
                                className="text-decoration-none"
                            >
                                {person.email}
                            </a>
                        </p>
                        {/* Description as InnerHTML */}
                        <div
                            className="body-regular g4"
                            dangerouslySetInnerHTML={{ __html: person.description }}
                        ></div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PersonaCard;
