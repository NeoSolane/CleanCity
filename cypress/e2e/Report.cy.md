👽👾>> npx cypress run

DevTools listening on ws://127.0.0.1:41985/devtools/browser/d2432656-9618-47e5-acae-24e580f1eb21
Couldn't find tsconfig.json. tsconfig-paths will be skipped

====================================================================================================

(Run Starting)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Cypress: 14.5.1 │
│ Browser: Electron 130 (headless) │
│ Node Version: v22.17.0 (/usr/bin/node-22) │
│ Specs: 1 found (auth.cy.js) │
│ Searched: cypress/e2e/\*_/_.cy.{js,jsx,ts,tsx} │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────────────────────────────────────────────

Running: auth.cy.js (1 of 1)

CleanCity Validation
Register Form 1) should NOT allow password shorter than 8 characters — but it does 2) should NOT allow names shorter than 2 characters — but it does
Login Form 3) should NOT log in with fake credentials — but it does

0 passing (17s)
3 failing

1. CleanCity Validation
   Register Form
   should NOT allow password shorter than 8 characters — but it does:
   AssertionError: Timed out retrying after 4000ms: Expected to find content: '/password.\*8/i' but never did.
   at Context.eval (webpack://cleancity-waste-scheduler/./cypress/e2e/auth.cy.js:13:34)

2. CleanCity Validation
   Register Form
   should NOT allow names shorter than 2 characters — but it does:
   AssertionError: Timed out retrying after 4000ms: Expected to find content: '/name.\*too short/i' but never did.
   at Context.eval (webpack://cleancity-waste-scheduler/./cypress/e2e/auth.cy.js:24:38)

3. CleanCity Validation
   Login Form
   should NOT log in with fake credentials — but it does:
   AssertionError: Timed out retrying after 4000ms: expected 'http://localhost:3000/profile' to include '/login'
   at Context.eval (webpack://cleancity-waste-scheduler/./cypress/e2e/auth.cy.js:39:15)

(Results)

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Tests: 3 │
│ Passing: 0 │
│ Failing: 3 │
│ Pending: 0 │
│ Skipped: 0 │
│ Screenshots: 3 │
│ Video: false │
│ Duration: 17 seconds │
│ Spec Ran: auth.cy.js │
└────────────────────────────────────────────────────────────────────────────────────────────────┘

(Screenshots)

- /home/billy/coding/CleanCity/cypress/screenshots/auth.cy.js/CleanCity Validation (1280x720)
  -- Register Form -- should NOT allow password shorter than 8 characters — but i  
  t does (failed).png
- /home/billy/coding/CleanCity/cypress/screenshots/auth.cy.js/CleanCity Validation (1280x720)
  -- Register Form -- should NOT allow names shorter than 2 characters — but it d  
  oes (failed).png
- /home/billy/coding/CleanCity/cypress/screenshots/auth.cy.js/CleanCity Validation (1280x720)
  -- Login Form -- should NOT log in with fake credentials — but it does (failed)  
  .png

====================================================================================================

(Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✖ auth.cy.js 00:17 3 - 3 - - │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
✖ 1 of 1 failed (100%) 00:17 3 - 3 - -
