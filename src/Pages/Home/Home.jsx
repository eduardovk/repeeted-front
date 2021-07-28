import React from "react";
import "./style.css";
import "animate.css";
import RushWords from '../../images/rush.png';
import CannibalCorpseWords from '../../images/cannibal-corpse.png';
import CardiBWords from '../../images/cardi-b.png';
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { FaSearch } from 'react-icons/fa';

function Home() {

    const ExampleArtist = (props) => {
        return (
            <div className="example-artist">
                <div className="example-white"></div>
                <img src={props.img} />
                <div className="example-footer">Ver mais {'>'}&nbsp;</div>
            </div>
        );
    }

    const SearchField = (props) => {
        return (
            <div id="home-search">
                <input id="home-input" type="text" placeholder="Pesquise artista ou banda" />
                <span><FaSearch id="search-btn" size={22}/></span>
            </div>
        );
    }

    return (
        <div id="homepage-container">
            <div id="numbers-info">
                <h1>Descubra as palavras mais repetidas por seu artista/banda favorito!</h1>
                <div id="total-words">
                    <h2 className="animate__animated animate__flipInX">5.674.831</h2>
                    <h3>PALAVRAS ANALISADAS</h3>
                </div>
                <div className="amounts-info">
                    <div>
                        <h2 className="animate__animated animate__flipInX">12.523</h2>
                        <h3>ARTISTAS ANALISADOS</h3>
                    </div>
                    <div>
                        <h2 className="animate__animated animate__flipInX">1.685.523</h2>
                        <h3>MÚSICAS ANALISADAS</h3>
                    </div>
                </div>
            </div>
            <div id="examples-artists">
                <ExampleArtist img={RushWords} />
                <ExampleArtist img={CannibalCorpseWords} />
                <ExampleArtist img={CardiBWords} />
            </div>
            <div className="container">
                <SearchField />
                <ArtistCards title="Mais pesquisados" />
            </div>
        </div>

    );
}
export default Home;