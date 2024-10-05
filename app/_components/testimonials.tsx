import { FadeInWhenVisible } from "@/components/fade-in";
import Image from "next/image";

export function Testimonials() {
  return (
    <FadeInWhenVisible>
      <div id="testimonials" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What Our Clients Say</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechInnovate",
                image: "/testimonial1.jpg",
                quote: "Gracensity's software solutions have revolutionized our business processes. Their expertise and dedication are unmatched.",
              },
              {
                name: "Michael Chen",
                role: "CTO, DataDrive",
                image: "/testimonial2.jpg",
                quote: "The AI-powered system Gracensity developed for us has increased our efficiency by 40%. They're true innovators in the field.",
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, EcoTech",
                image: "/testimonial3.jpg",
                quote: "From concept to execution, Gracensity delivered beyond our expectations. Their solutions have been instrumental in our growth.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 shadow-sm ring-1 ring-gray-900/5">
                <Image className="mx-auto h-16 w-16 rounded-full" src={testimonial.image} alt="" width={64} height={64} />
                <blockquote className="mt-6 text-gray-700 dark:text-gray-300">
                  <p>&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
