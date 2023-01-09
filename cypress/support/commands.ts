export {};

declare global {
  namespace Cypress {
    interface Chainable {
      searchNew: typeof searchNew;
      awaitInitialData: typeof awaitInitialData;
      interceptFetch: typeof interceptFetch;
    }
  }
}

const searchNew = (value: string) => {
  return cy.get('[placeholder="Search any news.."]').type(`${value}`);
};

const awaitInitialData = () => {
  const url = `${Cypress.env('API_URL')}/top?api_token=${Cypress.env(
    'API_KEY'
  )}`;

  cy.intercept('GET', url, {
    fixture: 'home',
  }).as('homeSuccess');

  cy.wait('@homeSuccess');
};

type Props = { url: string; nameFixture: string };
const interceptFetch = ({ url, nameFixture }: Props) => {
  console.log('url: ', `${Cypress.env('API_URL')}${url}`);
  cy.intercept('GET', `${Cypress.env('API_URL')}${url}`, {
    fixture: nameFixture,
  }).as(`${nameFixture}Success`);
};

Cypress.Commands.add('searchNew', searchNew);
Cypress.Commands.add('awaitInitialData', awaitInitialData);
Cypress.Commands.add('interceptFetch', interceptFetch);
