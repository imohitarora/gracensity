import { FadeInWhenVisible } from "@/components/fade-in";
import { Code, Database, Globe, LayoutGrid, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Crafting responsive and user-friendly websites tailored to your business needs.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile applications for iOS and Android.",
    icon: <LayoutGrid className="h-6 w-6" />,
  },
  {
    title: "Software Engineering",
    description: "Designing and developing custom software solutions to streamline your operations.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Database Management",
    description: "Optimizing and managing databases to ensure data integrity and performance.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "AI and Machine Learning",
    description: "Leveraging AI and ML technologies to enhance your products and services.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
];

export function Services() {
  return (
    <FadeInWhenVisible>
      <div id="services" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Comprehensive Software Solutions</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We offer a wide range of software services to meet all your business needs, from development to deployment and beyond.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">{service.icon}</div>
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <a href="#" className="text-sm font-semibold leading-6 text-purple-600 dark:text-purple-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
