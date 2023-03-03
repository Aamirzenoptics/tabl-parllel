describe('test', () => {
    it('api', () => {
        
        cy.readFile('C:\\Users\\amir_\\OneDrive\\Desktop\\publish\\publish-workbook.xml').then(xmlFile => {
            cy.fixture('MY_WORKBOOKK.twbx', 'binary').then(twbxFile => {
              const formData = new FormData();
              formData.append('request_payload', new Blob([xmlFile], { type: 'application/xml' }));
              formData.append('tableau_workbook', new Blob([twbxFile], { type: 'application/octet-stream' }));
          
              cy.request({
                method: 'PUT',
                url: 'http://tableau-2021.zenoptics.com/api/3.12/sites/ec1bba7e-b934-4e01-829e-9470c3111972',
                headers: {
                  'X-Tableau-Auth': 'DN4Htj6CTX2sWrxiJm4MGA|tPofUyxVRex6bO6AQNTut97jzetRdpq5',
                  'Content-Type': 'multipart/form-data'
                },
                body: formData,
                encoding: 'binary'
              })
                // Handle the response as needed
              
            });
          });
          
    });
});