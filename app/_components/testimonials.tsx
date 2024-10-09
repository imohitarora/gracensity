import { FadeInWhenVisible } from "@/components/fade-in";
import { TestimonialCard } from "../../components/testimonial-card";

export function Testimonials() {
  return (
    <FadeInWhenVisible>
      <div id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What Our Clients Say</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-start sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
              {
                name: "David Patel",
                role: "CFO, FinCorp",
                image: "/testimonial4.jpg",
                quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
              },
              {
                name: "Sophia Lee",
                role: "CMO, MarketPro",
                image: "/testimonial5.jpg",
                quote: "Working with Gracensity has been a game-changer for our marketing efforts. Their analytics platform has provided invaluable insights.",
              },
              {
                name: "Alex Wong",
                role: "COO, LogiTech",
                image: "/testimonial6.jpg",
                quote: "LogiTech's partnership with Gracensity has been instrumental in our digital transformation. Their solutions are top-notch.",
              },
              {
                name: "Jessica Chen",
                role: "VP of Engineering, TechSolutions",
                image: "/testimonial7.jpg",
                quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
              },
              {
                name: "Elena Rodriguez",
                role: "CEO, HealthTech",
                image: "/testimonial8.jpg",
                quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
              },
              {
                name: "John Smith",
                role: "CTO, TechSolutions",
                image: "/testimonial9.jpg",
                quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
              },
            ].map((testimonial) => (
              // <div key={testimonial.name} className="group relative rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 shadow-sm ring-1 ring-gray-900/5 transition-transform transform hover:scale-105">
              //   <div className="flex items-center space-x-4">
              //     <Image className="h-12 w-12 rounded-full" src={testimonial.image} alt="" width={48} height={48} />
              //     <div>
              //       <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
              //       <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              //     </div>
              //   </div>
              //   <blockquote className="mt-4 text-left text-gray-700 dark:text-gray-300">
              //     <p>&quot;{testimonial.quote}&quot;</p>
              //   </blockquote>
              // </div>
              <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} image={testimonial.image} quote={testimonial.quote} />
            ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
