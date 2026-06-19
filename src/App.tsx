/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import HomeTab from "./components/HomeTab";
import AboutTab from "./components/AboutTab";
import ProgramsTab from "./components/ProgramsTab";
import DonateTab from "./components/DonateTab";
import VolunteerTab from "./components/VolunteerTab";
import RequestTab from "./components/RequestTab";
import NewsTab from "./components/NewsTab";
import ContactTab from "./components/ContactTab";
import { ArrowUp, Heart } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render active tab view content
  const renderTabContent = () => {
    switch (currentTab) {
      case "home":
        return <HomeTab setTab={setCurrentTab} />;
      case "about":
        return <AboutTab />;
      case "programs":
        return <ProgramsTab setTab={setCurrentTab} />;
      case "donate":
        return <DonateTab />;
      case "volunteer":
        return <VolunteerTab />;
      case "request":
        return <RequestTab />;
      case "news":
        return <NewsTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <HomeTab setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900 selection:font-medium">
      {/* Informational Call alert header banner */}
      <div className="bg-emerald-900 border-b border-emerald-800 text-white py-2 text-center text-[11px] sm:text-xs font-semibold select-none flex items-center justify-center gap-1.5 px-4">
        <Heart className="h-4 w-4 text-orange-400 fill-orange-400 animate-pulse" />
        Sponsor weekly healthy meal boxes for Irving seniors.
        <button
          onClick={() => {
            setCurrentTab("donate");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="underline hover:text-orange-300 font-bold ml-1 cursor-pointer"
        >
          Check Impact Calculator &rarr;
        </button>
      </div>

      {/* Navigation */}
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />

      {/* Primary Tab Contents Container */}
      <main className="flex-1">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <Footer setTab={setCurrentTab} />

      {/* Floating Chatbot */}
      <ChatbotWidget />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 h-12 w-12 bg-white hover:bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center border border-emerald-100 shadow-xl hover:scale-110 active:scale-95 transition-all outline-none cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

