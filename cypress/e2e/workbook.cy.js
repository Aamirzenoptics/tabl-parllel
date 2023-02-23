describe('Publish Tableau Workbook', () => {
    it('should publish a Tableau workbook', () => {
      // Set the Tableau server URL, site ID, and authentication token
      const serverUrl = 'http://tableau-2021.zenoptics.com/';
      const siteId = 'e19b4e45-261a-4c44-9d6c-4eb1333dc39d';
      const authToken = 'naeyqYDITiOBPpThTSL9aQ|KHlPoGumy8mgbd3Y5xpeQ7jZv56eBpNm';
      
      // Set the workbook file name and path
      const workbookFileName = 'MY_WORKBOOKK.twbx';
      const workbookFilePath = `C:/tab-automation/tabl-parllel/cypress/fixtures/${workbookFileName}`;
      //C:/tab-automation/tabl-parllel/cypress/fixtures/MY_WORKBOOKK.twbx
      // Set the request payload for publishing the workbook
      const requestPayload = `
        <tsRequest>
          <workbook name="test1" showTabs="true">
            <project id="0614288d-be0f-4f5e-aa1a-36e4325e59f1"/>
            
          </workbook>
        </tsRequest>
      `;
  
      // Send a POST request to publish the workbook
      cy.request({
        method: 'POST',
        url: `${serverUrl}/api/3.4/sites/${siteId}/workbooks`,
        headers: {
          'X-Tableau-Auth': authToken,
          'Content-Type': 'multipart/mixed;',
        },
        body: {
          request_payload: {
            value: requestPayload,
            options: {
              filename: 'publish-workbook.xml',
              contentType: 'text/xml',
            },
          },
          tableau_workbook: {
            value: Cypress.Blob.read(workbookFilePath),
            options: {
              filename: workbookFileName,
              contentType: 'application/octet-stream',
            },
          },
        },
      }).then((response) => {
        // Assert that the response status code is 201 (Created)
        expect(response.status).to.equal(201);
      });
    });
  });