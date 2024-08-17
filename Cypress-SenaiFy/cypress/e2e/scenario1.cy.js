describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
  });
  // se for de tarde!
  it('Eu vejo o header "Good afternoon"', () => {
    cy.get("[aria-label='title-head']").should("contain", "Good afternoon");
  });

  it("Eu vejo uma lista de playlists", () => {
    cy.wait(1000);
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);
  });

  it("Eu clico na primeira playlist", () => {
    cy.get("[aria-label='playlist-item']").first().click();
  });

  it("Eu vejo uma lista de musicas", () => {
    cy.wait(1000);
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Eu clico na primeira musica", () => {
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(1000);
  });
});
