import { FadeInWhenVisible } from "@/components/fade-in";
import { data } from "@/lib/data";

export function CallToAction() {
  return (
    <FadeInWhenVisible>
      <div className="bg-purple-700 dark:bg-purple-900">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">{data.callToAction.title}</span>
            <span className="block text-purple-300">{data.callToAction.description}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-500 px-5 py-3 text-base font-medium text-white hover:bg-purple-400">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
