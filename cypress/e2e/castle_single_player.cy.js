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
      cy.get(".board-pile .counter").should("have.text", 0);
    });

    it("Should allow user to select three cards from their hand and click ready to build castle.", () => {
      // double click should unselect
      cy.get(".player-one.hand .castle-card").eq(0).click();
      cy.get(".player-one.hand .castle-card").eq(0).click();

      // maximum of three cards can be selected
      cy.get(".player-one.hand .castle-card").eq(2).click();
      cy.get(".player-one.hand .castle-card").eq(3).click();
      cy.get(".player-one.hand .castle-card").eq(4).click();

      // should be ignored
      cy.get(".player-one.hand .castle-card").eq(5).click();

      // should have the correct selected cards
      cy.get(".player-one.hand .castle-card")
        .eq(2)
        .should("have.class", "castle-card selected");
      cy.get(".player-one.hand .castle-card")
        .eq(3)
        .should("have.class", "selected");
      cy.get(".player-one.hand .castle-card")
        .eq(4)
        .should("have.class", "selected");

      // remaining cards should be unselected
      cy.get(".player-one.hand .castle-card")
        .eq(0)
        .should("not.have.class", "selected");
      cy.get(".player-one.hand .castle-card")
        .eq(1)
        .should("not.have.class", "selected");
      cy.get(".player-one.hand .castle-card")
        .eq(5)
        .should("not.have.class", "selected");

      // user clicks ready
      cy.get("#btnPlayerPlay").click();

      // should move user selected cards to face up
      cy.get(".player-one.castle .castle-card").should("have.length", 6);
      cy.get(".player-two.castle .castle-card").should("have.length", 6);

      cy.get(".player-one.hand .castle-card").should("have.length", 3);
      cy.get(".player-two.hand .castle-card").should("have.length", 3);
    });

    // context("When the user starts the game", () => {
    //   beforeEach(() => {
    //     cy.get(".player-one.hand .castle-card").eq(2).click();
    //     cy.get(".player-one.hand .castle-card").eq(3).click();
    //     cy.get(".player-one.hand .castle-card").eq(4).click();
    //     cy.get("#btnPlayerPlay").click();
    //   });

    //   it("Should allow user to play a card and then be dealt a card from the draw pile", () => {
    //     cy.get(".player-one.hand .castle-card").eq(0).click();
    //     cy.get("#btnPlayerPlay").click();

    //     // there should be two cards on the board
    //     cy.get(".board-pile .counter").should("have.length", 2);
    //     cy.get(".board-pile .castle-card").should("have.length", 2);

    //     // should take a card from the draw pile for player and ai
    //     cy.get(".draw-pile .counter").should("have.text", 32);
    //     cy.get(".player-one.hand .castle-card").should("have.length", 3);
    //     cy.get(".player-two.hand .castle-card").should("have.length", 3);
    //   });
    // });
  });
});
