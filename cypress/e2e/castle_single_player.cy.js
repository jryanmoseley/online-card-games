describe("Castle single player card game", () => {
  beforeEach(() => {
    cy.visit("/cards");
  });

  context("single player castle game against one ai", () => {
    beforeEach(() => {
      cy.get("#btnCastleSinglePlayerOneAI").click();
    });

    it("should deal three face down cards to each player, six cards into each players hands and thirty four cards into the draw pile", () => {
      cy.get(".player-one .castle .face-down .castle-card").should(
        "have.length",
        3
      );
      cy.get(".player-two .castle .face-down .castle-card").should(
        "have.length",
        3
      );

      cy.get(".player-one .hand .castle-card").should("have.length", 6);
      cy.get(".player-two .hand .castle-card").should("have.length", 6);

      cy.get(".draw-pile .counter").should("have.text", 34);
    });
  });
});
