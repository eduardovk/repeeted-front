import React from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import { RiCloseLine } from 'react-icons/ri';
import { i18n } from '../../translate/i18n';

function DonateModal({ open, setOpen }) {

    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <span style={{ color: "white" }}><RiCloseLine size={30} /></span>
    );

    return (
        <Modal open={open} onClose={onCloseModal} center classNames={{
            modal: 'customModal-donate',
        }} closeIcon={closeIcon}>
            <div id="modal-donate-body">
                <h2>{i18n.t('donateModal.title')}</h2><hr></hr>
                <div id="modal-donate">
                    <div id="donate-text">
                        <span style={{ fontSize: "1em" }}>{i18n.t('donateModal.line1')}</span>
                        <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line2')}</span>
                        <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line3')}</span>
                        <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line4')}</span>
                    </div>
                    <div id="donate-section">
                        <span>{i18n.t('donateModal.donate1')} <b><span style={{ color: "#ffc145" }}>{i18n.t('words.donation')}</span></b> {i18n.t('donateModal.donate2')}</span>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
                            <input type="hidden" name="no_recurring" value="0" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title={i18n.t('buttons.paypalTitle')} alt={i18n.t('buttons.paypalAlt')} />
                            <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <span style={{ fontSize: ".8em" }}>{i18n.t('donateModal.donate3')}
                            &nbsp;<span style={{ color: '#0a62d0' }}><b><i>Paypal</i></b></span></span><br />
                        <br /><span><b>{i18n.t('words.thankYou')}</b></span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default DonateModal;