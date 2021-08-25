import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import "./style.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';
import DonateModal from '../DonateModal';
import BRFlag from '../../images/br_flag.png';
import USFlag from '../../images/us_flag.png';
import { i18n } from '../../translate/i18n';

function NavBar({ changeLang }) {

    const [showMenu, setShowMenu] = useState(false);
    const [openMsgModal, setOpenMsgModal] = useState(false);
    const [openDonateModal, setOpenDonateModal] = useState(false);
    const { lang } = useContext(GlobalContext);
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
                    <span className="lang-btn" style={{ marginLeft: "10px" }} onClick={changeLang}>
                        {lang === 'pt-BR' ? ('PT') : ('EN')}<img src={lang === 'pt-BR' ? (BRFlag) : (USFlag)} className="lang-flag"
                            alt={lang === 'pt-BR' ? ('Bandeira do Brasil') : ('US Flag')} />
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
                    <span className="lang-btn" style={{ marginLeft: "10px" }} onClick={changeLang}>
                        {lang === 'pt-BR' ? ('PT') : ('EN')}<img src={lang === 'pt-BR' ? (BRFlag) : (USFlag)} className="lang-flag"
                            alt={lang === 'pt-BR' ? ('Bandeira do Brasil') : ('US Flag')} />
                    </span>
                </div>
            </div>
            <MessageModal id_genius={null} modalTitle={i18n.t('messageModal.contactTitle')}
                msgPlaceholder={i18n.t('messageModal.contactPlaceholder')} open={openMsgModal} setOpen={setOpenMsgModal} />
            <DonateModal open={openDonateModal} setOpen={setOpenDonateModal} />
        </nav>
    );
}

export default NavBar;