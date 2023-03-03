/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.commerce.product()
    import data from "../fixtures/tableauviews.json";
    const words = [
        "analysis",
        "assessment",
        "benchmark",
        "budget",
        "evaluation",
        "forecast",
        "impact",
        "insight",
        "measurement",
        "overview",
        "performance",
        "strategy",
        "trend",
        "report",
        "scorecard",
        "dashboard",
        "summary",
        "progress",
        "tracking",
        "metrics"
      ];
      
      function generateWord() {
        const wordLength = Math.floor(Math.random() * 2) + 10; // Generates words between 6-7 characters in length
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
      
        if (randomWord.length < wordLength) {
          return generateWord(); // Regenerate the word if it's shorter than the required length
        }
      
        return randomWord.substring(0, wordLength);
      }
      
      
    
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
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(1000)
cy.visit('http://tableau-2021.zenoptics.com/#/site/application/workbooks/2548/views')





cy.window().then(win => {
    cy.stub(win, 'open').callsFake((url, target) => {
      return win.open.wrappedMethod.call(win, url, '_self')
    }).as('open')
  })

  
  cy.get('.SpaceContainer_space-container_fuoy1tr>div div.ContentExplorer_toolbar-button-group_fmb5dhl>button').eq(0).click()
  
cy.get('@open')



// for (let i = 0; i < 100; i++) {
//     cy.get('.tabAuthTabNavTabContainer > span').eq(0).rightclick()
//     cy.get('.tabMenuContent>:nth-child(5)').click() /// create duplicate report
//     //cy.wait(2000)
//   }



cy.get('.tabAuthTabNavTabContainer > span').then(tabs => {
  const numTabs = tabs.length;
  for (let i = 0; i < numTabs; i++) {
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
      .type(generateWord());
    cy.get('body').click();
  }
});

     // cy.get('.fqcm03j').click()
    
})

  


});
