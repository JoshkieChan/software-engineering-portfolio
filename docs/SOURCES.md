# Project content evidence

Reviewed October 8, 2026, against each repository's public `main` branch using the authenticated GitHub connector. Source may evolve after this review. The portfolio makes no claims about traffic, customers, performance improvements, uptime, or verified production operation.

## SignalSource

Repository: https://github.com/JoshkieChan/Detailer-Website

Inspected the recursive source tree, `website/package.json`, `website/README.md`, and these implementation files:

- [`supabase/functions/create-booking/index.ts`](https://github.com/JoshkieChan/Detailer-Website/blob/main/supabase/functions/create-booking/index.ts): booking persistence; imports shared pricing and scheduler modules; package/vehicle/location validation; Helcim deposit URL; capacity-event records.
- [`supabase/functions/payment-webhook/index.ts`](https://github.com/JoshkieChan/Detailer-Website/blob/main/supabase/functions/payment-webhook/index.ts): HMAC verification code and payment-event logging. Do not describe this as a complete payment reconciliation system.
- [`supabase/functions/send-confirmation-email/index.ts`](https://github.com/JoshkieChan/Detailer-Website/blob/main/supabase/functions/send-confirmation-email/index.ts): Resend request for paid-booking confirmation. Presence of code does not demonstrate delivered email or robust failure handling.
- [`supabase/migrations/20260426_booking_capacity_events.sql`](https://github.com/JoshkieChan/Detailer-Website/blob/main/supabase/migrations/20260426_booking_capacity_events.sql): capacity-event schema.
- Source tree includes booking calendar, booking availability, and owner scheduling implementations.

Important boundary: create-booking explicitly says multi-day split/allocation is not implemented. Do not claim concurrency-safe booking, hardened authorization, comprehensive tests, or confirmed payment delivery. The site describes implementation breadth, not production readiness. The repository's project name is retained in URLs; the public name is SignalSource as requested.

## Opportunity Scout

- [README](https://github.com/JoshkieChan/Opportunity-Scout/blob/main/README.md): worker/validator architecture, retries, Docker isolation, offline fixtures, rule-based scoring, limitations, and test commands.
- [`validator/main.py`](https://github.com/JoshkieChan/Opportunity-Scout/blob/main/validator/main.py): FastAPI health and validation endpoints; typed `Product`/`ValidationResult`; validation error response strips submitted input.

Present as a tested portfolio prototype. Claims and scores are heuristic, not independently verified financial evidence or predictions. Live marketplace coverage and Discord delivery were not exercised for this portfolio.

## Stratus One

- [README](https://github.com/JoshkieChan/Stratus-One/blob/main/README.md): modular screens, UI components, typed adapters, Supabase workflow, quote conflict protection, tests, hosted verification limitations, Figma-export attribution.
- [`src/domain/quotes.ts`](https://github.com/JoshkieChan/Stratus-One/blob/main/src/domain/quotes.ts): finite/non-negative input validation, line-level cent rounding, bounded tax rate, safe totals, markup calculations.

Describe hosted backend verification as pending. Retain attribution to the Figma component-library export. Do not claim a deployed, independently verified Supabase integration.

## Personal details

Name, role positioning, transition, Meta Front-End Developer Professional Certificate, and High School Diploma were supplied by the user. No dates, employers, phone, location, certificate URL, or résumé were supplied; none were inferred from unrelated source files. In a follow-up, the owner explicitly supplied and approved `joshkiechan12345@gmail.com` for the portfolio contact button.
