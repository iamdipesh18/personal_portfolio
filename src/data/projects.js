/*
  Project data, mirrored from the master CV.
  - category: "mobile" | "web" | "ai" | "academic" (used by the filter on /projects)
  - featured: shown on the home page
  - image: optional, a generated cover is shown when missing
  - link: optional live site / demo
  - embed: optional interactive mobile demo (Appetize) shown on the detail page
*/
const GITHUB = "https://github.com/iamdipesh18";

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI & Data" },
  { id: "academic", label: "Academic" },
];

export const projects = [
  {
    slug: "movie-sansaar",
    title: "Movie Sansaar",
    subtitle: "Movie & TV discovery app",
    description:
      "A Flutter app for discovering movies and TV series through the TMDB API, with trailer playback and user accounts.",
    highlights: [
      "Developed a Flutter application for discovering movies and TV series through the TMDB API.",
      "Implemented search, voice search, favorites, responsive UI, YouTube trailer playback, and user authentication.",
      "Integrated Firebase Authentication and Cloud Firestore for user accounts and favorite content.",
      "Used Provider-based state management and reusable application components.",
    ],
    tags: ["Flutter", "Dart", "TMDB", "Firebase", "Provider"],
    category: "mobile",
    featured: true,
    image: "/Projects/Movie_Sansaar.png",
    github: `${GITHUB}/movie_sansaar_mobile`,
    link: "https://appetize.io/app/b_fbrmx6f5u72lybcbfw44o2bngi",
    embed: "https://appetize.io/embed/b_fbrmx6f5u72lybcbfw44o2bngi",
  },
  {
    slug: "dipflix",
    title: "Dipflix",
    subtitle: "Streaming-style web app",
    description:
      "A streaming-style web app on TMDB data: browse films and series, watch trailers, and keep profiles, My List and Continue Watching in the browser.",
    highlights: [
      "Built a streaming-style web app on TMDB data for browsing and searching films and series, watching trailers, and playing legally available titles.",
      "Implemented viewer profiles (including kids profiles), My List, and Continue Watching, stored locally in the browser.",
      "Used TanStack Query for data fetching and caching, Zod for API schemas, Zustand for state, and Radix UI with Tailwind CSS v4 for the interface.",
      "Added a demo mode backed by Mock Service Worker sample data, so the app runs without an API key.",
      "Covered the app with Vitest unit and component tests, Playwright end-to-end and accessibility tests, and a GitHub Actions CI pipeline.",
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "TMDB", "Playwright"],
    category: "web",
    featured: true,
    image: "/Projects/Dipflix.png",
    github: `${GITHUB}/dipflix`,
    link: "https://dipflix.vercel.app",
  },
  {
    slug: "kurakani",
    title: "Kurakani",
    subtitle: "Real-time chat app",
    description:
      "A real-time chat application with one-to-one messaging, blocking/reporting, and theme support, built on Firebase.",
    highlights: [
      "Built a real-time chat application using Flutter, Firebase Authentication, and Cloud Firestore.",
      "Implemented user authentication, one-to-one messaging, username management, blocking/reporting functionality, and theme support.",
      "Organized application functionality using reusable components, models, pages, services, and state management.",
    ],
    tags: ["Flutter", "Firebase", "Cloud Firestore", "Provider"],
    category: "mobile",
    featured: true,
    image: "/Projects/Kurakani.jpg",
    github: `${GITHUB}/kurakani`,
  },
  {
    slug: "chess-game",
    title: "Chess Game",
    subtitle: "Interactive chess app",
    description:
      "An interactive chess app with legal move generation, turn management, king-safety validation, and check/checkmate detection.",
    highlights: [
      "Developed an interactive chess application with legal move generation, turn management, and king-safety validation.",
      "Implemented check and checkmate detection and separated game logic into dedicated services.",
      "Structured the project around board rendering, pieces, move generation, move validation, game state, and state updates.",
    ],
    tags: ["Flutter", "Dart", "Game Logic"],
    category: "mobile",
    featured: true,
    image: "/Projects/Chess_Game.jpg",
    github: `${GITHUB}/chess_game`,
  },
  {
    slug: "todo-clean-architecture",
    title: "Todo App",
    subtitle: "Clean Architecture with BLoC",
    description:
      "A task-management app built with BLoC and Clean Architecture, with filtering and priority/date-based organization.",
    highlights: [
      "Developed a task-management application using BLoC state management and Clean Architecture principles.",
      "Implemented task creation, updating, deletion, completion tracking, filtering, and priority/date-based organization.",
      "Separated presentation, business logic, domain, data, repository, and use-case responsibilities into structured layers.",
    ],
    tags: ["Flutter", "BLoC", "Clean Architecture"],
    category: "mobile",
    featured: true,
    image: "/Projects/Todo_App.jpg",
    github: `${GITHUB}/to_do_application`,
  },
  {
    slug: "medivise",
    title: "Medivise",
    subtitle: "Machine learning prediction system",
    description:
      "An educational machine-learning system that predicts possible diseases from symptom patterns, served through a Flask web interface.",
    highlights: [
      "Developed an educational machine-learning system that predicts possible diseases from user-provided symptom patterns.",
      "Worked with data preprocessing, feature preparation, model training, and evaluation.",
      "Implemented and compared supervised classification approaches including Support Vector Classification, Random Forest, and Naive Bayes.",
      "Integrated the machine-learning functionality into a Flask-based web interface using HTML and CSS.",
    ],
    tags: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
    category: "ai",
    featured: true,
    image: "/Projects/Medivise.png",
    github: `${GITHUB}/Medivise`,
    link: "https://medivise.onrender.com/",
  },
  {
    slug: "d-store",
    title: "D-Store",
    subtitle: "E-commerce mobile app",
    description:
      "A Flutter e-commerce app focused on product browsing, product details, cart functionality, and reusable UI components.",
    highlights: [
      "Developed a Flutter-based e-commerce application focused on product browsing, product details, cart functionality, and reusable UI components.",
      "Applied structured Flutter development practices and state-driven interface design.",
    ],
    tags: ["Flutter", "Dart", "Firebase"],
    category: "mobile",
    featured: false,
    image: "/Projects/D_Store.png",
    github: `${GITHUB}/d_store`,
  },
  {
    slug: "lacedup",
    title: "LacedUp",
    subtitle: "Shoe shopping app",
    description:
      "A Flutter shopping app for browsing shoes, viewing product details, and managing a cart, using Riverpod.",
    highlights: [
      "Built a Flutter shopping application for browsing shoes, viewing product details, and managing a shopping cart.",
      "Used Riverpod for state management and reusable widgets for the application interface.",
    ],
    tags: ["Flutter", "Riverpod"],
    category: "mobile",
    featured: false,
    image: "/Projects/LacedUp.jpg",
    github: `${GITHUB}/lacedup`,
  },
  {
    slug: "ekantipur-scraper",
    title: "Ekantipur Web Scraper",
    subtitle: "Data QA automation",
    description:
      "A Playwright-based scraper that collects the Cartoon of the Day and selected entertainment news from Ekantipur into JSON.",
    highlights: [
      "Developed a Playwright-based scraper to collect selected structured information from the Ekantipur website.",
      "Extracted the Cartoon of the Day and selected entertainment news content and stored results in JSON format.",
      "Implemented handling for dynamic content, ad overlays, fallback navigation, and graceful error scenarios.",
    ],
    tags: ["Python", "Playwright", "JSON"],
    category: "ai",
    featured: false,
    github: `${GITHUB}/ekantipur-scraper`,
  },
  {
    slug: "trion-clone",
    title: "Trion Clone",
    subtitle: "Modern React web app",
    description:
      "A web app built on a modern React stack with TypeScript, Vite, Tailwind CSS, and reusable UI components.",
    highlights: [
      "Worked with a modern React-based web application stack using TypeScript, Vite, Tailwind CSS, and reusable UI components.",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    category: "web",
    featured: false,
    image: "/Projects/Trion_Clone.jpg",
    github: `${GITHUB}/Trion-Clone`,
    link: "https://trion-clone.vercel.app",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio",
    subtitle: "This website",
    description:
      "My personal portfolio for presenting professional information, technical skills, and software projects.",
    highlights: [
      "Developed and maintained a personal portfolio website for presenting professional information, technical skills, and software projects.",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    category: "web",
    featured: false,
    image: "/Projects/Portfolio.png",
    github: `${GITHUB}/personal_portfolio`,
    link: "https://www.dhunganadipesh.com.np/",
  },
  {
    slug: "world-time",
    title: "World Time App",
    subtitle: "REST API-based Flutter app",
    description:
      "Retrieves and displays local time for selected cities, demonstrating async programming, API integration, routing, and responsive UI.",
    highlights: [
      "Developed a REST API-based application for retrieving and displaying local time information for selected cities.",
      "Demonstrates asynchronous programming, API integration, routing, and responsive UI.",
    ],
    tags: ["Flutter", "REST APIs"],
    category: "mobile",
    featured: false,
    image: "/Projects/World_Time.jpg",
    github: `${GITHUB}/world_time_application`,
  },
  {
    slug: "my-tea-ghar",
    title: "My Tea Ghar",
    subtitle: "Firebase tea-ordering app",
    description:
      "A Firebase-based Flutter app demonstrating authentication, Cloud Firestore, user-specific data, and Provider state management.",
    highlights: [
      "Developed a Firebase-based application demonstrating authentication, Cloud Firestore integration, user-specific data, and Provider-based state management.",
    ],
    tags: ["Flutter", "Firebase", "Provider"],
    category: "mobile",
    featured: false,
    image: "/Projects/My_Tea_Ghar.jpg",
    github: `${GITHUB}/my_tea_ghar`,
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    subtitle: "Python / Pygame",
    description:
      "An interactive Snake game built as a programming and logic-development project.",
    highlights: [
      "Developed an interactive Snake game as a programming and logic-development project.",
    ],
    tags: ["Python", "Pygame"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/Snake-Game-by-Dipesh`,
  },
  {
    slug: "ai-lab",
    title: "AI Laboratory Work",
    subtitle: "Coursework",
    description:
      "Practical exercises in artificial intelligence programming, problem solving, dataset analysis, and exploratory data analysis.",
    highlights: [
      "Completed practical exercises involving artificial intelligence programming, problem solving, dataset analysis, and exploratory data analysis.",
    ],
    tags: ["Python", "Jupyter", "EDA"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/AI`,
  },
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    subtitle: "Coursework",
    description:
      "Academic implementations and exercises covering fundamental data structures, algorithms, and computational problem solving.",
    highlights: [
      "Completed academic implementations and exercises covering fundamental data structures, algorithms, and computational problem solving.",
    ],
    tags: ["C", "Algorithms"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/DSA`,
  },
  {
    slug: "circular-queue",
    title: "Circular Queue",
    subtitle: "Presentation & implementation",
    description:
      "Academic work and presentation material covering circular queue structure, operations, and implementation concepts.",
    highlights: [
      "Prepared academic work and presentation material covering circular queue structure, operations, and implementation concepts.",
    ],
    tags: ["C", "Data Structures"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/A-Presentation-on-Circular-Queue`,
  },
  {
    slug: "dsp",
    title: "Digital Signal Analysis & Processing",
    subtitle: "Coursework",
    description:
      "Academic practical work related to digital signal processing and signal analysis concepts.",
    highlights: [
      "Completed academic practical work related to digital signal processing and signal analysis concepts.",
    ],
    tags: ["MATLAB", "DSP"],
    category: "academic",
    featured: false,
    image: "/Projects/DSP.jpg",
    github: `${GITHUB}/Digital-Signal-Analysis-and-Processing`,
  },
  {
    slug: "simulation-modeling",
    title: "Simulation & Modeling",
    subtitle: "Coursework",
    description:
      "Academic work involving simulation and modeling concepts as part of the Computer Engineering curriculum.",
    highlights: [
      "Completed academic work involving simulation and modeling concepts as part of the Computer Engineering curriculum.",
    ],
    tags: ["Python", "Simulation"],
    category: "academic",
    featured: false,
    image: "/Projects/Simulation.jpg",
    github: `${GITHUB}/Simulation-Modeling`,
  },
  {
    slug: "internet-intranet",
    title: "Internet & Intranet",
    subtitle: "Coursework",
    description:
      "Academic work related to networking, internet technologies, and intranet concepts.",
    highlights: [
      "Completed academic work related to networking, internet technologies, and intranet concepts.",
    ],
    tags: ["HTML", "CSS", "Networking"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/Internet-Intranet`,
  },
  {
    slug: "distributed-systems",
    title: "Distributed Systems",
    subtitle: "Coursework",
    description:
      "Academic work covering fundamental distributed computing and system concepts.",
    highlights: [
      "Completed academic work covering fundamental distributed computing and system concepts.",
    ],
    tags: ["Python", "Distributed Computing"],
    category: "academic",
    featured: false,
    github: `${GITHUB}/Distributed-System`,
  },
];
