/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import { slowCypressDown } from 'cypress-slow-down';
function generateReportTitle() {
    const syllables = ["cor", "po", "rate", "fin", "an", "cial", "re", "port", "man", "age", "ment", "in", "vest", "ment", "strat", "egy", "per", "for", "mance", "ana", "ly", "sis"];
    const maxWords = 5; // maximum number of words in the report title
    const words = [];
    let numWords = Math.floor(Math.random() * maxWords) + 1; // randomly select number of words
    
    while (numWords > 0) {
      let syllableCount = Math.floor(Math.random() * 3) + 1; // randomly select number of syllables per word
      let word = "";
      while (syllableCount > 0) {
        let syllableIndex = Math.floor(Math.random() * syllables.length);
        let syllable = syllables[syllableIndex];
        if (word.length === 0) {
          word = syllable;
        } else {
          // ensure that the syllable is not a half-word and does not create a meaningless word
          if (syllable.startsWith(word.slice(-1))) {
            word += syllable.slice(1);
          }
        }
        syllableCount--;
      }
      words.push(word);
      numWords--;
    }
    return words.join(" ");
  }
  

//slowCypressDown(1500)
const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.commerce.product()
    import data from "../fixtures/tableauviews.json";
    
    faker.seed(Date.now());
describe("login", () => {
//   it("login", () => {
//     // Login to the Tableau Server
//     cy.api({
//       method: "POST",
//       url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
//       body: `
//         <tsRequest>
//     <credentials name="admin" password="password1234">
//         <site contentUrl="" />
//         </credentials>
//   </tsRequest>
//         `,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       const xmlDoc = Cypress.$.parseXML(response.body);
//       const token = Cypress.$(xmlDoc).find("credentials").attr("token");
//       cy.wrap(token).as("authTokenMain"); 
//     });
//   });
//   it("Create Site", function () {
//     // Get the auth token from the alias
//     const authTokenMain = this.authTokenMain;
    

//     cy.api({
//       method: "POST",
//       url: "http://tableau-2021.zenoptics.com/api/3.12/sites",
//       body: `
//             <tsRequest>
//               <site name="${siteName}"
//                 contentUrl="${contentUrl}"
//                 adminMode="ContentAndUsers"/>
//             </tsRequest>
//           `,
//       headers: {
//         "X-Tableau-Auth": authTokenMain,
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(201);
//       const xmlDoc = Cypress.$.parseXML(response.body);
//       const siteId = Cypress.$(xmlDoc).find("site").attr("id");
//       cy.wrap(siteId).as("siteId");
//       const siteID = cy.wrap(siteId);
//       //login2
//       cy.api({
//         method: "POST",
//         url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
//         body: `
//             <tsRequest>
//         <credentials name="admin" password="password1234">
//             <site contentUrl="${contentUrl}" />
//             </credentials>
//       </tsRequest>
// //             `,
//       }).then((response) => {
//         expect(response.status).to.eq(200);
//         const xmlDoc = Cypress.$.parseXML(response.body);
//         const token = Cypress.$(xmlDoc).find("credentials").attr("token");
//         cy.wrap(token).as("authTokenSecondary"); 
//       });
//     });
//   });
//   it("Create project", function () {
//     // Get the auth token from the alias
//     const authTokenSecondary = this.authTokenSecondary;
//     const siteID = this.siteId;

//     cy.api({
//       method: "POST",
//       url: `http://tableau-2021.zenoptics.com/api/3.12/sites/${siteID}/projects`,
//       body: `
//       <tsRequest> 
//       <project name="${projectName}"
//         description="A Des" /> 
//     </tsRequest>
//       `,
//       headers: {
//         "X-Tableau-Auth": authTokenSecondary,
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(201);
      
//     });
//   });
  it('create ', () => {

    cy.intercept('POST', '/commands/tabdoc/rename-sheet').as('noname')
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(1000)
cy.visit('http://tableau-2021.zenoptics.com/#/site/application/workbooks/2550/views')


cy.window().then(win => {
    cy.stub(win, 'open').callsFake((url, target) => {
      return win.open.wrappedMethod.call(win, url, '_self')
    }).as('open')
  })

  

  
  cy.get('.SpaceContainer_space-container_fuoy1tr>div div.ContentExplorer_toolbar-button-group_fmb5dhl>button').eq(0).click()
  


cy.get('@open')















for (let i = 0; i < 100; i++) {
    cy.get('.tabAuthTabNavTabContainer > span').eq(0).rightclick()
    cy.get('.tabMenuContent>:nth-child(5)').click() /// create duplicate report
    //cy.wait(2000)
  }

cy.get('.tabAuthTabNavTabContainer > span').then(tabs => {
    const numTabs = tabs.length;
    for (let i = 0; i < numTabs; i++) {
        cy.wait(4000)
      cy.get('.tabAuthTabNavTabContainer > span').eq(i)
      .click();
      cy.wait(2000)
      cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
        .should('be.visible')
        cy.wait(2000)
        cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
        .find('input')
        .dblclick({ force: true })
        .blur()
        .type(generateReportTitle());
        cy.wait(2000)
      cy.get('body').click();
      cy.wait(2000)
    }
})



      cy.get('.fqcm03j').click()
    
})

  


});
