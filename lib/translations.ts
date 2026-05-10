export type Language = 'en' | 'id'

export interface Translation {
  nav: {
    about: string
    skills: string
    projects: string
    contact: string
  }
  available: string
  hero: {
    greeting: string
    roles: string[]
    bio: string
    ctaWork: string
    ctaContact: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    available: 'Available for work',
    hero: {
      greeting: "Hello, I'm",
      roles: ['Fullstack Developer', 'AI / ML Engineer', 'IoT Architect', 'System Designer'],
      bio: 'I build intelligent systems — from embedded sensors to neural networks to the interfaces that connect them.',
      ctaWork: 'View Work',
      ctaContact: 'Get In Touch',
    },
  },
  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak',
    },
    available: 'Tersedia untuk kerja',
    hero: {
      greeting: 'Halo, saya',
      roles: ['Fullstack Developer', 'AI / ML Engineer', 'IoT Architect', 'System Designer'],
      bio: 'Saya membangun sistem cerdas — dari sensor tertanam, jaringan saraf tiruan, hingga antarmuka yang menghubungkan semuanya.',
      ctaWork: 'Lihat Proyek',
      ctaContact: 'Hubungi Saya',
    },
  },
}