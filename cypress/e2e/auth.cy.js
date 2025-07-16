describe("CleanCity Validation", () => {
  context("Register Form", () => {
    beforeEach(() => {
      cy.visit("/register");
    });

    it("should NOT allow password shorter than 8 characters — but it does", () => {
      cy.get("#register-name").type("Test User");
      cy.get("#register-email").type("test@example.com");
      cy.get("#register-password").type("123");
      cy.get("form").submit();

      cy.contains(/password.*8/i).should("exist");

      cy.url().should("include", "/register");
    });

    it("should NOT allow names shorter than 2 characters — but it does", () => {
      cy.get("#register-name").type("A");
      cy.get("#register-email").type("short@example.com");
      cy.get("#register-password").type("validpassword");
      cy.get("form").submit();

      cy.contains(/name.*too short/i).should("exist");
      cy.url().should("include", "/register");
    });
  });

  context("Login Form", () => {
    beforeEach(() => {
      cy.visit("/login");
    });

    it("should NOT log in with fake credentials — but it does", () => {
      cy.get("#login-email").type("fake@hacker.com");
      cy.get("#login-password").type("wrongpass");
      cy.get("form").submit();

      cy.url().should("include", "/login");
      cy.contains(/invalid credentials/i).should("exist");
    });
  });
});
