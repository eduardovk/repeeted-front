import React from "react";
import "./style.css";
import Loading from '../../images/loading.svg';

function PageLoading() {

    return (
        <div className="page-loading">
            <img src={Loading} alt="Carregando a página" />
        </div>
    );
}
export default PageLoading;