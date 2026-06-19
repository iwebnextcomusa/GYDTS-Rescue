import React, { useState } from "react";
import { BLOGS } from "../data";
import { BlogItem } from "../types";
import { Calendar, User, ArrowRight, Image as ImageIcon, Heart, Megaphone, X } from "lucide-react";

export default function NewsTab() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Success Stories" | "News & Alerts" | "Community Events">("All");
  const [selectedPost, setSelectedPost] = useState<BlogItem | null>(null);

  const filteredBlogs = BLOGS.filter((post) => {
    if (activeCategory === "All") return true;
    return post.category === activeCategory;
  });

  const categories: ("All" | "Success Stories" | "News & Alerts" | "Community Events")[] = [
    "All",
    "Success Stories",
    "News & Alerts",
    "Community Events"
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=450",
      title: "Pantry Sorting Operations",
      location: "Irving Facility",
    },
    {
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=450",
      title: "Fresh Crops Rescue Selection",
      location: "DFW Supermarket Drives",
    },
    {
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=450",
      title: "Senior Home Care Delivery Bags",
      location: "Active Irving Areas",
    },
    {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=450",
      title: "Healthy Snack Distribution Runs",
      location: "Local Irving Parks",
    },
    {
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=450",
      title: "Pantry Recipes Cooking Courses",
      location: "DFW Community Centers",
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=450",
      title: "Child care diaper boxes distributions",
      location: "Irving Outreach Park",
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-[#FDFCFB] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 font-mono">News & Hub Events</span>
          <h1 className="text-4xl font-serif text-emerald-950 mt-3 leading-tight font-medium">
            Our Irving Community Diary
          </h1>
          <p className="text-slate-500 text-base mt-4 leading-relaxed max-w-xl mx-auto">
            Read transparent recaps of our local food rescues, upcoming pantry drive schedules, and stories of hope from here in Irving, Texas.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full border transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-white text-slate-600 border-stone-200/80 hover:border-stone-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 animate-fade-in">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-stone-200/60 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-all hover:border-stone-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 bg-stone-100 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-950 text-emerald-250 text-[10px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold mb-3">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-mono uppercase tracking-wider">
                      <User className="h-3.5 w-3.5" /> {post.author}
                    </span>
                  </div>

                  <h3 className="font-serif font-medium text-lg text-emerald-950 leading-tight hover:text-emerald-850 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed font-sans">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-7 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="text-emerald-800 hover:text-emerald-950 font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Read Full Post <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}

          {filteredBlogs.length === 0 && (
            <div className="col-span-full bg-white text-center rounded-3xl py-12 border border-stone-200/60 border-dashed">
              <Megaphone className="h-10 w-10 text-stone-300 mx-auto mb-2 animate-bounce" />
              <p className="text-slate-500 text-sm font-semibold">More news alerts coming soon for this active category!</p>
            </div>
          )}
        </div>

        {/* Community Outreach Image Gallery */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <ImageIcon className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-medium text-emerald-950">Active Outreach Photo Gallery</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5 font-sans">Capturing the smiles, grocery crates, and logistics of GYFTS Rescue in Irving, Texas.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-[#FDFCFB]/80 rounded-2xl overflow-hidden border border-stone-200/60 group cursor-pointer relative"
              >
                <div className="h-60 overflow-hidden relative bg-stone-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-orange-400 font-bold text-[10px] uppercase tracking-wider font-mono">{img.location}</span>
                    <h5 className="text-white font-serif text-sm mt-0.5">{img.title}</h5>
                  </div>
                </div>
                
                <div className="p-4 flex items-center justify-between group-hover:bg-[#FDFCFB] transition-colors">
                  <div>
                    <h5 className="font-serif font-medium text-xs text-[#0f2d1e]">{img.title}</h5>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{img.location}</span>
                  </div>
                  <Heart className="h-4.5 w-4.5 text-orange-400 shrink-0 select-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modern stateful light-box modal for blog read-outs instead of generic alert popup */}
      {selectedPost && (
        <div className="fixed inset-0 bg-[#0c1f15]/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs select-none">
          <div className="bg-[#FDFCFB] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-200 shadow-xl relative animate-scale-up-fade text-slate-800">
            
            {/* Header image with close button */}
            <div className="relative h-64 w-full bg-stone-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 h-9 w-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal details */}
            <div className="p-8 space-y-6">
              <div>
                <span className="text-orange-505 text-orange-500 font-mono text-xs font-semibold uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-emerald-950 mt-2 leading-tight">
                  {selectedPost.title}
                </h3>
                <div className="flex items-center gap-3 text-slate-400 text-xs font-mono mt-3.5">
                  <span>{selectedPost.date}</span>
                  <span>&bull;</span>
                  <span>BY {selectedPost.author.toUpperCase()}</span>
                </div>
              </div>

              <div className="text-slate-600 text-sm leading-relaxed space-y-4 font-sans">
                <p className="font-medium text-slate-700">{selectedPost.summary}</p>
                <p className="text-slate-500">{selectedPost.content}</p>
              </div>

              <div className="pt-6 border-t border-stone-150 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer transition-colors"
                >
                  Dismiss Reading
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
