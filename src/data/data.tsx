import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio - Kevin THOMAS',
  description: "Kevin THOMAS's portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Kevin Thomas`,
  description: (
    <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack WebDEV</strong>,  habitant la région de Valence (France). <br />Je suis là pour vous aider à coder des <strong className='text-stone-100'>sites internet modernes</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Lors de mes temps libres, vous pouvez me retrouver au cours d'une session de  <strong className="text-stone-100">Ski</strong>,
        dans les massifs montagneux des <strong className="text-stone-100">Alpes</strong>, et des <strong className="text-stone-100">Pyrénées</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Doté d'une expérience récente dans le développement Web, 
  j'ai travaillé sur plusieurs projets en utilisant des technologies telles que React, Javascript, et Node.js. 
  J'ai également une solide compréhension des principes de conception et des bonnes pratiques de développement. 
  Je suis passionné par la création de sites Web modernes et conviviaux, et je suis constamment 
  à la recherche de nouvelles opportunités pour améliorer mes compétences et relever de nouveaux défis.`,
  aboutItems: [
    {label: 'Localisation', text: 'Valence, France', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationalitée', text: 'Française', Icon: FlagIcon},
    {label: 'Hobbies', text: 'Sports, Musique : Rock/Métal', Icon: SparklesIcon},
    {label: 'Etudes', text: 'Armée de Terre, OpenClassRoom', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Français',
        level: 10,
      },
      {
        name: 'Anglais',
        level: 8,
      },
      {
        name: 'Espagnol',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'SASS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express',
        level: 6,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Projet Booki',
    description: 'Projet OpenClassroom sur la crétion d\'un site de réservation type Booking',
    url: 'https://github.com/Sven64-45/OCProjet2-BOOKI',
    image: porfolioImage1,
  },
  {
    title: 'Projet Sophie Bluel',
    description: 'Projet OpenClassroom sur la création d\'un site dynamique.',
    url: 'https://github.com/Sven64-45/Projet-3-portfolio',
    image: porfolioImage2,
  },
  {
    title: 'Projet Nina Carducci',
    description: 'Projet OpenClassroom sur l\'optimisation et le debuggage d\'un site de présentation d\'un artiste.',
    url: 'https://github.com/Sven64-45/Projet-5-NinaCarducci',
    image: porfolioImage3,
  },
  {
    title: 'Projet Kasa',
    description: 'Projet OpenClassroom permettant de créer un frontend en application React.JS.',
    url: 'https://github.com/Sven64-45/OpenClassroom_Kasa_P6',
    image: porfolioImage4,
  },
  {
    title: 'Projet Mon Vieux Grimoire',
    description: 'Projet OpenClassroom sur la création d\'un backend d\'un site de vente de livres.',
    url: 'https://github.com/Sven64-45/OC-P7-WebDev',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Mars 2024',
    location: 'OpenClassroom',
    title: 'Développeur Web',
    content: <p>Formation diplomante d'OpenClassroom. Formation orientée sur la pratique de 8 projets web. Les langages étudiées : HTML, CSS/SCSS, Javascript, React.js, 
    Node.js, Express.js, MongoDB, Git, Github, et les principes de gestion agile.</p>,
  },
  {
    date: 'Avril 2023',
    location: 'Saumur',
    title: 'Manager d\'unité fonctionnelle et opérationnelle (niveau 7)',
    content: <p>Formation dans le domaine du management dans le but d'attester des compétences de cadre supérieur.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Août 2019 - Present',
    location: 'GAMSTAT Chabeuil -Valence / armée de Terre',
    title: 'Officier système hélicoptère Tigre. ',
    content: (
      <p>
        Conducteur d’expérimentations sur les futurs systèmes afférant au projet Tigre. <br />
        Responsable de la sécurité des sytèmes d’informations des projets de l'hélicoptère Tigre (cybersecurity risk manager). <br />
        Consultant expert aéronautique pour le système d'arme Tigre.
      </p>
    ),
  },
  {
    date: 'Février 2009 - Août 2019',
    location: '5 RHC Pau / armée de Terre',
    title: 'Pilote et commandant de bord d\'hélicoptère Tigre',
    content: (
      <p>
        Gestion de mission en équipage (opérationnel) ; <br />
        Acteur essentiel dans la création et la planification de missions complexes ; <br/>
        Responsable d’une machine complexe pouvant délivrer de l’armement.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactez-moi',
  description: 'N\'hésitez pas à me contacter pour toute question ou opportunité.',
  items: [
    {
      type: ContactType.Email,
      text: 'k.thomas@gmx.com',
      href: 'mailto:k.thomas@gmx.com',
    },
    {
      type: ContactType.Location,
      text: 'Valence, France',
      href: 'https://www.google.fr/maps/place/26000+Valence/@44.9234109,4.8751856,13z/data=!3m1!4b1!4m6!3m5!1s0x47f55799c63221c7:0x408ab2ae4bfb580!8m2!3d44.933393!4d4.89236!16zL20vMDE0MDVr?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'Sven64-45',
      href: 'https://github.com/Sven64-45',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Sven64-45'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kevin-thomas-61b53219b'},
];
