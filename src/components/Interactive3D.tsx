import React, { useState } from "react";
// @ts-ignore
import pantryVolunteerImg from "../assets/images/irving_pantry_volunteer_1782231464508.jpg";
import { Heart, Users, MapPin, Sparkles } from "lucide-react";

export default function Interactive3D() {
  const [likes, setLikes] = useState(148);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      setLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setLiked(false);
    }
  };

  return (
    <div 
      id="3d-interactive-container"
      className="relative w-full h-[400px] md:h-[480px] bg-emerald-950/20 rounded-3xl border border-emerald-800/20 overflow-hidden shadow-xl group transition-all duration-300 hover:border-emerald-700/40 select-none"
    >
      {/* Background Graphic / Underlay */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* The Actual Image representing the business model of GYFTS Rescue */}
      <img
        src={pantryVolunteerImg}
        alt="GYFTS Rescue Irving Community Pantry Volunteers"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Elegant Gradient Overlays for premium editorial legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/45 to-transparent opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-transparent opacity-80" />

      {/* Decorative Glow elements */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Card Content Header */}
      <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-start z-10">
        <div className="bg-emerald-950/80 backdrop-blur-md rounded-2xl p-3.5 border border-emerald-700/30 max-w-[80%]">
          <div className="flex items-center gap-1.5 text-orange-400 text-[10px] font-bold uppercase tracking-wider font-mono">
            <Sparkles className="h-3 w-3 animate-spin-slow text-orange-400" />
            Nourishment Network Live
          </div>
          <h4 className="text-white font-serif text-base font-semibold mt-1">Our Active Irving Rescue Operations</h4>
          <p className="text-emerald-250 text-[11px] mt-0.5 leading-relaxed text-emerald-100/85">
            Mobilizing local neighborhoods to supply fresh crops, canned goods, and essential food items.
          </p>
        </div>

        {/* Location Badge */}
        <div className="flex items-center gap-1 bg-orange-500/90 text-white font-mono text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs">
          <MapPin className="h-3 w-3 shrink-0" />
          IRVING, TX
        </div>
      </div>

      {/* Central Interactive Spotlight / Interactive Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="bg-emerald-900/95 text-emerald-100 text-[11px] font-mono tracking-wider font-semibold px-4 py-2 rounded-full border border-emerald-700/40 shadow-lg">
            Supporting 250+ Families Weekly
          </span>
        </div>
      </div>

      {/* Bottom overlay with quick stats & like action */}
      <div className="absolute bottom-0 inset-x-0 p-6 flex justify-between items-end z-10 gap-4">
        {/* Statistics Block */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-emerald-800/40 max-w-[240px] shadow-lg">
          <div className="flex items-center gap-1.5 text-orange-400 text-[10px] uppercase font-bold tracking-wider font-mono">
            <Users className="h-3 w-3" /> Impact Statistics
          </div>
          <div className="text-white text-lg font-serif font-semibold mt-1.5 leading-tight">
            180,000+ Lbs
          </div>
          <p className="text-slate-300 text-[10px] font-sans mt-0.5 leading-relaxed">
            of fresh nutritional produce rescued & delivered directly to seniors and kids.
          </p>
        </div>

        {/* Interactive Like/Love Community Hub Action */}
        <button
          type="button"
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all cursor-pointer shadow-md text-xs font-semibold ${
            liked
              ? "bg-orange-500 border-orange-400 text-white animate-scale-up-fade"
              : "bg-emerald-900/95 border-emerald-700/50 text-emerald-200 hover:bg-emerald-800 hover:text-white"
          }`}
          title="Send Support Love to Irving Volunteers"
        >
          <Heart className={`h-4 w-4 transition-transform ${liked ? "scale-110 fill-white" : "group-hover:scale-110"}`} />
          <span className="font-mono">{likes}</span>
        </button>
      </div>
    </div>
  );
}
