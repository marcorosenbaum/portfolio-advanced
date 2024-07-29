import PhotoVtg from "./assets/images/photo-vtg.png";
import PhotoMusic from "./assets/images/photo-music.png";
import PhotoFlashcards from "./assets/images/photo-flashcards.png";
import PhotoOgPreview from "./assets/images/photo-og-preview.png";
import PhotoPortfolioV1 from "./assets/images/photo-portfolio-v1.png";

const PROJECTS = [
  {
    id: "1",
    title: "og-preview",
    image: PhotoOgPreview,
    description:
      "A npm-package that generates a preview of how all links appear when shared on social media. Simply execute a CLI command.",
    descriptionLong:
      "OG-preview is a CLI tool to preview all available Open Graph meta data from the local development server. This allows the developer to check how the links of the website will appear when shared on social media platforms without deploying your project or checking every URL manually. You simply need to execute a single CLI command.",
    skills: ["Node", "Express", "TypeScript"],
    githubLink: "https://github.com/marcorosenbaum/og-preview",
    websiteLink: "https://www.npmjs.com/package/og-preview",
    learnings: [
      "Setting up a CLI tool",
      "Using Express to serve static files",
      "Building a Web Scraper",
      "Publishing and managing a npm package",
    ],
  },
  {
    id: "2",
    title: "VTG-Musli",
    image: PhotoVtg,
    description: "The website of a local car dealer in Germany.",
    descriptionLong:
      "VTG-Musli is a local car dealer in northern Germany. The goal was to create a simple and clean website that showcases the services and partners of the company. ",
    skills: ["JavaScript", "Vue", "Tailwind"],
    githubLink: "https:/github.com/marcorosenbaum/vtg-musli",
    websiteLink: "https://vtg-musli.de",
    learnings: [
      "Creating a website from scratch",
      "Fully responsive design",
      "Deploying a website via FileZilla (File Transfer Protocol)",
    ],
  },
  {
    id: "3",
    title: "Portfolio-V1",
    image: PhotoPortfolioV1,
    description: "The first version of my portfolio website.",
    descriptionLong:
      "This is the first version of my personal portfolio website. I focused on creating a clean and simple portfolio that showcases my projects and skills. ",
    skills: ["JavaScript", "Vue", "Tailwind"],
    githubLink: "https://github.com/marcorosenbaum/portfolio",
    websiteLink: "",
    learnings: [
      "Creating a personal portfolio",
      "Building reusable components",
      "Working with Figma designs",
    ],
  },
  {
    id: "4",
    title: "Flashcards",
    image: PhotoFlashcards,
    description:
      "Flashcards is a web application where you can create flashcards and keep track of your learning progress.",
    descriptionLong:
      "Flashcards is a web application where you can create flashcards and keep track of your learning progress. The goal was to create a simple and clean application that helps people to memorize information while getting a visual feedback of their learning progress.",
    skills: [
      "Vue",
      "Tailwind",
      "Firebase",
      "Firestore",
      "Pinia",
      "Chart.js",
      "TipTap",
    ],
    githubLink: "https://github.com/marcorosenbaum/flashcards",
    websiteLink: "https://marco-flashcards.netlify.app/",
    learnings: [
      "Working with Firebase",
      "User authentication",
      "Storing data in Firestore",
      "Creating a responsive design",
      "Implemanting tools like Chart.js and TipTap",
      "Using Pinia for state management",
      "Form validation",
    ],
  },
  {
    id: "5",
    title: "Music Prototype",
    image: PhotoMusic,
    description: "The Prototype of a music player web application.",
    descriptionLong:
      "This is the project that I built during the course 'Vue - The complete guide by Zero to Mastery'. It is a music player web application with user authentication. Users can upload their own songs and comment on other songs.",
    skills: ["Vue", "Tailwind", "Firebase", "Firestore", "Pinia"],
    githubLink: "https://github.com/marcorosenbaum/music-example",
    websiteLink: "",
    learnings: [
      "User authentication",
      "Storing data in Firebase",
      "Translating content with vue-i18n",
      "Testing with Vitest",
    ],
  },
];

export default PROJECTS;
