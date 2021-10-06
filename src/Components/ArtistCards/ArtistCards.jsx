import React, { useContext, useState } from 'react';
import "./style.css";
import Loading from '../../images/loading.svg';
import Blank from '../../images/blank.png';
import { Link } from "react-router-dom";
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { generateImgURL } from '../../Helpers';
import MessageModal from '../MessageModal/MessageModal';

function ArtistCards(props) {

    const { lang } = useContext(GlobalContext);
    const [openMsgModal, setOpenMsgModal] = useState(false);

    const ArtistCard = ({ artist }) => {
        return (
            <div className="artist-card">
                <Link to={"/" + artist.slug}>
                    <div className="artist-bg" style={{ backgroundImage: "url(" + generateImgURL(artist, lang) + ")", backgroundSize: "cover" }}></div>
                    <div className="card-white"></div>
                    <img src={Blank} alt={artist.name} />
                    <div className="card-title">{artist.name}</div>
                </Link>
            </div>
        );
    }

    return (
        <>
            <h2>{props.title}</h2>
            <div className="artist-cards-container ">
                {props.loading ? (
                    <div id="loading-box">
                        <img src={Loading} alt={i18n.t('words.loadingPage')} />
                    </div>
                ) : (<>
                    {props.artists && props.artists.length > 0 ? (
                        <>
                            {props.artists.map((artist, idx) => (
                                <ArtistCard key={idx} artist={artist} />
                            ))}
                        </>
                    ) : (<h2 id="no-result">{i18n.t('artistCard.noResults')}</h2>)}
                    {props.didntFindMessage ? (<span id="didnt-find"><b>{i18n.t('artistCard.didntFind1')}</b> <br />
                        <span id="message-me" onClick={() => { setOpenMsgModal(true) }}>{i18n.t('artistCard.didntFind2')} </span>
                        {i18n.t('artistCard.didntFind3')}
                    </span>) : (<></>)}
                </>)}
                <MessageModal id_genius={null} modalTitle={i18n.t('messageModal.contactTitle')}
                    msgPlaceholder={i18n.t('messageModal.contactPlaceholder')} open={openMsgModal} setOpen={setOpenMsgModal} />
            </div>
        </>
    );
}

export default ArtistCards;