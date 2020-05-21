import React from 'react';

const About = (props) => {
    return(
        <div>
            <h1>About me </h1>
           
            <p>Hi my name is Connor and I am a junior developer for TalkTalk.</p>
            <p>My interests are:</p>
            <ul>
                <li>{props.interest}</li>
                <li>{props.interest1}</li>
                <li>{props.interest2}</li>
             </ul>
        </div>

    )
}
export default About;