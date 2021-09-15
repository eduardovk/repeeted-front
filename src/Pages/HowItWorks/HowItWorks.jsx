import React, { useEffect, useContext } from "react";
import "./style.css";
import "animate.css";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';

function HowItWorks() {

    const { websiteName, lang } = useContext(GlobalContext);
    const S3URL = lang === 'pt-BR' ? process.env.REACT_APP_S3_SA_URL : process.env.REACT_APP_S3_US_URL;

    useEffect(() => {
        scrollToTop();
    }, []);

    const TextImage = ({ img, caption }) => {
        return (
            <div className="text-img">
                <img src={S3URL + img} alt={caption} />
                <span className="img-caption">{caption}</span>
            </div>
        );
    }

    return (
        <div className="container" id="container-howitworks">
            <h2>{i18n.t('nav.howItWorks')}</h2>
            <p>{i18n.t('howItWorks.paragraph1', { websiteName: websiteName })}</p>
            <TextImage img="RepeetedStack.jpg" caption={i18n.t('howItWorks.stackCaption')} />
            <p>{i18n.t('howItWorks.paragraph2')}</p>
            <p>{i18n.t('howItWorks.paragraph3')}</p>
            <p>{i18n.t('howItWorks.paragraph4')}</p>
            <TextImage img="RepeetedDiagram.jpg" caption={i18n.t('howItWorks.diagramCaption')} />
        </div >
    );
}
export default HowItWorks;