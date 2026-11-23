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
    yearsOfExperience: 3,
    description: "JavaScript is a core programming language I use to build interactive, dynamic, and highly functional software. It drives my interest in front-end, back-end, and full-stack development, as well as related areas like UI design, application logic, server-side architecture, system integration, and JavaScript-based automation scripting.",
    usedIn: ["React", "Node.js", "Vite", "Browser scripts", "Web Application Develop", "Playwright", "Automation Script", "Auto Real-time Applications", "Data arrives from the server", "Connecting the front-end to the back-end"],
    highlights: [
      "Proficient in JavaScript for full-stack software development.",
      "Apply JavaScript to use manage Automation Scrapers, bots",
      "Apply JavaScript to use manage REST/GraphQL APIs Development",
      "Apply JavaScript to use manage Data visualization the Charts and dashboards",
      "Integrates JavaScript to connect Node.js, React, Vite, Vue.js"
    ],

  },

  {
    id: "react",
    name: "React",
    icon: <FaReact />,
    level: "Intermediate",
    yearsOfExperience: 1,
    description: "React is a JavaScript library that I have use for building user interfaces. I build the screen from small reusable pieces called components, and React updates the page efficiently when my data changes.",
    usedIn: ["Portfolio website", "Game Guide Wiki", "Vite projects", "Back-test monitoring"],
    highlights: [
      "Used to React for Reusable components. Write a button, card, or navbar once and use it everywhere.",
      "Used to React for Fast updates. React changes only the parts of the page that need to change.",
      "Managed large ecosystem. There are libraries for routing, state management, forms, animations"
    ],
  },

  {
    id: "sass-css",
    name: "Sass / CSS",
    icon: <FaSass />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "I have use the CSS and Sass in front-end development, It help to control the visual presentation, layout and styling in my development.",
    usedIn: ["CSS Modules", "Responsive layouts", "Dark theme UI", "Responsive UI"],
    highlights: [
      "Managed Layout & Positioning Control in Web Application.",
      "Used to Visual Styling a color theme and Dark mode.",
      "Used to Responsiveness media layouts to across desktop screens, tablets and mobile devices.",
    ],
  },


  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt />,
    level: "Intermediate",
    yearsOfExperience: 4,
    description: "Git is a distributed version control system used in my projects software development, It apply to track changes in code, coordinate work among multiple stakeholders and manage project history.",
    usedIn: ["GitHub", "GitLap", "Distribute and Coordinate repositories", "Code Review & Traceability", "Branching & Isolation","Team collaboration", "CI/CD pipelines"],
    highlights: [
      "Managed source code and snapshots in the repository",
      "Facilitated Branching & Isolation for safe experimentation and also protection of production version to test and write deployment until the feature update is already completed",
      "Used to Distribute and Coordinate repositories to my stakeholder",
      "Supports Code Review & Traceability via manual review and AI assistance.",
      "Managed team collaboration"
    ],
  },


  {
    id: "nodejs",
    name: "Node.js",
    icon: <FaNode />,
    level: "Beginner",
    yearsOfExperience: 2,
    description: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript engine, I always used Node.js to run JavaScript code outside the browser primarily on servers, computer and cloud infrastructure to build back-end web server & APIs, Language ecosystem across between JavaScript and TypeScript, Handle Real-time Applications, Front-end Tooling and Build to docker and Apply to Automation script for testing and web scraping.",
    usedIn: ["REST API", "npm tooling", "Vite dev server", "Connect Docker", "Build back-end web server & APIs", "Project local Live server", "Auto Real-time Applications", "Automation Extract data Application", "Game Guide Planner!!!", "Automation Script" ],
    highlights: [
      "Managed npm tooling on the Vite dev local server",
      "Used to connect Docker for deployment",
      "Support Web scraping tool and automation framework",
      "Facilitated Build back-end web server & APIs",
      "Used to Run auto real-time applications",
      "Integrates Node.js across language ecosystem between JavaScript and TypeScript"
    ],
  },


  {
    id: "python",
    name: "Python",
    icon: <SiPython />,
    level: "Intermediate",
    yearsOfExperience: 4,
    description: "Python is a versatile, widely adopted programming language valued in software engineering for its clean, readable syntax and massive library ecosystem. It serves as a core language across back-end development (Django, Flask), test automation (Selenium, Robot Framework, Playwright), data analytics (Pandas, NumPy), and database migration scripting.",
    usedIn: ["Django", "Flask", "Selenium", "Pandas", "Playwright", "Locust", "NumPy", "Core language across back-end development", "Game Guide Planner!!!", "Automation Extract data Application", "Data Visualization with Matplotlib"],
    highlights: [
      "Managed and Run automation test script based on Selenium Webdriver, Robot Framework, Playwright",
      "Used to Back-end software development from Django, Flask, FastAPI",
      "Facilitated to apply many libraries for Data Analysis",
      "Data Processing and support from Pandas and NumPy allow to clean, Transform and analyze massive datasets efficiently",
      "Used to API testing for allows automation API validation scripts and performance testing workloads via Locust",
    ],
  },
  {
    id: "django",
    name: "Django",
    icon: <SiDjango />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Django is an open-source Python web framework designed to build secure, scalable, and maintainable web applications quickly using its 'batteries-included' philosophy. I frequently use it to develop medium-to-large-scale full-stack applications with high-quality security architecture, as well as for automating admin dashboards as core management components.",
    usedIn: ["Laboratory Management System", "REST API backend", "Admin panel of 'Game Guide Planner!!!'", "Dashboards core management components", "Python 'batteries-included' philosophy" ],
    highlights: [
      "Used to Back-end and Admin panel for Game Guide Planner!!! project",
      "Used to Full-stack development for Laboratory Management System",
      "Facilitated to apply REST API backend",
      "Managed core components many dashboard"
    ],
  },
  {
    id: "go",
    name: "Go",
    icon: <SiGo />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Go is an open-source, statically typed, compiled programming language designed by Google. It was created to solve common software engineering frustrations at scale, such as slow compilation, complex dependency management, and difficult multithreading. I occasionally use it for its extreme speed and efficiency when building high-performance back-end APIs and command-line interface (CLI) tools.",
    usedIn: ["Contact API server", "HTTP REST endpoints", "Back-test API monitoring", "Command-line interface (CLI) tools"],
    highlights: [
      "Managed command-line interface (CLI) tools",
      "Used to Back-test API monitoring",
      "Facilitated to Contact API server"
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "PostgreSQL is a powerful, open-source, enterprise-grade object-relational database management system (RDBMS). In my software development work, it serves as the foundational data layer for everything from small web applications to massive distributed enterprise systems. I regularly use it for relational data storage, advanced querying, high-performance workloads, and handling semi-structured data such as JSON.",
    usedIn: ["Django ORM", "Data extraction app", "Lab management system", "Handling semi-structured data such as JSON", "Querying high-performance workloads"],
    highlights: [
      "Architected foundational data layers supporting applications ranging.",
      "Used to lightweight web apps to large-scale distributed systems.",
      "Implemented relational data modeling, complex querying, and performance optimization for high-throughput workloads.",
      "Managed semi-structured data storage and indexing using PostgreSQL."
    ],
  },
  {

    id: "selenium",
    name: "Selenium",
    icon: <SiSelenium />,
    level: "Advanced",
    yearsOfExperience: 4,
    description: "Selenium is a powerful, open-source framework used for automating web browsers. In my software testing work, it serves as the industry standard for performing automated functional, regression, and end-to-end (E2E) testing of web applications. Selenium allows QA engineers and developers to write scripts that programmatically control real browsers, simulating actual user interactions. I regularly use it to build test scripts based on core use cases, leverage the full Selenium suite (WebDriver, Grid, and IDE), and execute cross-platform testing across web applications.",
    usedIn: ["Automation Testing", "Golf Reservation System QA", "Robot Framework", "CI/CD scripts", "Cross-platform testing across web applications", "Regression and End-to-end (E2E)", "Selenium WebDriver", "Selenium Grid", "Selenium IDE"],
    highlights: [
      "Developed automated functional, regression, and end-to-end (E2E).",
      "Implemented test scripts aligned with core business use cases or test cases.",
      "Utilized the complete Selenium suite—including Selenium WebDriver, Selenium Grid, and Selenium IDE—to simulate real user interactions across browsers.",
      "Executed comprehensive cross-platform and cross-browser testing to ensure consistent web application performance.",
      "Used to automated functional interaction as the same time."
    ],
  },
  {
    id: "robot-framework",
    name: "Robot Framework",
    icon: <SiRobotframework />,
    level: "Advanced",
    yearsOfExperience: 4,
    description: "Robot Framework is a generic, open-source automation framework built on Python that is widely used for acceptance testing and acceptance test-driven development (ATDD). It uses a keyword-driven testing approach that allows QA engineers, Developers, and even non-technical stakeholders to write and read test cases using human-readable, plain-text keywords. I regularly use it for keyword-driven testing, end-to-end (E2E) and multi-layer testing, built-in reporting and logging, and extending test capabilities with custom Python code.",
    usedIn: ["Golf Reservation System QA", "CI/CD automation", "Keyword-driven testing","Multi-layer automated testing", "Monitor built-in HTML reporting and detailed execution logs", "Script human-readable", "Explain complex concepts clearly to both technical and non-technical stakeholders"],
    highlights: [
      "Implemented human-readable, keyword-driven test suites for acceptance testing and ATDD, enabling clear collaboration across technical and non-technical stakeholders.",
      "Executed end-to-end (E2E) and multi-layer automated testing utilizing.",
      "Used to built-in HTML reporting and detailed execution logs.",
      "Managed Keyword, Test Cases and other extension library for assist automation testing",
      "Extended framework functionality by writing custom test libraries and keywords in Python."
    ],
  },
  {
    id: "locust",
    name: "Locust",
    icon: <FaLocust />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Locust is an open-source, Python-based load and performance testing tool used in software testing to simulate millions of simultaneous users interacting with a system. It measures system performance, scalability, and stability under heavy traffic. Instead of relying on clunky XML configurations or heavy graphical interfaces (like JMeter), Locust lets QA engineers define user behavior using clean, standard Python code. I regularly use it for core software testing use cases, including load testing, stress and spike testing, API and microservice benchmarking, and endurance testing.",
    usedIn: ["Performance testing", "Load testing", "API stress testing", "Endurance testing", "API and microservice benchmarking", "Define user behavior using clean and standard Python code"],
    highlights: [
      "Simulated high-concurrency user traffic using clean, code-driven Python scripts to evaluate system scalability and stability.",
      "Executed core performance testing scenarios, including load, stress, spike, and endurance testing.",
      "Benchmarked APIs and microservices under heavy traffic to identify bottlenecks and optimize response times.",
    ],
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: <SiSqlite />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "SQLite is a lightweight, self-contained, serverless relational database engine. Widely recognized as the most deployed database engine in the world, it plays several key roles in my software engineering workflow, including local application storage, local development, and prototyping for small-to-medium web applications. I regularly configure it with Write-Ahead Logging (WAL) for improved concurrency and utilize it as a lightweight storage layer for data analysis workflows and automated software testing",
    usedIn: ["Node.js projects", "Fertilizer Management System", "Local database storage", "Data Analysis File Formats", "In-Memory Databases"],
    highlights: [
      "Implemented SQLite for lightweight local application storage, rapid prototyping, and small-to-medium web applications.",
      "Configured Write-Ahead Logging (WAL) to optimize read/write concurrency and database reliability.",
      "Utilized SQLite as a fast, self-contained data store for local data analysis pipelines and isolated automated software testing environments.",
    ],
  },
  {
    id: "vuejs",
    name: "Vue.js",
    icon: <SiVuedotjs />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Vue.js is an open-source, progressive JavaScript framework used for building modern user interfaces and single-page applications (SPAs). In front-end software development, it serves several primary purposes. I regularly use Vue.js to build interactive user interfaces and scalable, component-based architectures for web applications.",
    usedIn: ["Laboratory Management System", "Frontend UI components", "Build interactive user interfaces"],
    highlights: [
      "Built modern, responsive single-page applications (SPAs) and interactive user interfaces using Vue.js.",
      "Designed modular, reusable component-based architectures to streamline front-end web development and maintainability.",
    ],
  },
  {
    id: "jmeter",
    name: "JMeter",
    icon: <SiApachejmeter />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Apache JMeter is an open-source, Java-based tool originally designed for load testing web applications. I regularly use JMeter to measure how a system behaves under heavy traffic, high concurrency, and resource constraints, utilizing its visual interface and XML-based .jmx test plans.",
    usedIn: ["Performance testing", "Load testing", "Golf Reservation System QA", "Resource constraints"],
    highlights: [
      "Evaluated system behavior, scalability, and stability under heavy traffic, high concurrency, and resource constraints using Apache JMeter.",
      "Designed, configured, and executed complex test scenarios utilizing JMeter’s GUI and XML-based .jmx test plans.",
      "Used to execute automation load testing in visual interface"
    ],
  },
  {
    id: "flask",
    name: "Flask",
    icon: <SiFlask />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Flask is a lightweight, open-source Python micro web framework used for building web applications, RESTful APIs, and backend services. I regularly use Flask for building RESTful APIs and microservices, rapid prototyping, serving data science models, and developing server-rendered web applications.",
    usedIn: ["Game Guide Wiki backend", "RESTful API microservices", "Auto Scraping Text system", "Rapid prototyping", "Serving data science models"],
    highlights: [
      "Developed lightweight RESTful APIs, microservices, and server-rendered web applications using Flask.",
      "Leveraged Flask for rapid application prototyping and deploying data science models into production environments.",
      "Managed backend services and admin panel to connect database."
    ],
  },
  {
    id: "pandas",
    name: "Pandas",
    icon: <SiPandas />,
    level: "Intermediate",
    yearsOfExperience: 2,
    description: "Pandas is the foundational open-source Python library for data manipulation, cleaning, and analysis. Built on top of NumPy, it introduces high-performance, intuitive data structures—primarily the DataFrame and Series—and acts as the central workbench where raw data is ingested, transformed, explored, and prepared prior to visualization. I regularly use it for data cleaning tasks, including handling missing values, deduplication, and type casting.",
    usedIn: ["Data analysis", "Data cleaning", "CSV and Excel processing", "Google Colabs", "Jupyter"],
    highlights: [
      "Ingested, transformed, and analyzed structured datasets using Pandas DataFrames and Series built on NumPy.",
      "Executed comprehensive data cleaning pipelines—including handling missing values, deduplication, and type casting—to prepare raw data for visualization and modeling.",
    ],
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: <SiPlaywright />,
    level: "Beginner",
    yearsOfExperience: 1,
    description: "Playwright is a modern, open-source end-to-end web testing and browser automation framework developed and maintained by Microsoft. It was built specifically to overcome the speed, reliability, and flakiness limitations of older automation tools like Selenium. I regularly use Playwright for visual inspection during web scraping, as well as for integrated API testing.",
    usedIn: ["Web scraping", "Automation testing", "Golf Reservation System QA", "Integrated API testing"],
    highlights: [
      "Leveraged Microsoft Playwright to build fast, reliable end-to-end (E2E) web test suites with minimal flakiness.",
      "Utilized Playwright's browser automation and visual inspection capabilities for accurate, dynamic web scraping.",
      "Implemented integrated API testing alongside UI workflows to validate end-to-end application behavior.",
    ],
  },
]

export default skills
