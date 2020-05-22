import React from 'react';
import quiz from '../images/quiz.jpeg';
import calculator from '../images/calc.png';
import naughts from '../images/naughts.jpg';
import pokeball from '../images/pokeball.jpg'


const Projects = () => {
    return(
        <div className="projectsCenter">
            <h1>Projects page</h1>
            <img src={quiz} />
            <img src={calculator} />
            <img src= {naughts} />
            <img src={pokeball} />
        </div>
    )
}
export default Projects;