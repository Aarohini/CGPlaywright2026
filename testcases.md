# Test Cases: Signup, Login and Flight Booking

## Mandatory Popup Setup
Every test starts by navigating to https://phptravels.net/, waiting for the demo popup, clicking **I Understand & Continue**, and only then continuing to the target scenario.

| ID | Scenario | Expected Result | Priority | Automation |
|---|---|---|---|---|
| TC-01 | Accept initial demo popup | Popup closes and page becomes interactive | P0 | Yes |
| TC-02 | Open signup page | Signup fields are visible | P0 | Yes |
| TC-03 | Submit valid signup | Account creation or success confirmation | P0 | Yes |
| TC-04 | Submit invalid or empty signup | Validation is shown | P0 | Yes |
| TC-05 | Open and use login | Valid credentials authenticate; invalid credentials fail safely | P0 | Yes |
| TC-06 | Open flights page | Flight search controls are visible | P0 | Yes |
| TC-07 | Search one-way flight | Results or handled no-results state appears | P0 | Yes |
| TC-08 | Search round-trip flight | Round-trip results or validation appears | P0 | Yes |
| TC-09 | Search multi-city flight | Multi-city results or validation appears | P0 | Yes |
| TC-10 | Validate missing or invalid flight data | Search is blocked with useful validation | P0 | Yes |
| TC-11 | Select itinerary and enter passenger details | Selection and passenger data are accepted or validated | P0 | Yes |
| TC-12 | Review and confirm sandbox booking | Confirmation or meaningful sandbox failure appears | P0 | Yes |

All automation is UI-only. Stays, Visa, API scenarios, generated reports, and real payment data are excluded.
