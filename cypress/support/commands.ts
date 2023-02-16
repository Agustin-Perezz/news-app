export {};

declare global {
  namespace Cypress {
    interface Chainable {
      searchNew: typeof searchNew;
      awaitInitialData: typeof awaitInitialData;
      interceptFetch: typeof interceptFetch;
      searchInForm: typeof searchInForm;
    }
  }
}

const searchNew = (value: string) => {
  return cy.get('[placeholder="Search any news.."]').type(`${value}`);
};

const awaitInitialData = () => {
  const url = `${Cypress.env('API_URL')}/top?api_token=${Cypress.env('API_KEY')}&locale=ar`;

  cy.intercept('GET', url, {
    fixture: 'home',
  }).as('homeSuccess');

  cy.get('.css-1dlcyqs > :nth-child(1)').click();
  cy.wait('@homeSuccess');
};

type Props = { url: string; nameFixture: string };
const interceptFetch = ({ url, nameFixture }: Props) => {
  cy.intercept('GET', `${Cypress.env('API_URL')}${url}`, {
    fixture: nameFixture,
  }).as(`${nameFixture}Success`);
};

const searchInForm = () => {
  cy.interceptFetch({
    url: `/all?api_token=${Cypress.env('API_KEY')}&search=javascript&published_after=2023-02-15`,
    nameFixture: 'newsJsRecent',
  });

  cy.searchNew('javascript');
  cy.get('form').submit();
  cy.wait('@newsJsRecentSuccess');
};

Cypress.Commands.add('searchNew', searchNew);
Cypress.Commands.add('awaitInitialData', awaitInitialData);
Cypress.Commands.add('interceptFetch', interceptFetch);
Cypress.Commands.add('searchInForm', searchInForm);
