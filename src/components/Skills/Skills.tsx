import React from 'react';
import { Code2, Layout, Terminal, Palette } from 'lucide-react';
import { TechStack } from './TechStack';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    category: 'Programming',
    icon: Code2,
    items: ['JavaScript', 'Python', 'Data Structures', 'Algorithms']
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'VS Code', 'npm/yarn', 'Webpack', 'GitHub']
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.category} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <TechStack />
      </div>
    </section>
  );
}