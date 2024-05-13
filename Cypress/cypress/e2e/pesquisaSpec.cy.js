describe('Pesquisa', () => {
    var pJson;
  
    before(() => {
      cy.fixture('pesquisa.json').then((data) => {
        pJson = data;
      });
    });
  
    beforeEach(() => {
      cy.visit('https://pt.wikipedia.org/')
    })
  
    it('pesquisar item existente', () => {
      cy.get(pJson.inputs.barraPesquisa).type(pJson.dados.pExistente)
      cy.contains('button', 'Pesquisar').click()
      cy.contains('span','Artigo' )
    })
  
    it('pesquisar item inexistente', () => {
      var pInexistenteMaiuscula =pJson.dados.pInexistente[0].toUpperCase() + pJson.dados.pInexistente.slice(1);

      cy.get(pJson.inputs.barraPesquisa).type(pJson.dados.pInexistente)
      cy.contains('button', 'Pesquisar').click()

      cy.contains('h1','Resultados da pesquisa' )
      cy.contains('div',`Pode criar a página com o título "${pInexistenteMaiuscula}", mas verifique se há alguma página sobre esse assunto com outro nome nos seguintes resultados da busca (caso existam).` )
    })
  })
  