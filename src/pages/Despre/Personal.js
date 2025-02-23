import React, { useState } from 'react';
import './Personal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import persoana from "../../assets/persoana.png";
import PersonaCard from '../../components/PersonaCard';

const Personal = () => {
    const categories = [
        { name: 'Coordonare', color: '--electric-iris-regular' },
        { name: 'Consiliere psihologică', color: '--coral-blaze-regular' },
        { name: 'Consiliere în carieră', color: '--lemon-zest-regular' },
        { name: 'Evaluarea aptitudinală', color: '--ruby-blush-regular' },
        { name: 'Voluntariat', color: '--electric-iris-regular' },
        { name: 'Comunicare', color: '--coral-blaze-regular' },
    ];

    const staff = [
        {
            name: 'Loredana Mihaela STANCIU',
            role: 'Director',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'loredana.stanciu@upt.ro',
            avatar: persoana,
            description: 'This individual is an accomplished professional known for their dedication and expertise in their field. With a passion for innovation and a strong commitment to excellence, they consistently deliver outstanding results.',
            badges: ['Coordonare', 'Comunicare', 'Consiliere psihologică', 'Voluntariat', 'Consiliere în carieră'],
        },
        {
            name: 'Andreea Raluca FENICI',
            role: 'Psiholog',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'andreea.fenici@upt.ro',
            avatar: persoana,
            badges: ['Consiliere psihologică'],
        },
        {
            name: 'Cristina HĂLBAC COTOARĂ ZAMFIR',
            role: 'Psiholog',
            location: 'BCUPT - Timișoara, Bd. Vasile Pârvan, nr. 2B, sala 4001',
            phone: '0723 545 671',
            email: 'cristina.halbac@upt.ro',
            avatar: persoana,
            badges: ['Consiliere în carieră', 'Evaluarea aptitudinală'],
        },
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category.name)
                ? prevSelected.filter((name) => name !== category.name) // Remove category if already selected
                : [...prevSelected, category.name] // Add category if not selected
        );
    };

    const filteredStaff =
        selectedCategories.length > 0
            ? staff.filter((person) =>
                person.badges.some((badge) =>
                    selectedCategories.includes(badge)
                )
            )
            : staff;

    return (
        <div className="container py-5">
            <div className="row">
                {/* Left Sidebar */}
                <div style={{ marginTop: '13px' }} className="col-lg-2 col-md-4 mb-4">
                    <div className="d-flex flex-column gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}
                                className={`body-regular filter-button-personal ${
                                    selectedCategories.includes(category.name) ? 'active' : ''
                                }`}
                                style={{
                                    textAlign: 'left',
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-lg-9 col-md-8">
                    <h1 className="g6 h5">Personal angajat</h1>
                    <p className="body-regular g3">Descoperă cine formează echipa CCOC.</p>
                    <div className="row">
                        {filteredStaff.map((person, index) => (
                            <div className="col-lg-6 col-md-12 mb-4" key={index}>
                                <PersonaCard person={person} categories={categories} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
