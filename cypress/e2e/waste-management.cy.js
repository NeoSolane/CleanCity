/// <reference types="cypress" />

describe('Waste Pickup Scheduling - CleanCity (FR-012 to FR-015)', () => {
  const user = {
    email: 'user1@test.com',
    password: 'TestPass123',
  };

  beforeEach(() => {
    // Log in first
    cy.visit('http://localhost:3000/login');
    cy.get('#login-email').type(user.email);
    cy.get('#login-password').type(user.password);
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/profile');

    // Navigate to Schedule Pickup
    cy.get('nav').contains('Schedule Pickup').click();
    cy.url().should('include', '/home');
  });

  context('FR-012: Schedule a valid pickup request', () => {
    it('Allows scheduling with valid inputs', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split('T')[0];

      cy.get('#home-name').type('John Doe');
      cy.get('#home-email').type(user.email);
      cy.get('#home-location').select('Nairobi');
      cy.get('#home-waste').select('General');
      cy.get('#home-date').type(dateStr);
      cy.get('#home-desc').type('Please ring doorbell when arriving');
      cy.get('.home-btn').click();

      // You can assert a success message here if available
      cy.contains('Pickup request submitted').should('exist');
    });
  });

  context('FR-013: Reject pickup < 24 hours in advance', () => {
    it('Rejects scheduling for same-day pickup', () => {
      const today = new Date().toISOString().split('T')[0];

      cy.get('#home-name').type('Jane Smith');
      cy.get('#home-email').type(user.email);
      cy.get('#home-location').select('Eldoret');
      cy.get('#home-waste').select('Recyclable');
      cy.get('#home-date').type(today);
      cy.get('#home-desc').type('Attempting to schedule same-day');
      cy.get('.home-btn').click();

      // Check for validation or error message
      cy.contains('Pickup date must be at least 24 hours in advance').should('exist');
    });
  });

  context('FR-014: Time slot display check', () => {
    it('Displays available time slots after selecting valid date', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split('T')[0];

      cy.get('#home-date').type(dateStr);

      // Assert that time slots are rendered
      cy.contains('Available Time Slots').should('exist');
    });
  });

  context('FR-015: Prevent duplicate pickup on same date', () => {
    it('Prevents scheduling another pickup on same date', () => {
      const existingDate = '2025-07-15'; // Based on your test data

      cy.get('#home-name').type('Mike Johnson');
      cy.get('#home-email').type(user.email);
      cy.get('#home-location').select('Nairobi');
      cy.get('#home-waste').select('Organic');
      cy.get('#home-date').type(existingDate);
      cy.get('#home-desc').type('Duplicate request attempt');
      cy.get('.home-btn').click();

      // Assert an error or warning about duplicate
      cy.contains('Pickup already scheduled for this date').should('exist');
    });
  });
});
