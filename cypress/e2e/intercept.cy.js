/// <reference types="cypress" />
import user from "../fixtures/user.json";
import cars from "../fixtures/cars.json";
describe("Interception for profile page", () => {
  it.only("The intercepted profile information should be visible", () => {
    cy.intercept("GET", "**profile", user);
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.contains("Sign In").click();
    cy.get("#signinEmail").type("michael.krasnovskyi+testUser1@gmail.com");
    cy.get("#signinPassword").type("ZSgeVQhuU3qkvlG");
    cy.contains("Login").click();
    cy.get(".-profile").click();
    cy.get('.profile').contains("Polar Bear");
    cy.get(".profile-info_text")
      .should("contain", "11.11.2011")
      .and("contain", "USA");
  });
});
