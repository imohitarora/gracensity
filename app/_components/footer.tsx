import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { data } from "@/lib/data";
import { ArrowRight, Facebook, Github, Linkedin, Twitter, Send } from "lucide-react";
import React, { useState } from 'react';

const iconMap = {
  Facebook,
  Twitter,
  Linkedin,
  Github,
};

export function Footer() {
  const { footer, company, navigation, solutions } = data;
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-2xl font-bold">{company.name}</h2>
            <p className="text-sm opacity-75">{company.description}</p>
            <div className="flex space-x-4">
              {footer.socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a key={link.name} href={link.href} className="hover:text-blue-300 transition-colors">
                    <span className="sr-only">{link.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.title}>
                  <a href={`#${solution.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-purple-300 transition-colors flex items-center group">
                    {solution.title}
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm hover:text-purple-300 transition-colors flex items-center group">
                    {item.name}
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get the latest on our innovative solutions</p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" required className="border dark:border-white/10" />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white" variant={"default"}><Send className="h-4 w-4" /></Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-white/10 text-center">
          <p className="text-sm opacity-75">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}