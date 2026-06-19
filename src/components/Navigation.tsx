import React, { useState } from "react";
import { Menu, X, Heart, Shield, Award, Phone } from "lucide-react";

interface NavigationProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Navigation({ currentTab, setTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programs", label: "Programs" },
    { id: "donate", label: "Donate" },
    { id: "volunteer", label: "Volunteer" },
    { id: "request", label: "Request Assistance" },
    { id: "news", label: "News & Events" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleTabClick = (id: string) => {
    setTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/65 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Brand Title */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleTabClick("home")}
              className="flex items-center gap-3.5 text-left group cursor-pointer animate-fade-in"
            >
              <div className="h-10 w-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-serif font-semibold text-lg shadow-sm transition-all group-hover:bg-emerald-950 group-hover:scale-102">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-emerald-950 font-sans group-hover:text-emerald-700 transition-colors leading-none">
                  GYFTS <span className="text-orange-500 italic font-serif">Rescue</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold font-mono mt-0.5">
                  Irving, Texas
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-150 cursor-pointer ${
                  currentTab === item.id
                    ? "bg-emerald-950/5 text-emerald-900 font-semibold border border-stone-200/40"
                    : "text-slate-500 hover:text-emerald-900 hover:bg-stone-100/60"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call To Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleTabClick("donate")}
              className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <Heart className="h-3.5 w-3.5 fill-white" />
              Donate Now
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-emerald-900 hover:bg-stone-50 focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-md animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                  currentTab === item.id
                    ? "bg-stone-50 text-emerald-900 font-semibold border-l-4 border-emerald-800"
                    : "text-slate-500 hover:text-emerald-900 hover:bg-stone-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-stone-100 flex flex-col gap-2.5 px-4">
              <button
                onClick={() => handleTabClick("donate")}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full font-semibold shadow-sm cursor-pointer"
              >
                <Heart className="h-4 w-4 fill-white" />
                Donate Now
              </button>
              <button
                onClick={() => handleTabClick("volunteer")}
                className="w-full flex items-center justify-center gap-2 bg-white text-emerald-800 border border-stone-200 px-4 py-3 rounded-full font-semibold hover:bg-stone-50 transition-colors shadow-xs cursor-pointer"
              >
                Volunteer
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
