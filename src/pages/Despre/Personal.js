import React from 'react';
import './Personal.css';

const Personal = () => {
    const staff = [
        {
            name: 'Loredana Mihaela STANCIU',
            role: 'Director',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'loredana.stanciu@upt.ro',
            avatar: 'path/to/avatar1.jpg',
            badges: ['Director'],
        },
        {
            name: 'Andreea Raluca FENICI',
            role: 'Psiholog',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'andreea.fenici@upt.ro',
            avatar: 'path/to/avatar2.jpg',
            badges: ['Psiholog'],
        },
        {
            name: 'Cristina HĂLBAC COTOARĂ ZAMFIR',
            role: 'Psiholog',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'cristina.halbac@upt.ro',
            avatar: 'path/to/avatar3.jpg',
            badges: ['Psiholog'],
        },
        // Add more staff data here...
    ];

    return (
        <div className="container py-5">
            <h1 className="mb-4">Personal angajat</h1>
            <p className="mb-5">Descoperă cine formează echipa CCOC.</p>
            <div className="row">
                {staff.map((person, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <img
                                    src={person.avatar}
                                    alt={person.name}
                                    className="rounded-circle mb-3"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                                <h5 className="card-title">{person.name}</h5>
                                <p className="text-muted">{person.role}</p>
                                <div className="mb-2">
                                    {person.badges.map((badge, badgeIndex) => (
                                        <span
                                            className="badge bg-primary text-white me-1"
                                            key={badgeIndex}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <p className="small text-muted">{person.location}</p>
                                <p className="small">
                                    <i className="bi bi-telephone me-2"></i>{person.phone}
                                </p>
                                <p className="small">
                                    <i className="bi bi-envelope me-2"></i>
                                    <a href={`mailto:${person.email}`} className="text-decoration-none">
                                        {person.email}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personal;
