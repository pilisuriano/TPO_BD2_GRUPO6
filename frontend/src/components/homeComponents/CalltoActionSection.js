import React from "react";

const CalltoActionSection = () => {
    return (
        <div className="suscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="suscribe-head">
                            <h2>Do you need more tips?</h2>
                            <p>Sign up free and get the latest tips.</p>
                            <form className="form-section">
                                <input placeholder="Your Email..." name="email" type="email" />
                                <input value="Yes I want to!" name="suscribe" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalltoActionSection;