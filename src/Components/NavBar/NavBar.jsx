import React, { useState } from 'react';
import "./style.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';
import DonateModal from '../DonateModal';

function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const [openMsgModal, setOpenMsgModal] = useState(false);
    const [openDonateModal, setOpenDonateModal] = useState(false);

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-logo">Logo</div>
                <ul className="navbar-list">
                    <Link to="/"><li>Home</li></Link>
                    <li>Sobre</li>
                    <li>Como Funciona</li>
                    <li onClick={() => {setOpenMsgModal(true)}}>Contato</li>
                    <li style={{ color: "#ffc145" }} onClick={() => {setOpenDonateModal(true)}}>Doar</li>
                </ul>
                <div className="menu-icon">
                    <span onClick={() => setShowMenu(!showMenu)}><GiHamburgerMenu size="1.8em" /></span>
                </div>
                <div className="mobile-nav" style={showMenu ? ({ display: "flex" }) : ({ display: "none" })}>
                    <span>Home</span>
                    <span>Sobre</span>
                    <span>Como Funciona</span>
                    <span onClick={() => {setOpenMsgModal(true)}}>Contato</span>
                    <span style={{ color: "#ffc145" }} onClick={() => {setOpenDonateModal(true)}}>Doar</span>
                </div>
            </div>
            <MessageModal id_genius={null} modalTitle="Formulário de contato" 
            msgPlaceholder="Escreva sua mensagem de contato" open={openMsgModal} setOpen={setOpenMsgModal} />
            <DonateModal open={openDonateModal} setOpen={setOpenDonateModal} />
        </nav>
    );
}

export default NavBar;