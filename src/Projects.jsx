import React from 'react'
import Project from './Project.jsx';
import projects from './projects-data.json';
import { Link } from 'react-router-dom';

import digitalnomad from './assets/digitalnomad.png'
import readme from './assets/readmegen.png'
import codingchallenge from './assets/codingchallenge.png'
import password from './assets/password.png'
import blackjack from './assets/blackjack.png'
import cssportfolio from './assets/cssportfolio.png'

import github from './assets/github.png'
import website from './assets/website.png'


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
                            {/* <h2>Project Name</h2>
                            <h3>Project Description</h3> */}
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 project-container d-flex">
                        
                        <div className="projects-wrapper">
                            
                            {/* CANNOT UNDERSTAND WHY THIS WON'T RENDER! ------------------------------------------- */}
                            {/* {projects.map((project) => {
                                return (
                                    <div key={project.id} className="col-4">
                                        <Project
                                            title={project.title}
                                            app-url={project.app-url}
                                            repo-url={project.repo-url}
                                        />
                                    </div>
                                );
                            })} */}

                            <div className="row project-list-main">

                                {/* <div className="col-4">
                                    <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                                    <a className="p-1 rounded" href="#simple-list-item-1">Project 1</a>
                                    <a className="p-1 rounded" href="#simple-list-item-2">Project 2</a>
                                    <a className="p-1 rounded" href="#simple-list-item-3">Project 3</a>
                                    <a className="p-1 rounded" href="#simple-list-item-4">Project 4</a>
                                    <a className="p-1 rounded" href="#simple-list-item-5">Project 5</a>
                                    <a className="p-1 rounded" href="#simple-list-item-5">Project 6</a>
                                    </div>
                                </div>

                                <div className="col-8 project-list">
                                    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                                    <h4 id="simple-list-item-1">{projects[0].title}</h4>
                                    <p>{projects[0]['app-url']}</p>
                                    <p>{projects[0]['repo-url']}</p>
                                    <h4 id="simple-list-item-2">{projects[1].title}</h4>
                                    <p>{projects[1]['app-url']}</p>
                                    <p>{projects[1]['repo-url']}</p>
                                    <h4 id="simple-list-item-3">{projects[2].title}</h4>
                                    <p>{projects[2]['app-url']}</p>
                                    <p>{projects[2]['repo-url']}</p>
                                    <h4 id="simple-list-item-4">{projects[3].title}</h4>
                                    <p>{projects[3]['app-url']}</p>
                                    <p>{projects[3]['repo-url']}</p>
                                    <h4 id="simple-list-item-5">{projects[4].title}</h4>
                                    <p>{projects[4]['app-url']}</p>
                                    <p>{projects[4]['repo-url']}</p>
                                    <h4 id="simple-list-item-6">{projects[5].title}</h4>
                                    <p>{projects[5]['app-url']}</p>
                                    <p>{projects[5]['repo-url']}</p>
                                    </div>
                                </div> */}

                                <div id="carouselExampleIndicators" className="carousel slide customcarousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 0"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        {/* -------------- This should be updated to be produced dynamically with the map function and Project component -------------- */}
                                        <div className="carousel-item active">
                                            <img class="project-img" src={digitalnomad} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5 class="project-name">{projects[0].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img class="project-img" src={readme} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption">
                                                <h5 class="project-name">{projects[1].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img class="project-img" src={codingchallenge} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5 class="project-name">{projects[2].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img class="project-img" src={password} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5 class="project-name">{projects[3].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img class="project-img" src={blackjack} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5 class="project-name">{projects[4].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img class="project-img" src={cssportfolio} className="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5 class="project-name">{projects[5].title}</h5>
                                                {/* <p>Placeholder for project description.</p> */}
                                                <div class="icon-container col-12 d-flex justify-content-center">
                                                    <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                                    <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
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