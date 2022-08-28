import React, {useState} from 'react';
import i18next from "i18next";
import cn from "classnames"

const languages = [
    {id: 1, language: 'en'},
    {id: 2, language: 'am'},
    {id: 3, language: 'ru'},
]

const Languages = () => {

    const [lng, setLng] = useState(i18next.language)

    const selectLanguage = (language) => {
        i18next.changeLanguage(language)
        setLng(language)
    }

    return (
        <ul className="flex mb-10">
            {
                languages.map(({id, language}) => {
                    return <li
                        key={id}
                        className={cn("mx-5 cursor-pointer", language === lng ? "active" : undefined)}
                        onClick={() => selectLanguage(language)}
                    >
                        {language}
                    </li>
                })
            }
        </ul>
    );
};

export default Languages;