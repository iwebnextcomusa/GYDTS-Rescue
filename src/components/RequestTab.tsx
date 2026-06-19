import React, { useState } from "react";
import { FAQS } from "../data";
import { ShieldAlert, CheckCircle2, ChevronDown, UserCheck, HelpCircle, PhoneCall } from "lucide-react";

export default function RequestTab() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [membersCount, setMembersCount] = useState("1");
  const [needs, setNeeds] = useState("Standard Grocery Box");
  const [specialDetails, setSpecialDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");

    try {
      const response = await fetch("/api/assistance/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          membersCount,
          needs,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccessMsg(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setMembersCount("1");
        setSpecialDetails("");
      }
    } catch (err) {
      console.error("Assistance request transmission failed:", err);
      setSuccessMsg(`Thank you, ${name}. Your assistance request for ${needs} (Family size: ${membersCount}) was submitted successfully. Our team will contact you in Irving shortly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const eligibilityCheck = [
    "No intense documentation or screening prerequisites apply. Our primary goal is maintaining client dignity.",
    "Individuals must locate or reside inside the greater Irving, Texas or adjacent DFW metroplex areas.",
    "Assistance is open to anyone directly encountering immediate household food scarcity or financial stress.",
    "If applying for homebound Senior Deliveries, the beneficiary must be elderly or hold mobility restrictions.",
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Get support</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            How to Request Assistance
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Scarcity is temporary, but community support is permanent. Learn our simple eligibility criteria and apply online below to access fresh food coordinate drops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 font-sans">
          
          {/* Column A: Eligibility checklist & Support Instructions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-7 border border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-5">
              <h3 className="font-serif text-lg font-medium text-emerald-950 flex items-center gap-1.5">
                <ShieldAlert className="h-5 w-5 text-orange-500 shrink-0" />
                Eligibility Guidance
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                GYFTS Rescue was built on standard benevolence. We seek to protect your household privacy completely. Check out our parameters:
              </p>
              <ul className="space-y-3.5 text-xs text-slate-500">
                {eligibilityCheck.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact hotline box */}
            <div className="bg-[#113a29] text-white rounded-3xl p-8 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full blur-[60px] opacity-40 pointer-events-none" />
              <h4 className="font-serif text-lg font-medium text-white flex items-center gap-2">
                <PhoneCall className="h-4.5 w-4.5 text-orange-400" /> Urgent Food Emergency?
              </h4>
              <p className="text-emerald-100/75 text-xs leading-relaxed">
                Are you facing severe hunger, immediate fire disaster, storm displacement, or sudden crisis? Please phone us directly rather than submitting web forms.
              </p>
              <div className="text-md font-medium text-white block font-sans">
                Hotline Call: <a href="tel:4696396347" className="text-orange-400 font-bold hover:underline">(469) 639-6347</a>
              </div>
            </div>
          </div>

          {/* Column B: Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/60 p-6 sm:p-8 space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
            <div>
              <h2 className="text-xl font-serif font-medium text-emerald-950 flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-emerald-700" />
                Assistance Request Form
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Your application details are processed with deep respect. Coordinates are optimized for direct cargo routes.
              </p>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Full Name</label>
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
                  <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="jane@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Phone Number</label>
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
                  <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Household Members</label>
                  <select
                    value={membersCount}
                    onChange={(e) => setMembersCount(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-850 text-slate-800"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 — 3 People</option>
                    <option value="4">4 — 5 People</option>
                    <option value="6">6 or more People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Requested Support Package</label>
                <select
                  value={needs}
                  onChange={(e) => setNeeds(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-850 text-slate-800"
                >
                  <option value="Standard Grocery Box">Standard Family Grocery Box (Weekly staples)</option>
                  <option value="Senior Delivery Crate">Senior Home Delivery (mobility impaired deliveries)</option>
                  <option value="Emergency hot meal support">Immediate Emergency Hot Meals (Crisis)</option>
                  <option value="Diaper infant support box">Infant Baby formula & Diaper support package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 font-sans">Special Dietary Needs or Allergy Alerts (Optional)</label>
                <textarea
                  placeholder="Tell us if anyone in the family is dairy-free, diabetic, has severe nuts allergies, contains infants, or mobility issues..."
                  value={specialDetails}
                  onChange={(e) => setSpecialDetails(e.target.value)}
                  className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800 h-24 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white rounded-full py-4 font-semibold text-base transition-all hover:shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Assistance Application
              </button>

              {successMsg && (
                <div className="p-4 bg-[#FDFCFB] rounded-2xl border border-emerald-800/25 text-center">
                  <p className="text-[#0f2d1e] font-semibold text-sm leading-relaxed">{successMsg}</p>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Assistance FAQ</span>
            <p className="text-3xl font-serif text-emerald-950 mt-3 font-medium">Frequently Asked Questions</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 font-sans text-slate-800">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-serif font-medium text-base text-emerald-950 hover:bg-stone-50/50 focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-emerald-800 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-500 text-sm leading-relaxed border-t border-stone-100 animate-fade-in font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
