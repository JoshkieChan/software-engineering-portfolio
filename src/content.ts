export const profile = {
  name: 'Joshua Caburian',
  github: 'https://github.com/JoshkieChan',
  // Add only contact details you want to make public. Leave blank to hide.
  email: 'joshkiechan12345@gmail.com',
  resumeUrl: '/resume.pdf',
}

export interface ProjectScreenshot {
  src: string
  label: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: 'signal' | 'scout' | 'stratus' | 'founder'
  number: string
  name: string
  category: string
  description: string
  stack: string[]
  highlights: string[]
  challenge: string
  solution: string
  status: string
  repository: string
  sourcePath: string
  architecture: string
  screenshots?: ProjectScreenshot[]
}

export const projects: Project[] = [
  {
    id: 'signal',
    number: '01',
    name: 'SignalSource',
    category: 'Full-stack application',
    description:
      'A full-stack car-detailing application connecting customer booking, owner scheduling, private vehicle photos, and payment and email integrations.',
    stack: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Helcim',
      'Resend',
    ],
    highlights: [
      'Server-derived pricing and service duration',
      'Atomic capacity checks and eligible two-day bookings',
      'Private photos; browser, unit, database, and race tests',
    ],
    challenge:
      'A booking is more than a date: service packages, vehicle sizes, add-ons, and working-hour limits all affect the appointment.',
    solution:
      'Edge Functions validate input and derive pricing and duration. PostgreSQL serializes schedule writes and commits capacity segments atomically, rolling back conflicts. Eligible long jobs span two service days. Private photo capabilities, signed owner retrieval, Helcim checkout/webhook handling, and idempotent Resend confirmation claims complete the integration architecture.',
    status:
      'Staging verified booking/capacity behavior, private photo upload/retrieval, and Resend test-recipient acceptance. Human inbox delivery and live payment processing/reconciliation remain unverified. Payment reconciliation is manual; production Vercel hosting is paused.',
    repository: 'Signal-Source',
    sourcePath: 'supabase/functions/create-booking/index.ts',
    architecture:
      'React / TypeScript → Supabase Edge Functions → PostgreSQL scheduling transactions; Helcim payments and Resend email.',
    screenshots: [
      {
        src: '/images/signal-detailing-desktop.webp',
        label: 'Detailing',
        alt: 'SignalSource detailing page with the project’s real vehicle photography and service introduction.',
        width: 1440,
        height: 1100,
      },
      {
        src: '/images/signal-booking-desktop.webp',
        label: 'Booking',
        alt: 'SignalSource booking configuration showing packages, vehicle selection, add-ons, and a price summary using synthetic example data.',
        width: 1440,
        height: 1100,
      },
      {
        src: '/images/signal-owner-desktop.webp',
        label: 'Owner schedule',
        alt: 'SignalSource owner calendar and appointment management using synthetic booking records.',
        width: 1440,
        height: 1300,
      },
    ],
  },
  {
    id: 'scout',
    number: '02',
    name: 'Opportunity Scout',
    category: 'Backend & automation',
    description:
      'A two-service pipeline that discovers marketplace listings, validates their data, and applies deterministic rules to select opportunities for review.',
    stack: ['Python', 'FastAPI', 'Node.js', 'Playwright', 'Docker'],
    highlights: [
      'Typed API validation and rule-based scoring',
      'Bounded retries and browser cleanup',
      'Offline fixtures, real HTTP integration, and Docker CI',
    ],
    challenge:
      'Browser extraction is unpredictable. Network failures and malformed listing data should not silently corrupt downstream decisions.',
    solution:
      'A Node.js / Playwright worker sends structured listings to FastAPI. Pydantic constrains inputs, pure functions score claims, and bounded retries handle transient failures. Browser contexts are cleaned up after use. Offline fixtures exercise actual HTTP communication; CI checks Docker networking and container execution. Discord routing is optional.',
    status:
      'Scores are heuristics, not probabilities or AI predictions. Financial claims are unverified. Live marketplace reliability is not established; offline tests do not establish live Discord delivery. Deduplication is per cycle, without persistent alert history.',
    repository: 'Opportunity-Scout',
    sourcePath: 'validator/main.py',
    architecture:
      'Marketplace discovery → Node.js / Playwright worker → FastAPI / Pydantic validation → deterministic scoring → dry-run output or optional Discord routing.',
  },
  {
    id: 'stratus',
    number: '03',
    name: 'Stratus One',
    category: 'Frontend systems & workflows',
    description:
      'A React/TypeScript workflow application for managing opportunities, proposal tasks, quote estimates, and pipeline stages—with a credential-free demo.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vitest'],
    highlights: [
      'One set of application screens across both modes',
      'Typed adapters and shared quote/validation logic',
      'Fictional demo fixtures saved in sessionStorage',
    ],
    challenge:
      'Complex workflows need consistent interfaces, predictable data boundaries, and calculations that can be tested independently.',
    solution:
      'The default demo uses fictional fixtures and sessionStorage with no Supabase credentials. Typed service facades select the local demo or real Supabase adapter while sharing application screens and domain logic. Quote calculations use cent rounding, and saved versions detect conflicting edits. The backend adapter remains available for separately provisioned Auth, PostgreSQL, and Edge Functions.',
    status:
      'The local demo is functional, with disposable browser-session storage. Hosted Supabase end-to-end verification remains pending. Quotes are estimates; demo mode does not reproduce every database or auth behavior. The visual foundation originated in a Figma component-library export.',
    repository: 'Stratus-One',
    sourcePath: 'src/services/OpportunityService.ts',
    architecture:
      'React / TypeScript UI → typed service boundary → demo adapter (fixtures/sessionStorage) OR Supabase adapter (Auth/PostgreSQL/Edge Functions).',
    screenshots: [
      {
        src: '/images/stratus-dashboard.webp',
        label: 'Dashboard',
        alt: 'Stratus One application dashboard with upcoming deadlines and a proposal workflow guide; all figures are fictional demo fixtures.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/stratus-detail.webp',
        label: 'Opportunity',
        alt: 'Stratus One opportunity detail showing a fictional accessibility project, its scope, stage, and quote/task actions.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/stratus-taskpack.webp',
        label: 'Tasks',
        alt: 'Stratus One task workflow showing a fictional proposal task pack with completion states and a task creation form.',
        width: 1440,
        height: 1344,
      },
      {
        src: '/images/stratus-quotegen.webp',
        label: 'Quotes',
        alt: 'Stratus One quote generator with editable line items, totals, and save/print actions for a fictional estimate.',
        width: 1440,
        height: 1537,
      },
      {
        src: '/images/stratus-pipeline.webp',
        label: 'Pipeline',
        alt: 'Stratus One pipeline board displaying fictional opportunities across six stages.',
        width: 1440,
        height: 1000,
      },
    ],
  },
  {
    id: 'founder',
    number: '04',
    name: 'FounderType',
    category: 'Cross-platform application',
    description:
      'An Expo and React Native commitment application for web and native platforms: a seven-question diagnostic, one public 30-day commitment, and daily accountability.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Playwright',
    ],
    highlights: [
      'Shared React Native / React Native Web application',
      'Anonymous Auth ownership and PostgreSQL row-level security',
      'Deterministic rules; browser and database security tests',
    ],
    challenge:
      'A shared mobile/web workflow needs consistent commitment rules and clear ownership boundaries, even when accounts use anonymous sessions.',
    solution:
      'Expo SDK 54 screens use React Navigation, context, and hooks. The onboarding diagnostic maps local rules to a builder pattern, followed by commitments, daily check-ins, user-triggered weekly receipts, and a public feed. PostgreSQL constraints and RLS enforce ownership; a transactional check-in function records one check-in per UTC date. Edge Functions verify web hCaptcha and restrict optional Resend receipt email. Jest, Playwright, and PGlite migration/RLS tests run in GitHub Actions. EAS profiles and a Metro web export support native build and static Vercel delivery configuration.',
    status:
      'Native CAPTCHA remains incomplete, blocking first-time native commitment creation; no store release is claimed. Local tests do not establish hosted Supabase operation. Anonymous ownership depends on session persistence. There is no server push, scheduled receipt-email worker, or feed moderation/reporting. Provider acceptance does not prove inbox delivery. Diagnostic results are deterministic rules, not AI or clinical assessments; check-ins are self-reported.',
    repository: 'FounderType',
    sourcePath:
      'supabase/migrations/20261012194553_enforce_accountability_boundaries.sql',
    architecture:
      'React Native / React Native Web → React Navigation + context/hooks → Supabase Auth + PostgreSQL/RLS. Edge Functions connect hCaptcha and optional Resend email; Sentry diagnostics are enabled only when configured.',
    screenshots: [
      {
        src: '/images/founder-02-diagnostic.webp',
        label: 'Diagnostic',
        alt: 'FounderType seven-question diagnostic showing rule-based answer choices.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/founder-03-result.webp',
        label: 'Result',
        alt: 'FounderType builder-pattern result with strengths and a suggested next step from deterministic rules.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/founder-04-commitment.webp',
        label: 'Commitment',
        alt: 'FounderType 30-day public commitment form with a fictional garden-planner goal and daily action.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/founder-05-check-in.webp',
        label: 'Check-in',
        alt: 'FounderType daily check-in and weekly receipt controls for a fictional 30-day commitment.',
        width: 1440,
        height: 1000,
      },
      {
        src: '/images/founder-07-public-feed.webp',
        label: 'Public feed',
        alt: 'FounderType public accountability feed showing a synthetic commitment, progress, and owner controls.',
        width: 1440,
        height: 1000,
      },
    ],
  },
]

export const skills = [
  {
    title: 'Interfaces',
    detail: 'Accessible, responsive application UI.',
    items:
      'React · React Native / Expo · TypeScript · JavaScript · HTML / CSS · Tailwind CSS',
  },
  {
    title: 'Services & data',
    detail: 'The logic behind the experience.',
    items: 'Python · FastAPI · Node.js · REST APIs · Supabase / PostgreSQL',
  },
  {
    title: 'Integration & delivery',
    detail: 'Connecting systems. Checking the work.',
    items:
      'Playwright · Docker · Git / GitHub · GitHub Actions · Vitest · pytest',
  },
]
