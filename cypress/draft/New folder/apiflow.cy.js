/// <reference types="Cypress" />
const contentUrl = "NewSiteAP2";
    const siteName = "New API Sit2";
    const projectName = "New Project"
    import data from "../fixtures/tableauviews.json";

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
      // Do something with the response
    });
  });
  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    cy.selectSite(data.testSite.Name)
    cy.visit('http://tableau-2021.zenoptics.com/#/server/sites')
    //goto the newly created site
    cy.contains(siteName).click()

    //click one New button.
    cy.get('[data-tb-test-id="explorer-create-content-MenuButton"]')
    .click()
    //select upload workbook
    cy.get('[data-tb-test-id="create-workbookUpload-button"]').click()
    //choose a file.
    cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile('C:/tab-automation/tabl-parllel/cypress/fixtures/Chapter2-BasicVisualizations.twbx', { force: true })
  //select the project
  cy.get('[data-tb-test-id="upload-workbook-dialog-project"]').click()
  cy.get('div[data-tb-test-id="DropdownOverlay-Root"]').contains(projectName).click({force: true})
  
    //upload and publish the workbook.
  cy.get('.UploadWorkbook_footer_fqu84dt>button[data-tb-test-id="upload-workbook-dialog-submit-Button"]').click()
  cy.wait(1000000)
  // cy.go('back')

    cy.get('[data-tb-test-id="edit-ToolbarButton"]').click()



  })

});
