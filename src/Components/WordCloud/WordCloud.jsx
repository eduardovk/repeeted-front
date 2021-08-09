import React, { useState, useEffect } from 'react';
import "./style.css";
import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Loading from '../../images/loading.svg';

function WordCloud({ words }) {

    const [showWordCloud, setShowWordCloud] = useState(false);

    const options = {
        rotations: 0,
        fontSizes: [12, 75],
        layout: "rectangular",
        fontFamily: "Oswald",
        maxWords: 250,
        scale: 'log'
    };

    useEffect(() => {
        setTimeout(function () {
            setShowWordCloud(true);
        }, 1500);
    }, []);


    return (
        <>
            <div className="wordcloud-container">
                {!showWordCloud ? (<p><img src={Loading} /></p>) : (<ReactWordcloud words={words} options={options} />)}
            </div>
        </>
    );
}

export default WordCloud;
