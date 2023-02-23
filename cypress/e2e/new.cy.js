/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.system.fileName()
    import data from "../fixtures/tableauviews.json";
    
    faker.seed(Date.now());
describe("login", () => {
  it("login", () => {
    // Login to the Tableau Server
    cy.api({
      method: "POST",
      url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
      body: `
        <tsRequest>
    <credentials name="admin" password="password1234">
        <site contentUrl="" />
        </credentials>
  </tsRequest>
        `,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const xmlDoc = Cypress.$.parseXML(response.body);
      const token = Cypress.$(xmlDoc).find("credentials").attr("token");
      cy.wrap(token).as("authTokenMain"); 
    });
  });
  it("Create Site", function () {
    // Get the auth token from the alias
    const authTokenMain = this.authTokenMain;
    

    cy.api({
      method: "POST",
      url: "http://tableau-2021.zenoptics.com/api/3.12/sites",
      body: `
            <tsRequest>
              <site name="${siteName}"
                contentUrl="${contentUrl}"
                adminMode="ContentAndUsers"/>
            </tsRequest>
          `,
      headers: {
        "X-Tableau-Auth": authTokenMain,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      const xmlDoc = Cypress.$.parseXML(response.body);
      const siteId = Cypress.$(xmlDoc).find("site").attr("id");
      cy.wrap(siteId).as("siteId");
      const siteID = cy.wrap(siteId);
      //login2
      cy.api({
        method: "POST",
        url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
        body: `
            <tsRequest>
        <credentials name="admin" password="password1234">
            <site contentUrl="${contentUrl}" />
            </credentials>
      </tsRequest>
            `,
      }).then((response) => {
        expect(response.status).to.eq(200);
        const xmlDoc = Cypress.$.parseXML(response.body);
        const token = Cypress.$(xmlDoc).find("credentials").attr("token");
        cy.wrap(token).as("authTokenSecondary"); 
      });
    });
  });
  it("Create project", function () {
    // Get the auth token from the alias
    const authTokenSecondary = this.authTokenSecondary;
    const siteID = this.siteId;

    cy.api({
      method: "POST",
      url: `http://tableau-2021.zenoptics.com/api/3.12/sites/${siteID}/projects`,
      body: `
      <tsRequest> 
      <project name="${projectName}"
        description="A Des" /> 
    </tsRequest>
      `,
      headers: {
        "X-Tableau-Auth": authTokenSecondary,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      
    });
  });
  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(1000)
    cy.visit(`http://tableau-2021.zenoptics.com/#/site/${contentUrl}/home`).as("contentURl")
    cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]')
    .click()
    //select upload workbook
    cy.get('[data-tb-test-id="create-workbookUpload-button"]').click()
    //choose a file.
    cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile('C:/tab-automation/tabl-parllel/cypress/fixtures/Chapter2-BasicVisualizations.twbx', { force: true })
    cy.get('[data-tb-test-id="upload-workbook-dialog-name-TextInput"]').clear().type(workbookName).as("workbook")

  
    //select the project
  cy.get('[data-tb-test-id="upload-workbook-dialog-project"]').click()
  cy.get('div[data-tb-test-id="DropdownOverlay-Root"]').contains(projectName).click({force: true})
  
    //upload and publish the workbook.
  cy.get('[data-tb-test-id="upload-workbook-dialog-submit-Button"]')
  .contains('Upload').click({force: true})
  cy.wait(25000)
  cy.go('back')


      cy.goToExplore(); //Goto Explore.
      cy.projectNamesimple(projectName); //Provide name of the project
      
      cy.window().then(win => {
        cy.stub(win, 'open').callsFake((url, target) => {
          expect(target).to.be.undefined
          
          return win.open.wrappedMethod.call(win, url, '_self')
        }).as('open')
      })

      cy.workbookName(workbookName)
      cy.get('.tb-spaces-list-view div[role="rowgroup"] >div div[data-tb-test-id="actionsmenu-cell"]').eq(0).click()

      

    cy.get('[data-tb-test-id="Overlay-Root"] div[data-tb-test-id="action-menu-edit-MenuItem"]>div').click()  
      


cy.get('@open')





      cy.get('.tabAuthTabNavTabContainer > span').then(tabs => {
        const numTabs = tabs.length;
        for (let i = 0; i < numTabs; i++) {
          cy.get('.tabAuthTabNavTabContainer > span').eq(i).click();
          cy.wait(1000)
          cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
            .should('be.visible')
            .find('input')
            .dblclick({ force: true })
            .type(reportName, { force: true });
          cy.get('body').click();
        }
      });
    
   })

  


});
