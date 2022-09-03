import React from 'react';
import {useTranslation} from "react-i18next";

const Experience = () => {
    const {t} = useTranslation()

    return (
        <div className="min-h-320 relative flex flex-col items-center " id="experiences">
            <div className="py-20 border-b-2 border-b-[#F1F1F1] w-full flex justify-center items-center">
                <h1 className="name_edu name">EXPERIENCE</h1>
            </div>
            <p className="mt-56 mb-4 text">
                I am looking for internship!
            </p>
            <p className="max-w-480 text-center text">
                I don't have working experience but do have basic skills, knowledge and aspiration to try myself in this sphere!
            </p>
        </div>
    );
};

export default Experience;