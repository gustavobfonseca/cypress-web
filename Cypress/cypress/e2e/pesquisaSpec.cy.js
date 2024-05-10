describe('Pesquisa', () => {
    it('pesquisar item existente', () => {
        var pesquisa = "Sociedade Esportiva Palmeiras";
        cy.visit('https://pt.wikipedia.org/')
        cy.get("input[id='searchInput'").type(pesquisa)
        cy.contains('button', 'Pesquisar').click()
        cy.contains('span', pesquisa)
    })
})

describe('Pesquisa', () => {
    it('pesquisar item inexistente', () => {
        var pesquisa = "Avbsjkl";
        // var pesquisaV =pesquisa[0].toUpperCase() + pesquisa.slice(1);

        cy.visit('https://pt.wikipedia.org/')
        cy.get("input[id='searchInput'").type(pesquisa)
        cy.contains('button', 'Pesquisar').click()
        cy.contains('b', `Pode criar a página com o título "${pesquisa}", mas verifique se há alguma página sobre esse assunto com outro nome nos seguintes resultados da busca (caso existam).`)
    })
})