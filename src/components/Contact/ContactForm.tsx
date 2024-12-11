import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
    >
      <FormInput
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <FormInput
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <FormInput
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
      />

      <FormTextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                 transition-colors flex items-center justify-center space-x-2
                 disabled:opacity-70 disabled:cursor-not-allowed
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}