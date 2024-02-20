import React from 'react';

function Project(props) {
    return (
        <>
            <div className="project-tile">
                <h4>Title {props.title} </h4>
                <p>Deployed app {props.app-url}</p>
                <p>View github repository{props.repo-url}</p>
                <p>Image {props.image}</p>
            </div>
        </>
    )
};

export default Project;