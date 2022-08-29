import React from 'react';
import bg from "../../images/1.jpg"
import 'aos/dist/aos.css';
import AOS from "aos";


AOS.init();

const Skills = () => {
    return (
        <section className="min-h-320 bg-blue bg-fixed relative flex flex-col items-center" id="skills"
                 style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="absolute min-h-320 w-full bg-blue-gray-800 opacity-50"/>
            <div className="flex items-center justify-center w-full absolute top-0 bg-[#182153] opacity-90 text-center h-48">
                <h1 className="name_skills">SKILLS</h1>
            </div>
            <div className="grid grid-cols-2 gap-100 w-[900px] mt-120 opacity-90">
                <div data-aos-duration="500" data-aos="fade-left"
                     className="h-48 w-[400px] bg-[#182153] flex items-center justify-center">
                    <span className="text-[18px] font-400 text-white">HTML</span>
                </div>
                <div data-aos-duration="500" data-aos="fade-left"
                     className="h-48 w-[400px] bg-[#182153] flex items-center justify-center">
                    <span className="text-[18px] font-400 text-white">CSS (Tailwind)</span>
                </div>
                <div data-aos-duration="500" data-aos="fade-left"
                     className="h-48 w-[400px] bg-[#182153] flex items-center justify-center mt-[-120px]">
                    <span className="text-[18px] font-400 text-white">JavaScript</span>
                </div>
                <div data-aos-duration="500" data-aos="fade-left"
                     className="h-48 w-[400px] bg-[#182153] flex items-center justify-center mt-[-120px]">
                    <span className="text-[18px] font-400 text-white">React (Redux)</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;