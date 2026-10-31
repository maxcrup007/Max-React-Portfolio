import {
  FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode, FaLocust,
} from 'react-icons/fa6'
import {
  SiSelenium, SiRobotframework, SiGo, SiDjango, SiPython, SiPostgresql,
  SiSqlite, SiVuedotjs, SiFlask, SiPandas, SiPlaywright, SiApachejmeter,
} from 'react-icons/si'

// ─────────────────────────────────────────────────────────────
//  Edit this file to add your own skill descriptions.
//
//  Fields you can change:
//    level            → "Beginner" | "Intermediate" | "Advanced" | "Expert"
//    yearsOfExperience → number
//    description      → paragraph about your experience with this skill
//    usedIn           → list of frameworks / projects / contexts you used it in
//    highlights       → list of specific things you built or achieved
//
//  Do NOT change: id, name, icon  (they connect to the grid cards)
// ─────────────────────────────────────────────────────────────

const skills = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: <FaSquareJs />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your JavaScript experience here.",
    usedIn: ["React", "Node.js", "Vite", "Browser scripts"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "react",
    name: "React",
    icon: <FaReact />,
    level: "Intermediate",
    yearsOfExperience: 1,
    description: "Write your React experience here.",
    usedIn: ["Portfolio website", "Game Guide Wiki", "Vite projects"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "sass-css",
    name: "Sass / CSS",
    icon: <FaSass />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your Sass / CSS experience here.",
    usedIn: ["CSS Modules", "Responsive layouts", "Dark theme UI"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt />,
    level: "Intermediate",
    yearsOfExperience: 3,
    description: "Write your Git experience here.",
    usedIn: ["GitHub", "Team collaboration", "CI/CD pipelines"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: <FaNode />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Write your Node.js experience here.",
    usedIn: ["REST API", "npm tooling", "Vite dev server"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "python",
    name: "Python",
    icon: <SiPython />,
    level: "Intermediate",
    yearsOfExperience: 3,
    description: "Write your Python experience here.",
    usedIn: ["Django", "Flask", "Selenium", "Pandas", "Playwright"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "django",
    name: "Django",
    icon: <SiDjango />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your Django experience here.",
    usedIn: ["Laboratory Management System", "REST API backend", "Admin panel"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "go",
    name: "Go",
    icon: <SiGo />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Write your Go experience here.",
    usedIn: ["Contact API server", "HTTP REST endpoints"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your PostgreSQL experience here.",
    usedIn: ["Django ORM", "Data extraction app", "Lab management system"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {

    id: "selenium",
    name: "Selenium",
    icon: <SiSelenium />,
    level: "Advanced",
    yearsOfExperience: 4,
    description: "Write your Selenium experience here.",
    usedIn: ["Automation Testing", "Golf Reservation System QA", "Robot Framework", "CI/CD scripts"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
      
    ],
  },
  {
    id: "robot-framework",
    name: "Robot Framework",
    icon: <SiRobotframework />,
    level: "Advanced",
    yearsOfExperience: 4,
    description: "Write your Robot Framework experience here.",
    usedIn: ["Golf Reservation System QA", "CI/CD automation", "Keyword-driven testing"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "locust",
    name: "Locust",
    icon: <FaLocust />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your Locust experience here.",
    usedIn: ["Performance testing", "Load testing", "API stress testing"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: <SiSqlite />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your SQLite experience here.",
    usedIn: ["Node.js projects", "Fertilizer Management System", "Local database storage"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "vuejs",
    name: "Vue.js",
    icon: <SiVuedotjs />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Write your Vue.js experience here.",
    usedIn: ["Laboratory Management System", "Frontend UI components"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "jmeter",
    name: "JMeter",
    icon: <SiApachejmeter />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your JMeter experience here.",
    usedIn: ["Performance testing", "Load testing", "Golf Reservation System QA"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "flask",
    name: "Flask",
    icon: <SiFlask />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your Flask experience here.",
    usedIn: ["Game Guide Wiki backend", "REST API microservices", "Auto Scraping Text system"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "pandas",
    name: "Pandas",
    icon: <SiPandas />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Write your Pandas experience here.",
    usedIn: ["Data analysis", "Data cleaning", "CSV and Excel processing"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: <SiPlaywright />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Write your Playwright experience here.",
    usedIn: ["Web scraping", "Automation testing", "Golf Reservation System QA"],
    highlights: [
      "Add your highlight or achievement here",
      "Add another highlight",
    ],
  },
]

export default skills
