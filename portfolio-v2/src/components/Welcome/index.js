import React from 'react';
/* Still links to app.css! No need for a separate import */

function Welcome(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Welcome-Component">
            <h1>Portfolio Title!</h1>
            <p>Blurb about me, {props.name}!</p>
            <p>Links to Linkedin, Git, Email, can be moved to NavBar later!</p>

        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Welcome;