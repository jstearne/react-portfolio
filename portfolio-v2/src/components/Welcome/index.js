import React from 'react';
/* Still links to app.css! No need for a separate import */

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* Font Awesome icons */
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; /* FA brand import */
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"; /* FA solid import */



function Welcome(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Welcome-Component">
            <h1>Portfolio Title!</h1>
            <p>Blurb about me, {props.name}!</p>
            {/* font awesome requires react icons! READ: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react */}
            <p>Links FA brand [linkedin] {props.icon} [github], FA Solid [envelope] [file-pdf] ...can be moved to NavBar later!</p>
                <div>{/* to display text on hover, have to wrap in indiv divs - low priority */}
                    <FontAwesomeIcon className="icons" icon={faGithubSquare} size="lg" />
                    <FontAwesomeIcon className="icons" icon={faLinkedin} size="lg" />
                    <FontAwesomeIcon className="icons" icon={faEnvelope} size="lg" />
                    <FontAwesomeIcon className="icons" icon={faFilePdf} size="lg" />
                </div>
                <div class="myDIV">Hover over me.</div>
                <div class="hide">I am shown when someone hovers over the div above.</div>
        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Welcome;
