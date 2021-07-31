import React from "react";
import "./style.css";
import "animate.css";
import RushWords from '../../images/rush.png';
import CannibalCorpseWords from '../../images/cannibal-corpse.png';
import CardiBWords from '../../images/cardi-b.png';
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { FaSearch } from 'react-icons/fa';

function Home() {

    const artists = [
        { name: 'Drake', img: 'https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg' },
        { name: 'Eminem', img: 'https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png' },
        { name: 'Kanye West', img: 'https://images.genius.com/ff12f8b733e024adf005ff2a4aff4a07.639x639x1.jpg' },
        { name: 'Kendrick Lamar', img: 'https://images.genius.com/25d8a9c93ab97e9e6d5d1d9d36e64a53.1000x1000x1.jpg' },
        { name: 'The Weeknd', img: 'https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png' },
        { name: 'Thirty Seconds to Mars', img: 'https://images.genius.com/5ff67a7842c056be139b272de8f8bd83.1000x1000x1.jpg' }
    ]

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
                <span><FaSearch id="search-btn" size={22} /></span>
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
                <ArtistCards title="Mais pesquisados" artists={artists} />
            </div>
        </div>

    );
}
export default Home;