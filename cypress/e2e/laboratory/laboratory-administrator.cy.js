describe('Laboratory Administrator', () =>{
  beforeEach(() =>{
    //Logs in with an authorized tenant
          cy.visit('https://test.app.plateaumed-staging.com/');
          cy.get('[data-testid="username"]', {timeout:60000}).type('jauffinecessu-1931@yopmail.com');
          cy.get('[data-cy="password"]').type('Testing1@');
          cy.get('[data-cy="login-button"]').click();
  })
  it('Confirm User is authorized to login', () => {
    cy.viewport(1366, 768)
    cy.on('uncaught:exception', (err, runnable)=>{

      return false
    })

});


it(`should login as a laboratory administrator,
  - The appropriate user should be displayed at the header`, () => {
  cy.contains('Laboratory Queue', {timeout:60000});
  cy.get('[class=" css-u97ims"]').click();
  console.log("success");
  cy.contains('Laboratory Administrator');
   });

});
 




