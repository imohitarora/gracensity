"use client";

import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Header } from "@/app/_components/header";
import { MobileMenu } from "./_components/mobile-menu";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { WhyChooseUs } from "./_components/why-us";
import { Testimonials } from "./_components/testimonials";
import { CaseStudies } from "./_components/case-studies";
import { ContactForm } from "@/components/contact-form";
import { CallToAction } from "./_components/call-to-action";
import { Footer } from "./_components/footer";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-200">
      <Header theme={theme} toggleTheme={toggleTheme} setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero theme={theme} />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CaseStudies />
        <ContactForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
