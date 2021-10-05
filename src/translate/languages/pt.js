const messages = {
    pt: {
        translations: {
            words: {
                not: 'não',
                doesNot: 'Não',
                donation: 'doação',
                brazil: 'Brasil',
                thankYou: 'Muito obrigado!',
                analyzedWords: 'Palavras analisadas',
                analyzedSongs: 'Músicas analisadas',
                analyzedArtists: 'Artistas analisados',
                name: 'Nome',
                loadingPage: 'Carregando a página',
                share: 'Compartilhar',
                wordcloud: 'Nuvem de palavras',
                barChart: 'Barras',
                advanced: 'Avançado'
            },
            buttons: {
                paypalTitle: 'PayPal - A maneira mais segura e fácil de fazer pagamentos online!',
                paypalAlt: 'Doar com o botão Paypal',
                searchBar: 'Procure por artista ou banda',
                submit: 'Enviar',
                shareResult: 'Compartilhar Resultado',
                reportBug: 'Reportar Erro',
                seeAll: 'Ver tudo',
                seeLess: 'Ver menos',
                backToTop: 'Voltar ao topo'
            },
            nav: {
                about: 'Sobre',
                howItWorks: 'Como funciona',
                contact: 'Contato',
                donate: 'Doar'
            },
            footer: {
                disclaimer1: 'Este site',
                disclaimer2: 'exibe propagandas e nem recebe patrocínio!',
                donation1: 'Considere fazer uma',
                donation2: 'para me ajudar a mantê-lo no ar:'
            },
            about: {
                author: 'Autor',
                what: 'O quê?',
                whatParagraph: '{{websiteName}} é um site que lhe permite descobrir quais as palavras mais repetidas por um artista ou banda, contando atualmente com mais de 20 mil artistas no seu banco de dados, nos idiomas português, inglês e espanhol.',
                why: 'Por quê?',
                whyParagraph: '{{websiteName}} é o produto de uma idéia surgida durante uma conversa despretensiosa, na qual eu discutia com um amigo qual seria o resultado se pudéssemos resumir uma banda através das palavras mais repetidas nas letras de suas músicas.',
                whyParagraph2: 'Após avaliar melhor a idéia da construção de uma aplicação que cumprisse este propósito, alguns desafios se mostraram interessantes. Seria uma boa oportunidade para aprender mais sobre algumas tecnologias, como web scrapping, REST, React, Node.js, entre outras.',
                whyParagraph3: 'Resumindo, este é um projeto de férias motivado pelo aprendizado de novas tecnologias e pela diversão de programar soluções.',
                how: 'Como?',
                howParagraph: 'Se você deseja saber mais sobre o funcionamento desta aplicação, confira a página',
                donation1: 'Este site não exibe propagandas nem comercializa produtos. Portanto, considere fazer uma',
                donation2: 'para me ajudar a mantê-lo no ar, clicando no botão abaixo.',
            },
            genres: {
                allGenres: 'Todos os gêneros',
            },
            home: {
                seeMore: 'Ver mais >',
                discover: 'Descubra as palavras mais repetidas por seu artista/banda favorito!',
                popular: 'Populares'
            },
            howItWorks: {
                stackCaption: 'Stack Tecnológico',
                diagramCaption: 'Diagrama de Arquitetura',
                paragraph1: '{{websiteName}} é um projeto motivado pelo aprendizado de novas tecnologias e pela diversão de programar soluções. Seu propósito é permitir descobrir quais as palavras mais repetidas por um artista ou banda, recorrendo para isto a tecnologias como web scrapping, REST, React, Node.js, entre outras.',
                paragraph2: 'Quando a idéia surgiu e as possíveis soluções para o problema foram postas na mesa, um estudo preliminar de APIs me trouxe até o Genius, um enorme banco de dados de artistas, músicas e letras. Através da API disponibilizada por eles, é possível consultar a lista de músicas de um artista e as respectivas URLs das letras de cada música, hospedadas no próprio site do Genius. A partir daí, seria um longo processo de scrapping das páginas HTML para obter e processar as palavras mais repetidas nas letras dos artistas, respeitando limite de requisições e outras barreiras.',
                paragraph3: 'Mas antes de começar o processo de consultas à API Genius, era necessário já possuir uma lista de artistas (identificados pelo nome) para utilizar como parâmetro de busca na API. Este problema foi abordado através de uma série de scripts que acessam diferentes sites de música, obtendo listas dos cantores mais ouvidos do momento, assim como consultas à APIs de serviço de streaming de música e outros bancos de dados.',
                paragraph4: 'O último passo para popular as informações do banco de dados era obter os gêneros musicais de cada artista, possibilitando assim identificar artistas relacionados. Para isto, foi utillizada a consulta de informações por artista da API do Spotify.'
            },
            messageModal: {
                success: 'Mensagem enviada com sucesso!',
                error: 'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
                captcha: 'É necessário marcar a opção "Não sou um robô"!',
                reportTitle: 'Reportar erro',
                reportPlaceholder: 'Descreva aqui o erro encontrado',
                contactTitle: 'Formulário de contato',
                contactPlaceholder: 'Escreva aqui sua mensagem de contato'
            },
            search: {
                searching: 'Pesquisando pelo termo',
                results: 'Resultados da pesquisa'
            },
            wordsPage: {
                mostRepeated: 'Palavras mais repetidas por',
                relatedArtists: 'Artistas relacionados'
            },
            artistCard: {
                noResults: 'Nenhum resultado encontrado.'
            },
            donateModal: {
                title: 'Faça uma doação',
                line1: 'Este site:',
                line2: 'exibe propagandas.',
                line3: 'comercializa produtos.',
                line4: 'recebe patrocínio.',
                donate1: 'Portanto, considere fazer uma',
                donate2: 'para me ajudar a mantê-lo no ar!',
                donate3: 'Basta clicar no botão acima para fazer sua doação via'
            },
            shareModal: {
                twitterBody: 'Estas são as palavras mais repetidas por {{name}}. Confira mais em:'
            }
        }
    }
}

export { messages }