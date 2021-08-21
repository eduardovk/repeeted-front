import React, { useEffect } from "react";
import "./style.css";
import "animate.css";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';

function HowItWorks() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="container" id="container-howitworks">
            <h2>{i18n.t('nav.howItWorks')}</h2>
            <p>{i18n.t('howItWorks.paragraph1')}</p>
            <p>{i18n.t('howItWorks.paragraph2')}</p>
            <p>{i18n.t('howItWorks.paragraph3')}</p>
            <p>{i18n.t('howItWorks.paragraph4')}</p>
        </div >
    );
}
export default HowItWorks;