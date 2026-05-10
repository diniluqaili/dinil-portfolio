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
  about: {
    title: string
    bio: string
    locLabel: string
    locNote: string
    stats: { value: string, label: string }[]
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
    about: {
        title: 'About Me',
        bio: "I'm a software engineer and researcher based in Indonesia, specializing in the intersection of fullstack development, artificial intelligence, and embedded systems. I don't just write code — I architect complete digital ecosystems, from the hardware sensor that reads the world to the neural network that understands it, to the interface a human touches.",
        locLabel: 'LOCATION',
        locNote: 'GMT+7 · Open to remote opportunities worldwide',
        stats: [
            { value: '4+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Built' },
            { value: '5', label: 'Domains Mastered' },
            { value: '1', label: 'Thesis Published' },
        ],
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
    about: {
      title: 'Tentang Saya',
      bio: 'Saya adalah software engineer dan peneliti berbasis di Indonesia, mengkhususkan diri di persimpangan fullstack development, kecerdasan buatan, dan sistem tertanam. Saya tidak hanya menulis kode — saya merancang ekosistem digital yang lengkap, dari sensor hardware yang membaca dunia, jaringan saraf yang memahaminya, hingga antarmuka yang disentuh manusia.',
      locLabel: 'LOKASI',
      locNote: 'GMT+7 · Terbuka untuk peluang remote di seluruh dunia',
      stats: [
        { value: '4+', label: 'Tahun Pengalaman' },
        { value: '20+', label: 'Proyek Dibuat' },
        { value: '5', label: 'Domain Dikuasai' },
        { value: '1', label: 'Tesis Diterbitkan' },
      ],
    },
  },
}