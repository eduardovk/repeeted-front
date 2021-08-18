import React, { useState } from 'react';
import "./style.css";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Footer() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <footer>
            <div id="footer-icons">
                <span><AiFillInstagram size={30} /></span>
                <span><AiFillTwitterCircle size={30} /></span>
                <span><AiFillGithub size={30} /></span>
            </div>
            <div id="footer-links">
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>Sobre</span></Link>
                <Link to="/how-it-works"><span>Como Funciona</span></Link>
                <Link to="/"><span>Contato</span></Link>
            </div>
            <div id="footer-donate">
                <span style={{fontSize: '.8em'}}>Este site <b>não</b> exibe propagandas e nem utiliza cookies ou rastreadores!</span><br/>
                <span>Considere fazer uma <b><span style={{color: "#ffc145"}}>doação</span></b> para me ajudar a mantê-lo no ar:</span>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </footer>
    );

}
export default Footer;