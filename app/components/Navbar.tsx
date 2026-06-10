"use client";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Bounties", href: "#bounties" },
  { label: "Wanted Levels", href: "#wanted-levels" },
  { label: "City Heat", href: "#city-heat" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Token", href: "#token" },
  { label: "Rules", href: "#rules" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#080808]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-sm flex items-center justify-center border border-[#39FF14]" style={{ boxShadow: "0 0 8px rgba(57,255,20,0.5)" }}>
            <span className="font-impact text-[#39FF14] text-xs">G</span>
          </div>
          <span className="font-impact tracking-widest text-white text-sm md:text-base">
            GTA<span className="text-[#39FF14]">BOUNTY</span>
          </span>
          <span className="hidden sm:inline-flex ml-1 text-[9px] font-mono bg-[#39FF14] text-black px-1.5 py-0.5 rounded font-bold">S01</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-xs text-[#999] hover:text-[#39FF14] transition-colors tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#submit"
            className="font-mono text-xs font-bold px-4 py-2 border border-[#39FF14] text-[#39FF14] rounded hover:bg-[#39FF14] hover:text-black transition-all tracking-wider"
            style={{ boxShadow: "0 0 8px rgba(57,255,20,0.3)" }}
          >
            SUBMIT CLIP
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#39FF14] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#39FF14] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#39FF14] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#39FF14]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#1a1a1a] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-[#999] hover:text-[#39FF14] tracking-wider uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#submit"
            onClick={() => setOpen(false)}
            className="font-mono text-sm font-bold px-4 py-2 border border-[#39FF14] text-[#39FF14] rounded text-center"
          >
            SUBMIT CLIP
          </a>
        </div>
      )}
    </nav>
  );
}
