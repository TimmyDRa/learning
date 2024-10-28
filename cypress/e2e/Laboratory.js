describe('Laboratory', () => {
    it('Confirm User can Request Investigation', () => {
        beforeEach(() =>{
            cy.visit('https://test.app.plateaumed-staging.com/');
            cy.get('[data-testid="username"]').type('jauffinecessu-1931@yopmail.com');
            cy.get('[data-cy="password"]').type('Testing1@');
        })
  });
});