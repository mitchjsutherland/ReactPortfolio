import React from 'react';

function Project(props) {
    return (
        <>
            <div className="project-tile">
                <h4>Title {props.title} </h4>
                <p>Deployed app {props.appUrl}</p>
                <p>View github repository{props.repoUrl}</p>
                <p>Image {props.image}</p>
            </div>
        </>
    )
};

export default Project;