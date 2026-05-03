import type {
  AboutInfo,
  ContactLink,
  Entry,
  PortfolioMeta,
  PortfolioSection,
  Profile,
  Project,
  SectionKey,
  SkillsGroup,
  TextSegment,
} from "../types/portfolio";

export const sections: PortfolioSection[] = [
  {
    key: "about",
    label: "ABOUT",
    heading: "ABOUT ME",
    command: "cat about.txt",
    file: "about.txt",
    meta: "section 1 of 6",
  },
  {
    key: "experience",
    label: "EXPERIENCE",
    heading: "WORK EXPERIENCE",
    command: "cat experience.log",
    file: "experience.log",
    meta: "section 2 of 6",
  },
  {
    key: "education",
    label: "EDUCATION",
    heading: "EDUCATION",
    command: "cat education.json",
    file: "education.json",
    meta: "section 3 of 6",
  },
  {
    key: "projects",
    label: "PROJECTS",
    heading: "PROJECTS",
    command: "ls -la ./projects",
    file: "projects/",
    meta: "section 4 of 6",
  },
  {
    key: "skills",
    label: "SKILLS",
    heading: "TECHNICAL SKILLS",
    command: "skills --list --verbose",
    file: "skills.sh",
    meta: "section 5 of 6",
  },
  {
    key: "contact",
    label: "CONTACT",
    heading: "CONTACT",
    command: "ping --me",
    file: "contact.json",
    meta: "section 6 of 6",
  },
];

export const sectionByKey = Object.fromEntries(
  sections.map((section) => [section.key, section]),
) as Record<SectionKey, PortfolioSection>;

export const profile: Profile = {
  name: "HENRIQUE FRANCO",
  title: "SOFTWARE DEVELOPER INTERN",
  availability: "CURRENTLY INTERNING",
  photoUrl: "/kirito.png",
};

export const portfolioMeta: PortfolioMeta = {
  lastUpdated: "2026",
};

export const aboutIntro: TextSegment[] = [
  { text: "Hello. I'm " },
  { text: "Henrique Franco", emphasis: true },
  {
    text: ", a software developer focused on ",
  },
  { text: "Computer Vision", emphasis: true },
  { text: ", " },
  { text: "C++", emphasis: true },
  { text: ", and modern web development with " },
  { text: "ReactJS, TypeScript, NodeJS, and PostgreSQL", emphasis: true },
  {
    text: ". I build responsive interfaces, backend integrations, and high-performance applications while studying Information Systems.",
  },
];

export const aboutInfo: AboutInfo[] = [
  { label: "LOCATION", value: "Volta Redonda, RJ, Brazil" },
  { label: "EXPERIENCE", value: "1+ year" },
  { label: "FOCUS", value: "Computer Vision & Web" },
  { label: "STATUS", value: "Software Developer Intern", isSuccess: true },
];

export const experience: Entry[] = [
  {
    title: "Software Developer",
    date: "JUL 2025 — PRESENT",
    organization: "Metta Innovations",
    bullets: [
      "Internship focused on Computer Vision and Artificial Intelligence.",
      "Develop frontends with ReactJS, NextJS, SASS, and TypeScript, creating modern and responsive interfaces.",
      "Build applications with C++ and QML for high-performance systems and rich interfaces.",
      "Use Git, GitLab, and Docker to support collaboration, version control, portability, and deployment.",
      "Work in an agile SCRUM routine with daily meetings, Kanban monitoring, and task tracking.",
    ],
  },
  {
    title: "Web Developer - Scientific Initiation Project",
    date: "APR 2025 — PRESENT",
    organization: "CESS-UFF",
    bullets: [
      "Develop the frontend of SGIMP, a Hazardous Materials Inventory Management System, using ReactJS, JavaScript, and CSS.",
      "Contribute to the backend with NodeJS, ExpressJS, Sequelize ORM, JWT authentication, and WebHook implementation.",
      "Work with PostgreSQL by developing queries, integrations, and optimized routines for the system.",
      "Use Git and GitHub for project version control, code organization, and change tracking.",
      "Participate in weekly monitoring meetings to share progress, align demands, and present developed features.",
    ],
  },
];

export const education: Entry[] = [
  {
    title: "Bachelor's Degree, Information Systems",
    date: "FEB 2024 — DEC 2027",
    organization: "Centro Universitário de Volta Redonda - UniFOA",
    bullets: [
      "Grade: 9.1",
      "Bachelor's Degree in Information Systems.",
      "Relevant skills include team leadership, requirements definition, and software development fundamentals.",
    ],
  },
  {
    title: "Technical High School, Electronics Technician",
    date: "FEB 2022 — DEC 2023",
    organization: "Institute of Technical Culture",
    bullets: [
      "Technical high school with training in Electronics.",
      'Developed the final project "Virtual Interaction System", awarded as the best project in the electronics class of 2023.',
      "Relevant skills include team leadership, interpersonal communication, and electronics fundamentals.",
    ],
  },
  {
    title: "Accelerated Computer Science Fundamentals",
    date: "SEP 2025",
    organization: "University of Illinois Urbana-Champaign",
    bullets: [
      "Credential ID: PLDNEK2SO4Z8",
      "Coursera specialization covering C++, algorithms, data structures, and software fundamentals.",
    ],
  },
  {
    title: "Unordered Data Structures",
    date: "SEP 2025",
    organization: "University of Illinois Urbana-Champaign",
    bullets: [
      "Credential ID: ET0U1Q8KKES3",
      "Covered C++, algorithms, and data structures.",
    ],
  },
  {
    title: "Ordered Data Structures",
    date: "AUG 2025",
    organization: "University of Illinois Urbana-Champaign",
    bullets: [
      "Credential ID: JW25HTBMTFHL",
      "Covered C++ and ordered data structure implementation concepts.",
    ],
  },
  {
    title: "Object-Oriented Data Structures in C++",
    date: "JUL 2025",
    organization: "University of Illinois Urbana-Champaign",
    bullets: [
      "Credential ID: 8U5GA3RMR43",
      "Covered C++, object-oriented programming, pointers, and computer programming fundamentals.",
    ],
  },
  {
    title: "The Complete Python Developer",
    date: "MAY 2024",
    organization: "Zero To Mastery",
    bullets: [
      "Credential ID: UC-2a338183-7062-49c1-9699-95cbd050ec9c",
      "Covered Python, object-oriented programming, and script creation.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "SIV - Sistema de Interação Virtual",
    badge: "TCC",
    date: "MAR 2023 — OCT 2023",
    organization: "Institute of Technical Culture",
    description:
      "Virtual Interaction System developed as the final project for the Electronics technical course. The project consisted of creating a pair of virtual reality glasses and was awarded as the best project in the 2023 electronics class.",
    stack: ["Electronics", "Arduino", "Virtual Reality", "Team Leadership"],
  },
  {
    name: "SGIMP",
    badge: "RESEARCH",
    date: "APR 2025 — PRESENT",
    organization: "CESS-UFF",
    description:
      "Hazardous Materials Inventory Management System platform developed with a React frontend, NodeJS backend, REST API integration, JWT authentication, webhooks, and PostgreSQL routines.",
    stack: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL"],
  },
];

export const skills: SkillsGroup[] = [
  {
    label: "LANGUAGES",
    primary: ["C++", "TypeScript", "JavaScript", "Python"],
    secondary: ["SQL", "QML", "CSS", "SASS"],
  },
  {
    label: "FRAMEWORKS & RUNTIMES",
    primary: ["ReactJS", "NextJS", "NodeJS", "ExpressJS"],
    secondary: ["Sequelize ORM", "JWT", "REST API", "WebHooks"],
  },
  {
    label: "DATABASES & TOOLS",
    primary: ["PostgreSQL", "Git", "GitHub", "GitLab"],
    secondary: ["Docker", "npm", "Microsoft Planner", "Excel"],
  },
  {
    label: "DOMAINS",
    primary: [
      "Computer Vision",
      "Artificial Intelligence",
      "Frontend Development",
    ],
    secondary: ["Backend Development", "Electronics", "Agile SCRUM", "Kanban"],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "EMAIL",
    value: "henriqfvr@gmail.com",
    href: "mailto:henriqfvr@gmail.com",
  },
  {
    label: "GITHUB",
    value: "github.com/henriqfranco",
    href: "https://github.com/henriqfranco",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/henriques-franco",
    href: "https://www.linkedin.com/in/henriques-franco/?locale=en_US",
  },
];
