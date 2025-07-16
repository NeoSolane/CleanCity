describe('Request Management & Tracking - CleanCity (FR-012 to FR-022)', () => {
  const user = {
    email: 'user1@test.com',
    password: 'TestPass123',
  };

  const loginAndGoToProfile = () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#login-email').type(user.email);
    cy.get('#login-password').type(user.password);
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/profile');
    cy.get('button').contains('My Requests', { timeout: 10000 }).click();
    cy.get('.profile-tab-panel').should('exist');
  };

  it('FR-012 + FR-016: Schedules a valid pickup and verifies history', () => {
    // Step 1: Login and go to home
    cy.visit('http://localhost:3000/login');
    cy.get('#login-email').type(user.email);
    cy.get('#login-password').type(user.password);
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/profile');
    cy.visit('http://localhost:3000/home');

    // Step 2: Fill pickup form
    cy.get('#home-name').type('Automation Test User');
    cy.get('#home-email').type(user.email);
    cy.get('#home-location').type('Automation Location');
    cy.get('#home-waste').select('Hazardous');
    cy.get('#home-date').type('2025-12-31');
    cy.get('#home-desc').type('Automated pickup description');
    cy.get('.home-btn').click();

    // Step 3: Confirm success
    cy.get('.home-success', { timeout: 6000 })
      .should('contain', 'Your waste pickup request has been submitted!');

    // Step 4: Redirected to profile page
    cy.url().should('include', '/profile');
    cy.get('button').contains('My Requests').click();

    // Step 5: History check
    cy.get('.profile-tab-panel').within(() => {
      cy.contains('No waste pickup requests yet.').should('not.exist');
      cy.get('.pickup-request-entry').should('exist');
    });
  });

  it('FR-017: Allows canceling a pending pickup', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.get('button').contains('Cancel').click();
      });
    });
  });

  it('FR-018: Allows modifying pickup before 24 hours of scheduled time', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.get('button').contains('Edit').click();
      });
    });

    // Assume modal or form opens to edit
    cy.get('#home-location').clear().type('Updated Location');
    cy.get('#home-desc').clear().type('Updated automation test description');
    cy.get('.home-btn').click();

    // Optional: Confirm update succeeded
    cy.get('.home-success', { timeout: 6000 }).should('exist');
  });

  it('FR-019: Displays pickup status clearly', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.contains(/Pending|Confirmed|Completed|Cancelled/).should('exist');
      });
    });
  });

  it('FR-020: Reflects real-time status updates', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.contains('Status updated to').should('exist');
      });
    });
  });

  it('FR-021: Shows notification on status change', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.contains('Status updated to').should('exist');
      });
    });
  });

  it('FR-022: Allows adding feedback after completed pickup', () => {
    loginAndGoToProfile();
    cy.get('.profile-tab-panel').within(() => {
      cy.get('.pickup-request-entry').first().within(() => {
        cy.get('button').contains('Feedback').click();
      });
    });

    // Fill feedback form (assuming modal or section opens)
    cy.get('textarea').type('Pickup completed smoothly. Great service!');
    cy.get('button').contains('Submit Feedback').click();

    // Optional confirmation
    cy.contains('Feedback submitted successfully').should('exist');
  });
});
