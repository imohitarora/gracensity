"use client";

import { useState, useEffect } from "react";
import { Menu, X, Check, Sun, Moon } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => (
  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200" aria-label="Toggle theme">
    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
  </button>
);

export default function DarkFreelancerPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const portfolioItems = [
    {
      title: "E-commerce Website",
      description: "A fully responsive online store built with React and Node.js",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand overhaul for a tech startup",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Mobile App UI/UX",
      description: "User interface design for a fitness tracking app",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Content Marketing Campaign",
      description: "Successful blog and social media campaign for a non-profit",
      imageUrl: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-200">
      {/* Refined Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition-all duration-300">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
                John Doe
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="rounded-md bg-purple-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
              >
                Get in touch
              </a>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className="flex md:hidden items-center space-x-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400" onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm" aria-hidden="true" />}

      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">John Doe</span>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                  Services
                </a>
                <a href="#portfolio" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                  Portfolio
                </a>
                <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section with BackgroundBeamsWithCollision */}
      <main>
        <BackgroundBeamsWithCollision>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">John Doe: Freelance Web Developer & Designer</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Crafting beautiful, functional websites and applications. Let&apos;s bring your digital vision to life.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#contact"
                    className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
                  >
                    Get in touch
                  </a>
                  <a href="#portfolio" className="text-sm font-semibold leading-6 text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200 transition-colors">
                    View my work <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        {/* Services section */}
        <div id="services" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Comprehensive Web Solutions</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                From concept to deployment, I offer end-to-end web development and design services to help bring your ideas to life.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {[
                  {
                    name: "Custom Web Development",
                    description: "Tailored websites and web applications built with cutting-edge technologies.",
                  },
                  {
                    name: "Responsive Design",
                    description: "Mobile-first designs that look great on all devices and screen sizes.",
                  },
                  {
                    name: "UI/UX Design",
                    description: "Intuitive and visually appealing interfaces that enhance user experience.",
                  },
                  {
                    name: "Performance Optimization",
                    description: "Speed up your website for better user engagement and SEO rankings.",
                  },
                ].map((service) => (
                  <div key={service.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                        <Check className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{service.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Portfolio section */}
        <div id="portfolio" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Portfolio</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Featured Projects</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">A showcase of my recent work, demonstrating my skills in web development and design.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {portfolioItems.map((item, index) => (
                <article key={index} className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img src={item.imageUrl} alt={item.title} className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <a
                        href={item.link}
                        className="relative z-10 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        <a href={item.link}>
                          <span className="absolute inset-0" />
                          {item.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div id="contact" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Contact Me</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">Let&apos;s discuss your project and how I can help bring your vision to life.</p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center">© {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
