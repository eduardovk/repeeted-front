import React, { useState, useEffect } from 'react';
import "./style.css";
import ReactWordcloud from 'react-wordcloud';
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Loading from '../../images/loading.svg';
import { i18n } from '../../translate/i18n';
import Chart from "react-google-charts";
import { IoIosClose } from 'react-icons/io';
import MessageModal from '../MessageModal/MessageModal';

function WordCloud({ words, artist, id_genius }) {

    const [showWordCloud, setShowWordCloud] = useState(false);
    const [showBarChart, setShowBarChart] = useState(localStorage.getItem('showBarChart'));
    const [openMsgModal, setOpenMsgModal] = useState(false);
    const [hiddenDisclaimer, setHiddenDisclaimer] = useState(localStorage.getItem('hiddenDisclaimer'));


    const options = {
        rotations: 0,
        fontSizes: [12, 75],
        layout: "rectangular",
        fontFamily: "Oswald",
        maxWords: 250,
        scale: 'log'
    };

    function changeChart(value) {
        localStorage.setItem('showBarChart', value);
        setShowBarChart(value);
    }

    function hideDisclaimer() {
        localStorage.setItem('hiddenDisclaimer', 'true');
        setHiddenDisclaimer('true');
    }

    const wordArr = words.map(n => [n.text, n.value, '#13355d', n.value]).slice(0, 50);

    useEffect(() => {
        setTimeout(function () {
            setShowWordCloud(true);
        }, 1500);
    }, []);

    return (
        <>
            <div className="wordcloud-container">
                {!showWordCloud ? (<p><img src={Loading} alt={i18n.t('words.loadingPage')} /></p>) : (
                    <>
                        <div className="wordcloud-toolbar">
                            <span className={showBarChart === 'true' ? ("wordcloud-button") : ("wordcloud-button selected")} onClick={() => { changeChart('false') }}>
                                {i18n.t('words.wordcloud')}
                            </span>
                            <span className={showBarChart === 'true' ? ("wordcloud-button selected") : ("wordcloud-button")} onClick={() => { changeChart('true') }}>
                                {i18n.t('words.barChart')}
                            </span>
                            {/* <span className={showStats ? ("wordcloud-button") : ("wordcloud-button")}>
                                {i18n.t('words.advanced')}
                            </span> */}
                        </div>
                        {showBarChart === 'true' ? (
                            <div id="chart-container">
                                <Chart
                                    chartType="BarChart"
                                    loader={<div>{i18n.t('words.loadingPage')}</div>}
                                    data={[
                                        [
                                            'Words',
                                            'Count',
                                            { role: 'style' },
                                            { role: 'annotation' }
                                        ],
                                        ...wordArr,
                                    ]}
                                    options={{
                                        width: "90%",
                                        title: i18n.t('wordsPage.mostRepeated') + ' ' + artist,
                                        height: 10 + wordArr.length * 40,
                                        bar: { groupWidth: '75%' },
                                        chartArea: { top: 80, height: "90%" },
                                        legend: { position: 'none' },
                                        hAxis: { gridlines: { count: 0 } }
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '6' }}
                                />
                            </div>
                        ) : (<>
                            <ReactWordcloud words={words} options={options} />
                            {hiddenDisclaimer !== 'true' ? (<div id="disclaimer-container">
                                <span id="disclaimer">
                                    <b>*</b> {i18n.t('words.disclaimer1')} <span id="disclaimer-click" onClick={() => { setOpenMsgModal(true) }}><u>{i18n.t('words.disclaimer2')}</u></span> {i18n.t('words.disclaimer3')}
                                </span>
                                <span id="disclaimer-close" onClick={hideDisclaimer}>
                                    <IoIosClose size={25} />
                                </span>
                            </div>) : (<></>)}


                        </>)}
                    </>
                )}
                <MessageModal id_genius={id_genius} modalTitle={i18n.t('messageModal.reportTitle')}
                    msgPlaceholder={i18n.t('messageModal.reportPlaceholder')} open={openMsgModal} setOpen={setOpenMsgModal} />
            </div>
        </>
    );
}

export default WordCloud;
