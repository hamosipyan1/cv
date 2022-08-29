import React from 'react';
import 'aos/dist/aos.css';
import AOS from "aos";

AOS.init();

const Education = () => {
    return (
        <section className="py-16 flex flex-col items-center justify-center min-h-320" id="education">
            <h1 className="name name_edu mb-36 mt-[-50px]">EDUCATION</h1>
            <div className="flex flex-col items-center justify-center ml-32">
                <div className="grid-cols-3 grid w-[500px]" data-aos-duration="2000">
                    <div data-aos-duration="2000" data-aos="fade-right">
                        <h3>2011-2020</h3>
                    </div>
                    <div className="h-64 max-w-1 border-1 mx-32 relative">
                        <span className="absolute top-5 left-[-4px] border-1 rounded w-5 h-5 bg-black" data-aos-duration="2000" data-aos="fade-up"/>
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="text-left">
                        <span >N160 Basic School</span>
                    </div>
                </div>
                <div className="grid-cols-3 grid w-[500px]" data-aos-duration="2000">
                    <div data-aos-duration="2000" data-aos="fade-right">
                        <h3>2021-2023</h3>
                    </div>
                    <div className="h-64 max-w-1 border-1 mx-32 relative">
                        <span className="absolute top-5 left-[-4px] border-1 rounded w-5 h-5 bg-black" data-aos-duration="2000" data-aos="fade-up"/>
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="text-left">
                        <span >Manuk Abeghyan High School</span>
                    </div>
                </div>
                <div className="grid-cols-3 grid w-[500px]" >
                    <div data-aos-duration="2000" data-aos="fade-right">
                        <h3>2020-2022</h3>
                    </div>
                    <div className="h-64 max-w-1 border-1 mx-32 relative">
                        <span className="absolute top-5 left-[-4px] border-1 rounded w-5 h-5 bg-black" data-aos-duration="2000" data-aos="fade-up"/>
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-left" className="text-left" >
                        <span>Took Mathematical, Physical and English courses</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;