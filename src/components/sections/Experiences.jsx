import React from 'react';
import {useTranslation} from "react-i18next";

const Experiences = () => {
    const {t} = useTranslation()

    return (
        <div className="min-h-320 bg-red" id="experiences">
            {t("HELLO")}
        </div>
    );
};

export default Experiences;