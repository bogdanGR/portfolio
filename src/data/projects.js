export const projects = [
  {
    id: 1,
    title: "Nfk",
    description: "Enterprise-grade custom CRM built with Yii2, Vue.js and MySQL—featuring Elasticsearch-powered search and Chart.js analytics. Code is under NDA.",
    long_description: "An NDA-protected enterprise CRM tailored to internal operations. Built on Yii2/MySQL with a Vue.js interface and Bootstrap CSS, it uses Elasticsearch for instant, faceted search and Chart.js dashboards for KPIs. Includes role-based access and audit trails; code and business details remain private under NDA.",
    image: new URL('@/assets/images/nfk.png', import.meta.url).href,
    technologies: ["Php", "Yii2", "ElasticSearch","Mysql", "Vue.js", "Chart.js", "Bootstrap CSS"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio built with Vue 3 and Bootsrap CSS.",
    long_description: "A lightweight personal site built with Vue 3, Vite and Bootstrap CSS. It features a responsive projects grid, project detail pages, a contact flow, lazy-loaded images and reusable Base components for consistent UI.",
    image: new URL('@/assets/images/portfolio.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/portfolio",
    technologies: ["Vue 3", "Bootstrap CSS", "Vite"]
  },
  {
    id: 3,
    title: "Job Board",
    description: "A Laravel job board with many filters and searching by salary, category and experience",
    long_description: "A Laravel job board focused on fast discovery: filter by salary, category and experience with server-side pagination and clean query scopes. Built with Tailwind CSS and Vite, backed by MySQl for persistence.",
    image: new URL('@/assets/images/job_board.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/job-board",
    technologies: ["Laravel", "Tailwind CSS", "Vite", "MySQl"]
  },
  {
    id: 4,
    title: "Movie World",
    description: "Case study for PHP Software Engineer at TravelStation",
    long_description: "A PHP/Symfony case study exploring a small movie catalog. Implements browsing, search, sorting and pagination with Bootstrap CSS styling, emphasizing a clear separation between controllers, services and reusable templates.",
    image: new URL('@/assets/images/movie_world.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/movie_world",
    technologies: ["Php", "Symfony", "Bootstrap CSS", "MySQl"]
  },
  {
    id: 5,
    title: "Digital Library - frontend",
    description: "Digital library frontend, part of my diploma thesis",
    long_description: "Vue.js frontend for a digital library (diploma thesis). Provides catalog browsing and search, language switching via i18n, and responsive layouts with Bootstrap CSS and accessible UI components.",
    image: new URL('@/assets/images/digital-lib-frontend.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/digital-lib-frontend",
    technologies: ["Vue.js", "Bootstrap CSS", "i18n"]
  },
  {
    id: 6,
    title: "Digital Library - Backend",
    description: "Digital library backend (REST API and Admin Panel), part of my diploma thesis",
    long_description: "Laravel backend for the digital library: a REST API and an admin panel built with Filament. Delivers CRUD endpoints and management screens for catalog entities with validation and MySQL persistence.",
    image: new URL('@/assets/images/digital-lib-bo.png', import.meta.url).href,
    link: "",
    github: "",
    technologies: ["Php","Laravel", "Filament", "MySQL"]
  },
  {
    id: 7,
    title: "Event Management",
    description: "A laravel REST API to serve events.",
    long_description: "A small Laravel REST API that serves event data. Supports CRUD operations, pagination and query parameters for date/category filters, returning clean JSON suitable for front-end consumption.",
    image: new URL('@/assets/images/event-manager.png', import.meta.url).href,
    link: "",
    github: "",
    technologies: ["Php","Laravel", "REST API"]
  },
  {
    id: 8,
    title: "Book Review",
    description: "Laravel book review with filters and searching",
    long_description: "A Laravel application for exploring and reviewing books. Includes search and filtering, relational models (books, authors, reviews) and MySQL persistence, with straightforward list and detail views.",
    image: new URL('@/assets/images/book_review.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/book-review",
    technologies: ["Php","Laravel", "MySQL"]
  }
];
