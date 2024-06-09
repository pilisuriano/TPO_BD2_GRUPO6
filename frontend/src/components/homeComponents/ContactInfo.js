import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container" style={{marginTop:'-100px'}}>
            <div className="row">
                <div className="col-12 contact-Box">
                    <div className="info-image">
                        <i className="fas fa-phone-alt" style={{marginLeft: '13px',marginTop:'10px'}}></i>
                    </div>
                    <h5 style={{marginLeft: '10px'}}>¡Llamanos! Abiertos las 24hs: </h5>
                    <div style={{marginLeft: '10px'}}>
                        <p >011 4785 2541</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 contact-Box">
                    <div className="info-image">
                        <i className="fas fa-map-marker-alt" style={{marginLeft: '15px',marginTop:'11px'}}></i>
                    </div>
                    <h5 style={{marginLeft: '10px'}}>Oficinas en: </h5>
                    <div style={{marginLeft: '10px'}}>
                        <p >Buenos Aires, Argentina</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;