export {};

declare global {
  namespace Cypress {
    interface Chainable {
      searchNew: typeof searchNew;
    }
  }
}

const searchNew = (value: string) => {
  return cy.get('[placeholder="Search any news.."]').type(`${value}`);
};

Cypress.Commands.add('searchNew', searchNew);
