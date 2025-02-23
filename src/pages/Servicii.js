import React from "react";
import "./Servicii.css"
import "bootstrap/dist/css/bootstrap.min.css";
import star from '../assets/star.svg';
import square from '../assets/square.svg';
import triangle from '../assets/triangle.svg';

const ServicesPage = () => {
    return (
        <div className="container py-5">
            <div className="h1 g6">
                <h1>Servicii CCOC</h1>
                <p className="g3 body-regular">Descoperă serviciile de personal CCOC. Află de serviciile de voluntariat în:</p>
            </div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="row align-items-stretch" style={{ height: "100%", borderRadius: "20px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                        <div
                            className="col-md-4"
                            style={{
                                position: "relative",
                                backgroundColor: "var(--coral-blaze-focused)",
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                height: "100%", // Ensure the background fills the entire row
                                width: "25%",
                                overflow: "hidden", // Ensures the image stays within the rounded corners
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${star})`, // Replace with your SVG file path
                                    backgroundSize: "cover", // Ensures the image covers the entire background
                                    backgroundPosition: "center", // Centers the image
                                    borderTopLeftRadius: "15px", // Match the parent div's corners
                                    borderBottomLeftRadius: "15px", // Match the parent div's corners
                                }}
                            ></div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                            <div style={{ marginTop: "25px" }}>
                                <h3 className="g6 h3">Consiliere psihologică</h3>
                                <p className="body-regular g6">
                                    Oferim suport psihologic pentru cei aflați care se confruntă cu anxietate, stres sau traume,
                                    ajutându-i să-și regăsească echilibrul și bunăstarea emoțională.
                                </p>
                                <a
                                    style={{ marginTop: "70px" }}
                                    href="/servicii/formular"
                                    className="custom-button h5-regular"
                                >
                                    Fă o programare!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row align-items-stretch" style={{ height: "100%", borderRadius: "15px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                        <div
                            className="col-md-4"
                            style={{
                                position: "relative", // Allows layering
                                backgroundColor: "var(--lemon-zest-focused)",
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                height: "100%", // Ensure the background fills the entire row
                                width: "25%",
                                overflow: "hidden", // Ensures the image stays within the rounded corners
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${square})`, // Replace with your SVG file path
                                    backgroundSize: "cover", // Ensures the image covers the entire background
                                    backgroundPosition: "center", // Centers the image
                                    borderTopLeftRadius: "15px", // Match the parent div's corners
                                    borderBottomLeftRadius: "15px", // Match the parent div's corners
                                }}
                            ></div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-between" style={{ height: "100%", borderRadius: "15px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                            <div style={{ marginTop: "25px" }}>
                                <h3 className="g6 h3">Consiliere psihologică</h3>
                                <p className="body-regular g6">
                                    Oferim suport psihologic pentru cei aflați care se confruntă cu anxietate, stres sau traume,
                                    ajutându-i să-și regăsească echilibrul și bunăstarea emoțională.
                                </p>
                                <a
                                    style={{ marginTop: "90px" }}
                                    href="#"
                                    className="custom-button h5-regular"
                                >
                                    Fă o programare!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row align-items-stretch" style={{ height: "100%", borderRadius: "15px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                        <div
                            className="col-md-4"
                            style={{
                                position: "relative", // Allows layering
                                backgroundColor: "var(--ruby-blush-focused)",
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                height: "100%", // Ensure the background fills the entire row
                                width: "25%",
                                overflow: "hidden", // Ensures the image stays within the rounded corners
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${triangle})`, // Replace with your SVG file path
                                    backgroundSize: "cover", // Ensures the image covers the entire background
                                    backgroundPosition: "center", // Centers the image
                                    borderTopLeftRadius: "15px", // Match the parent div's corners
                                    borderBottomLeftRadius: "15px", // Match the parent div's corners
                                }}
                            ></div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-between" style={{ height: "100%", borderRadius: "15px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                            <div style={{ marginTop: "25px" }}>
                                <h3 className="g6 h3">Consiliere psihologică</h3>
                                <p className="body-regular g6">
                                    Oferim suport psihologic pentru cei aflați care se confruntă cu anxietate, stres sau traume,
                                    ajutându-i să-și regăsească echilibrul și bunăstarea emoțională.
                                </p>
                                <a
                                    style={{ marginTop: "90px" }}
                                    href="#"
                                    className="custom-button h5-regular"
                                >
                                    Fă o programare!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row align-items-stretch" style={{ height: "100%", borderRadius: "15px", marginRight: "3px", backgroundColor: "#F5F5F5" }}>
                        <div
                            className="col-md-4"
                            style={{
                                position: "relative", // Allows layering
                                backgroundColor: "#2E3192",
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                height: "100%", // Ensure the background fills the entire row
                                width: "25%",
                                overflow: "hidden", // Ensures the image stays within the rounded corners
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${star})`, // Replace with your SVG file path
                                    backgroundSize: "cover", // Ensures the image covers the entire background
                                    backgroundPosition: "center", // Centers the image
                                    borderTopLeftRadius: "15px", // Match the parent div's corners
                                    borderBottomLeftRadius: "15px", // Match the parent div's corners
                                }}
                            ></div>
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                            <div style={{ marginTop: "25px" }}>
                                <h3 className="g6 h3">Consiliere psihologică</h3>
                                <p className="body-regular g6">
                                    Oferim suport psihologic pentru cei aflați care se confruntă cu anxietate, stres sau traume,
                                    ajutându-i să-și regăsească echilibrul și bunăstarea emoțională.
                                </p>
                                <a
                                    style={{ marginTop: "90px" }}
                                    href="#"
                                    className="custom-button h5-regular"
                                >
                                    Fă o programare!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
