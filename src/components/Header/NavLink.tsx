import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
    >
      {children}
    </a>
  );
}