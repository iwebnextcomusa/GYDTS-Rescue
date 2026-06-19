import React, { useState } from "react";
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsLetterEmail.trim()) {
      setSignupSuccess(true);
      setNewsLetterEmail("");
      setTimeout(() => setSignupSuccess(false), 5000);
    }
  };

  const handleTabClick = (tab: string) => {
    setTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                G
              </div>
              <span className="font-bold text-xl tracking-tight text-white block">
                GYFTS <span className="text-orange-400">Rescue</span>
              </span>
            </div>
            <p className="text-emerald-200/70 text-sm leading-relaxed mb-6">
              Fostering hope, fighting hunger, and strengthening communities in Irving, Texas. We provide a safety net with dignity and care for families.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="h-9 w-9 bg-emerald-900 hover:bg-orange-500 text-emerald-200 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="h-9 w-9 bg-emerald-900 hover:bg-orange-500 text-emerald-200 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="h-9 w-9 bg-emerald-900 hover:bg-orange-500 text-emerald-200 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm">
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-emerald-200/80">
              <li>
                <button onClick={() => handleTabClick("home")} className="hover:text-white transition-colors cursor-pointer text-left">Home</button>
              </li>
              <li>
                <button onClick={() => handleTabClick("about")} className="hover:text-white transition-colors cursor-pointer text-left">About Us</button>
              </li>
              <li>
                <button onClick={() => handleTabClick("programs")} className="hover:text-white transition-colors cursor-pointer text-left">Programs & Services</button>
              </li>
              <li>
                <button onClick={() => handleTabClick("donate")} className="hover:text-white transition-colors cursor-pointer text-left">Donate Now</button>
              </li>
              <li>
                <button onClick={() => handleTabClick("volunteer")} className="hover:text-white transition-colors cursor-pointer text-left">Volunteer Application</button>
              </li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">Get Support</h4>
            <ul className="space-y-4 text-sm text-emerald-200/80">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-orange-400 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Phone Support</span>
                  <a href="tel:4696396347" className="hover:text-orange-400 transition-colors">(469) 639-6347</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-orange-400 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Email</span>
                  <a href="mailto:stensondavid@hotmail.com" className="hover:text-orange-400 transition-colors">stensondavid@hotmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Location</span>
                  <span className="text-emerald-200/60 leading-relaxed block">Irving, Texas, United States</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-emerald-200/70 text-sm leading-relaxed mb-4">
              Sign up for newsletter announcements, pantry metrics updates, and upcoming volunteer opportunities.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={newsLetterEmail}
                onChange={(e) => setNewsLetterEmail(e.target.value)}
                className="w-full bg-emerald-900 border border-emerald-800 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-emerald-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2.5 font-semibold text-sm transition-all hover:scale-102 active:scale-97 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {signupSuccess && (
              <p className="text-orange-400 text-xs mt-2 transition-all">
                Thank you! You have subscribed to GYFTS Rescue news alerts.
              </p>
            )}
          </div>
        </div>

        {/* Developed by and Center-aligned Footer */}
        <div className="mt-16 pt-8 border-t border-emerald-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-emerald-200/50 text-xs text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} GYFTS Rescue (gyftsrescue.org). All rights reserved.
          </div>
          
          <div className="text-sm font-medium tracking-wide">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold underline decoration-orange-400/30">iWebNext</a>
          </div>

          <div className="flex gap-4">
            <button onClick={() => handleTabClick("request")} className="hover:text-emerald-200 transition-colors cursor-pointer">Assistance Details</button>
            <span>&bull;</span>
            <button onClick={() => handleTabClick("contact")} className="hover:text-emerald-200 transition-colors cursor-pointer">Contact Route</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
