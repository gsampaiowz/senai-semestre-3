describe("template spec", () => {
  let musicItem;

  before(() => {
    cy.visit("/");
  });

  it("Redirecionar para a tela de favoritos", () => {
    cy.get("[href='/Favorites'").click();

    cy.wait(1000);

    cy.scrollTo("top");
  });

  // it("Procurando uma música específica", () => {
  //   cy.get("[data-testid='campoBusca']").type("ASSOMBRA MATRIX");

  //   cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);

  //   cy.scrollTo("top");

  //   cy.wait(1000);

  //   musicItem = cy.get("[aria-label='music-item']").contains("ASSOMBRA MATRIX");
  // });

  // it("Clicar no curtir da música", () => {
  //   cy.wait(1000);

  //   cy.get("[aria-label='music-item']")
  //     .filter((_, item) => item.textContent.includes("Assombra Matrix 6.0"))
  //     .then(($element) => {
  //       cy.wait(1000);
  //       cy.wrap($element).find("[data-testid='icon-button']").click();
  //     });
  // });

  it("Executar uma música na tela de favoritos", () => {
    cy.wait(1000);

    cy.get("[aria-label='music-item']")
      .filter((_, item) => item.textContent.includes("Assombra Matrix 6.0"))
      .then(($element) => {
        cy.wait(1000);
        cy.wrap($element).find("[data-testid='icon-button']").click();
      });
  });
});
