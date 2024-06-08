import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="info-image">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <h5>Llamanos abiertos las 24hs</h5>
                    <p>011 4785 2541</p>
                </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
                <div className="box-info">
                    <div className="info-image">
                        <i className="fas fa-map-market-alt"></i>
                    </div>
                    <h5>Oficinas</h5>
                    <p>Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
                <div className="box info">
                    <div className="info-image">
                        <i className="fas fa-fax"></i>
                </div>
                <hd>Fax</hd>
                <p>125478 6985 7458</p>
            </div>
        </div>
    </div>
    );
};

export default ContactInfo;