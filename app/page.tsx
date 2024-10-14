"use client";

import { Header } from "@/app/_components/header";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { CallToAction } from "./_components/call-to-action";
import { CaseStudies } from "./_components/case-studies";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { MobileMenu } from "./_components/mobile-menu";
import { Solutions } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { WhyChooseUs } from "./_components/why-us";

export default function SoftwareServicesWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const initCal = async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    initCal();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#111827_1px)]
                [background-size:16px_16px] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-200">
      <Header theme={theme} toggleTheme={toggleTheme} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero theme={theme} />
        <Solutions />
        <WhyChooseUs />
        <Testimonials />
        <CaseStudies />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
