import { FadeInWhenVisible } from "@/components/fade-in";
import { data } from "@/lib/data";

export function CaseStudies() {
  const { caseStudies } = data;

  return (
    <FadeInWhenVisible>
      <div id="case-studies" className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#111827_1px)]
                [background-size:16px_16px] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">{data.caseStudiesSection.title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{data.caseStudiesSection.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {data.caseStudiesSection.description}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <video
                    src={study.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none mx-auto h-50 w-full object-cover object-top rounded-t-lg"
                    style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Rapid Deployment
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
