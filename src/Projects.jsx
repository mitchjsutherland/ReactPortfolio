import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import Project from './Project.jsx';
import projects from './projects-data.json';
import digitalnomad from './assets/digitalnomad.png'
import readme from './assets/readmegen.png'
import codingchallenge from './assets/codingchallenge.png'
import password from './assets/password.png'
import blackjack from './assets/blackjack.png'
import cssportfolio from './assets/cssportfolio.png'
import github from './assets/github.png'
import website from './assets/website.png'


function Projects() {
    const imagesArr = [digitalnomad, readme, codingchallenge, password, blackjack, cssportfolio]

    return (
        <>
            <main className="mainprojects">

                <div className="container col-11 projectbody">
                    <div className="col-6 project-title-wrapper">
                        <div className="col-12">
                            <div className="div projects-title" id="projects-title">
                                <h1 id="p-title-1">Projects</h1>
                                <h1 id="p-title-2">Portfolio</h1>
                            </div>
                            <div className="projects-subtitle" id="projects-subtitle">
                                <h5>Because the proof is in the projects, right?</h5>
                            </div>
                        </div>
                        <div className="project-info col-9">
                            {/* ---------- Once projects are updated dynamically, the project name and description can appear here ---------- */}
                            <h2>Project Name</h2>
                            <h3>Project Description</h3>
                            <div className="icon-container col-12 d-flex justify-content-center mt-4">
                                <Link to="https://www.github.com"><img className="project-icon github mx-5" src={github} /></Link>
                                <Link to="https://www.google.com"><img className="project-icon website mx-5" src={website} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 project-container d-flex">

                        <div className="projects-wrapper">

                            <div className="row project-list-main">
                                <Carousel>
                                    {projects.map((p, i) => {
                                        return (<Carousel.Item>
                                            <img src={imagesArr[i]} height='600px' width='auto' />
                                            <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>)
                                    })}
                                </Carousel>
                                {/* vanilla bootstrap carousel */}
                                {/* <div id="carouselExampleIndicators" className="carousel slide customcarousel">
                                    <div className="carousel-indicators">
                                        {projects.map((project, index) => {
                                            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                                        })}
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 0"></button>
                                    </div>

                                    <div className="carousel-inner justify-content-center">
                                        
                                        {projects.map((project, index) => {
                                            console.log(project)
                                            console.log(index)

                                            return (
                                                <div className="carousel-item ">
                                                    <img src={imagesArr[index]} className="d-block project-img" alt="..." />
                                                    <div className="carousel-caption d-none d-md-block">
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div> */}
                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </>
    )

};

export default Projects;