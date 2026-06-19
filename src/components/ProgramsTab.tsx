import React from "react";
import { PROGRAMS } from "../data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProgramsTabProps {
  setTab: (tab: string) => void;
}

export default function ProgramsTab({ setTab }: ProgramsTabProps) {
  // Static deliverables list to show real programmatic output
  const getDeliverables = (id: string) => {
    switch (id) {
      case "pantry":
        return ["Fresh lettuce, apples, and peppers", "Canned black beans, lentils, and corn", "Eggs, butter, and cow/almond milk", "Gluten-free alternatives"];
      case "emergency":
        return ["Muted ready-to-eat stews & hot soups", "Foil blankets & immediate clean bottled water", "Infant formulas and milk packets", "Flashlight & emergency power pack access"];
      case "drives":
        return ["Custom GYFTS steel drop bins", "Pantry item checklists for local primary schools", "Commercial packaging containers", "Weekly volunteer dispatch pickup"];
      case "seniors":
        return ["Low-sodium soft canned recipes", "Homebound drop schedules & medicine companions", "Pre-chopped salad kits", "Vital companionship check-ins"];
      case "families":
        return ["Infant diaper crates (newborn to size 6)", "Child-friendly snacks & lunch boxes", "Toothbrushes, hygiene pastes, and soap sets", "Newborn infant formulas for local single mothers"];
      case "education":
        return ["Nutrition counting lists", "Low-budget cooking demonstrations", "Safe storage techniques for staples", "Pantry meal preparation guides"];
      default:
        return ["Staples food boxes", "Nutrient counseling", "Delivery logistics check-ins"];
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Our Services</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            Programs & Hunger Initiatives
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            We operate structured relief services targeting child development, senior citizen mobility, immediate disaster restoration, and nutritional budget educational courses throughout Irving, Texas.
          </p>
        </div>

        {/* 6 Grid of detailed programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-sans">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all hover:border-stone-300 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-64 md:h-auto bg-stone-100 relative shrink-0">
                <img
                  src={prog.image}
                  alt={prog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-950 text-emerald-250 text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {prog.beneficiaries}
                </span>
              </div>

              <div className="md:w-3/5 p-7 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-emerald-950 hover:text-emerald-850 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider font-mono mt-1 text-orange-505 text-orange-500 uppercase">
                    Active DFW Program
                  </p>
                  
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {prog.fullDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-3">
                    <h5 className="font-semibold text-xs tracking-wider uppercase text-slate-400 font-mono">Deliverables:</h5>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {getDeliverables(prog.id).map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action triggers inside programs */}
                <div className="pt-4 border-t border-stone-150 border-stone-100 flex flex-wrap gap-2">
                  <button
                    onClick={() => setTab("request")}
                    className="bg-stone-50 hover:bg-stone-100 text-emerald-900 border border-stone-200 text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Request Help
                  </button>
                  <button
                    onClick={() => setTab("volunteer")}
                    className="bg-orange-50 hover:bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Volunteer to Support
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact Summary Bar */}
        <div className="mt-20 bg-emerald-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_40%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 font-sans">
              <span className="bg-orange-500 text-white text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                Urgent Seasonal Drive
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal leading-tight">
                Our Summer Irving Fresh Food Drive is currently active!
              </h3>
              <p className="text-emerald-100/75 text-sm leading-relaxed max-w-2xl font-sans">
                We are actively securing fresh tomatoes, bell peppers, raw block cheese, and baby formulas. Help us load our pantry delivery vans or sponsor the transit costs to complete weekly elderly home visits.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setTab("donate")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3.5 py-4 rounded-full text-center text-sm shadow-sm hover:shadow-md transition-all cursor-pointer font-sans"
              >
                Sponsor grocery bags
              </button>
              <button
                onClick={() => setTab("volunteer")}
                className="w-full bg-emerald-950/80 border border-emerald-800/80 hover:bg-emerald-800 text-white font-semibold p-3.5 py-4 rounded-full text-center text-sm transition-all cursor-pointer font-sans"
              >
                Join Delivery Driving Crew
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
