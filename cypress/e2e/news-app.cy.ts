describe('News app test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render app', () => {
    cy.contains('The power of information');
  });
});
