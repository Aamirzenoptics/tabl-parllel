function generateReportTitle() {
    // Define arrays of words for each domain
    const customerWords = ["Satisfaction", "Feedback", "Loyalty", "Retention", "Complaints", "Churn", "Engagement", "Advocacy", "Service", "Experience", "Perception", "Persona", "Insight", "Journey", "Behavior", "Acquisition", "Segmentation", "Expectations", "Relationship", "Trust", "Responsiveness", "Empathy", "Communication", "Influence", "Delight", "Analysis", "Branding", "Sentiment", "Authenticity", "Personalization", "Conversion", "Social media", "Touchpoint", "NPS", "CSAT", "CLV", "CAC", "CRM"];
    const financeWords = ["Revenue", "Expenses", "Profit", "Budget", "Cashflow", "Investment", "Forecast", "Return", "Growth", "Liquidity", "Solvency", "ROI", "AP", "AR", "Taxation", "Compliance", "Depreciation", "Amortization", "Cash reserves", "Capital", "Debt", "Equity", "Balance sheet", "Income statement", "Cash flow statement", "Ratio analysis", "Financial modeling", "Asset management", "Liability management", "Cost management", "Financial strategy", "Valuation", "NPV", "IRR", "Payback period", "Capital budgeting", "Hedging", "Derivatives", "Risk management", "Portfolio management", "Financial planning", "EBITDA", "FCF", "Working capital", "Dividend", "Stock price", "Credit rating", "Audit", "SEC", "GAAP"];
    const businessWords = ["Strategy", "Goals", "Innovation", "Marketing", "Operations", "Leadership", "Expansion", "Entrepreneurship", "Digitalization", "Disruption", "Competition", "Collaboration", "Partnership", "E-commerce", "Brick-and-mortar", "Industry", "SWOT", "PESTEL", "Porter's Five Forces", "Business model", "Business plan", "Mission", "Vision", "Values", "Culture", "Ethics", "Corporate social responsibility", "Sustainability", "Innovation management", "Product development", "Market research", "Customer segmentation", "Value proposition", "Competitive advantage", "Differentiation", "Branding", "Intellectual property", "Patents"];
  
    // Randomly select two domains
    const domain1 = Math.floor(Math.random() * 3); // 0 = customer, 1 = finance, 2 = business
    let domain2 = Math.floor(Math.random() * 3);
    while (domain2 === domain1) {
      domain2 = Math.floor(Math.random() * 3);
    }
      // Randomly select one word from each domain
  const word1 = eval(`${Object.keys({customerWords, financeWords, businessWords})[domain1]}[Math.floor(Math.random() * ${Object.keys({customerWords, financeWords, businessWords})[domain1]}.length)]`);
  const word2 = eval(`${Object.keys({customerWords, financeWords, businessWords})[domain2]}[Math.floor(Math.random() * ${Object.keys({customerWords, financeWords, businessWords})[domain2]}.length)]`);

  // Combine the words and return the title
  return `${word1} ${word2}`
}

function generateWorkbookName() {
    const marketingWords = ["Campaign", "Segmentation", "Targeting", "Promotion", "Brand", "Social media", "SEO", "PPC", "Analytics", "Content", "Lead generation", "Inbound", "Outbound", "Persona", "Conversion", "ROI", "Landing page", "Funnel", "Automation", "Email", "Event", "Webinar", "Trade show", "Advertising", "PR"];
    const salesWords = ["Pipeline", "Forecast", "Quota", "Territory", "Lead", "Opportunity", "Account", "Prospect", "Closing", "Negotiation", "Deal", "Win rate", "Upsell", "Cross-sell", "Churn", "Retention", "Customer success", "Sales enablement", "Performance", "Commission", "Incentive", "CRM", "Salesforce", "HubSpot", "Zoho", "Pipedrive"];
    const HRWords = ["Recruiting", "Onboarding", "Retention", "Performance", "Compensation", "Benefits", "Training", "Development", "Diversity", "Inclusion", "Culture", "Employee engagement", "Feedback", "Career path", "Succession", "Motivation", "Leadership", "Management", "Organizational behavior", "Work-life balance", "Wellness", "Safety", "Employee relations", "Compliance", "HRIS", "Payroll"];
  
    const domain1 = Math.floor(Math.random() * 3); // 0 = marketing, 1 = sales, 2 = HR
    let domain2 = Math.floor(Math.random() * 3);
    while (domain2 === domain1) {
      domain2 = Math.floor(Math.random() * 3);
    }
  
    const word1 = eval(`${Object.keys({marketingWords, salesWords, HRWords})[domain1]}[Math.floor(Math.random() * ${Object.keys({marketingWords, salesWords, HRWords})[domain1]}.length)]`);
    const word2 = eval(`${Object.keys({marketingWords, salesWords, HRWords})[domain2]}[Math.floor(Math.random() * ${Object.keys({marketingWords, salesWords, HRWords})[domain2]}.length)]`);
  
    return `${word1} ${word2}`;
  }
  

/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.commerce.product()
    import data from "../fixtures/tableauviews.json";
    
    Cypress._.times(3, () => { 
describe("login", () => {
//   it.only("login", () => {
//     // Login to the Tableau Server
//     cy.api({
//       method: "POST",
//       url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
//       body: `
//         <tsRequest>
//     <credentials name="admin" password="password1234">
//         <site contentUrl="application" />
//         </credentials>
//   </tsRequest>
//         `,
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       const xmlDoc = Cypress.$.parseXML(response.body);
//       const token = Cypress.$(xmlDoc).find("credentials").attr("token");
//       cy.wrap(token).as("authTokenMain"); 
//       const siteId = Cypress.$(xmlDoc).find("site").attr("id");
//       cy.wrap(siteId).as("siteId");
//       const siteID = cy.wrap(siteId);
//     });
//   });
 
//   it.only("Create project", function () {
 
//     const authTokenSecondary = this.authTokenMain;
//     const siteID = this.siteId;
//     const projectTitle = generateReportTitle()
//     const numberOfprojctes = 5
//     let projectNames = []
//     for (let i = 0; i < numberOfprojctes; i++) {
//         const projectTitle = generateReportTitle()
//     cy.api({
        
//       method: "POST",
//       url: `http://tableau-2021.zenoptics.com/api/3.12/sites/${siteID}/projects`,
//       body: `
//       <tsRequest> 
//       <project name="${projectTitle}"
//         description="A Des" /> 
//     </tsRequest>
//       `,
//       headers: {
//         "X-Tableau-Auth": authTokenSecondary,
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(201);
//       const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(response.body, "text/xml");
//     const projectName = xmlDoc.getElementsByTagName("project")[0].getAttribute("name");
//     projectNames.push(projectName); 
      
//     });

// }
//   });
  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(2000)
    for (let i = 0; i < 2; i++){
cy.visit('http://tableau-2021.zenoptics.com/#/site/application/explore')
const WorkbookName = generateWorkbookName()
let workbooktyped;

cy.get('[data-tb-test-id="explorer-content-area"] div[data-tb-test-id="name-cell"] span>a').contains(/\bProspect\b/).click()
cy.get('[data-tb-test-id="tb-spaces-toolbar"] [data-tb-test-id="explorer-create-content-MenuButton"]').click()
cy.get('[data-tb-test-id="create-workbookUpload-button"]').click()
cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile('C:/tab-automation/tabl-parllel/cypress/fixtures/autoworkbook.twbx', { force: true })
cy.get('[data-tb-test-id="upload-workbook-dialog-name-TextInput"]').clear().type(WorkbookName,{delay:300})
cy.get('#upload-workbook-dialog-workbook-limit-message').dblclick()
cy.get('[data-tb-test-id="upload-workbook-dialog-name-TextInput"]').invoke('val').then((typed)=>{
    workbooktyped = typed
    cy.log(typed)


  cy.get('.UploadWorkbook_footer_fqu84dt>button[data-tb-test-id="upload-workbook-dialog-submit-Button"]')
  .should('be.visible')
  .click()
  cy.wait(7000)
  cy.go('back')

  cy.get(`[data-tb-test-id="tb-list-view"] .tb-react-dg-body div[data-tb-test-id="nameWithMarkers-cell"] a[title="${workbooktyped}"]`).click()

})
cy.window().then(win => {
    cy.stub(win, 'open').callsFake((url, target) => {
      return win.open.wrappedMethod.call(win, url, '_self')
    }).as('open')
  })

  

  
  cy.get('.SpaceContainer_space-container_fuoy1tr>div div.ContentExplorer_toolbar-button-group_fmb5dhl>button').eq(0).click()
  


cy.get('@open')
const numReports = 13
for (let i = 0; i < numReports; i++) {
    // create a duplicate report and rename it
    const reportTitle = generateReportTitle();
    cy.get('.tabAuthTabNavTabContainer > span')
      .eq(0)
      .rightclick()
      .get('.tabMenuContent>:nth-child(5)')
      .click()
      .wait(2000)
      .get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
      .should('be.visible')
      .find('input')
      .dblclick({ force: true })
      .blur()
      .type(reportTitle);
      cy.get('body').click();
  }
  const reportTitle = generateReportTitle();
  cy.get('.tabAuthTabNavTabContainer > span').eq(0)
  .click();
  cy.wait(2000)
  cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
    .should('be.visible')
    cy.wait(2000)
    cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
    .find('input')
    .dblclick({ force: true })
    .blur()
    .type(reportTitle);
  cy.get('body').click();
  cy.get('.fqcm03j').click()
cy.wait(15000)


}

  })











    
})
});
  









