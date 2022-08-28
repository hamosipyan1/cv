import React from 'react';

const Footer = () => {

    return (
        <footer className="text-white flex items-center justify-center py-5 bg-" style={{backgroundColor: "#191F22"}}>
            &copy; Hamlet Osipyan {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;