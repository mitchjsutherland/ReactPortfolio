import React from 'react'
import PortfolioProfile from './assets/ProfilePic2.png'
import { Link } from 'react-router-dom';

function Homepage() {

    return (
        <>
            <main className="mainhome">

                <div className="row align-items-center justify-content-center text-center" id="new-mainbody">
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-mainprojects">
                        <Link to = "/projects"><h4 className= "home-action">PROJECTS</h4></Link>
                    </div>
                    <div className="col-sm-11 col-md-6" id="new-mainprofile">
                        <img src={PortfolioProfile} className="profile-pic" id="profile-picid"></img>
                    </div>
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-maincontact">
                        <Link to="/contact"><h4 className= "home-action">CONTACT</h4></Link>
                    </div>
                </div>

            </main>
        </>
    ) 
};

export default Homepage;