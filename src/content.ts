export const profile = {
  name: 'Joshua Caburian',
  github: 'https://github.com/JoshkieChan',
  // Add only contact details you want to make public. Leave blank to hide.
  email: 'joshkiechan12345@gmail.com',
  resumeUrl: '',
}

export interface Project {
  id: 'signal' | 'scout' | 'stratus'
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
}

export const projects: Project[] = [
  {
    id: 'signal',
    number: '01',
    name: 'SignalSource',
    category: 'Full-stack application',
    description:
      'A service-business platform connecting a customer-facing website with appointment booking, pricing, and payment integrations.',
    stack: [
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Helcim',
      'Resend',
    ],
    highlights: [
      'Service and vehicle-based pricing',
      'Availability and owner scheduling',
      'Payment webhooks and email integration',
    ],
    challenge:
      'A booking is more than a date: service packages, vehicle sizes, add-ons, and working-hour limits all affect the appointment.',
    solution:
      'Shared TypeScript pricing and duration modules connect the booking interface to Edge Functions. Database records track bookings and capacity events, with separate payment-event and confirmation-email handlers.',
    status:
      'Integration code is implemented. Live payment and email delivery were not verified for this portfolio; multi-day allocation remains incomplete.',
    repository: 'Detailer-Website',
    sourcePath: 'supabase/functions/create-booking/index.ts',
  },
  {
    id: 'scout',
    number: '02',
    name: 'Opportunity Scout',
    category: 'Backend & automation',
    description:
      'A two-service pipeline that discovers marketplace listings, evaluates explicit rules, and routes selected opportunities to Discord.',
    stack: ['Python', 'FastAPI', 'Node.js', 'Playwright', 'Docker'],
    highlights: [
      'Typed API validation and rule-based scoring',
      'Bounded retries and browser cleanup',
      'Offline fixtures and HTTP integration tests',
    ],
    challenge:
      'Browser extraction is unpredictable. Network failures and malformed listing data should not silently corrupt downstream decisions.',
    solution:
      'A Node.js worker sends structured listings to a FastAPI validator. Pydantic constrains inputs, pure functions score claims, and bounded retries handle transient HTTP failures. Docker separates the services.',
    status:
      'Tested prototype. Scoring is heuristic; marketplace coverage and unattended production reliability are not established.',
    repository: 'Opportunity-Scout',
    sourcePath: 'validator/main.py',
  },
  {
    id: 'stratus',
    number: '03',
    name: 'Stratus One',
    category: 'Frontend systems & workflows',
    description:
      'An opportunity workspace for organizing tasks, preparing quote estimates, and moving work through a pipeline.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vitest'],
    highlights: [
      'Reusable UI and semantic design tokens',
      'Typed services and isolated business rules',
      'Quote rounding and version-conflict handling',
    ],
    challenge:
      'Complex workflows need consistent interfaces, predictable data boundaries, and calculations that can be tested independently.',
    solution:
      'Modular screens compose reusable UI, while typed service adapters handle data mapping. Pure domain functions calculate quotes in cents. Version checks protect saved edits from conflicting writes.',
    status:
      'Runnable showcase and backend integration code. Hosted backend verification is pending. The visual foundation originated in a Figma component-library export.',
    repository: 'Stratus-One',
    sourcePath: 'src/domain/quotes.ts',
  },
]

export const skills = [
  {
    title: 'Interfaces',
    detail: 'Accessible, responsive application UI.',
    items: 'React · TypeScript · JavaScript · HTML / CSS · Tailwind CSS',
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
