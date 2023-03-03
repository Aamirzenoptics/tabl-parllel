const generateReportTitle = (reportList, breakout) => {
    if (breakout == 0) {
      throw `We tried generating a random report title but seem to have run out of possible term combinations`
    }
    // Define arrays of words for each domain
    const customerWords = ["Complaints", "Churn", "Engagement", "Advocacy", "Service", "Experience", "Perception", "Satisfaction", "Feedback", "Loyalty", "Retention", "Persona", "Insight", "Journey", "Behavior", "Acquisition", "Segmentation", "Expectations", "Relationship", "Trust", "Responsiveness", "Empathy", "Communication", "Influence", "Delight", "Analysis", "Branding", "Sentiment", "Authenticity", "Personalization", "Conversion", "Social media", "Touchpoint", "NPS", "CSAT", "CLV", "CAC", "CRM"];
    const financeWords = ["Revenue", "Expenses", "Profit", "Budget", "Cashflow", "AP", "AR", "Taxation", "Compliance", "Depreciation", "Amortization", "Cash reserves", "Capital", "Debt", "Equity", "Balance sheet", "Income statement", "Cash flow statement", "Ratio analysis", "Financial modeling", "Asset management", "Liability", "Cost", "Financial strategy", "Valuation", "Investment", "Forecast", "Return", "Growth", "Liquidity", "Solvency", "ROI", "NPV", "IRR", "Payback period", "Capital budgeting", "Hedging", "Derivatives", "Risk management", "Portfolio", "Financial ", "EBITDA", "FCF", "Working capital", "Dividend", "Stock price", "Credit rating", "Audit", "SEC", "GAAP"];
    const businessWords = ["Strategy", "Goals", "Innovation", "Marketing", "Operations", "Leadership", "Expansion", "Entrepreneurship", "Digitalization", "Disruption", "Competition", "Collaboration", "Partnership", "E-commerce", "Brick-and-mortar", "Industry", "SWOT", "PESTEL", "Porter's Five Forces", "Business model", "Business plan", "Mission", "Vision", "Values", "Culture", "Ethics", "Corporate social responsibility", "Sustainability", "Innovation management", "Product", "Market ", "Customer", "Value ", "Competitive", "Differentiation", "Branding", "Intellectual property", "Patents"];
  
    // Randomly select two domains
    const domain1 = Math.floor(Math.random() * 3); // 0 = customer, 1 = finance, 2 = business
    let domain2 = Math.floor(Math.random() * 3);
    while (domain2 === domain1) {
      domain2 = Math.floor(Math.random() * 3);
    }
    // Randomly select one word from each domain
    const word1 = eval(`${Object.keys({ customerWords, financeWords, businessWords })[domain1]}[Math.floor(Math.random() * ${Object.keys({ customerWords, financeWords, businessWords })[domain1]}.length)]`);
    const word2 = eval(`${Object.keys({ customerWords, financeWords, businessWords })[domain2]}[Math.floor(Math.random() * ${Object.keys({ customerWords, financeWords, businessWords })[domain2]}.length)]`);
  
    if (reportList.includes(`${word1} ${word2}`)) {
      generateReportTitle(reportList, breakout - 1)
    } else {
      // Combine the words and return the title
      return `${word1} ${word2}`
    }
  }
  
  const generateWorkbookName = (workbookList, breakout) => {
    if (breakout == 0) {
      throw `We tried generating a random workbook name but seem to have run out of possible term combinations`
    }
    const marketingWords = ["Brand awareness", "Market segmentation", "Audience targeting", "Advertising", "Brand identity", "Social networking", "Search engine optimization", "Pay-per-click", "Data analysis", "Content marketing", "Lead nurturing", "Inbound marketing", "Outbound marketing", "Buyer persona", "Conversion rate", "Return on investment", "Landing page optimization", "Sales funnel", "Marketing automation", "Email marketing", "Trade shows", "Online advertising", "Public relations", "Copywriting"];
    const salesWords = ["Sales pipeline", "Sales forecast", "Sales quota", "Sales territory", "Sales lead", "Sales opportunity", "Sales account", "Sales prospect", "Sales closing", "Sales negotiation", "Sales deal", "Sales win rate", "Upselling", "Cross-selling", "Customer churn", "Customer retention", "Customer success", "Sales enablement", "Sales performance", "Sales commission", "Sales incentive", "Customer relationship management", "Salesforce automation", "HubSpot CRM", "CRM", "Pipedrive CRM"];
    const HRWords = ["Talent acquisition", "Employee orientation", "Employee retention", "Performance management", "Compensation packages", "Employee benefits", "Employee training", "Employee development", "Diversity and inclusion", "Corporate culture", "Employee engagement", "Performance feedback", "Career development", "Succession planning", "Employee motivation", "Leadership development", "Management training", "Organizational culture", "Work-life integration", "Employee well-being", "Occupational health and safety", "Employee relations management", "Legal compliance", "Human resource information system", "Payroll management"];
  
    const domain1 = Math.floor(Math.random() * 3); // 0 = marketing, 1 = sales, 2 = HR
    let domain2 = Math.floor(Math.random() * 3);
    while (domain2 === domain1) {
      domain2 = Math.floor(Math.random() * 3);
    }
  
    const word1 = eval(`${Object.keys({ marketingWords, salesWords, HRWords })[domain1]}[Math.floor(Math.random() * ${Object.keys({ marketingWords, salesWords, HRWords })[domain1]}.length)]`);
    const word2 = eval(`${Object.keys({ marketingWords, salesWords, HRWords })[domain2]}[Math.floor(Math.random() * ${Object.keys({ marketingWords, salesWords, HRWords })[domain2]}.length)]`);
  
    if (reportList.includes(`${word1} ${word2}`)) {
      generateWorkbookName(workbookList, breakout - 1)
    } else {
      // Combine the words and return the title
      return `${word1} ${word2}`
    }
  }
  
  /// <reference types="Cypress" />
  
  import tabsdata from "../fixtures/tableauviews.json";
  
  Cypress.Commands.add('login', () => {
    cy.api({
      method: "POST",
      url: "http://tableau-2021.zenoptics.com/api/3.12/auth/signin",
      body: `
        <tsRequest>
    <credentials name="admin" password="password1234">
        <site contentUrl="application" />
        </credentials>
  </tsRequest>
        `,
    }).then((response) => {
      expect(response.status).to.eq(200);
      let authStuff = {}
      const xmlDoc = Cypress.$.parseXML(response.body);
      authStuff.token = Cypress.$(xmlDoc).find("credentials").attr("token");
      authStuff.siteId = Cypress.$(xmlDoc).find("site").attr("id");
      return authStuff
    });
  })
  
  Cypress.Commands.add('createProjects', (authToken, siteId, projectList, repeat) => {
    if (repeat == 0) {
      return projectList
    }
    const projectTitle = generateReportTitle(projectList, 3)
    cy.api({
      method: "POST",
      url: `http://tableau-2021.zenoptics.com/api/3.12/sites/${siteId}/projects`,
      body: `
    <tsRequest>
    <project name="${projectTitle}"
      description="" />
  </tsRequest>
    `,
      headers: {
        "X-Tableau-Auth": authToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      projectList.push(projectTitle)
      //cy.log(projectName)
      cy.createProjects(authToken, siteId, projectList, repeat - 1)
    });
  })
  
  Cypress.Commands.add('createWorkbook', (currentProject, workbookList, dto, repeat) => {
    if(repeat == 0) {
      return
    } else {
      const workbookName = generateWorkbookName(workBookList, 3)
      let workbooktyped
      cy.visit('http://tableau-2021.zenoptics.com/#/site/application/explore')
      cy.get('[data-tb-test-id="explorer-content-area"] div[data-tb-test-id="name-cell"] span>a').contains(`${dto.projectList[currentProject]}`).click()
      cy.get('[data-tb-test-id="tb-spaces-toolbar"] [data-tb-test-id="explorer-create-content-MenuButton"]').click()
      cy.get('[data-tb-test-id="create-workbookUpload-button"]').click()
      cy.get('[data-tb-test-id="upload-workbook-input-file-id"]').selectFile('C:/tab-automation/tabl-parllel/cypress/fixtures/autoworkbook.twbx', { force: true })
      cy.get('[data-tb-test-id="upload-workbook-dialog-name-TextInput"]').clear().type(workbookName, { delay: 300 })
      cy.get('[data-tb-test-id="upload-workbook-dialog-project"]').click()
      cy.get(`span[data-tb-test-id="data-grid-cell-text"][title="${projectNameFromJSON}"]`).dblclick()
      cy.get('#upload-workbook-dialog-workbook-limit-message').dblclick()
      cy.get('[data-tb-test-id="upload-workbook-dialog-name-TextInput"]').invoke('val').then(typed => {
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
      const numReports = 1
      for (let i = 0; i < numReports; i++) {
        const reportTitle = generateReportTitle([], 3);
        cy.get('.tabAuthTabNavTabContainer > span')
          .eq(0)
          .rightclick()
          .get('.tabMenuContent>:nth-child(5)')
          .click()
          .wait(2000)
          .get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
          .should('be.visible')
        // .find('input')
        // .dblclick({ force: true })
        cy.get('.tabAuthTabNavTabContainer > span')
          .eq(0)
          .get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
          .should('be.visible')
          .find('input')
          .dblclick({ force: true })
  
        cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]> :nth-child(6)')
          .should('have.class', 'tabTextInputView tab-widget tabAuthTabRenameInput inputTabFocused')
          .type(reportTitle);
  
        cy.get('body').click();
        cy.wait(1000)
  
      }
      const reportTitle = generateReportTitle();
      cy.get('.tabAuthTabNavTabContainer > span').eq(0)
        .click();
      cy.wait(2000)
      cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
        .should('be.visible')
      cy.wait(2000)
      cy.get('.tabAuthTabNavTabContainer > span')
        .eq(0)
        .get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]')
        .should('be.visible')
        .find('input')
        .dblclick({ force: true })
      cy.get('[class="tabAuthTab tab-widget tabAuthTabChecked tabWorksheet"]> :nth-child(6)')
        .should('have.class', 'tabTextInputView tab-widget tabAuthTabRenameInput inputTabFocused')
        .type(reportTitle);
      cy.get('body').click();
      cy.get('.fqcm03j').click()
      cy.wait(15000).then(() => {
        workbookList.push(workbookName)
        cy.createWorkbook(currentProject, workbookList, dto, repeat - 1)
      })
    }
  })
  
  Cypress.Commands.add('createWorkbooks', (currentProject, dto) => {
    if (currentProject = -1) {
      return dto
    }
    cy.createWorkbook(currentProject, workbookList, dto, 6).then(() => {
      cy.createWorkbooks(currentProject - 1, dto)
    })
  })
  
  describe("automate", () => {
    it('generates sheets', () => {
      cy.login().then(dto => {
        let projectList = []
        cy.createProjects(dto.token, dto.siteId, projectList, 3).then(projectList => {
          dto.projectList = projectList
          return dto
        })
      }).then(dto => {
        cy.visit(tabsdata.url.tableau2021); //Login Url
        cy.loginToTableau(tabsdata.credentials.username, tabsdata.credentials.password); //Credentials.
        //cy.selectSite(data.testSite.Name)
        cy.wait(2000)
        cy.createWorkbooks(dto.projectList.length, dto)
      })
    })
  })