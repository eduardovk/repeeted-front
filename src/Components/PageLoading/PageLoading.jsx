import React from "react";
import "./style.css";
import Loading from '../../images/loading.svg';
import { i18n } from '../../translate/i18n';

function PageLoading() {

    return (
        <div className="page-loading">
            <img src={Loading} alt={i18n.t('words.loadingPage')} />
        </div>
    );
}
export default PageLoading;