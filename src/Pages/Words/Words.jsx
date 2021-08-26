import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ArtistInfo from '../../Components/ArtistInfo';
import WordCloud from '../../Components/WordCloud';
import Tags from '../../Components/Tags';
import Accordion from '../../Components/Accordion';
import ArtistCards from '../../Components/ArtistCards';
import PageLoading from "../../Components/PageLoading";
import { scrollToTop } from '../../Helpers';
import {i18n} from '../../translate/i18n';
const axios = require('axios').default;

function Words() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [loadingRelated, setLoadingRelated] = useState(true);
    const [artist, setArtist] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState(null);
    const [songs, setSongs] = useState(null);
    const [genres, setGenres] = useState([]);
    const [songsData, setSongsData] = useState(null);

    useEffect(() => {
        scrollToTop();
        if (slug.trim()) {
            setLoading(true);
            setLoadingRelated(true);
            axios.get('http://localhost:8080/words/' + slug).then(res => {
                if (res.data && res.data.artist) {
                    setArtist(res.data.artist);
                    setSongs(res.data.songs);
                    setGenres(res.data.genres);
                    let totalWords = 0;
                    res.data.songs.map(s => { totalWords += s.analyzed; return s; });
                    setSongsData({
                        total_songs: res.data.songs.length,
                        total_words: totalWords
                    });
                    setLoading(false);
                    const related = res.data.artist.related;
                    if (related && related !== '0') {
                        axios.get('http://localhost:8080/search/related/' + related).then(resp => {
                            if (resp.data && resp.data.response)
                                setRelatedArtists(resp.data.response);
                        }).catch(e => console.log(e));
                    }
                    setLoadingRelated(false);
                }
            }).catch(e => console.log(e));
        }
    }, [slug]);

    return (
        <>
            {loading ? (<PageLoading />) : (
                <div className="container">
                    <ArtistInfo artist={artist} total_songs={songsData.total_songs} total_words={songsData.total_words} />
                    <h2>{i18n.t('wordsPage.mostRepeated')} {artist.name}</h2>
                    <div className="shadow animate__animated animate__backInUp">
                        <WordCloud words={artist.words} />
                        <Tags words={artist.words} name={artist.name} id_genius={artist.id_genius} genres={genres} />
                        <Accordion total_songs={songsData.total_songs} songs={songs} />
                    </div>
                    <ArtistCards title={i18n.t('wordsPage.relatedArtists')} loading={loadingRelated} artists={relatedArtists} />
                </div>
            )}

        </>

    );
}
export default Words;