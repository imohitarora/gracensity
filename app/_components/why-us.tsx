import { Users, Zap, Heart } from "lucide-react";
import { FadeInWhenVisible } from "@/components/fade-in";

export function WhyChooseUs() {
  return (
    <FadeInWhenVisible>
      <div id="why-choose-us" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Expertise You Can Trust</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              With years of experience and a team of skilled professionals, we deliver high-quality software solutions tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Experienced Team",
                  description: "Our team of experts has years of experience in delivering top-notch software solutions across various industries.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Cutting-edge Technology",
                  description: "We stay up-to-date with the latest technologies and best practices to ensure your project is built with the most efficient tools.",
                  icon: <Zap className="h-6 w-6" />,
                },
                {
                  title: "Client-focused Approach",
                  description: "We prioritize your needs and work closely with you throughout the development process to ensure your satisfaction.",
                  icon: <Heart className="h-6 w-6" />,
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">{item.icon}</div>
                    {item.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{item.description}</p>
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
