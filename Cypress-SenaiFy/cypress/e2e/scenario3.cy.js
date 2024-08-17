describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("Que eu estou na tela de pesquisa", () => {
    cy.wait(1000);
    cy.get("[href='/Search']").click();
  });

  it("Eu procuro por uma música: 'Só os loucos sabem'", () => {
    cy.get("[data-testid='campoBusca']").type("Só os loucos sabem");
    cy.wait(1000);
    cy.scrollTo("top");
  });

  it("Eu vejo uma lista de resultados de musicas", () => {
    cy.get("[aria-label='music-item-sch']").should("have.length.greaterThan", 0);
    cy.wait(1000);
  });

  it("Eu clico na primeira musica dos resultados", () => {
    cy.scrollTo("top");
    cy.wait(1000);

    cy.get("[aria-label='music-item-sch']").first().click();
  });

  it("Eu clico para favoritar a música", () => {
    cy.get("[aria-label='music-item-sch']")
      .first()
      .then((e) => {
        cy.wait(1000);
        cy.wrap(e).find("[data-testid='icon-button']").click();
      });
  });

});
