describe('Laboratory', () => {
    it('Confirm User can Sort Paients Based on Patients investigation category', () => {
 
        cy.viewport(1366, 768)
      cy.on('uncaught:exception', (err, runnable)=>{

        return false
      })
 
 
 //Logs in with an authorized tenant
 cy.visit('https://test.app.plateaumed-staging.com/');
 cy.get('[data-testid="username"]', {timeout:60000}).type('jauffinecessu-1931@yopmail.com');
 cy.get('[data-cy="password"]').type('Testing1@');
 cy.get('[data-cy="login-button"]').click();

  //Select Patient's Investigation Category

  cy.get('[data-cy="investigation-category"]',{timeout:60000}).click();
  console.log("success");

  //Displays Patients investigation category based on Chemsitry
  cy.contains('Chemistry', {timeout:60000}).click();
  console.log("success");

  //Displays Patients investigation category based on Electrophysiology
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success");
  
  cy.contains('Electrophysiology', {timeout:60000}).click()
  console.log("success");

  //Displays Patients investigation category based on Haematology
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success");
  
  cy.contains('Haematology', {timeout:60000}).click();
  console.log("success");

//Displays Patients investigation category based on Microbiology  
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success");
  
  cy.contains('Microbiology', {timeout:60000}).click();
  console.log("success");

  //Displays Patients investigation category based on Radiology + Pulm
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success");

  cy.contains('Radiology + Pulm', {timeout:60000}).click();
  console.log("success");

  //Displays Patients investigation category based on Serology
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success"); 

  cy.contains('Serology', {timeout:60000}).click();
  console.log("success");

  //Displays Patients investigation category based others
  cy.get('[data-cy="investigation-category"]').click();
  console.log("success");

  cy.contains('Others', {timeout:60000}).click();
  console.log("success");

    })
});