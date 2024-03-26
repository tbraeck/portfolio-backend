import React from 'react';

const About = () => {

    const techSkills = [ "Javascript", "React", "Ruby", "Ruby on Rails", "SQL", "Backend Engineering", "Frontend Engineering", "FullStack Engineering", "Design", "UI/ UX" ]
    const skillsMap = techSkills.map((skill,index) => {
        return(
            <>
             <li key={index} style={{paddingBottom: "10px", paddingTop:"10px"}}>{skill}</li>
            </>
        )
        })

    return (
        <div className='aboutContainer'>
            <div className='aboutContent'>
                <h1 className='changa-font'>SOME THINGS ABOUT ME</h1>
                <h2 className='display-5'>FullStack Web Developer ~ Designer</h2>
                <p className='display-7'>
                    I am a passionate Junior FullStack Developer with many years of experience in other fields like education and visual arts, complementing my growing skills in software engineering. During my years as an educator, I have built my management skills, expanded my interpersonal and group facilitation skills, become more organized and efficient, and evolved into a patient, caring, and collaborative individual.
                </p>
                <p className='display-7'>
                    Some of my recent achievements include graduating from Flatiron School with a FullStack Engineering Certification and successfully running a small online business. I am open to opportunities in any industry or organization that values my diverse skills and positive mindset.
                </p>
            </div>
            <div className='techSKillsBox'>
            <h2 className='display-8' >
                TECHNICAL SKILLS:  
            </h2>
                <ul className='display-7'>
                    {skillsMap}
                </ul>
            </div>
        </div>
    );
}

export default About;
