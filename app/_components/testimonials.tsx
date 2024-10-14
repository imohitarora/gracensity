import { FadeInWhenVisible } from "@/components/fade-in";
import { InfiniteMovingCards } from "@/components/infinite-cards";
import { data } from "@/lib/data";

const testimonials = data.testimonials.map(testimonial => ({
  ...testimonial,
  title: testimonial.role,
}));

export function Testimonials() {
  return (
    <FadeInWhenVisible>
      <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">{data.testimonialsSection.title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{data.testimonialsSection.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {data.testimonialsSection.description}
            </p>
          </div>
          <div className="space-y-12">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
