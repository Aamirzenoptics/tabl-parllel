import tabsdata from "../fixtures/tableauviews.json";
import url from "../fixture/totalurls.json";
  describe("ff", () => {
    it("ff", () => {
      cy.visit(tabsdata.url.tableau2021);
      cy.loginToTableau(
        tabsdata.credentials.username,
        tabsdata.credentials.password
      );
      cy.wait(2000);

      url.forEach((viewUrl) => {
        cy.visit(viewUrl);
        cy.wait(7000);
      });
    });
  });

