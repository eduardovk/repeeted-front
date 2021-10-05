# Repeeted
 by Eduardo Vicenzi Kuhn

#### This project consists of three main repositories:

#### [Repeeted Front-end](https://github.com/eduardovk/repeeted-front)
#### [Repeeted API (currently private)](https://github.com/eduardovk/repeeted-api)
#### [Repeeted Engine (currently private)](https://github.com/eduardovk/repeeted-engine)

#### And, of course, the Repeeted website: [repeeted.com](https://www.repeeted.com/)

## What is it?
Repeeted is a website that allows you to find out which words are most repeated by an artist or band, currently with more than 20 thousand artists in its database, in Portuguese, English and Spanish.

## Why?
Repeeted is the result of an idea that came up during an unpretentious conversation, in which I was discussing with a friend what the outcome would be if we could sum up a band through the most repeated words in their lyrics.

After further evaluating the idea of building an application that would fulfill this purpose, some challenges proved to be interesting. It would be a good opportunity to learn more about some technologies, such as web scrapping, REST, React, Node.js, and others.

In short, this is a vacation project motivated by the joy of learning new technologies and the fun of programming solutions.

## How?

![alt text](https://raw.githubusercontent.com/eduardovk/repeeted-front/main/git_images/RepeetedStack.jpg)

When the idea came up and possible solutions to the problem were put on the table, a preliminary study of APIs brought me to Genius, a huge database of artists, songs and lyrics. Through the API they provide, it is possible to fetch the list of songs of an artist and the respective URLs of the lyrics of each song (the Genius API does not return the lyrics themselves), hosted on the Genius site itself. From then on, it would be a long process of scrapping the HTML pages to obtain and process the most repeated words in the artists' lyrics, respecting request limits and other barriers.

But before starting the Genius API query process, it was necessary to already have a list of artists (identified by name) to use as a query parameter. This problem was addressed through a series of scripts that crawls through different music websites, scrapping lists of the most popular artists of the moment, as well as a series of queries to music streaming service APIs and other databases.

The last step to populate the database was to obtain the music genres of each artist, thus making it possible to identify related artists. For this, the Spotify API's artist information query was used.

![alt text](https://raw.githubusercontent.com/eduardovk/repeeted-front/main/git_images/RepeetedDiagram.jpg)
