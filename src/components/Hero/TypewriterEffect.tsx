import React, { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'DSA Enthusiast',
  'UI/UX Designer'
];

export function TypewriterEffect() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const shouldDelete = isDeleting;
    const timeout = shouldDelete ? 50 : 150;

    const timer = setTimeout(() => {
      setText(current => {
        if (shouldDelete) {
          if (current.length === 0) {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
            return '';
          }
          return current.slice(0, -1);
        }
        if (current.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return current;
        }
        return currentRole.slice(0, current.length + 1);
      });
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, roleIndex, isDeleting]);

  return (
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
      I'm a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{text}</span>
      <span className="animate-blink">|</span>
    </p>
  );
}