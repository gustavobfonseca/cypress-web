describe('Função Página Aleatória', () => {

    var json;
    var textoAnterior;

    before(() => {
        cy.fixture('paginaAleatoria.json').then((data) => {
            json = data;
        });
    });

    beforeEach(() => {
        cy.visit('https://pt.wikipedia.org/')
    })

    it('Gerar página aleatória', () => {

        for (var i = 0; i < 10; i++) {

            cy.get(json.inputs.menu).click();
            cy.contains('span', 'Página aleatória').click();
            cy.contains('span', 'Artigo');


            cy.get(json.textos.h1).invoke('text').then((textoAtual) => {
                
                // Quando o texto do H1 é igual a "resultados da pesquisa" significa que aquela pesquisa não existe
                if (textoAtual == "Resultados da pesquisa") {

                    cy.wrap(true).then(() => {
                        throw new Error(`Pesquisa não existe: ${textoAtual}`);
                    });

                } else {

                    if (textoAtual == textoAnterior) {
                        cy.wrap(true).then(() => {
                            throw new Error(`Pesquisa repetida: ${textoAtual}`);
                        });

                    } else {
                        textoAnterior = textoAtual;
                    }

                }
            });
        }
    });


})
