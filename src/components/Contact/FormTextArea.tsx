import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export function FormTextArea({
  label,
  name,
  value,
  onChange,
  error,
  required
}: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={4}
        className={`w-full px-4 py-2 rounded-lg border ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 dark:focus:ring-indigo-400'
        } bg-white dark:bg-gray-700 focus:ring-2 outline-none transition-colors`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}