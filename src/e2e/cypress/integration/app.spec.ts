
describe('App E2E', () => {
  it('should have a visible title', () => {
    cy.visit('/');
    cy.get('h1').should('be.visible');
  });
});
