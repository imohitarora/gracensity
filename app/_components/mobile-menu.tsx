import { X } from "lucide-react";
import React from "react";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
  return (
    <>
      {mobileMenuOpen && <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm" aria-hidden="true" />}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Gracensity</span>
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                  Services
                </a>
                <a href="#portfolio" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
