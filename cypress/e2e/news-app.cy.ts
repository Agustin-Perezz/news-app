describe('News app test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render app', () => {
    cy.contains('The power of information');
  });
  it('should show result', () => {
    const query = 'messi';
    const url = `${Cypress.env('API_URL')}/all?api_token=${Cypress.env(
      'API_KEY'
    )}&search=${query}`;

    cy.intercept('GET', url, {
      fixture: 'articles',
    }).as('articlesSuccess');

    cy.searchNew(query);
    cy.get('form').submit();
    cy.wait('@articlesSuccess');

    cy.get('.MuiGrid-container > *').and('have.length', 5);
    cy.get(
      ':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiTypography-subtitle1'
    ).should('have.text', 'Messi test');
  });
});
