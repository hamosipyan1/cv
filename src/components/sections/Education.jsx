import React from 'react';
import 'aos/dist/aos.css';
import AOS from "aos";

AOS.init();

const Education = () => {
    return (
        <section className="py-16 flex flex-col items-center min-h-320" id="education">
            <h1 className="name name_edu mb-10">EDUCATION</h1>
            <div className="flex justify-between" data-aos-duration="2000" data-aos="fade-up">
                <div data-aos-duration="2000" data-aos="fade-right">
                    <h3>2011-2020</h3>
                </div>
                <div className="h-64 border-1 mx-32 relative">
                    <span className="absolute top-0 left-[-4px] border-1 rounded w-5 h-5 bg-black"/>
                </div>
                <div data-aos-duration="2000" data-aos="fade-left">
                    <span>N160 School</span>
                </div>
            </div>
            <div className="flex" data-aos-duration="2000" data-aos="fade-up">
                <div data-aos-duration="2000" data-aos="fade-right">
                    <h3>2021-2023</h3>
                </div>
                <div className="h-64 border-1 mx-32 relative">
                    <span className="absolute top-5 left-[-4px] border-1 rounded w-5 h-5 bg-black"/>
                </div>
                <div data-aos-duration="2000" data-aos="fade-left" style={{width: "90px"}}>
                    <span >Manuk Abeghyan High School</span>
                </div>
            </div>
            <div className="flex" data-aos-duration="2000" data-aos="fade-up">
                <div data-aos-duration="2000" data-aos="fade-right">
                    <h3></h3>
                    <span></span>
                </div>
                <div data-aos-duration="2000" data-aos="fade-left">
                    <span></span>
                </div>
            </div>
        </section>
    );
};

export default Education;