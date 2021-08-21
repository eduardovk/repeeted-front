import React, { useState } from 'react';
import "./style.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';
import DonateModal from '../DonateModal';
import BRFlag from '../../images/br_flag.png';
import USFlag from '../../images/us_flag.png';
import {i18n} from '../../translate/i18n';

function NavBar() {

    const I18N_STORAGE_KEY = 'i18nextLng';

    const [lang] = useState(localStorage.getItem(I18N_STORAGE_KEY));
    const [showMenu, setShowMenu] = useState(false);
    const [openMsgModal, setOpenMsgModal] = useState(false);
    const [openDonateModal, setOpenDonateModal] = useState(false);

    function changeLang(){
        let currentLang = localStorage.getItem(I18N_STORAGE_KEY);
        localStorage.setItem(I18N_STORAGE_KEY, (currentLang === 'pt-BR' ? 'en-US' : 'pt-BR'));
        window.location = window.location;
    }

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-logo">Logo</div>
                <ul className="navbar-list">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>{i18n.t('nav.about')}</li></Link>
                    <Link to="/how-it-works"><li>{i18n.t('nav.howItWorks')}</li></Link>
                    <li onClick={() => { setOpenMsgModal(true) }}>{i18n.t('nav.contact')}</li>
                    <li style={{ color: "#ffc145" }} onClick={() => { setOpenDonateModal(true) }}>{i18n.t('nav.donate')}</li>
                    <span className="lang-btn" style={{marginLeft:"10px"}} onClick={changeLang}>
                        {lang === 'pt-BR' ? ('PT') : ('EN')}<img src={lang === 'pt-BR' ? (BRFlag) : (USFlag)} className="lang-flag"/>
                    </span>
                </ul>
                <div className="menu-icon">
                    <span onClick={() => setShowMenu(!showMenu)}><GiHamburgerMenu size="1.8em" /></span>
                </div>
                <div className="mobile-nav" style={showMenu ? ({ display: "flex" }) : ({ display: "none" })}>
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/about">{i18n.t('nav.about')}</Link></span>
                    <span><Link to="/how-it-works">{i18n.t('nav.howItWorks')}</Link></span>
                    <span onClick={() => { setOpenMsgModal(true) }}>{i18n.t('nav.contact')}</span>
                    <span style={{ color: "#ffc145" }} onClick={() => { setOpenDonateModal(true) }}>{i18n.t('nav.donate')}</span>
                    <span className="lang-btn" style={{marginLeft:"10px"}} onClick={changeLang}>
                        {lang === 'pt-BR' ? ('PT') : ('EN')}<img src={lang === 'pt-BR' ? (BRFlag) : (USFlag)} className="lang-flag"/>
                    </span>
                </div>
            </div>
            <MessageModal id_genius={null} modalTitle="Formulário de contato"
                msgPlaceholder="Escreva sua mensagem de contato" open={openMsgModal} setOpen={setOpenMsgModal} />
            <DonateModal open={openDonateModal} setOpen={setOpenDonateModal} />
        </nav>
    );
}

export default NavBar;