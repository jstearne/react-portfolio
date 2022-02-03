import React from 'react';
/* Still links to app.css! No need for a separate import */

function Project(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Project-Component">
            <h1>Project Name</h1>
            <p>This name prop is being passed from App.js > Welcome/index.js: {props.name}</p>
            <p> </p>

        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Project;