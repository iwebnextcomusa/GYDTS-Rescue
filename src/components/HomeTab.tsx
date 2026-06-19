import React from "react";
import { STATS, PROGRAMS, TESTIMONIALS } from "../data";
import { ArrowRight, Heart, HeartPulse, ShieldAlert, CheckCircle, Apple, Home, Users, TrendingUp } from "lucide-react";
import Interactive3D from "./Interactive3D";

interface HomeTabProps {
  setTab: (tab: string) => void;
}

export default function HomeTab({ setTab }: HomeTabProps) {
  // Map icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Apple": return <Apple className="h-5 w-5 text-orange-500" />;
      case "Home": return <Home className="h-5 w-5 text-orange-500" />;
      case "Users": return <Users className="h-5 w-5 text-orange-500" />;
      case "TrendingUp": return <TrendingUp className="h-5 w-5 text-orange-500" />;
      default: return <Apple className="h-5 w-5 text-orange-500" />;
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#FDFCFB] py-16 lg:py-24 border-b border-stone-200/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200/60 select-none animate-fade-in mb-2 font-mono">
                Providing Food & Dignity in Irving, Texas
              </span>
              
              <h1 className="text-5xl sm:text-6xl font-serif text-emerald-950 leading-[1.12] tracking-tight">
                Fighting <span className="italic text-orange-505 text-orange-550 italic text-orange-500 underline decoration-emerald-200 underline-offset-8">Hunger</span>,<br />
                Strengthening Communities.
              </h1>

              <p className="text-slate-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                GYFTS Rescue is a nonprofit organization based in Irving, Texas dedicated to ensuring that families, children and vulnerable seniors in crisis have direct, straightforward access to nutritive food support.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setTab("donate")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Heart className="h-4.5 w-4.5 fill-white" />
                  Donate food & Funds
                </button>
                <button
                  onClick={() => setTab("volunteer")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-emerald-900 border border-stone-300 font-semibold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  Join as Volunteer
                </button>
                <button
                  onClick={() => setTab("request")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-800 text-white hover:bg-emerald-900 font-semibold px-8 py-3.5 rounded-full shadow-md transition-colors cursor-pointer"
                >
                  Request Assistance
                </button>
              </div>

              {/* 50+ new volunteers note */}
              <div className="pt-4 flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-3 select-none">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FDFCFB] bg-slate-200 flex items-center justify-center text-[10px] font-bold font-mono">JD</div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#FDFCFB] bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-800 font-mono">ST</div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#FDFCFB] bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-850 font-mono">+42</div>
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-800 underline underline-offset-4 decoration-orange-350 decoration-orange-350/50 decoration-orange-300">50+ local neighbors</span> signed up to support this week.
                </p>
              </div>
            </div>

            {/* 3D Visual Section */}
            <div className="lg:col-span-5 w-full">
              <Interactive3D />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Success Metrics & Impact Section */}
      <section className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Our Real Irving Footprint</span>
            <p className="text-3xl sm:text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
              Immediate Relief, Local Trust
            </p>
            <p className="text-slate-500 mt-4 leading-relaxed max-w-xl mx-auto text-sm font-sans">
              We stand together with local donors, supermarkets, and volunteers to build an actual network of safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md hover:border-stone-300 transition-all text-center group"
              >
                <div className="mx-auto h-11 w-11 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 group-hover:scale-105 transition-transform">
                  {getIcon(stat.iconName)}
                </div>
                <div className="text-4xl font-serif font-semibold text-emerald-950 mt-5 tracking-tight">{stat.value}</div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mt-2 font-mono">{stat.label}</h4>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed font-sans">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brief Mission Statement Overlay */}
      <section className="bg-emerald-900 overflow-hidden text-white py-20 relative border-b border-emerald-950">
        <div className="absolute top-0 right-0 w-92 h-92 bg-emerald-800 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-orange-400 font-extrabold uppercase tracking-widest text-[11px] font-mono">Our Core Pledge</h3>
              <p className="text-2xl sm:text-3xl font-serif leading-relaxed text-emerald-50 italic">
                &ldquo;To provide immediate nutrition, respect, and warmth to every neighbor in Irving. We believe food is a fundamental human right, and our rescue services are delivered with profound respect.&rdquo;
              </p>
              <span className="block text-sm text-emerald-300 font-medium tracking-wider font-mono uppercase pt-4">
                &mdash; David Stenson, Director of GYFTS Rescue
              </span>
            </div>
            
            <div className="lg:col-span-4 bg-[#113a29] rounded-3xl p-8 border border-emerald-800 text-left space-y-5 shadow-lg">
              <div className="w-10 h-10 bg-emerald-850/50 rounded-xl flex items-center justify-center">
                <ShieldAlert className="h-5 w-5 text-orange-400" />
              </div>
              <h4 className="font-serif text-xl font-medium text-emerald-100">Need support?</h4>
              <p className="text-emerald-100/70 text-xs leading-relaxed font-sans">
                Our food distribution is direct & confidential. Apply online in minutes.
              </p>
              <button
                onClick={() => setTab("request")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Apply Online Now <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Programs (Grid) */}
      <section className="py-20 bg-[#FDFCFB] border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Our Services</span>
              <p className="text-3xl sm:text-4xl font-serif text-emerald-950 mt-2 leading-tight">
                Featured Hunger Relief Initiatives
              </p>
            </div>
            <button
              onClick={() => setTab("programs")}
              className="text-emerald-800 hover:text-emerald-950 font-bold text-sm inline-flex items-center gap-1 cursor-pointer group animate-fade-in"
            >
              Learn about all programs <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col bg-white rounded-3xl border border-stone-200/50 overflow-hidden shadow-xs hover:border-stone-300 transition-all group"
              >
                <div className="relative h-50 overflow-hidden bg-emerald-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute bottom-4 left-4 bg-emerald-950 text-emerald-250 text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm select-none">
                    {prog.beneficiaries}
                  </span>
                </div>
                
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-emerald-950 group-hover:text-emerald-850 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed font-sans">
                      {prog.shortDesc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => setTab("programs")}
                      className="text-emerald-800 hover:text-emerald-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      Read full program details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonial Carousel/Featured Widget */}
      <section className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-8 w-8 text-orange-500 fill-orange-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono mb-2">Voices of our neighbors</h2>
          <p className="text-3xl sm:text-4xl font-serif text-emerald-950 mb-16">Witness of Relief & Connection</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#FDFCFB] rounded-3xl p-8 border border-stone-200/60 shadow-xs relative text-left flex flex-col justify-between space-y-8 animate-scale-up-fade"
              >
                <p className="text-slate-600 text-sm leading-relaxed font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <h4 className="font-bold text-sm text-emerald-950">{t.author}</h4>
                  <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider mt-1">{t.role} &bull; {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Banner */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h4 className="font-serif text-3xl sm:text-4xl font-medium text-emerald-950 leading-tight">We are located here in Irving, Texas</h4>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm">
            Have questions about volunteer hours, food cargo coordination, or tax exemptions? Contact our coordination desk.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
            <a
              href="tel:4696396347"
              className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 border border-emerald-900/10 text-white font-semibold py-3.5 px-8 rounded-full shadow-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer font-sans"
            >
              Call: (469) 639-6347
            </a>
            <a
              href="mailto:stensondavid@hotmail.com"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-8 rounded-full shadow-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer font-sans"
            >
              Email Coordinator
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
