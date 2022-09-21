describe("Castle single player card game", () => {
  beforeEach(() => {
    cy.visit("/cards");
  });

  context("single player castle game against one ai", () => {
    beforeEach(() => {
      cy.get("#btnCastleGameSinglePlayer").click();
    });

    it("should deal three face down cards to each player, six cards into each players hands and thirty four cards into the draw pile", () => {
      cy.get(".playerOne .faceDown .card").should("have.length", 3);
      cy.get(".playerTwo .faceDown .card").should("have.length", 3);

      cy.get(".playerOne .hand .card").should("have.length", 6);
      cy.get(".playerTwo .hand .card").should("have.length", 6);

      cy.get(".drawPile .counter").should("have.text", 34);
    });
  });
});
