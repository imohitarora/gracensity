import { FadeInWhenVisible } from "@/components/fade-in";
import { TestimonialCard } from "@/components/testimonial-card";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO, DataDrive",
    image: "/testimonial1.jpg",
    quote: "The AI-powered system Gracensity developed for us has increased our efficiency by 40%. They're true innovators in the field.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcoTech",
    image: "/testimonial2.jpg",
    quote: "From concept to execution, Gracensity delivered beyond our expectations. Their solutions have been instrumental in our growth.",
  },
  {
    name: "David Patel",
    role: "CFO, FinCorp",
    image: "/testimonial3.jpg",
    quote: "Gracensity's team is highly skilled and professional. Their cloud migration services have saved us time and resources.",
  },
  {
    name: "Sophia Lee",
    role: "CMO, MarketPro",
    image: "/testimonial4.jpg",
    quote: "Working with Gracensity has been a game-changer for our marketing efforts. Their analytics platform has provided invaluable insights.",
  },
  {
    name: "John Smith",
    role: "CTO, TechSolutions",
    image: "/testimonial5.jpg",
    quote: "Gracensity's cybersecurity measures have fortified our systems, giving us peace of mind in an increasingly digital world.",
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
    quote: "Gracensity's innovative approach to problem-solving has helped us overcome complex technical challenges.",
  },
  {
    name: "Elena Rodriguez",
    role: "CEO, HealthTech",
    image: "/testimonial8.jpg",
    quote: "The healthcare solutions provided by Gracensity have significantly improved our patient care and operational efficiency.",
  },
];

export function Testimonials() {
  const halfLength = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, halfLength);
  const secondRow = testimonials.slice(halfLength);

  return (
    <FadeInWhenVisible>
      <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What Our Clients Say</p>
          </div>
          <div className="space-y-12">
            <Marquee gradient={false} speed={30} pauseOnHover className="py-4">
              <div className="flex space-x-8 px-4">
                {firstRow.map((testimonial) => (
                  <div key={testimonial.name} className="w-[350px] flex-shrink-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </Marquee>
            <Marquee gradient={false} speed={30} pauseOnHover direction="right" className="py-4">
              <div className="flex space-x-8 px-4">
                {secondRow.map((testimonial) => (
                  <div key={testimonial.name} className="w-[350px] flex-shrink-0">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}