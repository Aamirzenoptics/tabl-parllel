/// <reference types="Cypress" />
const contentUrl = "NewSiteAP2";
    const siteName = "New API Sit2";
    const projectName = "New Project"
    import data from "../fixtures/tableauviews.json";
    

describe("login", () => {
 
  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    cy.selectSite(data.testSite.Name)
    cy.wait(1000)
    cy.visit('http://tableau-2021.zenoptics.com/t/NewSiteAP2/authoring/Chapter2-BasicVisualizations/HeatMapColorSizeonMarksCard')


cy.get('.tabAuthTabNavTabContainer > span').then(tabs => {
    const numTabs = tabs.length;
    for (let i = 0; i < numTabs; i++) {
      cy.get('.tabAuthTabNavTabContainer > span').eq(i).click();
      cy.wait(1000)
      cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
        .should('be.visible')
        .find('input')
        .dblclick({ force: true })
        .type(`new${i+1}`, { force: true });
      cy.get('body').click();
    }
  });
  













    
 
    


   })

  


});
