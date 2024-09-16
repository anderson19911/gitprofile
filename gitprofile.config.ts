const CONFIG = {
  github: {
    username: 'anderson19911', // Votre nom d'utilisateur GitHub corrigé
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Projets GitHub',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars', // Trier les projets par "stars" ou "updated"
        limit: 8, // Nombre de projets affichés
        exclude: {
          forks: false, // Afficher les forks si nécessaire
          projects: [], // Exclure des projets spécifiques si besoin
        },
      },
      manual: {
        projects: [], // Si vous avez des projets spécifiques à afficher, remplacez cette ligne.
      },
    },
    external: {
      header: 'Mes Projets',
      projects: [
        {
          title: 'Projet Data Scraping',
          description:
            'Projet de collecte, nettoyage et extraction de données à partir de diverses sources web.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com', // Remplacez par un lien vers votre projet si applicable
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio de Anderson Archimede',
    description: 'Data Analyst | SQL | R | Python | Power BI | DataViz | Machine Learning | Expert Support Applicatif Data',
    imageURL: '',
  },
  social: {
    linkedin: 'kouassi-anderson-ehoussou',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+33 745303145',
    email: 'humanitasbusiness@etik.com',
  },
  resume: {
    fileUrl: 'https://example.com/cv-anderson-kouassi.pdf', // Remplacez par un lien vers votre CV
  },
  skills: [
    'Python',
    'DAX',
    'Power BI',
    'SQL',
    'NoSQL',
    'Tableau',
    'R',
    'Jira',
    'Git',
    'Machine Learning',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Veo Worldwide Services',
      position: 'Ingénieur Support Applicatif Data',
      from: 'Septembre 2021',
      to: 'Décembre 2023',
      companyLink: 'https://veoworldwide.com',
    },
    {
      company: 'Veo Worldwide Services',
      position: 'Assistant Product Owner',
      from: 'Janvier 2022',
      to: 'Décembre 2023',
      companyLink: 'https://veoworldwide.com',
    },
  ],
  certifications: [
    {
      name: 'Certification Google Analytics',
      body: 'Google Analytics',
      year: '2023',
      link: 'https://skillshop.credential.net/5adc6cab-fe6d-4d05-922d-239645ea9446',
    },
    {
      name: 'Data Visualisation avec R',
      body: 'Credly',
      year: '2023',
      link: 'https://www.credly.com/badges/670e5343-75f5-4314-b8c3-c912fb131ca2/linked_in_profile',
    },
    {
      name: 'Introduction au CRM avec HubSpot',
      body: 'Coursera',
      year: '2023',
      link: 'https://coursera.org/share/90716c3aec9da73ff8dc2f2466f5070d',
    },
    {
      name: 'Python pour la Data Science',
      body: 'Credly',
      year: '2023',
      link: 'https://www.credly.com/badges/df380edc-d79a-4b6c-9fa3-c573a73319e9/linked_in_profile',
    },
    {
      name: 'Dataiku Core Designer',
      body: 'Dataiku',
      year: '2023',
      link: 'https://verify.skilljar.com/c/igq9pfsjqpy5',
    },
    {
      name: 'Dataiku ML Practitioner',
      body: 'Dataiku',
      year: '2023',
      link: 'https://verify.skilljar.com/c/4544b4gkdb37',
    },
    {
      name: 'Dataiku Advanced Designer',
      body: 'Dataiku',
      year: 'Mai 2024',
      link: 'https://verify.skilljar.com/c/x3ayna2yfhqi',
    },
  ],
  educations: [
    {
      institution: 'HETIC',
      degree: 'Mastère Data & IA',
      from: '2024',
      to: '2025',
    },
    {
      institution: 'ESLSCA Business School',
      degree: 'MBA Data Science',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Université Polytechnique de Bucarest',
      degree: 'Licence Informatique et Technologie de l’Information',
      from: '2018',
      to: '2022',
    },
  ],
  blog: {
    source: '', // Laissez vide si vous ne souhaitez pas afficher de blog.
    username: '',
    limit: 3,
  },
  googleAnalytics: {
    id: '', // Ajoutez votre ID Google Analytics.
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'nord',
      'corporate',
      'business',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Fait avec <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> et ❤️`,

  enablePWA: true,
};

// Configuration de déploiement GitHub Pages
export default {
  siteUrl: "https://anderson19911.github.io/powerBi", // URL de votre site GitHub Pages
  repo: "powerBi", // Nom de votre dépôt GitHub
  branch: "main", // Branche principale
  publishDir: "dist", // Dossier contenant les fichiers à déployer
};
