import React, { useState, useRef } from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";
import { Modal } from 'react-responsive-modal';
import MicroLoading from '../../images/micro-loading.svg';
import ReCAPTCHA from "react-google-recaptcha";
const axios = require('axios').default;

function Tags(genres) {

    const [open, setOpen] = useState(false);
    const [lockForm, setLockForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const recaptchaRef = useRef();

    function sendMessage() {
        setLockForm(true);
        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue) {
            const url = 'http://localhost:8080/messages';
            axios.post(url, { name: name, email: email, msg: msg, captcha: recaptchaValue })
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
        <>
            <div className="tags-container">
                <h3>Tags: </h3>
                {genres.genres.length > 0 && (<>
                    {genres.genres.map((genre, idx) => (
                        <Link key={idx} className="no-decor" to={"/genre/" + genre.slug} >
                            <span className="shadow">{genre.name}</span>
                        </Link>
                    ))}
                </>)}
                <div className="share-report">
                    <Tippy content="Compartilhar Resultado"><div><GiShare id="share-btn" size="2em" /></div></Tippy>
                    <Tippy content="Reportar Erro"><div><FiAlertTriangle onClick={onOpenModal} id="report-btn" size="1.8em" /></div></Tippy>
                </div>
                <Modal open={open} onClose={onCloseModal} center classNames={{
                    modal: 'customModal',
                }}>
                    <form action="" id="report-form" onSubmit={(event) => {
                        event.preventDefault();
                        sendMessage();
                    }}>
                        <h2>Reportar Erro</h2>
                        <input type="text" placeholder="Nome" required disabled={lockForm} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="E-mail" required disabled={lockForm} onChange={(e) => setEmail(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="5" placeholder="Descreva o erro encontrado"
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
            </div>
        </>
    );
}

export default Tags;