/// <reference types="Cypress" />

import tabsdata from "../fixtures/tableauviews.json";

Cypress._.times(1, () => {
  describe("login", () => {
    it("create workbooks ", () => {
      cy.visit(tabsdata.url.tableau2021);
      cy.loginToTableau(
        tabsdata.credentials.username,
        tabsdata.credentials.password
      );

      cy.wait(2000);

      cy.visit("http://tableau-2021.zenoptics.com/#/site/Metadata/views");


      cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($el) => {
        cy.wrap($el).click()
        cy.wait(2000)
        cy.go('back')
        cy.wait(5000)
          // .invoke("attr", "href")
          // .then((href) => {
          //   links.push(href);
          //   cy.log(links.length);
          // });
      });

      // const links = [];

      // cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)').then(($el) => {
      //   const scrollHeight = $el.prop('scrollHeight');
      //   cy.log(scrollHeight)
      //   const numScrolls = Math.ceil(scrollHeight / 400);
      //   cy.log(numScrolls)
      
      //   for (let i = 1; i <= numScrolls; i++) {
      //     const scrollTo = i * 400;
      //     cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)').scrollTo(0, scrollTo);
      //     cy.wait(5500);
      //     cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($el) => {
      //       cy.wrap($el)
      //         .invoke("attr", "href")
      //         .then((href) => {
      //           const linkObj = {
      //             link: href,
      //             timestamp: Date.now()
      //           };
      //           links.push(linkObj);
      //           cy.log(links.length);
      //         });
      //     });
      //   }
      // }).then(() => {
      //   const fileName = 'links.json';
      //   const filePath = `cypress/fixtures/${fileName}`;
      //   const data = JSON.stringify(links);
      //   cy.writeFile(filePath, data);
      // });
      


      // cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)').then(
      //   ($el) => {
      //     const scrollHeight = $el.prop("scrollHeight");
      //   }
      // );
      // const links = [];
      // for (let i = 000; i <= 1000; i += 200) {
      //   cy.get('[data-tb-test-id="tb-list-view"]>div>:nth-child(2)').scrollTo(
      //     0,
      //     i
      //   );
      //   cy.wait(5500);
      //   cy.get('[data-tb-test-id="name-cell"]>div>span>a').each(($el) => {
      //     cy.wrap($el)
      //       .invoke("attr", "href")
      //       .then((href) => {
      //         links.push(href);
      //         cy.log(links.length);
      //       });
      //   });
      // }

    //   cy.wrap(links).each((link) => {});
    });
  });
});
