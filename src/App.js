import React, { useEffect } from "react";
import {
    useLocation,
    BrowserRouter as Router,
    Route,
    Routes,
    useRoutes
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
import Personal from "./pages/Despre/Personal";
import SefiDeOficii from "./pages/Despre/SefiOficii";
import Documente from "./pages/Despre/Documente";
import Despre from "./pages/Despre/Despre";
import AnunturiDetail from "./pages/Anunturi/AnunturiDetail";
import ProiectePage from "./pages/ProiectePage";
import AppointmentForm from "./pages/Formular/FormularCP";
import Proiecte from "./pages/Proiecte";
import ResursePage from "./pages/Resurse";


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <CSSTransition key={location.pathname} classNames="fade" timeout={600}>
            <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/servicii" element={<Servicii />} />
                    <Route path="/voluntariat" element={<Voluntariat />} />
                    <Route path="/anunturi" element={<Anunturi />} />
                    <Route path="/anunturi/:slug" element={<AnunturiDetail />} />
                    <Route path="/despre/misiune-si-scop" element={<Despre />} />
                    <Route path="/despre/personal" element={<Personal />} />
                    <Route path="/despre/sefi-de-oficii" element={<SefiDeOficii />} />
                    <Route path="/despre/documente" element={<Documente />} />
                    <Route path="/proiecte" element={<Proiecte />} />
                    <Route path="/proiecte/:slug" element={<ProiectePage />} />
                    <Route path="/evenimente/:slug" element={<ProiectePage />} />
                    <Route path="/servicii/formular" element={<AppointmentForm />} />
                    <Route path="/resurse" element={<ResursePage />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <div className="fixed-top" style={{ zIndex: 1030 }}>
                    <Header />
                </div>
                <div style={{ flex: "1 0 auto", marginTop: "40px" }}>
                    <AnimatedRoutes />
                </div>
                <Footer style={{ flexShrink: 0 }} />
            </div>
        </Router>
    );
};

export default App;
