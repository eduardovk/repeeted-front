import React, { useEffect } from "react";
import "./style.css";
import "animate.css";
import { Link } from "react-router-dom";
import ProfilePic from '../../images/profile.jpg';
import { scrollToTop } from '../../Helpers';
import { GoLinkExternal } from 'react-icons/go';
import { i18n } from '../../translate/i18n';
import PaypalButton from "../../Components/PaypalButton/PaypalButton";

function About() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="container" id="about-container">
            <div id="author-container" className="shadow">
                <img id="author-pic" src={ProfilePic} />
                <div id="author-info">
                    <p style={{ fontSize: "1.3em", fontWeight: 700 }}>Eduardo V. Kuhn <span style={{ color: "grey" }}>({i18n.t('about.author')})</span></p><hr />
                    <p style={{ fontSize: "1.1em", fontWeight: 600 }}><i>Web Developer</i></p>
                    <p style={{ fontSize: ".9em" }}>Porto Alegre/RS - {i18n.t('words.brazil')}</p>
                    <span id="author-links">
                        <a target="_blank" href="https://linktr.ee/eduardovk">Linktree<GoLinkExternal /></a>
                    </span>
                </div>
            </div>
            <article id="about-text">
                <h2>{i18n.t('about.what')}</h2>
                <p>{i18n.t('about.whatParagraph')}</p>
                <h2>{i18n.t('about.why')}</h2>
                <p>{i18n.t('about.whyParagraph')}</p>
                <p>{i18n.t('about.whyParagraph2')}</p>
                <p>{i18n.t('about.whyParagraph3')}</p>
                <h2>{i18n.t('about.how')}</h2>
                <p>{i18n.t('about.howParagraph')} <Link className="no-decor" to="/how-it-works"><span style={{ color: "#0c315e", fontSize: ".7em" }}><b>{i18n.t('nav.howItWorks').toUpperCase()}</b></span></Link>.</p>
            </article>
            <article id="about-donate">
                <p><i>{i18n.t('about.donation1')} <span style={{ color: "#b17b0f" }}><b>{i18n.t('words.donation')}</b></span> {i18n.t('about.donation2')} <b>{i18n.t('words.thankYou')}</b></i></p>
            </article>
            <div id="about-donate-btn">
                <PaypalButton />
            </div>
        </div >
    );
}
export default About;