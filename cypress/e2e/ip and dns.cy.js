describe('', () => {

    it('', () => {
        cy.exec('curl ifconfig.me').then(result => {
            const ipAddress = result.stdout.trim()
            // Log the IP address to the console
            cy.log(`Server IP address: ${ipAddress}`)
          })
        
          cy.exec('nslookup $(hostname -i)').then(result => {
            const dnsName = result.stdout.trim().split('\n')[3].split(':')[1].trim()
            // Log the DNS name to the console
            cy.log(`Server DNS name: ${dnsName}`)
          })
    });
    
});