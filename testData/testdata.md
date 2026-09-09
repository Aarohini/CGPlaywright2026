# Test Data: Signup, Login and Flight Booking

## Critical Setup Rule
Every UI test begins by accepting the initial demo popup. The popup is a blocking gate and must be dismissed before any other interaction.

## Signup
- Valid: Test User, test.user+qa@example.com, +1 555 123 4567, Test@12345
- Invalid email: abc@
- Duplicate email: test.user@example.com
- Invalid phone: 123
- Short password: 123
- Mismatched password: Test@12345 with a different confirmation

## Login
- Valid: test.user+qa@example.com / Test@12345
- Invalid email: invalid.user@example.com
- Invalid password: WrongPass123
- Malformed email: abc@

## Flight Search
- One-way: New York (JFK) to Dubai (DXB), future departure, 1 adult
- Round trip: New York (JFK) to Dubai (DXB), future departure and later return, 1 adult
- Multi-city: New York to Dubai, then Dubai to London, future dates, 1 adult
- Invalid routes: missing origin/destination, same airports, past or reversed dates, zero passengers

## Passenger
- Adult: Mr John Smith, DOB 1990-05-15, US, john.smith@example.com
- Child: Master Emma Smith, DOB 2015-08-12
- Infant: Miss Olivia Smith, DOB 2024-01-10

## Safety
Use unique signup emails, future flight dates, and no real payment-card data.
