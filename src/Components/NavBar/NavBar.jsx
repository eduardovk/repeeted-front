import React, { useState } from 'react';
import "./style.css";
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-logo">Logo</div>
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Como Funciona</li>
                    <li>Contato</li>
                    <li>Doar</li>
                </ul>
                <div className="menu-icon">
                    <span onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu size="1.8em" /></span>
                </div>
                <div className="mobile-nav" style={showMenu ? ({ display: "flex" }) : ({ display: "none" })}>
                    <span>Home</span>
                    <span>Sobre</span>
                    <span>Como Funciona</span>
                    <span>Contato</span>
                    <span>Doar</span>
                </div>
            </div>
        </nav>
    );

}
export default NavBar;