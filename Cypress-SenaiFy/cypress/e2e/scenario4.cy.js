describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("Que eu estou na tela favoritos", () => {
    cy.get("[href='/Favorites']").click();
  });

  it("Eu vejo uma lista de musicas favoritas", () => {
    cy.scrollTo("top");
    cy.wait(1000);
    cy.get("[aria-label='music-item-fvt']").should("have.length.greaterThan", 0);
  });

  it("Eu vejo a musica favoritada na lista", () => {
    cy.scrollTo("top");
    cy.wait(1000);
    cy.get("[aria-label='music-item-fvt']").should(
      "contain",
      "Só Os Loucos Sabem"
    );
  });

  it("Eu clico na musica favoritada", () => {
    cy.scrollTo("top");
    cy.wait(1000);

    cy.get("[aria-label='music-item-fvt']").contains("Só Os Loucos Sabem").click();
  });
});
