import React, { useState } from 'react';
import "./style.css";
import { FiAlertTriangle } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { Link } from "react-router-dom";
import MessageModal from '../MessageModal/MessageModal';

function Tags({ id_genius, genres }) {

    const [openModal, setOpenModal] = useState(false);

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
                    <Tippy content="Compartilhar Resultado"><div><GiShare id="share-btn" size="2em" /></div></Tippy>
                    <Tippy content="Reportar Erro">
                        <div>
                            <FiAlertTriangle onClick={() => { setOpenModal(true) }} id="report-btn" size="1.8em" />
                        </div>
                    </Tippy>
                </div>
                <MessageModal id_genius={id_genius} modalTitle="Reportar erro"
                    msgPlaceholder="Descreva o erro encontrado" open={openModal} setOpen={setOpenModal} />
            </div>
        </>
    );
}

export default Tags;