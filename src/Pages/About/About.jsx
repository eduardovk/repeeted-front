import React, {useEffect} from "react";
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import ProfilePic from '../../images/profile.jpg';
import { scrollToTop } from '../../Helpers';
import { GoLinkExternal } from 'react-icons/go';

function About() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="container" id="about-container">
            <div id="author-container" className="shadow">
                <img id="author-pic" src={ProfilePic} />
                <div id="author-info">
                    <p style={{ fontSize: "1.3em", fontWeight: 700 }}>Eduardo V. Kuhn <span style={{ color: "grey" }}>(Autor)</span></p><hr />
                    <p style={{ fontSize: "1.1em", fontWeight: 600 }}><i>Web Developer</i></p>
                    <p style={{ fontSize: ".9em" }}>Porto Alegre/RS - Brasil</p>
                    <span id="author-links">
                        <a target="_blank" href="https://linktr.ee/eduardovk">Linktree<GoLinkExternal /></a>
                    </span>
                </div>
            </div>
            <article id="about-text">
                <h2>O quê?</h2>
                <p>_ _ _ é um site que lhe permite descobrir quais as palavras mais repetidas por um artista ou banda, contando atualmente com mais de 20 mil artistas no seu banco de dados, nos idiomas português, inglês e espanhol.</p>
                <h2>Por quê?</h2>
                <p>_ _ _ é o produto de uma idéia surgida durante uma conversa despretensiosa, na qual eu discutia com um amigo qual seria o resultado se pudéssemos resumir uma banda através das palavras mais repetidas nas letras de suas músicas.</p>
                <p>Após avaliar melhor a idéia da construção de uma aplicação que cumprisse este propósito, alguns desafios se mostraram interessantes. Seria uma boa oportunidade para aprender mais sobre algumas tecnologias, como web scrapping, REST, React, Node.js, entre outras.</p>
                <p>Resumindo, este é um projeto de férias motivado pelo aprendizado de novas tecnologias e pela diversão de programar soluções. </p>
                <h2>Como?</h2>
                <p>Se você deseja saber mais sobre o funcionamento desta aplicação, confira a página <Link className="no-decor" to="/how-it-works"><span style={{ color: "#0c315e", fontSize: ".7em" }}><b>COMO FUNCIONA</b></span></Link>.</p>
            </article>
            <article id="about-donate">
                <p><i>Este site não exibe propagandas nem comercializa produtos. Portanto, considere fazer uma <span style={{ color: "#b17b0f" }}><b>doação</b></span> para me ajudar a mantê-lo no ar, clicando no botão abaixo. <b>Muito obrigado!</b></i></p>
            </article>
            <div id="about-donate-btn">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div >
    );
}
export default About;