import 'cypress-xpath'

describe('Login', () => {
  var lJson;

  beforeEach(() => {
    cy.fixture('login.json').then((data) => {
      lJson = data;
    });
    
    cy.visit('https://pt.wikipedia.org/')
    cy.contains('span', 'Entrar').click()
  })

    it('login correto', () => {
      cy.get(lJson.inputs.nome).type(lJson.dados.usuario)
      cy.get(lJson.inputs.senha).type(lJson.dados.senhaCorreta)
      cy.get(lJson.botoes.botaoLogin).click()

      cy.contains('span', lJson.dados.usuario)
      cy.get('span').should('not.contain', 'Entrar');
      
    })

  it('login senha incorreta', () => {
    cy.get(lJson.inputs.nome).type(lJson.dados.usuario)
    cy.get(lJson.inputs.senha).type(lJson.dados.senhaIncorreta)
    cy.get(lJson.botoes.botaoLogin).click()

    // cy.contains('div',lJson.mensagens.loginIncorreto)
    cy.xpath(lJson.divs.loginIncorreto)
  })

  it('login username incorreto', () => {
    cy.get(lJson.inputs.nome).type(lJson.dados.usuarioIncorreto)
    cy.get(lJson.inputs.senha).type(lJson.dados.senhaCorreta)
    cy.get(lJson.botoes.botaoLogin).click()

    // cy.contains('div',lJson.mensagens.loginIncorreto)
    cy.xpath(lJson.divs.loginIncorreto)
  })
})
