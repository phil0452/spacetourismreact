import logoIcon from '/src/assets/shared/logo.svg'

import './navigation.css'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    const [isAriaExpanded, setAriaExpanded] = useState(false);
    const [menuImage, setMenuImage] = useState("/assets/shared/icon-hamburger.svg");
    const [menuVisible, setMenuVisible] =  useState(false);

    const ToggleMobileMenu = () => {
        //set the value of isariaExpanded to the opposite of what is was
        setAriaExpanded((prev) => !prev);
        console.log(isAriaExpanded);

        setMenuImage(isAriaExpanded ? "/assets/shared/icon-hamburger.svg" : "/assets/shared/icon-close.svg");
        setMenuVisible((prev) => !prev);
         console.log(menuVisible);
    };

    return (
        <>
            <header className="primary_header flex">
                <div>
                    <img src={logoIcon} alt="space tourism logo" className="logo" />
                </div>
                {/* <!-- aria-controls, controls an element using its ID --> */}
                <button className="mobile_nav_toggle" aria-controls="primary_navigation"  onClick={ToggleMobileMenu}
                style={{backgroundImage: `url(${menuImage})`}}>
                    <span className="sr-only" aria-expanded={isAriaExpanded}>Menu</span>
                </button>
                    
                    <nav>
                        <ul id="primary_navigation" className="primary_navigation flex underline_indicators ff-barlow-cond"
                        data-visible={menuVisible}>
                            <li aria-selected="true" className="active">
                                <NavLink
                                    to="/"
                                    className={`text-white uppercase letter-spacing-2`}>
                                    <span aria-hidden="true">00</span> Home
                                </NavLink>
                            </li>
                            <li aria-selected="false">
                                <NavLink
                                    to="destination"
                                    className={`text-white uppercase letter-spacing-2`}>
                                    <span aria-hidden="true">01</span> Destination
                                </NavLink>
                            </li>
                            <li aria-selected="false">
                                <NavLink
                                    to="crew"
                                    className={`text-white uppercase letter-spacing-2`}>
                                    <span aria-hidden="true">02</span> Crew
                                </NavLink>
                            </li>
                            <li aria-selected="false">
                                <NavLink
                                    to="technology"
                                    className={`text-white uppercase letter-spacing-2`}>
                                    <span aria-hidden="true">03</span> Technology
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    
            </header>
        </>
    )
}


export default Header;

