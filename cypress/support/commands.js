// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToTableau', (username, password)=>{
    cy.get('[data-tb-test-id="username-TextInput"]').type(username);
    cy.get('[data-tb-test-id="password-TextInput"]').type(password);
    cy.get('[tb-test-id="button-signin"]').click();

})

//Select Site

Cypress.Commands.add('selectSite', (siteName)=>{
    cy.get(`[data-tb-test-id="list-item-${siteName}"]`).click();
    cy.url().should("include", "/home");

})
 

//Goto Explore
Cypress.Commands.add('goToExplore',()=>{
    cy.get('[data-tb-test-id="nav-panel"] > ul >:nth-child(9)').click();
    cy.url().should("include", "/explore");
})

Cypress.Commands.add('projectNamesimple',(projectName)=>{
  
  cy.get('[data-tb-test-id="name-cell"]>div>span>a').contains(projectName)
  .click()
  })

//select & provide name of the project
Cypress.Commands.add('projectName',(projectName)=>{
cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)')
.scrollTo("center");
cy.wait(2500);
cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($project) => {
if ($project.text() === `${projectName}`) {                                 // provide name of the project
 cy.wrap($project).click();
}
});
})

 //select & provide name of the workbook
 Cypress.Commands.add('workbookName',(workbookName)=>{
 cy.get('[data-tb-test-id="nameWithMarkers-cell"]>div>span>a').then(
    (workbookcount) => {
      if (workbookcount.length > 9) {                                      
        cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)')
          .scrollTo("center");
        cy.wait(2500);
      } else {
        cy.get('[data-tb-test-id="nameWithMarkers-cell"]>div>span>a').each(
          ($workbook) => {
            if ($workbook.text() === `${workbookName}`) {                           // provide name of the workbook
             cy.wrap($workbook).click();
            }
          }
        );
      }
    }
  );
})

////reports

Cypress.Commands.add('openReports',()=>{
  cy.get('[data-tb-test-id="name-cell"]>div>span>a').then((reportcount) => {
    if (reportcount.length > 7) {
      cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)')
      .scrollTo("center");
      cy.wait(2500);
    } else {
      const links = [];
      cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($el) => {
        cy.wrap($el)
          .invoke("attr", "href")
          .then((href) => {
            links.push(href);
          });
      });
      cy.wrap(links).each((link) => {
        cy.visit(link);
        cy.wait(5000);
      });
    }
  });

})
import "cypress-iframe"

Cypress.Commands.add('iframe',(iframe)=>{
  return cy
  .get(iframe)
  .its('0.contentDocument.body')
  .should('be.visible')
  .then(cy.wrap)
})