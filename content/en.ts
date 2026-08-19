import type { SiteContent } from './types'
import { deadqueue } from './cases/deadqueue'
import { toll } from './cases/toll'
import { jornada } from './cases/jornada'
import { nutririo } from './cases/nutririo'

export const en: SiteContent = {
  meta: {
    title: 'Júlio Costa — Product Designer',
    description:
      'Product designer working across research, interface and code. Selected cases in competitive gaming, highway operations, education and health.',
  },
  nav: {
    brand: 'Júlio Costa',
    items: [
      { id: 'work', label: 'Work' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'references', label: 'References' },
      { id: 'about', label: 'About' },
    ],
    contact: 'Get in touch',
    menu: 'Menu',
    close: 'Close',
  },
  hero: {
    status: 'Accepting proposals',
    titleTop: 'Designing interfaces where',
    emphasis: 'visual',
    titleBottom: 'meets usability',
    intro:
      'Product designer with six years across research, interface and, more recently, the code that ships them. I work on systems where a design decision has a number attached to it.',
    cta: 'Get in touch',
    scroll: 'Selected work',
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Four projects, four different problems',
    intro:
      'Internal tools, a learning platform, a health app and a competitive gaming product I designed and built end to end.',
    viewCase: 'Read the case',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I have worked',
    entries: [
      {
        company: 'Independent',
        role: 'Product Designer & Developer',
        period: '2026 — present',
        bullets: [
          'Designing and building DeadQueue, a competitive matchmaking platform running in production, from research and design system through to the shipped code.',
          'Working end to end: product decisions, interface, front-end, data model and the ranking logic behind the experience.',
        ],
      },
      {
        company: 'Muralis Tecnologia',
        role: 'UX/UI Designer',
        period: '2023 — 2025',
        bullets: [
          'Created and implemented design systems and design tokens to keep consistency and scalability across products.',
          'Designed interfaces for business management systems in sectors such as highways and shopping centres.',
          'Led user-centered design processes: research, interviews, competitor analysis, UI design, prototyping and usability testing.',
          'Worked with stakeholders to align business objectives with user needs.',
          'Partnered closely with development teams to guarantee high-quality implementation of the UX/UI work.',
        ],
      },
    ],
  },
  services: {
    eyebrow: 'What I do',
    title: 'Four things, done properly',
    items: [
      {
        title: 'UX Design',
        text: 'From wireframes to user journeys, using the technique the problem actually calls for rather than the whole toolkit every time.',
      },
      {
        title: 'Visual Design',
        text: 'Interfaces that align with brand and aesthetics without trading away legibility, hierarchy or the ability to scale.',
      },
      {
        title: 'Prototyping',
        text: 'Figma prototypes that behave like the real thing, so a usability test measures the product and not the prototype’s limits.',
      },
      {
        title: 'User Research',
        text: 'Planning, running and extracting decisions from interviews and usability testing. The output is a decision, not a report.',
      },
    ],
  },
  tools: {
    eyebrow: 'Toolkit',
    title: 'What I work with',
    items: [
      { title: 'Figma', text: 'Wireframes, prototypes and design systems' },
      { title: 'Next.js & React', text: 'Shipping the interfaces I design' },
      { title: 'Tailwind CSS', text: 'Design tokens that survive contact with code' },
      { title: 'Claude & OpenAI', text: 'Research support, synthesis and writing' },
      { title: 'UseBerry', text: 'Remote usability testing' },
      { title: 'Azure DevOps & Jira', text: 'Agile delivery' },
    ],
  },
  references: {
    eyebrow: 'References',
    title: 'What people I worked with say',
    items: [
      {
        quote:
          'Júlio is an outstanding team member who is always willing to support others. He demonstrates strong expertise in his field, consistently brings valuable insights to the team, and actively contributes by sharing his knowledge with colleagues.',
        author: 'Co-worker',
        role: 'Muralis Tecnologia',
      },
      {
        quote:
          'I had the opportunity to work with Júlio and can say that he is a highly dedicated and collaborative professional. Beyond his strong technical proficiency, he is always seeking to learn more, especially in technology and design. Júlio has a creative and innovative profile, and his contributions were very valuable to the team. I recommend him with full confidence to any team that values competence, initiative and teamwork.',
        author: 'Júlia Torres',
        role: 'Co-worker',
      },
      {
        quote:
          'Working with Júlio was a truly positive experience. He is highly committed, consistently brings valuable ideas, and presents his perspectives in a way that elevates the team’s overall work. He also has a natural ability to foster harmony within the group, which made a significant difference to our team dynamic.',
        author: 'Juliana Ribeiro',
        role: 'UX/UI Designer',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'I’m Júlio Costa',
    body: [
      'A product designer focused on meaningful, user-centered digital experiences. I led a strategic project that raised productivity by 800% in one department and 150% in another, and I have worked across HR platforms, highway systems, shopping apps, internet banking and education.',
      'More recently I stopped handing the design over at the border. I design and build my own products, which changed how I make decisions: a trade-off stops being an argument and becomes something you can measure the same week.',
      'I work in Brazilian Portuguese and English, and I am open to remote roles and freelance projects.',
    ],
    highlights: [
      { value: '6 yrs', label: 'In design' },
      { value: '+800%', label: 'Peak productivity gain delivered' },
      { value: '5', label: 'Sectors worked in' },
      { value: '2', label: 'Languages' },
    ],
    cta: 'Get in touch',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your product',
    body:
      'Open to full-time roles, freelance projects and conversations that have not been framed yet. The fastest way to reach me is email.',
    email: 'julioguimaraes22@gmail.com',
    channels: [
      { label: 'Email', value: 'julioguimaraes22@gmail.com', href: 'mailto:julioguimaraes22@gmail.com' },
      { label: 'LinkedIn', value: 'in/juliogcosta', href: 'https://www.linkedin.com/in/juliogcosta/' },
      { label: 'Instagram', value: '@julio.ux', href: 'https://www.instagram.com/julio.ux/' },
    ],
    back: 'Back to home',
  },
  footer: {
    brand: 'Júlio Costa',
    role: 'Product Designer · UX/UI Designer',
    navTitle: 'Navigation',
    casesTitle: 'Case studies',
    socialTitle: 'Elsewhere',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juliogcosta/' },
      { label: 'Instagram', href: 'https://www.instagram.com/julio.ux/' },
      { label: 'Email', href: 'mailto:julioguimaraes22@gmail.com' },
    ],
    rights: '© 2026 Júlio Costa. All rights reserved.',
  },
  caseUi: {
    role: 'Role',
    year: 'Year',
    discipline: 'Discipline',
    index: 'Contents',
    next: 'Next case',
    backHome: 'All work',
    liveSite: 'Live site',
  },
  cases: [deadqueue.en, toll.en, nutririo.en, jornada.en],
}
