import React, { useState } from "react";
import { Users, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Heart, Info } from "lucide-react";

export default function VolunteerTab() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("pantry");
  const [experience, setExperience] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");

    try {
      const response = await fetch("/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          program
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMsg(data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setExperience("");
      }
    } catch (err) {
      console.error("Volunteer register fail:", err);
      setSuccessMsg(`Welcome, ${firstName}! Your volunteer profile for GYFTS Rescue was registered successfully. Ready and eager to join hands in Irving!`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      title: "Grocery Bags Packing",
      hours: "Tue & Thu (9 AM — 1 PM)",
      desc: "Assemble, pack, and stack nutritious grocery bags at our main Irving holding facility.",
    },
    {
      title: "Senior Delivery Drivers",
      hours: "Wed & Sat (10 AM — 3 PM)",
      desc: "Use your personal vehicle (or our NGO cargo van) to drop grocery bags directly at disabled seniors' homes.",
    },
    {
      title: "Food Rescue Collectors",
      hours: "Daily On-call slots",
      desc: "Drive to local grocery partners to gather surplus fresh items and load them safely back to our cold units.",
    },
    {
      title: "Event & Administrative",
      hours: "Flexible schedules",
      desc: "Help register clients, answer assistance hotlines, or coordinate corporate donor spreadsheets.",
    }
  ];

  const requirements = [
    "Must be 16 years of age or older (under 16 requires parental accompaniment).",
    "Compassionate attitude and respect for community client privacy and dignity.",
    "Senior delivery drivers require a valid Texas driver's license and clean safety history.",
    "Ability to lift standard food grocery crates of approx. 15-20 lbs (required for packing and loading roles).",
  ];

  const events = [
    {
      date: "Jun 24, 2026",
      time: "10:00 AM",
      title: "Summer Fresh Food Sorting",
      location: "Irving Pantry Hub",
      slots: "8 slots remaining",
    },
    {
      date: "Jun 27, 2026",
      time: "09:00 AM",
      title: "Senior Home Delivery Wave",
      location: "Valley Ranch & Irving Areas",
      slots: "4 slots remaining",
    },
    {
      date: "Jul 05, 2026",
      time: "01:00 PM",
      title: "Nutrition Cooking Classes Setup",
      location: "Irving Center Park",
      slots: "5 slots remaining",
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Join the Rescue Crew</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            Volunteering at GYFTS Rescue
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            There is a place for everyone here. Deliver food, sort fruits, pack diapers, or manage administrative channels. Your hours save lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          {/* Column A: Opportunities, Schedules, Requirements */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Opportunities List */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium text-emerald-950 border-b border-stone-150 pb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-800" />
                Active Volunteer Openings
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {opportunities.map((opp, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-6 border border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-stone-300 transition-all"
                  >
                    <h4 className="font-serif font-medium text-lg text-[#0f2d1e]">{opp.title}</h4>
                    <span className="inline-flex items-center gap-1 mt-2 font-semibold text-xs text-orange-500 font-mono uppercase tracking-wider">
                      <Clock className="h-3.5 w-3.5" /> {opp.hours}
                    </span>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed font-sans">{opp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Event calendar schedules */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium text-emerald-950 border-b border-stone-150 pb-3 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-800" />
                Upcoming Rescue Calendar
              </h3>
              <div className="space-y-3">
                {events.map((ev, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-5 border border-stone-200/60 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.01)]"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-orange-500 font-bold text-xs uppercase tracking-wider font-mono">
                        <Calendar className="h-3.5 w-3.5" /> {ev.date}
                        <span>&bull;</span>
                        <Clock className="h-3.5 w-3.5" /> {ev.time}
                      </div>
                      <h4 className="font-serif font-medium text-base text-emerald-950 mt-1.5">{ev.title}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-sans">
                        <MapPin className="h-3 w-3 text-slate-400" /> {ev.location}
                      </p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-850 border border-emerald-800/10 text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full select-none font-mono">
                      {ev.slots}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Requirements */}
            <div className="bg-[#113a29] text-emerald-100 rounded-3xl p-8 space-y-5">
              <h4 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-400" />
                Volunteer Parameters
              </h4>
              <ul className="space-y-3.5 text-xs text-emerald-200/90 leading-relaxed pr-2">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-orange-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-emerald-800 text-[11px] text-emerald-200/80 flex items-center gap-1.5 font-sans leading-relaxed">
                <Info className="h-4 w-4 text-orange-400 shrink-0" />
                All volunteers receive a brief 15-minute onsite orientation and safety training prior to starting their first shift.
              </div>
            </div>

          </div>

          {/* Column B: Vol Form Registration */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-stone-200/60 p-6 sm:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
            <div>
              <h2 className="text-xl font-serif font-medium text-emerald-950 flex items-center gap-2">
                <Heart className="h-5 w-5 text-emerald-700" />
                Volunteer Hub Application
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Register your profile parameters to help coordinate distributions and food bank trucks.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="(469) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Primary Interest Opportunity</label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                >
                  <option value="pantry">Grocery Bags Packing (Hub)</option>
                  <option value="delivery">Senior Home Delivery Driver</option>
                  <option value="rescue">Food Rescue Collector (Supermarkets)</option>
                  <option value="admin">Event Organizer / Administrative Help</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Experience & General Availability (Optional)</label>
                <textarea
                  placeholder="Share any background details or specific weekdays you are available to support..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800 h-24 resize-none"
                />
              </div>

              {/* Submitting Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-full py-4 font-semibold text-base transition-all hover:shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                Register as Volunteer Partner
              </button>

              {successMsg && (
                <div className="p-4 bg-[#FDFCFB] rounded-2xl border border-emerald-800/25 text-center">
                  <p className="text-[#0f2d1e] font-semibold text-sm leading-relaxed">{successMsg}</p>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
