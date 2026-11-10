
export interface SkillGroup {
  number: string;
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export interface PortfolioProject {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
}

export interface GameProject {
  number: string;
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  features: string[];
  theme: 'stars' | 'forest';
}

export interface EducationEntry {
  label: string;
  title: string;
  organization: string;
  description: string;
}

export const GITHUB_URL = 'https://github.com/DX262';

export const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Game Dev', href: '#gamedev' },
  { label: 'Contact', href: '#contact' }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    number: '01',
    icon: '{ }',
    title: 'Backend Development',
    description:
      'Developing application logic, APIs and database ' +
      'integrations with clean and maintainable code.',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'REST APIs',
      'Entity Framework Core',
      'LINQ',
      'Dapper',
      'Object Oriented Programming',
      'SOLID Principles',
      'JWT Authentication',
      'Async / Await'
    ]
  },
  {
    number: '02',
    icon: '</>',
    title: 'Frontend Development',
    description:
      'Building modern web applications with responsive ' +
      'layouts, interactive interfaces and usability in mind.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Single Page Applications',
      'Responsive Design'
    ]
  },
  {
    number: '03',
    icon: 'DB',
    title: 'Database Development',
    description:
      'Designing database structures, managing application ' +
      'data and connecting databases to software solutions.',
    skills: [
      'SQL Server',
      'T-SQL',
      'MongoDB',
      'Entity Framework Core',
      'Database Design',
      'Normalization',
      'Database Relationships',
      'CRUD Operations',
      'Migrations'
    ]
  },
  {
    number: '04',
    icon: 'PC',
    title: 'Computer Hardware',
    description:
      'Practical experience building computers, upgrading ' +
      'components and diagnosing hardware problems.',
    skills: [
      'PC Building',
      'CPU & GPU',
      'RAM Upgrades',
      'SSD & NVMe',
      'Hardware Diagnostics',
      'BIOS & UEFI',
      'Laptop Hardware',
      'Computer Maintenance',
      'Component Compatibility',
      'Performance Troubleshooting'
    ]
  },
  {
    number: '05',
    icon: 'OS',
    title: 'Windows & Computer Systems',
    description:
      'Installing, configuring and troubleshooting Windows ' +
      'computers and the software they run.',
    skills: [
      'Windows 10',
      'Windows 11',
      'Windows Installation',
      'Driver Installation',
      'Windows Configuration',
      'Software Troubleshooting',
      'System Recovery',
      'Operating System Setup',
      'PC Optimization'
    ]
  },
  {
    number: '06',
    icon: 'DEV',
    title: 'Developer Tools & Practices',
    description:
      'Working with development environments, version ' +
      'control and structured approaches to programming.',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio',
      'VS Code',
      'Swagger',
      'Docker',
      'Agile Methodologies',
      'Software Testing',
      'CI/CD Concepts',
      'Debugging'
    ]
  },
  {
    number: '07',
    icon: 'GAME',
    title: 'Roblox Game Development',
    description:
      'Creating interactive games with Roblox Studio ' +
      'and Luau, exploring gameplay mechanics, player ' +
      'progression and engaging user experiences.',
    skills: [
      'Roblox Studio',
      'Luau',
      'Game Scripting',
      'Gameplay Logic',
      'Game UI',
      'Game Mechanics',
      'Player Progression',
      'Game Design',
      'DataStore Concepts',
      'Multiplayer Systems'
    ]
  }
];

export const PROJECTS: PortfolioProject[] = [
  {
    number: '01',
    title: 'Bilmarket',
    category: 'Full Stack Web Application',
    description:
      'A car marketplace application developed with Angular, ' +
      'ASP.NET Core and SQL Server. The project combines a ' +
      'modern frontend with a REST API and relational database, ' +
      'including authentication, vehicle listings, image uploads ' +
      'and favorites.',
    technologies: [
      'Angular',
      'TypeScript',
      'C#',
      'ASP.NET Core',
      'SQL Server',
      'Entity Framework Core',
      'JWT'
    ],
    highlights: [
      'Angular frontend with REST API integration',
      'Backend development with ASP.NET Core',
      'SQL Server database integration',
      'Authentication and authorization',
      'Vehicle listings and image management'
    ]
  }
];

export const GAME_PROJECTS: GameProject[] = [
  {
    number: '01',
    title: 'Catch a Star',
    category: 'Roblox Game Development',
    status: 'Personal Game Project',
    description:
      'A colorful Roblox game project centered around ' +
      'catching falling stars, collecting different ' +
      'rarities and progressing through an upgrade system. ' +
      'The game combines collection mechanics with ' +
      'creative world design and interactive gameplay.',
    technologies: [
      'Roblox Studio',
      'Luau',
      'Game Design',
      'Gameplay Systems',
      'Player Progression'
    ],
    features: [
      'Star catching and collecting',
      'Different star rarities',
      'Coin and upgrade systems',
      'Interactive game world'
    ],
    theme: 'stars'
  },
  {
    number: '02',
    title: 'Lanternlight',
    category: 'Cooperative Game Concept',
    status: 'Concept',
    description:
      'A cooperative fantasy game concept where players ' +
      'carry magical lanterns through an enchanted forest. ' +
      'Players must manage their light, work together ' +
      'and overcome mysterious forest creatures to ' +
      'restore the Great Tree.',
    technologies: [
      'Game Design',
      'Roblox Concept',
      'Cooperative Gameplay',
      'Gameplay Planning'
    ],
    features: [
      'Cooperative play concept',
      'Lantern and light management',
      'Fantasy forest exploration',
      'Unique creature mechanics'
    ],
    theme: 'forest'
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    label: 'CURRENT STAGE',
    title: 'Preparing for H4',
    organization: 'TEC',
    description:
      'Continuing my education as a Data Technician ' +
      'specializing in Programming. My focus is improving ' +
      'my programming skills through practical software projects.'
  },
  {
    label: 'SOFTWARE DEVELOPMENT',
    title: 'Programming Specialization',
    organization: 'Data Technician Education',
    description:
      'Working with C#, object oriented programming, ' +
      'ASP.NET Core, Angular, SQL Server, APIs and ' +
      'software architecture.'
  },
  {
    label: 'PRACTICAL TECHNOLOGY',
    title: 'Computers & Hardware',
    organization: 'Hands On Technical Experience',
    description:
      'Building and maintaining PCs, diagnosing hardware, ' +
      'installing Windows, upgrading components and ' +
      'solving computer problems.'
  }
];
