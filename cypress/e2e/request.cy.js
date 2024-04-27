/// <reference types="cypress" />
describe("Jsonplaceholder items test", () => {
  const newPost = {
    userId: 7,
    id: 106,
    title: "test",
    body: "124",
  };

  const newComment = {
    postId: 1,
    id: 501,
    name: "Comment to Leane Graham's post",
    email: "oleh_test@araceli.name",
    body: "Commenting the post. One two.",
  };

  const updatedComment = {
    body: "Changed the comment of the post. One two three.",
  };

  const newUser = {
    id: 11,
    name: "Oleh Test",
    username: "QA",
    email: "oleh_test@araceli.namez",
  };

  it("Post body contains specific text", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("body.body")
      .should("contain", "recusandae");
  });

  it("User ID of new post is correct", () => {
    cy.request(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    ).as("newPost");
    cy.get("@newPost").its("body.userId").should("eq", 7);
  });

  it("New user has correct name", () => {
    cy.request(
      "POST",
      "https://jsonplaceholder.typicode.com/users",
      newUser
    ).as("newUser");
    cy.get("@newUser").its("body.name").should("eq", "Oleh Test");
  });

  it("New comment has correct user email", () => {
    cy.request(
      "POST",
      "https://jsonplaceholder.typicode.com/comments",
      newComment
    ).as("newComment");
    cy.get("@newComment")
      .its("body.email")
      .should("eq", "oleh_test@araceli.name");
  });

  it("Updated comment has correct body text", () => {
    cy.request(
      "PATCH",
      "https://jsonplaceholder.typicode.com/comments/501",
      updatedComment
    ).as("updatedComment");
    cy.get("@updatedComment")
      .its("body.body")
      .should("contain", "One two three");
  });

  it("Specific user is being deleted", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/4");
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/users/4");
  });
});
