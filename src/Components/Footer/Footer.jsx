import React, { useState } from 'react';
import "./style.css";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import MessageModal from '../MessageModal/MessageModal';

function Footer() {

    const [showMenu, setShowMenu] = useState(false);
    const [openMsgModal, setOpenMsgModal] = useState(false);

    return (
        <footer>
            <div id="footer-icons">
                <span><AiFillInstagram size={30} /></span>
                <span><AiFillTwitterCircle size={30} /></span>
                <span><AiFillGithub size={30} /></span>
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
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title={i18n.t('buttons.paypalTitle')} alt={i18n.t('buttons.paypalAlt')} />
                    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <MessageModal id_genius={null} modalTitle={i18n.t('messageModal.contactTitle')}
                    msgPlaceholder={i18n.t('messageModal.contactPlaceholder')} open={openMsgModal} setOpen={setOpenMsgModal} />
            </div>
        </footer>
    );

}
export default Footer;