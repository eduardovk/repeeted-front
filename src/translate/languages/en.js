const messages = {
    en: {
        translations: {
            words: {
                not: 'not',
                doesNot: 'Does not',
                donation: 'donation',
                brazil: 'Brazil',
                thankYou: 'Thank you!',
                analyzedWords: 'Analyzed words',
                analyzedSongs: 'Analyzed songs',
                analyzedArtists: 'Analyzed artists',
                name: 'Name',
                loadingPage: 'Loading page',
                share: 'Share',
                wordcloud: 'Wordcloud',
                barChart: 'Bar Chart',
                advanced: 'Advanced',
                disclaimer1: 'Not 100% accurate (improvements on the way).',
                disclaimer2: 'Let me know',
                disclaimer3: 'in case you found any bugs!'
            },
            buttons: {
                paypalTitle: 'PayPal - The safer, easier way to pay online!',
                paypalAlt: 'Donate with PayPal button',
                searchBar: 'Search by artist or band',
                submit: 'Submit',
                shareResult: 'Share Result',
                reportBug: 'Report Bug',
                seeAll: 'See all',
                seeLess: 'See less',
                backToTop: 'Back to top'
            },
            nav: {
                about: 'About',
                howItWorks: 'How it works',
                contact: 'Contact',
                donate: 'Donate'
            },
            footer: {
                disclaimer1: 'This website does',
                disclaimer2: 'display ads or receive sponsorship!',
                donation1: 'Consider making a',
                donation2: 'to help me keep it running:'
            },
            about: {
                author: 'Author',
                what: 'What is it?',
                whatParagraph: '{{websiteName}} is a website that allows you to find out which words are most repeated by an artist or band, currently with more than 20 thousand artists in its database, in Portuguese, English and Spanish.',
                why: 'Why?',
                whyParagraph: '{{websiteName}} is the result of an idea that came up during an unpretentious conversation, in which I was discussing with a friend what the outcome would be if we could sum up a band through the most repeated words in their lyrics.',
                whyParagraph2: 'After further evaluating the idea of building an application that would fulfill this purpose, some challenges proved to be interesting. It would be a good opportunity to learn more about some technologies, such as web scraping, REST, React, Node.js, and others.',
                whyParagraph3: 'In short, this is a vacation project motivated by the joy of learning new technologies and the fun of programming solutions.',
                how: 'How?',
                howParagraph: 'If you want to know more about how this application works, check the page',
                donation1: 'This website neither displays advertisements nor sells products.',
                donation2: ' So please consider making a',
                donation3: 'to help me keep it running by clicking the button below.',
            },
            genres: {
                allGenres: 'All genres'
            },
            home: {
                seeMore: 'See more >',
                discover: 'Discover the most repeated words by your favorite artist/band!',
                popular: 'Popular',
                followUs: 'New posts everyday at:'
            },
            howItWorks: {
                stackCaption: 'Tech Stack',
                diagramCaption: 'Architecture Diagram',
                paragraph1: '{{websiteName}} is a project motivated by learning new technologies and having fun programming solutions. Its purpose is to make it possible to discover which words are most repeated by an artist or band, using technologies such as web scraping, REST, React, Node.js, and others.',
                paragraph2: `When the idea came up and possible solutions to the problem were put on the table, a preliminary study of APIs brought me to Genius, a huge database of artists, songs and lyrics. Through the API they provide, it is possible to fetch the list of songs of an artist and the respective URLs of the lyrics of each song (the Genius API does not return the lyrics themselves), hosted on the Genius site itself. From then on, it would be a long process of scraping the HTML pages to obtain and process the most repeated words in the artists' lyrics, respecting request limits and other barriers.`,
                paragraph3: 'But before starting the Genius API query process, it was necessary to already have a list of artists (identified by name) to use as a query parameter. This problem was addressed through a series of scripts that crawls through different music websites, scraping lists of the most popular artists of the moment, as well as a series of queries to music streaming service APIs and other databases.',
                paragraph4: `The last step to populate the database was to obtain the music genres of each artist, thus making it possible to identify related artists. For this, the Spotify API's artist information query was used.`
            },
            messageModal: {
                success: 'Message sent successfully!',
                error: 'Error sending the message. Please try again later.',
                captcha: `You must check the "I'm not a robot" option!`,
                reportTitle: 'Report bug',
                reportPlaceholder: 'Describe here the bug you found',
                contactTitle: 'Contact form',
                contactPlaceholder: 'Write your contact message here'
            },
            search: {
                searching: 'Searching for term',
                results: 'Search results'
            },
            wordsPage: {
                mostRepeated: 'Most repeated words by',
                relatedArtists: 'Related artists'
            },
            artistCard: {
                noResults: 'No results found.',
                didntFind1: `Didn't find what you were looking for?`,
                didntFind2: 'Send me a message',
                didntFind3: 'telling me the band name so I can enter it manually!'
            },
            donateModal: {
                title: 'Make a donation',
                line1: 'This website:',
                line2: 'display ads.',
                line3: 'sell products.',
                line4: 'receive sponsorship.',
                donate1: 'Therefore, consider making a',
                donate2: 'to help me keep it running!',
                donate3: 'Just click on the button above to make your donation via',
                highCosts: 'Maintaining this website requires a lot of time and dedication, and generates server costs.'
            },
            shareModal: {
                twitterBody: 'These are the most repeated words by {{name}}. Check out more at:'
            },
            mainModal: {
                goodNews: 'The good news ',
                badNews: 'The bad news ',
                text1: `is that this website has been widely shared over the past few days and this has generated a huge server traffic. `,
                improvements: ' Improvements ',
                text2: `are continually being made based on the suggestions I'm receiving.`,
                text3: `is that hosting costs are getting very high. Since this website doesn't display advertisements, it's starting to become very expensive to keep it running.`,
            }
        }
    }
}

export { messages }