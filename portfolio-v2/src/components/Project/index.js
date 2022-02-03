import React from 'react';
/* Still links to app.css! No need for a separate import */

function Project(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Project-Component">
            <h1>Project Name: {props.projectName}</h1>
            <p>Technologies Used: {props.technologies}</p>
            <p>Project Blurb: {props.blurb}</p>

        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Project;