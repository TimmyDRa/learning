describe('Laboratory', () => {
    it('Confirm User can Switch between tabs in the laboratory', () => {
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

 
  //Confirm Tenant can view and click the the button at the lower right
    cy.get('.css-9l9aqf').click();
    console.log("success")
    
   //Confirm Tenant will be redirected to pricing tab
    // cy.get('[href="/laboratory/pricing"]').click();
   // console.log("success")

   //Confirm Tenant will be redirected to reports tab
   //cy.get('[href="/reports"').click();

   
  cy.get('.css-7dk9m6').click();

    
    




    })
})