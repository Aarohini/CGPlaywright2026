# Test Plan: Signup, Login and Flight Booking

## Objective
Validate PHPTravels Signup, Login, and Flight Booking. Stays and Visa are excluded.

## Critical Popup Precondition
The site displays a demo-environment popup on initial load that blocks interaction. Every test must navigate to https://phptravels.net/, wait for the popup, click **I Understand & Continue**, and then proceed to its target flow. This behavior is implemented in the UI test helper.

## In Scope
- Signup validation and registration
- Login success and failure paths
- One-way, round-trip, and multi-city flight search
- Search validation and result selection
- Passenger details and itinerary review
- Sandbox booking confirmation or handled failure
- Responsive and keyboard checks where applicable

## Out of Scope
- Stays and hotel booking
- Visa applications
- Agent registration
- Admin or supplier configuration
- API test cases

## Risks and Constraints
Demo prices and availability are dynamic; assertions should avoid fixed fare values. Use unique signup emails, future dates, and no real payment information.
