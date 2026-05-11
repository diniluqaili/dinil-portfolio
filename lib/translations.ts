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
  skills: {
    title: string
    categories: { name: string, items: string[] }[]
    }
  projects: {
    title: string
    items: {
      id: number
      category: string
      title: string
      desc: string
      tags: string[]
      architecture?: string[]
      meta?: { label: string; value: string }[]
    }[]
    }
  contact: {
    title: string
    titleAccent: string
    sub: string
    linkedin: string
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
    skills: {
  title: 'Tech Stack',
  categories: [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'] },
    { name: 'Backend',  items: ['Node.js', 'Python', 'Firebase', 'REST API', 'WebSocket'] },
    { name: 'AI / ML',  items: ['TensorFlow', 'CNN-LSTM', 'Autoencoder', 'ICA / SST', 'Signal Processing'] },
    { name: 'IoT',      items: ['ESP32', 'Arduino', 'MQTT', 'PID Control', 'Sensor Arrays'] },
    { name: 'Tools',    items: ['Git / GitHub', 'Vercel', 'Figma', 'VS Code', 'Linux / Bash'] },
  ],
},
    projects: {
    title: 'Featured Projects',
    items: [
      {
        id: 1,
        category: 'AI / Research · Thesis',
        title: 'EEG-Based ASD Classification',
        desc: 'Thesis research classifying Autism Spectrum Disorder from EEG signals using Autoencoder denoising, SST feature extraction, and a CNN-LSTM architecture trained on the KAU dataset (16 subjects).',
        tags: ['Python', 'CNN-LSTM', 'TensorFlow', 'EEG', 'ICA', 'SST'],
        architecture: [
          'KAU Dataset (16 subjects)',
          '  → Bandpass Filter',
          '  → ICA Artifact Removal',
          '  → Autoencoder Denoising',
          '  → SST Feature Extraction',
          '  → CNN-LSTM Classifier',
        ],
        meta: [
          { label: 'Model',    value: 'CNN-LSTM' },
          { label: 'Dataset',  value: 'KAU EEG'  },
          { label: 'Subjects', value: '16'        },
        ],
      },
      {
        id: 2,
        category: 'IoT · Hardware',
        title: 'ESP32 + Firebase IoT System',
        desc: 'End-to-end sensor pipeline streaming ultrasonic, sound, pH, and temperature data to Firebase Realtime Database with a live web dashboard.',
        tags: ['ESP32', 'Firebase', 'JavaScript', 'Realtime DB'],
      },
      {
        id: 3,
        category: 'Fullstack · Web',
        title: 'Carwash Booking Platform',
        desc: 'Production-grade React/Next.js booking application with Google OAuth authentication, payment integration, and real-time scheduling.',
        tags: ['Next.js', 'React', 'Google Auth', 'Payments'],
      },
      {
        id: 4,
        category: 'AI / IoT · Signal',
        title: 'OpenBCI Signal Processing',
        desc: 'Real-time EEG signal visualization and heatmap generation from OpenBCI hardware at 250 Hz. Python pipeline covering windowing, FFT analysis, and topographic brain mapping.',
        tags: ['Python', 'OpenBCI', 'FFT', 'Heatmap'],
      },
    ],
  },
  contact: {
  title: "Let's Work",
  titleAccent: 'Together.',
  sub: "Open to remote opportunities worldwide — let's build something extraordinary.",
  linkedin: 'linkedin/diniluqaili',
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
    skills: {
  title: 'Teknologi',
  categories: [
    { name: 'Frontend',   items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'] },
    { name: 'Backend',    items: ['Node.js', 'Python', 'Firebase', 'REST API', 'WebSocket'] },
    { name: 'AI / ML',    items: ['TensorFlow', 'CNN-LSTM', 'Autoencoder', 'ICA / SST', 'Pemrosesan Sinyal'] },
    { name: 'IoT',        items: ['ESP32', 'Arduino', 'MQTT', 'Kontrol PID', 'Array Sensor'] },
    { name: 'Peralatan',  items: ['Git / GitHub', 'Vercel', 'Figma', 'VS Code', 'Linux / Bash'] },
  ],
},
  projects: {
  title: 'Proyek Unggulan',
  items: [
    {
      id: 1,
      category: 'AI / Riset · Tesis',
      title: 'Klasifikasi ASD Berbasis EEG',
      desc: 'Riset tesis mengklasifikasikan Autism Spectrum Disorder dari sinyal EEG menggunakan Autoencoder denoising, ekstraksi fitur SST, dan arsitektur CNN-LSTM pada dataset KAU (16 subjek).',
      tags: ['Python', 'CNN-LSTM', 'TensorFlow', 'EEG', 'ICA', 'SST'],
      architecture: [
        'Dataset KAU (16 subjek)',
        '  → Bandpass Filter',
        '  → Penghapusan Artefak ICA',
        '  → Autoencoder Denoising',
        '  → Ekstraksi Fitur SST',
        '  → CNN-LSTM Classifier',
      ],
      meta: [
        { label: 'Model',   value: 'CNN-LSTM' },
        { label: 'Dataset', value: 'KAU EEG'  },
        { label: 'Subjek',  value: '16'        },
      ],
    },
    {
      id: 2,
      category: 'IoT · Hardware',
      title: 'Sistem IoT ESP32 + Firebase',
      desc: 'Pipeline sensor end-to-end yang mengalirkan data ultrasonik, suara, pH, dan suhu ke Firebase Realtime Database dengan dashboard web langsung.',
      tags: ['ESP32', 'Firebase', 'JavaScript', 'Realtime DB'],
    },
    {
      id: 3,
      category: 'Fullstack · Web',
      title: 'Platform Booking Carwash',
      desc: 'Aplikasi booking React/Next.js dengan Google OAuth authentication, integrasi pembayaran, dan penjadwalan real-time.',
      tags: ['Next.js', 'React', 'Google Auth', 'Pembayaran'],
    },
    {
      id: 4,
      category: 'AI / IoT · Sinyal',
      title: 'Pemrosesan Sinyal OpenBCI',
      desc: 'Visualisasi sinyal EEG real-time dan generasi heatmap dari hardware OpenBCI pada 250 Hz. Pipeline Python mencakup windowing, analisis FFT, dan pemetaan otak topografi.',
      tags: ['Python', 'OpenBCI', 'FFT', 'Heatmap'],
    },
  ],
},
contact: {
  title: 'Mari',
  titleAccent: 'Berkolaborasi.',
  sub: 'Terbuka untuk peluang remote di seluruh dunia — mari bangun sesuatu yang luar biasa.',
  linkedin: 'linkedin/diniluqaili',
},
  },
}