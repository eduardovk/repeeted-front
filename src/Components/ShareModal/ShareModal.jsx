import React from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import { RiCloseLine } from 'react-icons/ri';
import { AiFillTwitterCircle, AiFillFacebook, AiFillRedditCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { i18n } from '../../translate/i18n';

function ShareModal({ words, name, open, setOpen }) {

    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <span style={{ color: "#0e2138" }}><RiCloseLine size={30} /></span>
    );

    const url = encodeURI(window.location.href);
    const nameTag = encodeURI(name.replaceAll(' ', ''));

    const getTwitterMsg = () => {
        var tweetBody = ` - ` + i18n.t('shareModal.twitterBody', {name:name});
        var charLimit = 265 - (tweetBody + nameTag + url).length;
        var wordsString = `"`;
        for (let i = 0; i < words.length; i++) {
            if ((wordsString + words[i].text).length <= charLimit)
                wordsString += words[i].text.charAt(0).toUpperCase() + words[i].text.slice(1) + ", ";
            if (i > 7) break;
        }
        if (wordsString !== `"`) wordsString = wordsString.slice(0, -2) + `."`;
        tweetBody = wordsString + tweetBody;
        return encodeURI(tweetBody);
    }

    const getRedditUrl = () => {
        let title = encodeURI(`The most repeated words by ${name}`);
        return `https://reddit.com/submit?url=${url}&title=${title}`;
    }

    const getWhatsappUrl = () => {
        let msg = getTwitterMsg() + url;
        return `https://api.whatsapp.com/send?text=${msg}`;
    }

    const getTelegramUrl = () => {
        let msg = getTwitterMsg() + url;
        return `https://t.me/share/url?url=${url}&text=${msg}`;
    }

    return (
        <Modal open={open} onClose={onCloseModal} focusTrapped={false} center classNames={{
            modal: 'customModal-share',
        }} closeIcon={closeIcon}>
            <div id="modal-share-body">
                <h2>{i18n.t('words.share')}</h2><hr></hr>
                <div id="modal-share">
                    <Tippy content="Twitter">
                        <a className="no-decor twitter-icon" target="_blank" href={`https://twitter.com/share?url=${url}&text=${getTwitterMsg()}&hashtags=${nameTag},Repetician`}>
                            <AiFillTwitterCircle size={40} />
                        </a>
                    </Tippy>
                    <Tippy content="Facebook">
                        <span className="facebook-icon" onClick={() => { window.open(`https://www.facebook.com/sharer.php?u=${url}`, '', 'width=500,height=800') }}>
                            <AiFillFacebook size={40} />
                        </span>
                    </Tippy>
                    <Tippy content="Reddit">
                        <a className="no-decor reddit-icon" target="_blank" href={getRedditUrl()}>
                            <AiFillRedditCircle size={40} />
                        </a>
                    </Tippy>
                    <Tippy content="Telegram">
                        <a className="no-decor telegram-icon" target="_blank" href={getTelegramUrl()}>
                            <FaTelegram size={35} />
                        </a>
                    </Tippy>
                    <Tippy content="Whatsapp">
                        <a className="no-decor whatsapp-icon" target="_blank" href={getWhatsappUrl()}>
                            <AiOutlineWhatsApp size={40} />
                        </a>
                    </Tippy>
                </div>
            </div>
        </Modal >
    );
}

export default ShareModal;