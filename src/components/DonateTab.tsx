import React, { useState } from "react";
import { DONATION_OPTIONS } from "../data";
import { CreditCard, Heart, DollarSign, CheckCircle2, HelpingHand, Award } from "lucide-react";

export default function DonateTab() {
  const [amount, setAmount] = useState<number>(50);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleCustomChange = (val: string) => {
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleQuickSelect = (amt: number) => {
    setAmount(amt);
    setCustomAmount("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/donate/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amount,
          frequency: frequency,
          name: donorName,
          email: donorEmail,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitMessage(data.message);
        setDonorName("");
        setDonorEmail("");
      }
    } catch (err) {
      console.error("Form transmission issue:", err);
      setSubmitMessage(`Heartfelt thanks! Your support of $${amount} has been mock-processed securely. Together, we keep Irving healthy.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mealsCount = Math.round(amount * 4);
  const familiesFed = Math.round(amount / 25 * 10) / 10;
  const infantCubes = Math.round(amount / 10 * 10) / 10;

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Lend Resources</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            Fight Irving Hunger: Invest in Hope
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Every dollar is carefully spent locally. We purchase bulk fresh produce, dairy, and infant supplies to stock Irving pantry bags daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          
          {/* Column A: Secure Donation Form UI and Options */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-xl font-serif font-medium text-emerald-950 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-emerald-700" />
                Secure Donation Details
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Your transaction is processed in secure developer mode. Receipts are issued automatically.
              </p>
            </div>

            {/* Freq Toggle */}
            <div className="flex bg-[#FDFCFB] border border-stone-200/60 rounded-full p-1 max-w-[280px]">
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`flex-1 text-center py-2 px-3 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  frequency === "monthly"
                    ? "bg-emerald-950 text-white shadow-xs"
                    : "text-slate-500 hover:text-emerald-950"
                }`}
              >
                Monthly Partner
              </button>
              <button
                type="button"
                onClick={() => setFrequency("one-time")}
                className={`flex-1 text-center py-2 px-3 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  frequency === "one-time"
                    ? "bg-emerald-950 text-white shadow-xs"
                    : "text-slate-500 hover:text-emerald-950"
                }`}
              >
                One-Time Gift
              </button>
            </div>

            {/* Quick Tiles Grid */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Choose Gift Amount
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {DONATION_OPTIONS.map((opt) => (
                  <button
                    key={opt.amount}
                    type="button"
                    onClick={() => handleQuickSelect(opt.amount)}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                      amount === opt.amount && !customAmount
                        ? "border-emerald-800 bg-[#FDFCFB]/80 text-[#0f2d1e]"
                        : "border-stone-200/65 hover:border-stone-300 bg-white"
                    }`}
                  >
                    <span className="block text-xl font-serif font-semibold text-emerald-950">${opt.amount}</span>
                    <span className="text-[10px] text-[#0f2d1e] font-mono font-bold tracking-wider uppercase block mt-1">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Form Field */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Or Enter Custom Amount ($)
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="h-4 w-4 text-emerald-800 font-bold" />
                </div>
                <input
                  type="number"
                  placeholder="Enter custom dollar amount"
                  value={customAmount}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  className="block w-full border border-stone-200 rounded-2xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-slate-800 font-bold placeholder-slate-350"
                />
              </div>
            </div>

            {/* User Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-stone-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-[#0f2d1e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@domain.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-[#FDFCFB] border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 text-[#0f2d1e]"
                  />
                </div>
              </div>

              {/* Secure Credit Card Details Placeholder */}
              <div className="bg-[#FDFCFB] rounded-2xl p-5 border border-stone-200/60 space-y-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Debit or Credit Card</span>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-3">
                    <input
                      type="text"
                      disabled
                      placeholder="•••• •••• •••• •••• (Demo Mode)"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none text-slate-500 placeholder-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      disabled
                      placeholder="MM/YY"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none text-slate-500 placeholder-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      disabled
                      placeholder="CVC"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none text-slate-500 placeholder-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      disabled
                      placeholder="Zip Code"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none text-slate-500 placeholder-slate-300 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-4 font-semibold text-base transition-all hover:shadow-xs active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="h-4.5 w-4.5 fill-white" />
                {frequency === "monthly" ? "Join as Monthly Partner" : "Send One-time Gift"} of ${amount}
              </button>

              {submitMessage && (
                <div className="p-4 bg-[#FDFCFB] rounded-2xl border border-emerald-800/20 text-center">
                  <p className="text-emerald-950 font-semibold text-sm leading-relaxed">{submitMessage}</p>
                </div>
              )}
            </form>
          </div>

          {/* Column B: Dynamic Donation Impact Simulator Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#113a29] rounded-3xl p-8 text-white shadow-md space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_40%)]" />
              
              <div className="relative z-10">
                <span className="bg-orange-500/20 text-orange-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Impact Dashboard
                </span>
                <h3 className="text-2xl font-serif mt-2.5 font-normal">Your ${amount} Gift Contribution:</h3>
                <p className="text-emerald-100/60 text-xs mt-1">Here is exactly what this dollar level provides to local Irving programs.</p>
              </div>

              {/* Calculations Widget */}
              <div className="relative z-10 grid grid-cols-1 gap-4 pt-2">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-widest leading-none font-mono">Meals Provided</span>
                    <span className="block text-2xl font-semibold mt-2 text-white font-serif">{mealsCount} meals</span>
                  </div>
                  <div className="text-2xl">🥗</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-widest leading-none font-mono">Families Supported</span>
                    <span className="block text-2xl font-semibold mt-2 text-white font-serif">{familiesFed} families-weeks</span>
                  </div>
                  <div className="text-2xl">🏠</div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-widest leading-none font-mono">Infant Protection</span>
                    <span className="block text-2xl font-semibold mt-2 text-white font-serif">{infantCubes} formulas</span>
                  </div>
                  <div className="text-2xl">🍼</div>
                </div>
              </div>

              <div className="relative z-10 text-[11px] text-emerald-100/50 leading-relaxed border-t border-white/5 pt-4">
                *Approximations calculated using regional wholesale ingredient purchasing matrices. GYFTS Rescue purchases fruits directly from regional farms.
              </div>
            </div>

            {/* Food Donations Information Card */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/60 space-y-4">
              <h4 className="font-serif text-lg font-medium text-emerald-950 flex items-center gap-2">
                <HelpingHand className="h-5 w-5 text-orange-500" />
                Physical Food Donation Days
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                We safely collect non-perishable pantry packages, dry goods, unexpired infant formulas and clean diapers at our main Irving dock.
              </p>
              <div className="space-y-2 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Canned legumes, pre-bagged lentils & rice</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Unopened baby formulas for single mothers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Unused packaged diapers (newborn to toddler)</span>
                </div>
              </div>
            </div>

            {/* Corporate Partnership Opportunities */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/60 space-y-4">
              <h4 className="font-serif text-lg font-medium text-emerald-950 flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-500" />
                Corporate Sponsorship
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Irving businesses can sponsor grocery carriage delivery fuel or coordinate corporate team volunteer drive days. We provide comprehensive IRS tax exemption receipts.
              </p>
              <span className="block text-xs font-semibold text-emerald-800 border-l border-orange-400 pl-2">
                Contact stensondavid@hotmail.com directly to coordinate.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
