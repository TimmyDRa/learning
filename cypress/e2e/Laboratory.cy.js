describe('Laboratory', () => {
  it('Confirm User can Sort Patients by filter', () => {
    cy.viewport(1366, 768)
    cy.on('uncaught:exception', (err, runnable)=>{

      return false
    })
         
        //Logs in with an authorized tenant
          cy.visit('https://test.app.plateaumed-staging.com/');
          cy.get('[data-testid="username"]', {timeout:60000}).type('jauffinecessu-1931@yopmail.com');
          cy.get('[data-cy="password"]').type('Testing1@');
          cy.get('[data-cy="login-button"]').click();

       //Selects Patients investigation status filter
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
         //Displays Patients investigation status based on Reuquested investigation
          cy.contains('Requested').click()
          console.log("success");

        //Displays Patients investigation status based on Invoiced investigation
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Invoiced').click()
          console.log("success");

         //Displays Patients investigation status based on Processing investigation 
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Processing').click()
          console.log("success");

        //Displays Patients investigation status based on Result Ready investigation
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Result Ready').click()
          console.log("success");
        
        //Displays Patients investigation status based on Image Ready investigation
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Image Ready').click()
          console.log("success");
        
        //Displays Patients investigation status based on Awaiting Review investigation
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Awaiting Review').click()
          console.log("success");
        
        //Displays Patients investigation status based on Report Ready investigation
          cy.get('[data-cy="investigation-status"]', {timeout:60000}).click()
          console.log("success");
          
          cy.contains('Report Ready').click()
          console.log('success');
          
          

          

  })
});