import React from 'react';
// Still links to app.css! No need for a separate import

// temporary solution: to github jstearne page
function showResume(props) { 
  window.open(
    `https://github.com/jstearne`, "_blank"); 
}
function toLinkedIn(props) { 
  window.open(
    `https://github.com/jstearne`, "_blank"); 
}
function emailMe() { 
  window.open(
    `mailto:jared.stearne@gmail.com`, "_blank"); 
}

function Credential(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Credential-Component">
            <div className="credential-nested-div">
                <h2 style={{ textDecorationLine: 'overline' }} >Credentials: {props.credentialtype}</h2>

                <p>School/Job: {props.org1}</p>
                <p>{props.blurb1}</p>

                <p>School/Job: {props.org2}</p>
                <p>{props.blurb2}</p>

                <p>See resume for more details</p>
                {/* need buttons for visiting the live site, git, and seeing image? */}
                <button className="resume-button" onClick={showResume}>&nbsp;resume&nbsp;</button>
                <button className="linkedin-button" onClick={toLinkedIn}>&nbsp;to linkedin&nbsp;</button>
                <button className="email-button" onClick={emailMe}>&nbsp;email me&nbsp;</button>
            </div>
        </div>
    );
}

export default Credential;
// resume, linkedin, email