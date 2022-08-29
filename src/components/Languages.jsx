import React, {useState} from 'react';
import i18next from "i18next";
import cn from "classnames"
import armFlag from '../images/armenianFlag.jpg'
import usaFlag from '../images/usaFlag.jpg'
import rusFlag from '../images/russianFlag.jpg'

const languages = [
    {id: 1, language: 'en', image: usaFlag},
    {id: 2, language: 'ru', image: rusFlag},
    {id: 3, language: 'am', image: armFlag}
]

const Languages = () => {

    const [lng, setLng] = useState(i18next.language)

    const selectLanguage = (language) => {
        i18next.changeLanguage(language)
        setLng(language)
    }

    return (
        <ul className="flex items-center justify-center m-10">
            {
                languages.map(({id, language, image}) => {
                    return <li
                        key={id}
                        className={cn("mx-5 cursor-pointer", language === lng ? "active" : undefined)}
                        onClick={() => selectLanguage(language)}
                    >
                        <img className="w-14" src={image} alt=""/>
                    </li>
                })
            }
        </ul>
    );
};

export default Languages;