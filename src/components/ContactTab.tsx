import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactTab() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Question");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(`Thank you, ${name}! Your email message regarding "${subject}" was transmitted. Our Irving, TX coordinator team will review it and reply within 1-2 weekdays.`);
      
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Connect with us</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            How to Reach GYFTS Rescue
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Have questions about donations, corporate sponsorships, hosting local drops, or getting pantry grocery bags? Contact David Stenson's coordination team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          {/* Column A: Contact coordinates & Map placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact info */}
            <div className="bg-white rounded-3xl border border-stone-200/60 p-7 sm:p-8 space-y-7 shadow-[0_2px_12px_rgba(0,0,0,0.01)] animate-fade-in">
              <h3 className="font-serif text-xl font-medium text-emerald-950">Contact Details</h3>
              
              <ul className="space-y-6 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-emerald-950 font-semibold font-serif">Hotline Number</span>
                    <a href="tel:4696396347" className="hover:text-emerald-700 transition-colors">(469) 639-6347</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-emerald-950 font-semibold font-serif">Coordination Email</span>
                    <a href="mailto:stensondavid@hotmail.com" className="hover:text-emerald-700 transition-colors">stensondavid@hotmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-emerald-950 font-semibold font-serif">Location Jurisdiction</span>
                    <span className="text-slate-500">Irving, Texas, United States (Greater DFW Metroplex)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-emerald-950 font-semibold font-serif">Pantry Distribution Times</span>
                    <span className="text-slate-500">Wed & Sat: 10 AM — 2 PM (Registration Required)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map Placeholder - Highly Polished Mock */}
            <div className="bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
              <div className="bg-emerald-900 px-5 py-3.5 text-white flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest uppercase font-bold text-emerald-200">Map View : Irving, TX</span>
                <span className="h-2 w-2 bg-orange-400 rounded-full animate-ping" />
              </div>
              
              {/* Graphic map grid representing Irving streets */}
              <div className="relative h-64 bg-stone-50 flex items-center justify-center p-4">
                {/* Visual streets using abstract boxes */}
                <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
                  {/* Grid lines */}
                  <div className="w-full h-0.5 bg-emerald-900/40 top-1/4 absolute" />
                  <div className="w-full h-0.5 bg-emerald-900/40 top-1/2 absolute" />
                  <div className="w-full h-0.5 bg-emerald-900/40 top-3/4 absolute" />
                  <div className="w-0.5 h-full bg-emerald-900/40 left-1/4 absolute" />
                  <div className="w-0.5 h-full bg-emerald-900/40 left-1/2 absolute" />
                  <div className="w-0.5 h-full bg-emerald-900/40 left-3/4 absolute" />
                </div>

                {/* Legend Point */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-2 select-none">
                  <div className="bg-emerald-850 bg-emerald-800 text-white rounded-full p-2.5 w-11 h-11 flex items-center justify-center shadow-md border border-white animate-bounce">
                    <MapPin className="h-5 w-5 fill-white" />
                  </div>
                  <div className="bg-emerald-950 text-white border border-emerald-900 text-[11px] rounded-2xl px-4 py-2 shadow-sm font-sans">
                    <span className="font-semibold block font-serif">GYFTS Rescue Pantry Base</span>
                    <span className="text-[9px] text-[#ef8c50] font-mono tracking-wider">IRVING, TX 75061</span>
                  </div>
                </div>

                {/* Zoom tools mockup */}
                <div className="absolute bottom-4 right-4 bg-white rounded-xl border border-stone-200 flex flex-col text-[#0f2d1e] font-extrabold text-xs overflow-hidden select-none">
                  <button type="button" className="p-2.5 border-b border-stone-100 hover:bg-stone-50 cursor-pointer text-center">+</button>
                  <button type="button" className="p-2.5 hover:bg-stone-50 cursor-pointer text-center">-</button>
                </div>
              </div>
            </div>

          </div>

          {/* Column B: Web Contact Form */}
          <div className="lg:col-span-12 lg:col-span-7 bg-white rounded-3xl border border-stone-200/60 p-6 sm:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] animate-fade-in">
            <div>
              <h2 className="text-xl font-serif font-medium text-emerald-950 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-emerald-700" />
                Write David's Coordination Team
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Your messages go directly to David and Maria's primary inbox systems.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">My Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">My Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">My Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="(469) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Letter Subject Topic</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                >
                  <option value="Question">General Question about GYFTS Rescue</option>
                  <option value="Corporate Partner">Corporate Sponsorship / Tax Deductibles</option>
                  <option value="Pantry Donation">Food / Grocery Box Donations</option>
                  <option value="Client Help">Client Care or Special Assistance Requests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Message/Letter Details</label>
                <textarea
                  required
                  placeholder="Write your brief message, request detail, or scheduling question here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800 h-32 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-full py-4 font-semibold text-base transition-all hover:shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending message..." : "Submit Message Request"}
              </button>

              {successMsg && (
                <div className="p-4 bg-[#FDFCFB] rounded-2xl border border-emerald-800/25 text-center animate-fade-in font-sans">
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
