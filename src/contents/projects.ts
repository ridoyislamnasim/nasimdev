import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/e-commerce-website.png',
        images: [
          '/projects/e-commerce-website.png',
          '/projects/task-manager.webp',
           '/projects/portfolio-website.jpg',
        ]
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/task-manager.webp',
        images: [
          '/projects/task-manager.webp',
          '/projects/task-manager-1.png',
          '/projects/task-manager-2.png'
        ]
      },
      {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my projects and skills.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/portfolio-website.jpg',
        images: [
          '/projects/portfolio-website.jpg',
          '/projects/portfolio-1.jpg',
          '/projects/portfolio-2.jpg',
          '/projects/portfolio-3.jpg'
        ]
      },
      {
        title: 'Blog Platform',
        description: 'A blogging platform with user authentication and markdown support.',
        technologies: ['Gatsby', 'GraphQL', 'Contentful'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/blog-website.jpeg',
        images: [
          '/projects/blog-website.jpeg',
          '/projects/blog-1.jpg',
          '/projects/blog-2.jpg'
        ]
      },
      {
        title: 'Weather App',
        description: 'A weather application that provides real-time weather updates.',
        technologies: ['React', 'OpenWeatherMap API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/weather-app.png',
        images: [
          '/projects/weather-app.png',
          '/projects/weather-1.png',
          '/projects/weather-2.png'
        ]
      },
      {
        title: 'Chat Application',
        description: 'A real-time chat application using WebSocket technology.',
        technologies: ['React', 'Node.js', 'Socket.io'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/chat-app.png',
        images: [
          '/projects/chat-app.png',
          '/projects/chat-1.png',
          '/projects/chat-2.png',
          '/projects/chat-3.png'
        ]
      },
      {
        title: 'Recipe Finder',
        description: 'A recipe search application using the Edamam API.',
        technologies: ['React', 'Edamam API'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/recipe-finder.png',
        images: [
          '/projects/recipe-finder.png',
          '/projects/recipe-1.png',
          '/projects/recipe-2.png'
        ]
      },
      {
        title: 'Expense Tracker',
        description: 'A personal finance tracker to manage expenses and income.',
        technologies: ['React', 'Firebase'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/expense-tracker.webp',
        images: [
          '/projects/expense-tracker.webp',
          '/projects/expense-1.png',
          '/projects/expense-2.png',
          '/projects/expense-3.png'
        ]
      }
  ];