import { motion, useScroll } from "framer-motion";
import { Activity, Menu, Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => (
  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200" aria-label="Toggle theme">
    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
  </button>
);

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ theme, toggleTheme, setMobileMenuOpen }: HeaderProps) {
  const { scrollY } = useScroll();

  return (
    <motion.header
      style={{
        opacity: scrollY.get() > 50 ? 0.9 : 1,
        backdropFilter: `blur(${scrollY.get() > 50 ? 8 : 0}px)`,
      }}
      className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity size={28} className="text-purple-600 dark:text-purple-400" />
            <a href="#" className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
              Gracensity
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Portfolio
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
