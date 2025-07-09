# CleanCity QA Testing Plan

## Project Information

- **Project Name:** CleanCity – Waste Pickup Scheduler
- **Testing Period:** June 26 – July 16, 2025
- **Team Size:** 3 QA Testers
- **Test Lead:** Maria Neo
- **Management Tool:** Jira
- **QA Repository:** https://github.com/NeoSolane/CleanCity

---

## Objectives

1. Validate all functional requirements (FR-001 to FR-097)
2. Identify bugs, edge cases, and track regressions in Jira
3. Test accessibility (WCAG 2.1 AA), performance, and responsiveness
4. Ensure cross-browser and multi-device compatibility
5. Maintain versioned QA documentation and evidence
6. Deliver a comprehensive test report and Jira-linked presentation

---

## Team Roles

| Member              | Role                        | Responsibilities                                                           |
| ------------------- | --------------------------- | -------------------------------------------------------------------------- |
| **Maria Neo**       | Test Lead & Reporter        | Plan coordination, Jira issue tracking, reporting, demo videos             |
| **Cynthia Nadongo** | Functional Testing          | Auth flows, pickup scheduling, dashboards, admin panels                    |
| **Billy Yator**     | Non-Functional & UX Testing | Performance, responsiveness, accessibility, usability, notification system |

---

## Testing Types

| Type              | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| **Functional**    | Validate each feature against the FRS (FR-001 → FR-097)               |
| **Usability**     | Evaluate navigation, clarity, and design responsiveness               |
| **Accessibility** | Test WCAG 2.1 AA compliance (alt text, keyboard nav, color contrast)  |
| **Performance**   | Measure page load times, memory usage, and interaction delays         |
| **Compatibility** | Verify behavior across Chrome, Firefox, Edge, Safari, mobile & tablet |

---

## Features to be Tested

| Feature                | Description                                               | QA Lead |
| ---------------------- | --------------------------------------------------------- | ------- |
| Authentication System  | Register, Login, Logout, Role-based access                | Cynthia |
| Waste Pickup Scheduler | Schedule request, cancel, modify, view status             | Cynthia |
| Dashboard & Analytics  | Stats, badges, achievements, visualizations               | Cynthia |
| Community Features     | Posts, comments, profile, leaderboard                     | Cynthia |
| Admin Functions        | Manage pickups, users, moderate content                   | Cynthia |
| Blog & Awareness Tools | Eco tips, quizzes, infographic interactions               | Billy   |
| UI/UX Testing          | Navigation, layout, mobile responsiveness                 | Billy   |
| Accessibility          | WCAG 2.1 (alt text, labels, keyboard nav, contrast)       | Billy   |
| Performance            | Page load speed, Lighthouse scores, device responsiveness | Billy   |
| Notification System    | Alerts, achievement unlocks, notification history         | Billy   |

---

## Device & Browser Matrix

| Device Type | Browsers to Test              |
| ----------- | ----------------------------- |
| Desktop     | Chrome, Firefox, Edge, Safari |
| Mobile View | Chrome Developer Tools        |
| Tablet View | Chrome Developer Tools        |

---
