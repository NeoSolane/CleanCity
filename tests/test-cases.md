## TC-ACCESS-001 – Validate Color Contrast of Warning Messages

- **Related Defect:** CLEANCITY-37
- **Feature:** Warning Message UI
- **FR ID:** FR-071
- **Severity:** Minor
- **Priority:** Medium

### Preconditions:

- WAVE or axe DevTools installed in Chrome

### Steps:

1. Navigate to any form (e.g., login, registration).
2. Submit the form with invalid or empty input to trigger a warning.
3. Use WAVE or axe DevTools to inspect the warning text.
4. Check the contrast ratio.

### Expected Result:

- Contrast ratio is ≥ 4.5:1 (WCAG 2.1 AA compliant).

### Actual Result:

- Very low contrast detected. Accessibility warning shown by WAVE.

### Test Status: [Pass/Fail]

## TC-PERF-001 – Measure Dashboard Load Time

- **Related Defect:** CLEANCITY-38
- **Feature:** Dashboard Performance
- **FR ID:** FR-084
- **Severity:** Major
- **Priority:** Medium

### Preconditions:

- Chrome with DevTools Lighthouse

### Steps:

1. Open Chrome > DevTools > Network tab.
2. Enable throttling (e.g., Fast 3G).
3. Navigate to the Dashboard page and reload.
4. Measure load time from the network timeline.

### Expected Result:

- Page loads fully within 3 seconds.

### Actual Result:

- Load time is ~4.8 seconds.

### Test Status: [Pass/Fail]

## TC-ACCESS-002 – Check for Missing Label on "Add a Comment" Field

- **Related Defect:** CLEANCITY-39
- **Feature:** Blog Comment Form
- **FR ID:** FR-071
- **Severity:** Minor
- **Priority:** Medium

### Preconditions:

- Chrome browser, WAVE or axe, NVDA screen reader

### Steps:

1. Navigate to Blog page.
2. Locate the "Add a comment..." input.
3. Check for a `<label>` or `aria-label` using DevTools/WAVE.
4. Use NVDA to test how it's announced.

### Expected Result:

- Screen readers can identify the field purpose.

### Actual Result:

- No label; field is not announced clearly.

### Test Status: [Pass/Fail]

## TC-RESP-001 – Validate Navbar Behavior on Small Viewports

- **Related Defect:** CLEANCITY-35
- **Feature:** Responsive Design
- **FR ID:** FR-069
- **Severity:** High (Critical)
- **Priority:** High

### Preconditions:

- Chrome in device emulator mode or real mobile device (<768px width)

### Steps:

1. Open the app in small viewport.
2. Observe navbar layout and behavior.

### Expected Result:

- Navbar collapses, doesn't obstruct content.

### Actual Result:

- Navbar overflows, covering ~50% of viewport.

### Test Status: [Pass/Fail]

## TC-VALID-001 – Sanitize Special Characters in Feedback Input

- **Related Defect:** CLEANCITY-36
- **Feature:** Feedback Form
- **FR ID:** FR-022 (Probable)
- **Severity:** Major
- **Priority:** High

### Preconditions:

- Access to Feedback form

### Steps:

1. Enter: `!@#<scalert('hi')</script>` into the feedback input.
2. Submit the form.
3. Monitor the frontend response.

### Expected Result:

- Input is sanitized. No scripts or unsafe content accepted.

### Actual Result:

- Input accepted without validation. Unsafe data possible.

### Test Status: [Pass/Fail]
