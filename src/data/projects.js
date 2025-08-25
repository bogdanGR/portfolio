export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with Vue 3 and Bootsrap CSS.",
    image: new URL('@/assets/images/portfolio.png', import.meta.url).href,
    link: "https://example-portfolio.com",
    github: "https://github.com/bogdanGR/portfolio",
    technologies: ["Vue 3", "Bootstrap CSS", "Vite"]
  },
  {
    id: 2,
    title: "Job Board",
    description: "A Laravel job board with many filters and searching by salary, category and experience",
    image: new URL('@/assets/images/job_board.png', import.meta.url).href,
    link: "https://example-portfolio.com",
    github: "https://github.com/bogdanGR/job-board",
    technologies: ["Laravel", "Tailwind CSS", "Vite", "MySQl"]
  },
  {
    id: 3,
    title: "Movie World",
    description: "Case study for PHP Software Engineer at TravelStation",
    image: new URL('@/assets/images/movie_world.png', import.meta.url).href,
    link: "https://example-portfolio.com",
    github: "https://github.com/bogdanGR/movie_world",
    technologies: ["Php", "Symfony", "Bootstrap CSS", "MySQl"]
  },
  {
    id: 4,
    title: "Digital Library - frontend",
    description: "Digital library frontend, part of my diploma thesis",
    image: new URL('@/assets/images/digital-lib-frontend.png', import.meta.url).href,
    link: "https://example-portfolio.com",
    github: "https://github.com/bogdanGR/digital-lib-frontend",
    technologies: ["Vue.js", "Bootstrap CSS", "i18n"]
  },
  {
    id: 4,
    title: "Digital Library - Backend",
    description: "Digital library backend (REST API and Admin Panel), part of my diploma thesis",
    image: new URL('@/assets/images/digital-lib-bo.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/digital-lib-backend",
    technologies: ["Php","Laravel", "Filament", "MySQL"]
  },
  {
    id: 5,
    title: "Event Management",
    description: "A laravel REST API to serve events.",
    image: new URL('@/assets/images/event-manager.png', import.meta.url).href,
    link: "",
    github: "https://github.com/bogdanGR/event-management",
    technologies: ["Php","Laravel", "REST API"]
  },
  {
    id: 6,
    title: "Book Review",
    description: "Laravel book review with filters and searching",
    image: new URL('@/assets/images/book_review.png', import.meta.url).href,
    link: "https://example-portfolio.com",
    github: "https://github.com/bogdanGR/book-review",
    technologies: ["Php","Laravel", "MySQL"]
  }
];
