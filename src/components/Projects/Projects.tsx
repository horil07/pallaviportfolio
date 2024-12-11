import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Tic Tac Toe Game',
    description: 'Interactive Tic Tac Toe game with score tracking and animations',
    image: 'https://images.unsplash.com/photo-1611891487122-207579d67d98?auto=format&fit=crop&w=1600&h=900&q=80',
    tags: ['React', 'TypeScript', 'GSAP', 'CSS Grid'],
    github: 'https://spontaneous-speculoos-83efc8.netlify.app/',
    live: 'https://spontaneous-speculoos-83efc8.netlify.app/'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1600&h=900&q=80',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/pallavigithubrit/taskmanagementapp/tree/main',
    live: 'https://papaya-bunny-b0a63f.netlify.app/'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with dark mode and animations',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1600&h=900&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'GSAP'],
    github: 'https://github.com/pallavigithubrit/portfolio',
    live: 'https://portfoliopallavi.vercel.app/'
  },
  {
    title: 'Food Ordering Website',
    description: 'A responsive food delivery platform with real-time order tracking',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&h=900&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/pallavigithubrit/foodordering',
    live: 'https://stellular-crumble-28fcc7.netlify.app/'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}