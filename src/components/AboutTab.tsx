import React from "react";
import { TEAM } from "../data";
import { Award, Eye, Heart, Landmark, ShieldCheck } from "lucide-react";

export default function AboutTab() {
  const values = [
    {
      title: "Human Dignity",
      desc: "We serve our Irving community without patronization. Every basket is handed out with standard gratitude and respect.",
      icon: <Heart className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Total Transparency",
      desc: "Every single donated dollar directly funds staple purchases. We are open-source with pantry allocation metrics.",
      icon: <ShieldCheck className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Sustainable Partnerships",
      desc: "By rescuing fresh foods from supermarkets, we protect environmental parameters while feeding hungry households.",
      icon: <Award className="h-5 w-5 text-orange-500" />
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">Who We Are</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            Fostering Hope & Support in Irving
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto font-sans">
            GYFTS Rescue was born out of local neighborhoods coming together. Based in Irving, Texas, we provide immediate assistance models to vulnerable citizens.
          </p>
        </div>

        {/* Impact History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 font-sans">
          <div className="space-y-6">
            <div className="flex gap-2.5 items-center text-orange-600 font-mono text-xs uppercase tracking-widest">
              <Landmark className="h-4 w-4" /> Since 2020: Irving Resiliency
            </div>
            <h2 className="text-3xl font-serif text-emerald-950 font-medium">
              Our Journey & Mission
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded during a critical economic downturn, GYFTS Rescue began as an informal food packing operation out of a local Irving garage. Seeing hundreds of single parent homes and older citizens struggling to locate essential items, we incorporated as a dedicated charity.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Today, we organize dynamic networks spanning grocer partnerships, neighborhood food bin drives, and customizable senior deliver lists. We maintain a focus on immediate relief—working to end starvation and diet-related illness.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-stone-200/60 flex flex-col justify-center space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
            <div className="border-l-2 border-emerald-800 pl-5">
              <span className="text-[11px] text-emerald-700 font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Eye className="h-3.5 w-3.5" /> Our Absolute Mission
              </span>
              <p className="text-emerald-950 font-serif text-md mt-2 leading-relaxed italic">
                To build healthy, nourished Irving neighborhoods where food distress is eliminated, children learn with energy, and seniors age comfortably in place with robust nourishment.
              </p>
            </div>
            
            <div className="border-l-2 border-orange-500 pl-5">
              <span className="text-[11px] text-orange-600 font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Heart className="h-3.5 w-3.5" /> Our Vision
              </span>
              <p className="text-emerald-950 font-serif text-md mt-2 leading-relaxed italic">
                An inclusive society where community food circles protect nutrition levels and bridge socio-economic assistance cleanly and sustainably.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">What Guides Us</span>
            <p className="text-3xl font-serif text-emerald-950 mt-3 font-medium">Our Fundamental Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-250 border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col items-start gap-4 hover:border-stone-300 hover:shadow-xs transition-all"
              >
                <div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="font-serif text-lg font-medium text-emerald-950 mt-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Leadership Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">The Hearts Behind GYFTS Rescue</span>
            <p className="text-3xl font-serif text-emerald-950 mt-3 font-medium">Our Dedicated Irving Leadership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)] text-center hover:border-stone-300 transition-all group"
              >
                <div className="h-60 bg-stone-100 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300"
                  />
                </div>
                <div className="p-7">
                  <h4 className="font-serif text-lg font-medium text-emerald-950">{member.name}</h4>
                  <span className="text-orange-500 font-mono text-xs tracking-wider uppercase block mt-1.5">
                    {member.role}
                  </span>
                  <p className="text-slate-500 text-xs mt-4 leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
