import React  from "react";
import "./LandingPage.style.scss";

const LandingPage = () => (
    <div className="landingpage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WALLETS</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">ACCESSORIES</h1>
                    <span className="subtitle">BUY NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default LandingPage;