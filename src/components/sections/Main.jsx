import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import css from '../../css/Main.module.scss'
import person from "../../images/1.jpg"

AOS.init();

const Main = () => {
    return (
        <section className="min-h-480 relative" id="main">
            <div className="bg-fixed pt-112 min-h-320 static"
                 style={{backgroundImage: `url(${person})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="min-h-288 w-full z-10 bg-blue-gray-800 opacity-50" style={{marginTop:"-128px"}}/>
                <div data-aos-duration="3000" data-aos="fade-right"
                     className="text-blue-500 bg-white absolute top-112 left-384 min-h-208 min-w-210">
                    <img className="w-210 h-208" src={person} alt="dsafa"/>
                </div>
                <div data-aos-duration="3000" data-aos="fade-left"
                     className="flex flex-col py-14 px-40 absolute top-112 right-360 min-h-208 min-w-216"
                     style={{backgroundColor: '#F1F1F1'}}>
                    <div className={css.info}>
                        <div>
                            <h1>Hamlet Osipyan</h1>
                            <h3>HIGH SCHOOL STUDENT</h3>
                        </div>
                        <div>
                            <h4>Phone:</h4>
                            <span>(+374)95-30-69-74</span>
                        </div>
                        <div>
                            <h4>Email:</h4>
                            <span>hamosipyan@gmail.com</span>
                        </div>
                        <div>
                            <h4>Date of Birth:</h4>
                            <span>October 23th, 2005</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-160 flex flex-col items-center" style={{backgroundColor: '#F1F1F1'}}>
                <div data-aos-duration="3000" data-aos="fade-up"
                     className="absolute top-320  min-h-36 min-w-416 right-360 flex items-center justify-center"
                     style={{backgroundColor: "#182153"}}>
                    <a className="mr-8"
                       href="https://www.linkedin.com/in/hamo-osipyan-208a49247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bhi%2BwF3edSIuiZrc0wfiCJQ%3D%3D">
                        <img className="w-12" src="/linkedinIcon.webp" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/hamosipyan/">
                        <img className="w-12" src="/instagramIcon.webp" alt=""/>
                    </a>
                </div>
                <h1 className="mt-64 mb-2">Hello! My name is Hamo.</h1>
                <div>
                    <p>I consider my self a responsible and orderly person. I am looking forward for my first teamwork experience!</p>
                </div>
            </div>
        </section>
    );
};

export default Main;