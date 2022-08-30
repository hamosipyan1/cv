import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru'],
        fallbackLng: 'en',
        backend: {
            loadPath: '/cv/locales/{{lng}}/translation.json',
        },
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

