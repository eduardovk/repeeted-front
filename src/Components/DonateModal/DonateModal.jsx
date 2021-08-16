import React from 'react';
import "./style.css";
import { Modal } from 'react-responsive-modal';
import { RiCloseLine } from 'react-icons/ri';

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
                <h2>Faça uma doação</h2><hr></hr>
                <div id="modal-donate">
                    <div id="donate-text">
                        <span style={{ fontSize: "1em" }}>Este site:</span>
                        <span>- <b>Não</b> exibe propagandas.</span>
                        <span>- <b>Não</b> utiliza cookies.</span>
                        <span>- <b>Não</b> utiliza rastreadores.</span>
                    </div>
                    <div id="donate-section">
                        <span>Portanto, considere fazer uma <b><span style={{ color: "#ffc145" }}>doação</span></b> para me ajudar a mantê-lo no ar!</span>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
                            <input type="hidden" name="no_recurring" value="0" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <span style={{ fontSize: ".8em" }}>Basta clicar no botão acima para fazer sua doação via
                            &nbsp;<span style={{ color: '#0a62d0' }}><b><i>Paypal</i></b></span></span><br />
                        <br /><span><b>Muito obrigado!</b></span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default DonateModal;