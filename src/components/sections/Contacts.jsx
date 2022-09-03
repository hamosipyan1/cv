import React from 'react';
import ScrollIntoView from "react-scroll-into-view";
import linkedin from '../../images/linkedinIconBlack.png'
import instagram from '../../images/instagramIconBlack.png'

const Contacts = () => {
    return (
        <section className="min-h-256 bg-[#F1F1F1]" id="contacts">
            <div className="py-20 border-b border-b-[white] w-full flex justify-center items-center">
                <h1 className="name_edu name">CONTACTS</h1>
            </div>
            <div className="w-full flex justify-center text_Contacts">
                <div className="w-1/2 border-r border-r-white py-52 flex flex-col items-center">
                    <div className="w-200">
                        <ScrollIntoView className="cursor-pointer text-[30px]" selector={"#main"}>
                            Hamlet Osipyan
                        </ScrollIntoView>
                        <h4>FRONT-END WEB DEVELOPER STUDENT</h4>
                    </div>

                    <div className="flex w-full ml-[66%]">
                        <a href="https://www.linkedin.com/in/hamo-osipyan-208a49247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bhi%2BwF3edSIuiZrc0wfiCJQ%3D%3D">
                            <img className="w-[21px] h-[21px] mt-20" src={linkedin} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/hamosipyan/">
                            <img className="w-[21px] h-[21px] ml-9 mt-20" src={instagram} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="pt-56 w-1/2 flex flex-col items-center">
                    <div className="w-200">
                        <h3>Phone:</h3>
                        <h4>(+374)-95-30-69-74</h4>
                    </div>
                    <div className="w-200">
                        <h4>Email: hamosipyan@gmail.com</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;