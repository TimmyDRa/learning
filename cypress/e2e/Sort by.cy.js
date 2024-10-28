describe('Laboratory', () => {
    it('Confirm User can Sort Paients Based on Patients investigation category', () => {
 
 
 
 //Logs in with an authorized tenant
 cy.visit('https://test.app.plateaumed-staging.com/');
 cy.get('[data-testid="username"]').type('jauffinecessu-1931@yopmail.com');
 cy.get('[data-cy="password"]').type('Testing1@');
 cy.get('[data-cy="login-button"]').click();

  //Select Patient's Investigation Category

  cy.get('[data-cy="sort"]').click();
  console.log("success");

  //Displays Patients investigation category based on Chemsitry
  cy.contains('Most Recent').click()
  console.log("success");
   
  cy.get('[href="/laboratory/pricing"]').click();
  console.log("success")

    })
});