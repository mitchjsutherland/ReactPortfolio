import React from 'react'
import Project from './Project.jsx';
import projects from './projects.json';

function Projects() {

    return (
        <>
            <main className="mainprojects">

                <div className="container col-11 projectbody">
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
                    <div className="col-md-6 col-sm-12 project-container d-flex">
                        
                        <div className="projects-wrapper">

                                {/* {projects.map((project) => {
                                    console.log("Mapping project:", project); // Log to check if data is received
                                    return (
                                        <div key={project.id} className="col-4">
                                            <Project
                                                title={project.title}
                                                app-url={project.app-url}
                                                repo-url={project.repo-url}
                                                image={project.image}
                                            />
                                        </div>
                                    );
                                })} */}

                            <div className="row project-list-main">

                                <div className="col-4">
                                    <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                                    <a className="p-1 rounded" href="#simple-list-item-1">Item 1</a>
                                    <a className="p-1 rounded" href="#simple-list-item-2">Item 2</a>
                                    <a className="p-1 rounded" href="#simple-list-item-3">Item 3</a>
                                    <a className="p-1 rounded" href="#simple-list-item-4">Item 4</a>
                                    <a className="p-1 rounded" href="#simple-list-item-5">Item 5</a>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                                    {/* <Project title={project.title} app-url={project.app-url} repo-url={project.repo-url} image={project.image} /> */}
                                
                                    <h4 id="simple-list-item-2">Item 2</h4>
                                    <p>...</p>
                                    <h4 id="simple-list-item-3">Item 3</h4>
                                    <p>...</p>
                                    <h4 id="simple-list-item-4">Item 4</h4>
                                    <p>...</p>
                                    <h4 id="simple-list-item-5">Item 5</h4>
                                    <p>...</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </>
    )
    
};

export default Projects;