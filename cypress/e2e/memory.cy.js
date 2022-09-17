/// <reference types="cypress" />

describe("memory card game", () => {
  beforeEach(() => {
    cy.visit("/cards");
  });

  it("displays three card game options", () => {
    cy.get("#btnMemoryGameTwelve").should(
      "have.text",
      "Memory Game (12 Cards)"
    );

    cy.get("#btnMemoryGameTwenty").should(
      "have.text",
      "Memory Game (20 Cards)"
    );

    cy.get("#btnMemoryGameForty").should("have.text", "Memory Game (40 Cards)");
  });

  context("12 card game", () => {
    beforeEach(() => {
      cy.get("#btnMemoryGameTwelve").click();
    });

    it("should display 12 cards face down", () => {
      cy.get(".card").should("have.length", 12);
      cy.get(".front").should(
        "have.css",
        "transform",
        "matrix3d(6.12323e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323e-17, 0, 0, 0, 0, 1)"
      );
      cy.get(".back").should("have.css", "transform", "none");
    });

    it("should display front of card when first card is clicked", () => {
      cy.get(".card").first().click();

      cy.get(".front")
        .first()
        .should("have.css", "transform", "matrix(1, 0, 0, 1, 0, 0)");

      cy.get(".back")
        .first()
        .should(
          "have.css",
          "transform",
          "matrix3d(6.12323e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323e-17, 0, 0, 0, 0, 1)"
        );
    });

    // it("should display front of matching cards when both are clicked", () => {
    //   // cy.get(".card")
    //   //   .first()
    //   //   .click()
    //   //   .then(($card) => {
    //   //     // get the image source
    //   //     console.log($card);
    //   //     $card.get(".front").then(($frontImg) => {
    //   //       console.log($frontImg);
    //   //       //click the last image that matches that source
    //   //       cy.get("img[src=" + $frontImg.src + "]").click();
    //   //     });
    //   //   });
    // });
  });

  context("20 card game", () => {
    beforeEach(() => {
      cy.get("#btnMemoryGameTwenty").click();
    });

    it("should display 20 cards face down", () => {
      cy.get(".card").should("have.length", 20);
      cy.get(".front").should(
        "have.css",
        "transform",
        "matrix3d(6.12323e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323e-17, 0, 0, 0, 0, 1)"
      );
      cy.get(".back").should("have.css", "transform", "none");
    });
  });

  context("40 card game", () => {
    beforeEach(() => {
      cy.get("#btnMemoryGameForty").click();
    });

    it("should display 40 cards face down", () => {
      cy.get(".card").should("have.length", 40);
      cy.get(".front").should(
        "have.css",
        "transform",
        "matrix3d(6.12323e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323e-17, 0, 0, 0, 0, 1)"
      );
      cy.get(".back").should("have.css", "transform", "none");
    });
  });
});
