import { FadeInWhenVisible } from "@/components/fade-in";
import { data } from "@/lib/data";
import { Code, Database, Globe, GraduationCap, Briefcase, FileText, ShoppingBag, Settings } from "lucide-react";

const iconMap = {
  GraduationCap,
  Briefcase,
  FileText,
  ShoppingBag,
  Settings,
  Globe,
  Code,
  Database,
};

export function Solutions() {
  const { solutions } = data;

  return (
    <FadeInWhenVisible>
      <div id="solutions" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">{data.solutionKits.title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{data.solutionKits.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {data.solutionKits.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = iconMap[solution.icon as keyof typeof iconMap];
                return (
                  <div key={solution.title} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {solution.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                      <p className="flex-auto">{solution.description}</p>
                      <p className="mt-6">
                        <a href="#" className="text-sm font-semibold leading-6 text-purple-600 dark:text-purple-400">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
