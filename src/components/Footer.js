import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
const Footer = () => {
    return(
        <div className="footer">
        <h4>Find me on:</h4>
        <img className="linkedinimage" src={linkedin} alt="linkedin" />
        <img className="githubimage" src={github} alt="github" />


        </div>
    )
}
export default Footer;