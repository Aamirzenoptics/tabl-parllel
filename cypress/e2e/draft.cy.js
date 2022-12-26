// /// <reference types="Cypress" />
// Cypress._.times(1, () => {
//   describe("Tableau", () => {
//     it("View Reports", () => {
//       cy.visit("http://tableau-2021.zenoptics.com/#/signin");        //Login Url
//       cy.loginToTableau('hruser','password1234')                     //Credentials.
//       cy.selectSite('Test Site1')                                    //Select Site.
//       cy.goToExplore()                                               //Goto Explore.
//       cy.projectName("test01102020")                                 //Provide name of the project
//       cy.workbookName("testRun")                                     //Provide name of the workbook.
      
//       //iterate through reports.

//       cy.get('[data-tb-test-id="name-cell"]>div>span>a').then((reportcount) => {
//         if (reportcount.length > 7) {
//           cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)')
//           .scrollTo("center");
//           cy.wait(2500);
//         } else {
//           const links = [];
//           cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($el) => {
//             cy.wrap($el)
//               .invoke("attr", "href")
//               .then((href) => {
//                 links.push(href);
//               });
//           });
//           cy.wrap(links).each((link) => {
//             cy.visit(link);
//             cy.wait(5000);
//           });
//         }
//       });
//     });
//   });
// });
