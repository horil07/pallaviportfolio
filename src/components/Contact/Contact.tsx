import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Toaster } from 'react-hot-toast';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">sahnipallavi771@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 96935-58462</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">New Delhi, India</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </section>
  );
}