import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Frontend Developer with a keen eye for creating beautiful and functional user interfaces. With a strong foundation in modern web technologies and a deep understanding of user experience principles, I strive to build applications that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey in tech has been driven by curiosity and a constant desire to learn. I combine my technical skills with creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Crafting responsive and intuitive user interfaces</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">DSA</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Problem-solving with optimal solutions</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">UI/UX</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Designing user-centered experiences</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Continuously expanding knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}