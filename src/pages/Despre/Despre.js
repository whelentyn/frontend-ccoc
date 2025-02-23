import React from "react";
import "./Despre.css";

const Despre = ({
                    title = "Despre noi",
                    subtitle = "Cunoaște mai bine activitatea și serviciile noastre",
                    content = `
        <h3>Centrul de Consiliere și Orientare în Carieră (CCOC)</h3>
        <p>
            CCOC al Universității Politehnica Timișoara (UPT) reprezintă o structură esențială dedicată sprijinirii 
            studenților în tranziția lor către o carieră de succes.
        </p>
        <p>
            Misiunea principală este de a oferi acces la informații relevante, resurse de orientare profesională 
            și suport personalizat pentru integrarea pe piața muncii.
        </p>
        <h3>Servicii oferite de CCOC</h3>
        <ul>
            <li><strong>Consiliere</strong> în diverse probleme</li>
            <li><strong>Evaluare aptitudinală</strong> și ghidare în carieră</li>
            <li><strong>Traininguri</strong> și workshopuri</li>
            <li><strong>Prezentări de companii</strong> și evenimente de carieră</li>
            <li><strong>Oportunități</strong> de stagii și locuri de muncă</li>
        </ul>
        <p>
            CCOC colaborează cu angajatorii pentru a facilita accesul la oportunități profesionale pentru studenți 
            și absolvenți UPT.
        </p>
    `,
                    imageUrl = "https://via.placeholder.com/300x200"
                }) => {
    return (
        <div className="container py-5">
            <div className="section-header">
                <h1 className="h1 g6" dangerouslySetInnerHTML={{ __html: title }}></h1>
                <p className="g3 body-regular" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            </div>
            <div className="row align-items-start">
                {/* Left Column - Dynamic Content */}
                <div className="col-lg-8">
                    <div
                        className="body-regular g4 rich-text-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>

                {/* Right Column - Image and Design Elements */}
                <div className="col-lg-4 d-flex flex-column align-items-end">
                    {imageUrl && (
                        <div className="image-container">
                            <img src={imageUrl} alt="CCOC" className="responsive-image" />
                        </div>
                    )}
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
