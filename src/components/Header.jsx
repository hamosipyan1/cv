import React from 'react';
import Menu from "./Menu";
import Languages from "./Languages";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-52 fixed w-full bg-white h-40 z-999" >
            <h1 className="name">
                Hamlet Osipyan
            </h1>
            <Menu/>
            <Languages/>
        </header>
    );
};

export default Header;