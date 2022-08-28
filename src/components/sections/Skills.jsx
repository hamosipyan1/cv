import React from 'react';
import bg from "../../images/1.jpg"
const Skills = () => {
    return (
        <section className="min-h-320 bg-blue bg-fixed" id="skills" style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="absolute min-h-320 w-full z-10 bg-blue-gray-800 opacity-50"/>
            Skills new
        </section>
    );
};

export default Skills;