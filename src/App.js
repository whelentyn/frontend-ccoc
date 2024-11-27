import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/lexend";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Servicii from "./pages/Servicii";
import Voluntariat from "./pages/Voluntariat";
import Anunturi from "./pages/Anunturi";
import Evenimente from "./pages/Evenimente";
import Contact from "./pages/Contact";
import MisiuneSiScop from "./pages/Despre/Misiune";
import Personal from "./pages/Despre/Personal";
import SefiDeOficii from "./pages/Despre/SefiOficii";
import Documente from "./pages/Despre/Documente";
import Proiecte from "./pages/Proiecte/Proiecte";
import Despre from "./pages/Despre/Despre";

const App = () => {
    return (
        <Router>
            <div>
                <div className="fixed-top" style={{ zIndex: 1030 }}>
                    <Header />
                </div>
                <div style={{ marginTop: "100px" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servicii" element={<Servicii />} />
                        <Route path="/voluntariat" element={<Voluntariat />} />
                        <Route path="/anunturi" element={<Anunturi />} />
                        <Route path="/evenimente" element={<Evenimente />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/proiecte" element={<Proiecte />} />
                        <Route path="/despre" element={<Despre />}>
                            <Route path="misiune-si-scop" element={<MisiuneSiScop />} />
                            <Route path="personal" element={<Personal />} />
                            <Route path="sefi-de-oficii" element={<SefiDeOficii />} />
                            <Route path="documente" element={<Documente />} />
                        </Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
