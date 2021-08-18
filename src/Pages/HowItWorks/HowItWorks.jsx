import React, { useEffect } from "react";
import "./style.css";
import "animate.css";
import { scrollToTop } from '../../Helpers';

function HowItWorks() {

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="container" id="container-howitworks">
            <h2>Como funciona</h2>
            <p>_ _ _ é um projeto motivado pelo aprendizado de novas tecnologias e pela diversão de programar soluções. Seu propósito é permitir descobrir quais as palavras mais repetidas por um artista ou banda, recorrendo para isto a tecnologias como web scrapping, REST, React, Node.js, entre outras.</p>
            <p>Quando a idéia surgiu e as possíveis soluções para o problema foram postas na mesa, um estudo preliminar de APIs me trouxe até o Genius, um enorme banco de dados de artistas, músicas e letras. Através da API disponibilizada por eles, é possível consultar a lista de músicas de um artista e as respectivas URLs das letras de cada música, hospedadas no próprio site do Genius. A partir daí, seria um longo processo de scrapping das páginas HTML para obter e processar as palavras mais repetidas nas letras dos artistas, respeitando limite de requisições e outras barreiras.</p>
            <p>Mas antes de começar o processo de consultas à API Genius, era necessário já possuir uma lista de artistas (identificados pelo nome) para utilizar como parâmetro de busca na API. Este problema foi abordado através de uma série de scripts que acessam diferentes sites de música, obtendo listas dos cantores mais ouvidos do momento, assim como consultas à APIs de serviço de streaming de música e outros bancos de dados.</p>
            <p>O último passo para popular as informações do banco de dados era obter os gêneros musicais de cada artista, possibilitando assim identificar artistas relacionados. Para isto, foi utillizada a consulta de informações por artista da API do Spotify.
            </p>
        </div >
    );
}
export default HowItWorks;