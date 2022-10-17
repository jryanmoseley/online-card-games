describe("Castle single player card game", () => {
  beforeEach(() => {
    cy.visit("/cards");
  });

  context("Single player castle game against one ai", () => {
    beforeEach(() => {
      cy.get("#btnCastleSinglePlayerOneAI").click();
    });

    it("Should deal three face down cards to each player, six cards into each players hands and thirty four cards into the draw pile", () => {
      cy.get(".player-one.castle .castle-card").should("have.length", 3);
      cy.get(".player-two.castle .castle-card").should("have.length", 3);

      cy.get(".player-one.hand .castle-card").should("have.length", 6);
      cy.get(".player-two.hand .castle-card").should("have.length", 6);

      cy.get(".draw-pile .counter").should("have.text", 34);
      cy.get(".discard-pile .counter").should("have.text", 0);
    });

    it("Should allow user to select three cards from their hand and click ready to build castle.  Then AI should select three cards for castle", () => {
      cy.get(".player-one.hand .castle-card").eq(0).click();
      cy.get(".player-one.hand .castle-card").eq(2).click();
      cy.get(".player-one.hand .castle-card").eq(4).click();

      cy.get(".player-one.hand .castle-card")
        .eq(0)
        .should("have.class", "selected");
      cy.get(".player-one.hand .castle-card")
        .eq(2)
        .should("have.class", "selected");
      cy.get(".player-one.hand .castle-card")
        .eq(4)
        .should("have.class", "selected");
    });
  });
});
