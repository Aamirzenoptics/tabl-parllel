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

/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'

const contentUrl = faker.system.commonFileType();
    const siteName = faker.company.companySuffix();
    const projectName = faker.company.name()
    const workbookName = faker.system.fileExt()
    const reportName = faker.commerce.product()
    import data from "../fixtures/tableauviews.json";
    
    
describe("login", () => {

  it('create ', () => {
    // Login to the Tableau Server UI
    cy.visit(data.url.tableau2021); //Login Url
    cy.loginToTableau(data.credentials.username, data.credentials.password); //Credentials.
    //cy.selectSite(data.testSite.Name)
    cy.wait(1000)
cy.visit('http://tableau-2021.zenoptics.com/t/application/authoring/Chemicals/Sheet1#3')

const numReports = 150; // set the number of reports to create

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
cy.get('.fqcm03j').click()
    
})
});