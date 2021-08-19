import React, { useState } from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';
import ShareModal from '../ShareModal';

function Tags({words, name, id_genius, genres }) {

    const [openMsgModal, setOpenMsgModal] = useState(false);
    const [openShareModal, setOpenShareModal] = useState(false);

    return (
        <>
            <div className="tags-container">
                <h3>Tags: </h3>
                {genres.length > 0 && (<>
                    {genres.map((genre, idx) => (
                        <Link key={idx} className="no-decor" to={"/genre/" + genre.slug} >
                            <span className="shadow">{genre.name}</span>
                        </Link>
                    ))}
                </>)}
                <div className="share-report">
                    <Tippy content="Compartilhar Resultado">
                        <div>
                            <GiShare id="share-btn" size="2em" onClick={() => { setOpenShareModal(true) }} />
                        </div>
                    </Tippy>
                    <Tippy content="Reportar Erro">
                        <div>
                            <FiAlertTriangle onClick={() => { setOpenMsgModal(true) }} id="report-btn" size="1.8em" />
                        </div>
                    </Tippy>
                </div>
                <ShareModal words={words} name={name} open={openShareModal} setOpen={setOpenShareModal} />
                <MessageModal id_genius={id_genius} modalTitle="Reportar erro"
                    msgPlaceholder="Descreva o erro encontrado" open={openMsgModal} setOpen={setOpenMsgModal} />
            </div>
        </>
    );
}

export default Tags;