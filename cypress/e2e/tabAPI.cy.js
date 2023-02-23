/// <reference types="Cypress" />

describe('login', () => {
  it('login', () => {
    // Login to the Tableau Server
    cy.api({
      method: 'POST',
      url: 'http://tableau-2021.zenoptics.com/api/3.12/auth/signin',
      body: `
      <tsRequest>
  <credentials name="admin" password="password1234">
      <site contentUrl="" />
      </credentials>
</tsRequest>
      `
    
    }).then((response) => {
      expect(response.status).to.eq(200);
      const xmlDoc = Cypress.$.parseXML(response.body);
      const token = Cypress.$(xmlDoc).find('credentials').attr('token');
      cy.wrap(token).as('authTokenMain'); // store token in an alias for later use
    });
  });

  it('Create Site', function() {
    // Get the auth token from the alias
    const authTokenMain = this.authTokenMain;
    const contentUrl = "NewSiteAP1"
    const siteName = "New API Site"
    
    cy.api({
      method: 'POST',
      url: 'http://tableau-2021.zenoptics.com/api/3.12/sites',
      body: `
        <tsRequest>
          <site name=${siteName}
            contentUrl=${contentUrl}
            adminMode="ContentAndUsers"/>
        </tsRequest>
      `,
      headers: {
        'X-Tableau-Auth': authTokenMain 
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      const xmlDoc = Cypress.$.parseXML(response.body);
    const siteId = Cypress.$(xmlDoc).find('site').attr('id');
    cy.wrap(siteId).as('siteId'); 
    const siteID = cy.wrap(siteId);
 login2
    cy.api({
      method: 'POST',
      url: 'http://tableau-2021.zenoptics.com/api/3.12/auth/signin',
      body: `
      <tsRequest>
  <credentials name="admin" password="password1234">
      <site contentUrl=${contentUrl} />
      </credentials>
</tsRequest>
      `
    
    }).then((response) => {
      expect(response.status).to.eq(200);
      const xmlDoc = Cypress.$.parseXML(response.body);
      const token = Cypress.$(xmlDoc).find('credentials').attr('token');
      cy.wrap(token).as('authTokenSecondary'); // store token in an alias for later use
    });
 });
 })

   it('Create project', function() {
    // Get the auth token from the alias
    const authToken = this.authTokenSecondary;
    const siteID = this.siteId; 

   
    cy.api({
      method: 'POST',
      url: `http://tableau-2021.zenoptics.com/api/3.12/sites/${siteID}/projects`,
      body: `
      <tsRequest> 
      <project name="myNewProj"  
        description="A new project created with the REST API" /> 
    </tsRequest>
      `,
      headers: {
        'X-Tableau-Auth': authToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Do something with the response
    });

  })







  });



  