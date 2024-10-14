import { data } from "@/lib/data";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  Facebook,
  Twitter,
  Linkedin,
  Github,
};

export function Footer() {
  const { footer } = data;

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">{footer.copyright}</p>
          </div>
          <div className="flex space-x-6">
            {footer.socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{link.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}