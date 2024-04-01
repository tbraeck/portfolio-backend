import React from 'react';
import NavigationButtons from './general/NavigationButtons';
import NavBar from './general/NavBar';

const About = () => {

    const techSkills = [ "JavaScript", "React", "Ruby", "Ruby on Rails", "SQL", "Backend", "Frontend", "FullStack", "Design", "UI/ UX", "Data Science", "Databases  " ]
    const skillsMap = techSkills.map((skill,index) => {
        return(
            <>
             <li key={index} style={{paddingBottom: "10px", paddingTop:"10px", textTransform: "uppercase"}}>{skill}</li>
            </>
        )
        })

    return (
        <div className='aboutContainer'>
            <div className='aboutContent'>
                <h1 className='changa-font'>SOME THINGS ABOUT ME</h1>
                <h2 className='display-5'  style={{color:"rgb(111, 52, 231)"}} 
                    >FullStack Web Developer ~ Designer</h2>
                <p className='display-7' style={{ color:"black"}}>
                    I am a passionate Junior FullStack Developer with many years of experience in other fields like education and visual arts, complementing my growing skills in software engineering. During my years as an educator, I have built my management skills, expanded my interpersonal and group facilitation skills, become more organized and efficient, and evolved into a patient, caring, and collaborative individual.
                </p>
                <p className='display-7' style={{ color:"black"}}>
                    Some of my recent achievements include graduating from Flatiron School with a FullStack Engineering Certification and successfully running a small online business. I am open to opportunities in any industry or organization that values my diverse skills and positive mindset.
                </p>
            </div>
            <div className='techSKillsBox' style={{ textAlign: "center" }}>
            <h2 className='display-6' >
                TECHNICAL SKILLS  
            </h2>
                <ul className='display-7' style={{alignContent: "center", listStyleType: "none", color: "white", WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "black" }}>
                    {skillsMap}
                </ul>
            </div>
        </div>
    );
}

export default About;
