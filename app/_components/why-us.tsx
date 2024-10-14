import { data } from "@/lib/data";
import { Rocket, Sliders, TrendingUp } from "lucide-react";
import { FadeInWhenVisible } from "@/components/fade-in";

const iconMap = {
  Rocket,
  Sliders,
  TrendingUp,
};

export function WhyChooseUs() {
  const { whyChooseUs } = data;

  return (
    <FadeInWhenVisible>
      <div id="why-choose-us" className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#111827_1px)]
                [background-size:16px_16px] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">{data.whyUs.title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{data.whyUs.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {data.whyUs.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <div key={item.title} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {item.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                      <p className="flex-auto">{item.description}</p>
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
