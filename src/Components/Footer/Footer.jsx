import React, { useState } from 'react';
import "./style.css";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import MessageModal from '../MessageModal/MessageModal';
import PaypalButton from '../PaypalButton/PaypalButton';

function Footer() {

    const [openMsgModal, setOpenMsgModal] = useState(false);

    return (
        <footer>
            <div id="footer-icons">
                <span><a className="no-decor" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/repeeted_/"><AiFillInstagram size={30} /></a></span>
                <span><a className="no-decor" rel="noopener noreferrer" target="_blank" href="https://twitter.com/repeeted_"><AiFillTwitterCircle size={30} /></a></span>
                <span><a className="no-decor" rel="noopener noreferrer" target="_blank" href="https://github.com/eduardovk/repeeted-front"><AiFillGithub size={30} /></a></span>
            </div>
            <div id="footer-links">
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>{i18n.t('nav.about')}</span></Link>
                <Link to="/how-it-works"><span>{i18n.t('nav.howItWorks')}</span></Link>
                <div><span onClick={() => { setOpenMsgModal(true) }}>{i18n.t('nav.contact')}</span></div>
            </div>
            <div id="footer-donate">
                <span style={{ fontSize: '.8em' }}>{i18n.t('footer.disclaimer1')} <b>{i18n.t('words.not')}</b> {i18n.t('footer.disclaimer2')}</span><br />
                <span>{i18n.t('footer.donation1')} <b><span style={{ color: "#ffc145" }}>{i18n.t('words.donation')}</span></b> {i18n.t('footer.donation2')}</span>
                <PaypalButton />
                <MessageModal id_genius={null} modalTitle={i18n.t('messageModal.contactTitle')}
                    msgPlaceholder={i18n.t('messageModal.contactPlaceholder')} open={openMsgModal} setOpen={setOpenMsgModal} />
            </div>
        </footer>
    );

}
export default Footer;