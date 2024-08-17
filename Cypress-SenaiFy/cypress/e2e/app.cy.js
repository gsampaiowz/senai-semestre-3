describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  // it("passes", () => {
  //   cy.get("[aria-label='title-head']");
  //   cy.get("[aria-label='title-head']").should("contain", "Good afternoon");
  // });

  // it("Verificar se tem uma lista com as playlist exibida", () => {
  //   cy.wait(2000);
  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);
  // });

  // it("Clicar em uma opção de playlist e list suas músicas", () => {
  //   cy.get("[aria-label='playlist-item']").eq(0).click();
  //   cy.wait(1000);
  //   cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  // });

  // it("Clicar em uma opção de playlist e list suas músicas", () => {
  //   cy.get("[aria-label='music-item']").eq(5).click();

  //   cy.scrollTo("top");
  // });

  it("Encontrar album pagodeira", () => {
    cy.wait(1000);
    cy.get("[aria-label='playlist-item']").contains("Pagodeira").click();
    cy.wait(1000);
    cy.get("[aria-label='music-item']").contains("Vamo de Pagodin").click();
  });
});
