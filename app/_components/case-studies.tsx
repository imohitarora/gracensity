import { FadeInWhenVisible } from "@/components/fade-in";
import Image from "next/image";

export function CaseStudies() {
  return (
    <FadeInWhenVisible>
      <div id="case-studies" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Case Studies</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Success Stories</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover how we&apos;ve helped businesses across various industries achieve their goals through innovative software solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform Overhaul",
                description: "Redesigned and optimized a major e-commerce platform, resulting in a 40% increase in conversions and improved user experience.",
                image: "/case-study-1.jpg",
              },
              {
                title: "AI-Powered Customer Service Bot",
                description: "Developed an AI chatbot for a telecommunications company, reducing customer service costs by 30% and improving response times.",
                image: "/case-study-2.jpg",
              },
              {
                title: "Cloud Migration for Financial Services",
                description: "Successfully migrated a large financial institution's infrastructure to the cloud, enhancing security and reducing operational costs by 25%.",
                image: "/case-study-3.jpg",
              },
            ].map((study) => (
              <article key={study.title} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" 
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Case Study
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {study.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">{study.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
