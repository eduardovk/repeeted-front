import React, { useState } from 'react';
import "./style.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';

function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-logo">Logo</div>
                <ul className="navbar-list">
                    <Link to="/"><li>Home</li></Link>
                    <li>Sobre</li>
                    <li>Como Funciona</li>
                    <li onClick={() => {setOpenModal(true)}}>Contato</li>
                    <li style={{ color: "#ffc145" }}>Doar</li>
                </ul>
                <div className="menu-icon">
                    <span onClick={() => setShowMenu(!showMenu)}><GiHamburgerMenu size="1.8em" /></span>
                </div>
                <div className="mobile-nav" style={showMenu ? ({ display: "flex" }) : ({ display: "none" })}>
                    <span>Home</span>
                    <span>Sobre</span>
                    <span>Como Funciona</span>
                    <span onClick={() => {setOpenModal(true)}}>Contato</span>
                    <span style={{ color: "#ffc145" }}>Doar</span>
                </div>
            </div>
            <MessageModal id_genius={null} modalTitle="Formulário de contato" 
            msgPlaceholder="Escreva sua mensagem de contato" open={openModal} setOpen={setOpenModal} />
        </nav>
    );
}

export default NavBar;