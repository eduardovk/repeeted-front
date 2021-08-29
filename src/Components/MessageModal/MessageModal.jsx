import React, { useState, useRef, useContext } from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import MicroLoading from '../../images/micro-loading.svg';
import ReCAPTCHA from "react-google-recaptcha";
import { RiCloseLine } from 'react-icons/ri';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
const axios = require('axios').default;

function MessageModal({ id_genius, modalTitle, msgPlaceholder, open, setOpen }) {

    const [lockForm, setLockForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const onCloseModal = () => setOpen(false);

    const recaptchaRef = useRef();
    const {apiURL} = useContext(GlobalContext);

    const closeIcon = (
        <span style={{ color: "#5a4310" }}><RiCloseLine size={30} /></span>
    );

    function sendMessage() {
        setLockForm(true);
        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue) {
            const url = `${apiURL}/messages`;
            axios.post(url, { name: name, email: email, msg: msg, id_genius: id_genius, captcha: recaptchaValue })
                .then(r => {
                    if (r.status === 201) alert(i18n.t('messageModal.success'));
                    onCloseModal();
                })
                .catch(e => { alert(i18n.t('messageModal.error')); })
                .finally(() => { setLockForm(false); recaptchaRef.current.reset(); });
        } else {
            alert(i18n.t('messageModal.captcha'));
            setLockForm(false);
        }
    }

    return (
        <Modal open={open} onClose={onCloseModal} center classNames={{
            modal: 'customModal-message',
        }} closeIcon={closeIcon}>
            <form action="" id="report-form" onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
            }}>
                <h2>{modalTitle}</h2><hr></hr><br />
                <input type="text" placeholder={i18n.t('words.name')} required disabled={lockForm} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" required disabled={lockForm} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="" id="" cols="30" rows="5" placeholder={msgPlaceholder}
                    required disabled={lockForm} onChange={(e) => setMsg(e.target.value)}></textarea>
                {lockForm ? (
                    <button className="rough-shadow report-form-btn-disabled" ><img src={MicroLoading} alt={i18n.t('words.loadingPage')}/></button>) : (<>
                        <button className="rough-shadow report-form-btn">{i18n.t('buttons.submit')}</button>
                        <div id="captcha-container">
                            <ReCAPTCHA
                                required={true}
                                ref={recaptchaRef}
                                sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                            />
                        </div>
                    </>)}
            </form>
        </Modal>
    );
}

export default MessageModal;