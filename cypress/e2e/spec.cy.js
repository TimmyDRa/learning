describe('Laboratory', () => {
  it('Confirm User can Request Investigation', () => {

          cy.visit('https://test.app.plateaumed-staging.com/');
          cy.get('[data-testid="username"]').type('jauffinecessu-1931@yopmail.com');
          cy.get('[data-cy="password"]').type('Testing1@');
          cy.get('[data-cy="login-button"]').click();
          cy.get('[data-cy="lab-request-investigation-button"]', {timeout:60000}).click();
          cy.get('[data-cy="search-patient"]').type('sasu', {force: true});
                    cy.get('[aria-autocomplete="list"]').each(function ($ele, index, $list){

            if($ele.text().includes("Sasuke  Uchiha - DH-002-HP"))
            {
              cy.wrap($ele).click()
            }
            else
            {
              cy.log($ele.text())
            }
            cy.get('[data-cy="search-physician"]').type('tsuna',{force: true});
            cy.get('[aria-autocomplete="list"]').each(function ($ele, index, $list){
              if($ele.text().includes("Tsunade Senju"))
                {
                  cy.wrap($ele).click()
                }
                else
                {
                  cy.log($ele.text())
                }
          })
          cy.get('[data-testid="investigations-change-sub-Test"]').click();
          cy.get('[data-testid="investigations-urgency-Regular"]').click();
          cy.get('[data-testid="suggested-pill-value-0"] > .mantine-1t45alw > .mantine-Text-root').click();
          cy.get('[data-testid="suggested-pill-value-1"] > .mantine-1t45alw > .mantine-Text-root').click();
          cy.get('[data-cy="lab-add-investigation"]').click();
        
          
           })
        
          })
});