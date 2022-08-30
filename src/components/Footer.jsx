import React from 'react';

const Footer = () => {

    return (
        <footer className="text-white flex items-center pl-120 py-10 bg-[#191F22]">
            <span className="italic text-[12px]">${"{©hamlet osipyan" + new Date().getFullYear()}}</span>
        </footer>
    );
};

export default Footer;