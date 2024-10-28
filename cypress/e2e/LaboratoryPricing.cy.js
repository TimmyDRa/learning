describe('Laboratory', () => {
    it('Confirm User can Sort Paients Based on Patients investigation category', () => {
      cy.viewport(1366, 768)
      cy.on('uncaught:exception', (err, runnable)=>{

        return false
      })
    
      //Logs in with an authorized tenant
 cy.visit('https://test.app.plateaumed-staging.com/');
 cy.get('[data-testid="username"]').type('jauffinecessu-1931@yopmail.com');
 cy.get('[data-cy="password"]').type('Testing1@');
 cy.get('[data-cy="login-button"]').click();
 console.log("success")

 

    cy.get('.css-9l9aqf').click();
    console.log("success")

    cy.get('[href="/laboratory/pricing"]').click();
    console.log("success")

    cy.contains('Add pricing').click();

    

    })
})