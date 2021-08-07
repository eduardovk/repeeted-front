import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import RushWords from '../../images/rush.png';
import CannibalCorpseWords from '../../images/cannibal-corpse.png';
import CardiBWords from '../../images/cardi-b.png';
import ArtistCards from '../../Components/ArtistCards/ArtistCards';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { scrollToTop } from '../../Helpers';

function Home() {

    const [fieldTerm, setFieldTerm] = useState("");
    const artists = [
        { name: 'Drake', slug: "drake", cover: 'https://images.genius.com/c6b5142a09ff5bd361d0f42a55692edc.1000x1000x1.jpg' },
        { name: 'Eminem', slug: "eminem", cover: 'https://images.genius.com/c674178296f3d65792a66f851fbc62fc.900x900x1.png' },
        { name: 'Billie Eilish', slug: "billie-eilish", cover: 'https://images.genius.com/1aa6c04aad3652556046bb3aabe96498.900x900x1.jpg' },
        { name: 'Lana Del Rey', slug: "lana-del-rey", cover: 'https://images.genius.com/a90b579f172cd6ff536fc094109179a0.465x465x1.png' },
        { name: 'The Weeknd', slug: "the-weeknd", cover: 'https://images.genius.com/f0813e600d43b8b43c94e8ba1dde880a.640x640x1.png' },
        { name: 'Pink Floyd', slug: "pink-floyd", cover: 'https://images.genius.com/6b5c50912d99c3cf0eabfec5f427c452.1000x1000x1.jpg' }
    ]

    useEffect(()=>{scrollToTop()},[]);

    function setFieldSearchTerm(term) {
        setFieldTerm(term.trim());
    }

    function submitFieldSearch() {
        document.getElementById('field-search-form').submit();
    }

    const ExampleArtist = (props) => {
        return (
            <div className="example-artist">
                <Link to={"/" + props.slug}>
                    <div className="example-white"></div>
                    <img src={props.img} />
                    <div className="example-footer">Ver mais {'>'}&nbsp;</div>
                </Link>
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
                <ExampleArtist img={RushWords} slug="rush" />
                <ExampleArtist img={CannibalCorpseWords} slug="cannibal-corpse" />
                <ExampleArtist img={CardiBWords} slug="cardi-b" />
            </div>
            <div className="container">
                <form id="field-search-form" action={"/search/" + fieldTerm}>
                    <div id="home-search">
                        <input id="home-input" type="text" placeholder="Pesquise artista ou banda"
                            onChange={(event) => { setFieldSearchTerm(event.target.value); }} />
                        <span><FaSearch id="search-btn" size={22} onClick={() => { submitFieldSearch() }} /></span>
                    </div>
                </form >
                <ArtistCards title="Mais pesquisados" loading={false} artists={artists} />
            </div>
        </div>

    );
}
export default Home;