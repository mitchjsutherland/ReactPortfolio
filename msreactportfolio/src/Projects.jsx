import React from 'react'

function Projects() {

    return (
        <>
            <main className="mainprojects">

                <div className="container projectbody">
                    <div className="col-6 project-title-wrapper">
                        <div className = "col-12">
                            <div className="div projects-title" id="projects-title">
                                <h1 id="p-title-1">Projects</h1>
                                <h1 id="p-title-2">Portfolio</h1>
                            </div>
                            <div className="projects-subtitle" id="projects-subtitle">
                                <h5>Because the proof is in the projects, right?</h5>
                            </div>
                        </div>
                        <div className = "project-info">
                            <h2>Project Name</h2>
                            <h3>Project Description</h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="projects-wrapper">
                            
                        
                        </div>
                    </div>

                </div>

                {/* <div className="row align-items-center justify-content-center text-center" id="new-mainbody">
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-mainprojects">
                        <h4 className= "home-action">PROJECTS</h4>
                    </div>
                    <div className="col-sm-11 col-md-6" id="new-mainprofile">
                        <img src={PortfolioProfile} className="profile-pic" id="profile-picid"></img>
                    </div>
                    <div className="col-sm-7 col-md-2 col-lg-2" id="new-maincontact">
                        <h4 className= "home-action">CONTACT</h4>
                    </div>
                </div> */}

            </main>
        </>
    )
    
};

export default Projects;