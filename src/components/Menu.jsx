import React from 'react';
import {useSelector} from "react-redux";
import ScrollIntoView from "react-scroll-into-view";

const Menu = () => {
    const {menu} = useSelector(state => state.menuReducer)

    return (
        <ul className="flex w-1/3 justify-between">
            {
                menu.map(({id, name}) => {
                    return <li key={id} className="hover:text-indigo-800 mx-5 cursor-pointer capitalize font-semibold">
                        <ScrollIntoView selector={`#${name}`}>
                            {name}
                        </ScrollIntoView>
                    </li>
                })
            }
        </ul>
    );
};

export default Menu;