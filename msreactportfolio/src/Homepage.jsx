import PortfolioProfile from './assets/ProfilePic2.png'

function Homepage() {

    return (
        <>
            <main className="mainhome">

                <div className="row align-items-center justify-content-center text-center" id="new-mainbody">
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-mainprojects">
                        <h4 className= "home-action">PROJECTS</h4>
                    </div>
                    <div className="col-sm-11 col-md-6" id="new-mainprofile">
                        <img src={PortfolioProfile} className="profile-pic" id="profile-picid"></img>
                    </div>
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-maincontact">
                        <h4 className= "home-action">CONTACT</h4>
                    </div>
                </div>


                {/* <div className="title">
                    <img src={PortfolioProfile} className="profile-pic"></img>
                </div>
                <div className="row d-flex justify-content-between action-row">
                    <div className="col-2 p-0 text-center">
                        <h4 className= "home-action">PROJECTS</h4>
                    </div>
                    <div className="col-2 p-0 text-center">
                        <h4 className= "home-action">CONTACT</h4>
                    </div>
                </div> */}


            </main>
        </>
    ) 
};

export default Homepage;