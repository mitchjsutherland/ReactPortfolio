import React from 'react'


function Contact() {
    return (
        <div className=" maincontact">
            <div className="d-flex align-items-center justify-content-center text-center contactbody">
                <div className="row col-8 align-items-center justify-content-center text-center contact-buttons">
                    <div className="col">
                        <h5>EMAIL</h5>
                    </div>
                    <div className="col">
                        <h5>TECHNICAL CV</h5>
                    </div>
                    <div className="col">
                        <h5>GITHUB</h5>
                    </div>
                    <div className="col">
                        <h5>LINKEDIN</h5>
                    </div>
                </div>
                <div className="row disclaimer">
                   This portfolio is far from the finished masterpiece that I will be conjuring. Please also mind your head as random elements currently may fly in unexpected directions.
                </div>

            </div>

        </div>
    )
};

export default Contact;

