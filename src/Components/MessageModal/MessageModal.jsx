import React, { useState, useRef } from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import MicroLoading from '../../images/micro-loading.svg';
import ReCAPTCHA from "react-google-recaptcha";
const axios = require('axios').default;

function MessageModal({id_genius, modalTitle, msgPlaceholder, open, setOpen}) {

    const [lockForm, setLockForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const onCloseModal = () => setOpen(false);

    const recaptchaRef = useRef();

    function sendMessage() {
        setLockForm(true);
        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue) {
            const url = 'http://localhost:8080/messages';
            axios.post(url, { name: name, email: email, msg: msg, id_genius:id_genius, captcha: recaptchaValue })
                .then(r => {
                    if (r.status === 201) alert('Mensagem enviada com sucesso!');
                    onCloseModal();
                })
                .catch(e => { alert('Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'); })
                .finally(() => { setLockForm(false); recaptchaRef.current.reset(); });
        } else {
            alert(`É necessário marcar a opção "Não sou um robô"!`);
            setLockForm(false);
        }
    }

    return (
        <Modal open={open} onClose={onCloseModal} center classNames={{
            modal: 'customModal',
        }}>
            <form action="" id="report-form" onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
            }}>
                <h2>{modalTitle}</h2>
                <input type="text" placeholder="Nome" required disabled={lockForm} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="E-mail" required disabled={lockForm} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="" id="" cols="30" rows="5" placeholder={msgPlaceholder}
                    required disabled={lockForm} onChange={(e) => setMsg(e.target.value)}></textarea>
                {lockForm ? (
                    <button className="rough-shadow report-form-btn-disabled" ><img src={MicroLoading} /></button>) : (<>
                        <button className="rough-shadow report-form-btn">Enviar</button>
                        <div id="captcha-container">
                            <ReCAPTCHA
                                required={true}
                                ref={recaptchaRef}
                                sitekey="6LdGNPUbAAAAABL1agR6ryIiFX3Q2vh88mWBVAvY"
                            />
                        </div>
                    </>)}
            </form>
        </Modal>
    );
}

export default MessageModal;