# CleanCity – Final Test Report

**Team:** QA Solutions 
**Institution:** Power Learn Project  
**Testing Period:** June 26 – July 16, 2025  
**Date:** July 16, 2025  
**Version:** 1.0

---

## 📋 Executive Summary

This report outlines the QA process and findings for the CleanCity Waste Pickup Scheduler project. Our testing efforts focused on functional validation, usability, accessibility, performance, and defect detection. Using both manual and automated testing via Cypress, we uncovered multiple critical, major, and minor defects. This report documents our approach, key issues discovered, and improvement recommendations.

---

## 🧪 Test Strategy and Approach

We adopted the Software Testing Life Cycle (STLC) with four key phases:

1. **Planning** – Defined scope, roles, and environment setup.
2. **Design** – Created detailed test cases for all modules (FR-012 to FR-022).
3. **Execution** – Ran tests (manual and automated) using Cypress and documented results.
4. **Closure** – Summarized metrics, categorized defects, and proposed recommendations.

> **Tools Used:** Cypress, Chrome DevTools, GitHub, Jira, VS Code,Lighthouse, Wave tool

---

## 🧪 Test Environment Details

- **OS:** Windows 10
- **Browsers Tested:** Chrome, Edge
- **Device:** Desktop
- **Network:** Wi-Fi
- **Automation:** Cypress v14.5.1
- **Localhost Server:** React Frontend (http://localhost:3000)

---

## ✅ Test Execution Summary

| Test Category       | Total | Passed | Failed | Skipped |
|---------------------|-------|--------|--------|---------|
| Functional Tests    | 10    | 3      | 7      | 0       |
| Automation Scripts  | 2     | 1      | 1      | 0       |
| Manual Test Scenarios | 14   | 12     | 2      | 0       |
| Accessibility/UX    | 5     | 4      | 1      | 0       |

> Note: Test FR-012 passed (pickup request successfully submitted); failures in request history, feedback, and status due to missing features or UI inconsistencies.

---

## 🐛 Defect Analysis and Categorization

| Severity | Count | Examples |
|----------|-------|----------|
| Critical | 3     | Feedback form not loading; status not updating; cancel button non-functional |
| Major    | 5     | Request history not showing; editing fails post-deadline |
| Minor    | 7     | Label inconsistencies, success message timing, unstyled buttons |
| Cosmetic | 3     | Typography alignment, spacing issues |

---

## ⚠️ Risk Assessment

| Risk Area            | Impact   | Likelihood | Recommendation         |
|----------------------|----------|------------|------------------------|
| Data Loss (localStorage) | High     | Medium     | Add error recovery, backups |
| Accessibility (WCAG) | High     | High       | Implement ARIA roles, improve contrast |
| Feedback Functionality | High     | High       | Fix visibility logic, test after pickup |

---

## 💡 Recommendations and Improvements

- ✅ Improve localStorage data handling with backup/restore options
- ✅ Display real-time request status from UI events
- ✅ Fix label, accessibility roles, and screen reader compatibility
- ✅ Enable edit functionality before 24hr lock correctly
- ✅ Integrate success/error messages with consistent timing
- ✅ Add request fallback messages when no data is present

---

## 📊 Test Metrics and KPIs

- **Defects Logged:** 18
- **Defect Density:** 1.8 defects/module
- **Automated Tests Run:** 2 full test suites
- **Functional Coverage:** ~85%
- **Test Completion:** 100%
- **Video Recording & Screenshots:** ✅ Captured for all critical issues

---

## 📎 Appendices

- 🔗 Cypress scripts: `https://github.com/NeoSolane/CleanCity/tree/main/cypress/e2e`
- 🔗 Test Results: `https://github.com/NeoSolane/CleanCity/blob/main/test-results.txt`
- 🔗 Defect Log: `https://github.com/NeoSolane/CleanCity/blob/main/tests/defect-log.md`
- 🔗 Test Cases: `https://github.com/NeoSolane/CleanCity/blob/main/tests/test-cases.md`
- 🔗 Screenshots: `https://github.com/NeoSolane/CleanCity/tree/main/cypress/screenshots`
- 🔗 Video Presentation: `https://drive.google.com/file/d/1nIJZe1BxZr6xR-FeBRkqXwxPcTRUSRqy/view?usp=sharing`

---

✅ **Submitted by:**  
QA Solutions Team  
July 16, 2025
