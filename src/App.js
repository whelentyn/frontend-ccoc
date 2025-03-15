import React, { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/lexend";
import "./App.css";
import HomePage from "./pages/HomePage";
import Servicii from "./pages/Servicii";
import Voluntariat from "./pages/Voluntariat";
import Anunturi from "./pages/Anunturi/Anunturi";
import Evenimente from "./pages/Evenimente";
import Contact from "./pages/Contact";
import MisiuneSiScop from "./pages/Despre/Misiune";
import Personal from "./pages/Despre/Personal";
import SefiDeOficii from "./pages/Despre/SefiOficii";
import Documente from "./pages/Despre/Documente";
import Proiecte from "./pages/Proiecte";
import Despre from "./pages/Despre/Despre";
import AnunturiDetail from "./pages/Anunturi/AnunturiDetail";
import ProiectePage from "./pages/ProiectePage";
import AppointmentForm from "./pages/Formular/FormularCP";
import { getArticles } from "./api/articles";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollToTop /> {/* Scrolls to top on route change */}
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <div className="fixed-top" style={{ zIndex: 1030 }}>
                    <Header />
                </div>
                <div style={{ flex: "1 0 auto", marginTop: "40px" }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/servicii" element={<Servicii />} />
                        <Route path="/voluntariat" element={<Voluntariat />} />
                        <Route path="/anunturi" element={<Anunturi />} />
                        <Route path="/anunturi/:slug" element={<AnunturiDetail />} />
                        <Route path="/evenimente" element={<Evenimente />} />
                        <Route path="/proiecte" element={<Proiecte />} />
                        <Route path="/despre/misiune-si-scop" element={<Despre />} />
                        <Route path="/despre/personal" element={<Personal />} />
                        <Route path="/despre/sefi-de-oficii" element={<SefiDeOficii />} />
                        <Route path="/despre/documente" element={<Documente />} />
                        <Route path="/proiecte/:projectId" element={<ProiectePage />} />
                        <Route path="/servicii/formular" element={<AppointmentForm />} />
                    </Routes>
                </div>
                <Footer style={{ flexShrink: 0 }} />
            </div>
        </Router>
    );
};

export default App;
