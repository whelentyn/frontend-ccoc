import React from 'react';
import './Despre.css';

const Despre = () => {
    return (
        <div className="container py-5">
            <h1 className="text-start mb-3">Despre noi</h1>
            <p className="text-start text-muted mb-4">Lorem ipsum dolor sit amet</p>
            <div className="row align-items-start">
                {/* Left Column */}
                <div className="col-lg-8">
                    <h2 className="mb-3">Centrul de Consiliere și Orientare în Carieră (CCOC)</h2>
                    <p>
                        Centrul de Consiliere și Orientare în Carieră (CCOC) al Universității Politehnica Timișoara (UPT)
                        reprezintă o structură esențială dedicată sprijinirii studenților pe parcursul formării lor
                        academice și în procesul de tranziție către o carieră de succes. Misiunea principală a CCOC este de
                        a asigura studenților accesul la informații relevante, resurse de orientare profesională și suport
                        personalizat pentru integrarea cât mai eficientă pe piața muncii și în societate.
                    </p>
                    <p>
                        Prin intermediul serviciilor oferite, CCOC își propune să contribuie la dezvoltarea competențelor
                        și abilităților necesare pentru o carieră competitivă, adaptată fiecărei persoane. Activități
                        individuale, workshopuri tematice și activități practice care să ajute studenții în identificarea
                        intereselor și aptitudinilor lor. De asemenea, centrul colaborează activ cu angajatorii pentru a
                        facilita accesul la stagii de practică, internshipuri și locuri de muncă.
                    </p>
                    <p>
                        CCOC se concentrează și pe integrarea socială a studenților, sprijinindu-i în depășirea provocărilor
                        legate de adaptarea la viața universitară, precum și în dezvoltarea unei atitudini proactive față
                        de învățare și carieră. Printr-o gamă variată de activități, CCOC urmărește să creeze o punte
                        solidă între mediul academic și cel profesional.
                    </p>

                    <h3 className="mt-4">Servicii oferite de CCOC</h3>
                    <ul>
                        <li>Informarea studenților și a absolvenților prin căile de comunicare ale CCOC</li>
                        <li>Consiliere studenților în diverse probleme</li>
                        <li>Consiliere psihologică</li>
                        <li>Evaluare aptitudinală</li>
                        <li>Traininguri</li>
                        <li>Seminarii</li>
                        <li>Workshopuri</li>
                        <li>Identificarea de oportunități pentru studenți și absolvenți UPT</li>
                        <li>Prezentări de companii</li>
                        <li>Zilele Carierei</li>
                        <li>Vizite în companii</li>
                        <li>Promovarea ofertei educaționale a UPT</li>
                        <li>Generarea de diverse materiale suport pentru studenți</li>
                        <li>Gestionarea unor programe precum: Euro 200, tabere studențești, burse sociale speciale</li>
                    </ul>
                </div>

                {/* Right Column with Triangle */}
                <div className="col-lg-4 d-flex justify-content-end">
                    <div className="triangle-container">
                        <div className="triangle green-triangle"></div>
                        <div className="triangle yellow-triangle"></div>
                        <div className="triangle light-green-triangle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Despre;
