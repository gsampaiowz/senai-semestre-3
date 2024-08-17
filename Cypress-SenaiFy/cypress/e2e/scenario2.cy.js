describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });

  it("Eu volto para a listagem de playlists", () => {
    cy.visit("/");
  });

  it("Eu clico na segunda playlist", () => {
    cy.wait(1000);
    cy.get("[aria-label='playlist-item']").eq(1).click();
  });

  it("Eu vejo uma lista de musicas", () => {
    cy.wait(1000);
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Eu clico na primeira musica", () => {
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(3000);
  });
});
