describe('Login', () => {
  it('login correto', () => {
    var nome = "Gustav8 Teste";
    cy.visit('https://pt.wikipedia.org/')
    cy.contains('span', 'Entrar').click()
    cy.get("input[id='wpName1'").type(nome)
    cy.get("input[id='wpPassword1'").type("Testes123@")
    cy.get("button[id='wpLoginAttempt'").click()
    cy.contains('span', nome)
    cy.get('span').should('not.contain', 'Entrar');

  })
})

describe('Login incorreto', () => {
  it('login senha incorreta', () => {
    var nome = "Gustav8 Teste";
    cy.visit('https://pt.wikipedia.org/')
    cy.contains('span', 'Entrar').click()
    cy.get("input[id='wpName1'").type(nome)
    cy.get("input[id='wpPassword1'").type("Testeserrado123@")
    cy.get("button[id='wpLoginAttempt'").click()
    
    cy.get("input[id='wpName1'")
    cy.get("input[id='wpPassword1'")
    cy.contains('div', 'O nome de utilizador ou a palavra-passe inseridos estão incorretos.Tente novamente, por favor.')
  })
})


