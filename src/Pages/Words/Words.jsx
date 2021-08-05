import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ArtistInfo from '../../Components/ArtistInfo';
import WordCloud from '../../Components/WordCloud';
import Tags from '../../Components/Tags';
import Accordion from '../../Components/Accordion';
import ArtistCards from '../../Components/ArtistCards';
import PageLoading from "../../Components/PageLoading";
const axios = require('axios').default;

function Words() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [artist, setArtist] = useState(null);
    const [songs, setSongs] = useState(null);
    const [genres, setGenres] = useState([]);
    const [songsData, setSongsData] = useState(null);

    useEffect(() => {
        if (slug.trim()) {
            setLoading(true);
            axios.get('http://localhost:8080/words/' + slug).then(res => {
                if (res.data && res.data.artist) {
                    setArtist(res.data.artist);
                    setSongs(res.data.songs);
                    setGenres(res.data.genres);
                    let totalWords = 0;
                    res.data.songs.map(s => { totalWords += s.analyzed });
                    setSongsData({
                        total_songs: res.data.songs.length,
                        total_words: totalWords
                    });
                    setLoading(false);
                }
            }).catch(e => console.log(e));
        }
    }, []);

    return (
        <>
            {loading ? (<PageLoading />) : (
                <div className="container">
                    <ArtistInfo artist={artist} total_songs={songsData.total_songs} total_words={songsData.total_words} />
                    <h2>Palavras mais repetidas por {artist.name}</h2>
                    <div className="shadow animate__animated animate__backInUp">
                        <WordCloud words={artist.words} />
                        <Tags genres={genres} />
                        <Accordion total_songs={songsData.total_songs} songs={songs} />
                    </div>
                    <ArtistCards title="Artistas relacionados" />
                </div>
            )}

        </>

    );
}
export default Words;