describe('News app test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render app', () => {
    cy.get('.MuiImageListItem-img').should('be.visible');
    cy.get('[style="overflow: hidden;"] > :nth-child(3)').should('be.visible');
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
    cy.get(
      ':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .css-3yoo1r > .MuiChip-root'
    ).should('be.visible');
  });
});
