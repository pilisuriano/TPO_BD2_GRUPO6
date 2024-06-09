import React from "react";

const Footer = () => { 
    return (
        <div className="footer">
            <div className="justify-content-center d-flex">
                <div className="card-name">
                    <img
                        style={{width: '50px', height: '50px'}}
                        alt="mastercard"
                        src="https://www.mastercard.com/content/dam/public/mastercardcom/ar/es/logos/mastercard-og-image.png"
                    />
                </div>
                <div className="card-name">
                    <img
                        style={{width: '50px', height: '50px'}}
                        alt="visa"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7UTSpkflEUsSENfxmTqxeGzCgzNxWOhINA&s"
                    />
                </div>
                <div className="card-name">
                    <img
                        style={{width: '60px', height: '50px'}}
                        alt="american express"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H5wB7Osnm_7IDfCwUXaiSKLpZe8AEV8iuA&s"
                    />
                </div>
                <div className="card-name">
                    <img
                        style={{width: '60px', height: '50px'}}
                        alt="paypal"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY_-nVZTe75H_73gtzXpBmVb6P1ey1M26Sw&s"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;