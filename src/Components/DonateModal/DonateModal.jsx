import React, { useContext } from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import { RiCloseLine } from 'react-icons/ri';
import { i18n } from '../../translate/i18n';
import PaypalButton from '../PaypalButton/PaypalButton';
import { GlobalContext } from '../../Contexts/GlobalContext';

function DonateModal({ open, setOpen }) {

    const { showAds } = useContext(GlobalContext);
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
                        {showAds === "true" ?
                            (<><b>{i18n.t('donateModal.highCosts')}</b></>) :
                            (<>
                                <span style={{ fontSize: "1em" }}>{i18n.t('donateModal.line1')}</span>
                                <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line2')}</span>
                                <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line3')}</span>
                                <span>- <b>{i18n.t('words.doesNot')}</b> {i18n.t('donateModal.line4')}</span>
                            </>)}
                    </div>
                    <div id="donate-section">
                        <span>{i18n.t('donateModal.donate1')} <b><span style={{ color: "#ffc145" }}>{i18n.t('words.donation')}</span></b> {i18n.t('donateModal.donate2')}</span>
                        <PaypalButton />
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