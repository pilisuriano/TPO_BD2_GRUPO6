import React from "react";

const Footer = () => { 
    return (
        <div className="footer">
            <div className="justify-content-center d-flex">
                <div className="card-name">
                    <img
                        alt="mastercard"
                        src="https://res.cloudinary.com/dkzwt9sfa/image/upload/v1630566824/ecommerce/mastercard_1_jzqz9v.png"
                    />
                </div>
                <div className="card-name">
                    <img
                        alt="visa"
                        src="https://res.cloudinary.com/dkzwt9sfa/image/upload/v1630566824/ecommerce/visa_1_c7zv8o.png"
                    />
                </div>
                <div className="card-name">
                    <img
                        alt="american express"
                        src="https://res.cloudinary.com/dkzwt9sfa/image/upload/v1630566824/ecommerce/american-express_1_h5x4xh.png"
                    />
                </div>
                <div className="card-name">
                    <img
                        alt="paypal"
                        src="https://res.cloudinary.com/dkzwt9sfa/image/upload/v1630566824/ecommerce/paypal_1_zg3v3z.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;