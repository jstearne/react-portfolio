import React from 'react';
/* Still links to app.css! No need for a separate import */

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* Font Awesome icons */
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; /* FA brand import */
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"; /* FA solid import */


function Welcome(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Welcome-Component">
            <h1>A lovely day <span className="alternate-font"> in Paradise</span></h1> 
            <h6><code> [ My name's {props.name}, and I'm a full-stack engineer looking for an opportunity! ] </code></h6>
            
            {/* SEE TOOLTIPS CSS - need to add them here in v2.0. Can I display alt-text? */}
            {/* Technology Icons: Javascript */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-logo" />
            {/* Python */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python-logo" />
            {/* React */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react-logo"/>
            {/* Node.js */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs-logo"/>
            {/* Postgresql */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-logo"/>
            {/* MongoDB - hard to read! */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb-logo"/>
            {/* Django */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django-logo"/>
            {/* Express */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express-logo"/>
            {/* HTML */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5-logo"/>
            {/* CSS */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/>
            {/* Github */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github-logo"/>
            {/* Heroku */} <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="heroku-logo"/>

            <div className="icon-wrap">
                <FontAwesomeIcon className="icons" icon={faGithubSquare} size="lg" />
                <FontAwesomeIcon className="icons" icon={faLinkedin} size="lg" />
                <FontAwesomeIcon className="icons" icon={faEnvelope} size="lg" />
                <FontAwesomeIcon className="icons" icon={faFilePdf} size="lg" />
            </div>
        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Welcome;
