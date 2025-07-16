## CLEANCITY-37 – Color Contrast Fails on Warning Messages

- **Reported by:** Cynthia Nadongo
- **Date:** July 6, 2025
- **Severity:** Minor
- **Priority:** Medium
- **Feature:** Warning Message UI
- **FR ID:** FR-071
- **Steps to Reproduce:**
  1. Navigate to any warning message (e.g., form validation error).
  2. Run WAVE or axe DevTools accessibility checker.
  3. Check the contrast ratio of the warning message text.
- **Expected Result:** Warning text should meet a contrast ratio of at least 4.5:1 (WCAG 2.1 AA).
- **Actual Result:** WAVE reports very low contrast between text and background.
- **Environment:** Google Chrome with WAVE Evaluation Tool installed
- **Status:** In Progress

## CLEANCITY-38 – Slow Page Load

- **Reported by:** Cynthia Nadongo
- **Date:** July 6, 2025
- **Severity:** Major
- **Priority:** Medium
- **Feature:** Dashboard Performance
- **FR ID:** FR-084
- **Steps to Reproduce:**
  1. Open Chrome DevTools and go to the Network tab.
  2. Enable throttling.
  3. Reload the Dashboard page.
  4. Record the "Load" time shown in the DevTools timeline.
- **Expected Result:** Page should fully load within ≤3 seconds.
- **Actual Result:** Average load time recorded is approximately 4.8 seconds.
- **Environment:** Google Chrome – DevTools + Lighthouse Report
- **Status:** In Progress

## CLEANCITY-35 – Navbar Covers Half the Screen on Small Viewports

- **Reported by:** Billy Yator
- **Date:** July 8, 2025
- **Severity:** High
- **Feature:** Responsive Design
- **FR ID:** FR-069
- **Steps to Reproduce:**
  1. Open site on mobile viewport
  2. Observe layout of the top navbar
- **Expected Result:** Navbar collapses or fits screen
- **Actual Result:** Overflows and covers half of the viewpoint
- **Status:** In Progress

## CLEANCITY-36 – Feedback Accepts Invalid Characters

- **Reported by:** Billy Yator
- **Date:** July 8, 2025
- **Severity:** Medium
- **Feature:** Feedback Form
- **FR ID:** Possibly FR-022
- **Steps to Reproduce:**
  1. Submit feedback with input: `!@#<scalert('hi')</script>`
  2. Observe how input is handled
- **Expected Result:** Validation prevents invalid/special characters
- **Actual Result:** Feedback is accepted without sanitization
- **Status:** In progress

# 🐞 CleanCity Defect Log

| ID   | Summary                                     | Severity | Priority | Module               | Status   |
|------|---------------------------------------------|----------|----------|----------------------|----------|
| BUG-01 | Request history not displaying             | Major    | High     | Profile              | Open     |
| BUG-02 | Cannot cancel a pending request            | Critical | High     | Profile → My Requests | Open     |
| BUG-03 | Edit button inactive pre-24hr              | Major    | Medium   | Request Management   | Open     |
| BUG-04 | Pickup status not updating in real-time    | Critical | High     | Request Tracking     | Open     |
| BUG-05 | No alert after feedback submission         | Major    | High     | Feedback             | Open     |
| BUG-06 | Inaccessible labels for inputs             | Minor    | Medium   | Pickup Form          | Open     |
| BUG-07 | Wrong pickup date accepted                 | Major    | High     | Pickup Scheduling    | Fixed    |
| BUG-08 | Typo in success message                    | Cosmetic | Low      | Home Page            | Fixed    |
| BUG-09 | Schedule Pickup not loading from profile   | Critical | High     | Profile              | Open     |
| BUG-10 | Missing alt text for profile images        | Minor    | Medium   | Profile              | Open     |
| BUG-11 | Feedback modal lacks close button          | Minor    | Medium   | Feedback             | Open     |
| BUG-12 | My Requests tab content loads slowly       | Minor    | Medium   | Profile              | Open     |

> See Jira board for full defect descriptions, screenshots, and resolution status.
Jira Link: https://drive.google.com/file/d/1gD2IKgbBgFPYlhNNV848WjDQJAO_SMVR/view?usp=sharing 