import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import ArtistInfo from '../../Components/ArtistInfo';
import WordCloud from '../../Components/WordCloud';
import Tags from '../../Components/Tags';
import Accordion from '../../Components/Accordion';
import ArtistCards from '../../Components/ArtistCards';
import PageLoading from "../../Components/PageLoading";
import { scrollToTop } from '../../Helpers';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
import AdSense from 'react-adsense';
const axios = require('axios').default;


function Words() {
    const { slug } = useParams();
    const { apiURL, wordsFilter, showAds } = useContext(GlobalContext);
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
            axios.get(`${apiURL}/words/` + slug).then(res => {
                if (res.data && res.data.artist) {
                    res.data.artist.slug = slug;
                    res.data.artist.words = res.data.artist.words.filter(w => !wordsFilter.includes(w.text.toLowerCase()));
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
                        axios.get(`${apiURL}/search/related/` + related).then(resp => {
                            if (resp.data && resp.data.response)
                                setRelatedArtists(resp.data.response);
                        }).catch(e => console.log(e));
                    }
                    setLoadingRelated(false);
                }
            }).catch(e => console.log(e));
        }
    }, [slug, apiURL, wordsFilter]);

    return (
        <>
            {loading ? (<PageLoading />) : (
                <div className="container">
                    {showAds === "true" ? (<AdSense.Google
                        client='ca-pub-0784450957182617'
                        slot='6157089592'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true'
                        layoutKey='-gw-1+2a-9x+5c'
                    />) : (<></>)}
                    <ArtistInfo artist={artist} total_songs={songsData.total_songs} total_words={songsData.total_words} />
                    <h2>*{i18n.t('wordsPage.mostRepeated')} {artist.name}</h2>
                    <div className="shadow animate__animated animate__backInUp">
                        <WordCloud words={artist.words} artist={artist.name} id_genius={artist.id_genius} />
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