import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/background-beams";

interface HeroProps {
  theme: string;
}

export function Hero({ theme }: HeroProps) {
  return (
    <BackgroundBeamsWithCollision>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
            >
              Transform Your Business with Cutting-Edge Software Solutions
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Boost efficiency, drive growth, and stay ahead of the competition with our tailored software services. From web and mobile apps to AI and cloud solutions, we&apos;ve got you covered.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                data-cal-namespace="30min"
                data-cal-link="mohitarora/30min"
                data-cal-config={`{"layout":"month_view","theme":"${theme}"}`}
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
              >
                Schedule a Free Consultation
              </Button>
              <a href="#services" className="text-sm font-semibold leading-6 text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200 transition-colors flex items-center">
                Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
}
