import React from 'react';
import './SefiOficii.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import persoana from "../../assets/persoana.png";
import SefiOficiiCard from "../../components/SefiOficiiCard";

// Export the data structure
export const sefiOficii = [
    {
        avatar: persoana,
        name: "Conf.univ.dr.arh. Mirela SZITAR",
        faculty: "Facultatea de Arhitectură",
        phone: "0712 345 671",
        email: "mirela.szitar@upt.ro",
    },
    {
        avatar: persoana,
        name: "Prof.dr.ing. John Doe",
        faculty: "Facultatea de Inginerie",
        phone: "0723 456 789",
        email: "john.doe@upt.ro",
    },
    {
        avatar: persoana,
        name: "Dr.ing. Jane Smith",
        faculty: "Facultatea de Automatică",
        phone: "0734 567 890",
        email: "jane.smith@upt.ro",
    },
    {
        avatar: persoana,
        name: "Conf.univ.dr.arh. Mirela SZITAR",
        faculty: "Facultatea de Arhitectură",
        phone: "0712 345 671",
        email: "mirela.szitar@upt.ro",
    },
    {
        avatar: persoana,
        name: "Prof.dr.ing. John Doe",
        faculty: "Facultatea de Inginerie",
        phone: "0723 456 789",
        email: "john.doe@upt.ro",
    },
    {
        avatar: persoana,
        name: "Dr.ing. Jane Smith",
        faculty: "Facultatea de Automatică",
        phone: "0734 567 890",
        email: "jane.smith@upt.ro",
    },
    {
        avatar: persoana,
        name: "Conf.univ.dr.arh. Mirela SZITAR",
        faculty: "Facultatea de Arhitectură",
        phone: "0712 345 671",
        email: "mirela.szitar@upt.ro",
    },
    {
        avatar: persoana,
        name: "Prof.dr.ing. John Doe",
        faculty: "Facultatea de Inginerie",
        phone: "0723 456 789",
        email: "john.doe@upt.ro",
    },
    {
        avatar: persoana,
        name: "Dr.ing. Jane Smith",
        faculty: "Facultatea de Automatică",
        phone: "0734 567 890",
        email: "jane.smith@upt.ro",
    },
];

const SefiOficii = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {/* Main Content */}
                <div className="col-lg-12">
                    <h1 className="g6 h5">Şefii Oficiilor de Consiliere a Studenţilor din fiecare facultate</h1>
                    <p className="body-regular g3">Ce face un șef de oficii? Află care sunt atribuțiile lor aici.</p>
                    <div className="row">
                        {sefiOficii.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                                <SefiOficiiCard sefOficiu={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SefiOficii;
