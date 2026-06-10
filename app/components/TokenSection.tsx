"use client";
import { useState } from "react";

export default function TokenSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-20 px-4 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.04) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="font-mono text-[10px] text-[#39FF14] tracking-widest mb-3 opacity-60">◆ THE COIN BEHIND THE BOARD ◆</div>
          <h2 className="font-impact text-5xl sm:text-7xl tracking-wider text-white">
            POWERED BY
          </h2>
          <h2
            className="font-impact text-5xl sm:text-7xl tracking-wider"
            style={{ color: "#39FF14", textShadow: "0 0 30px #39FF14, 0 0 60px rgba(57,255,20,0.3)" }}
          >
            $GTABOUNTY
          </h2>
        </div>

        <p className="font-mono text-sm text-[#888] text-center leading-relaxed mb-10 max-w-xl mx-auto">
          GTABOUNTY is the community coin behind the bounty board. The mission is simple: turn real-world clips into the loudest marketing engine on the timeline.
          <br /><br />
          <span className="text-[#555]">No fake utility. The bounty board IS the utility. If it can't be clipped, it doesn't count.</span>
        </p>

        {/* CA box */}
        <div
          className="relative flex items-center justify-between gap-3 p-4 rounded border mb-8"
          style={{
            borderColor: "#39FF14",
            backgroundColor: "rgba(57,255,20,0.05)",
            boxShadow: "0 0 20px rgba(57,255,20,0.1)"
          }}
        >
          <div>
            <div className="font-mono text-[9px] text-[#39FF14] tracking-widest mb-1">◆ CONTRACT ADDRESS</div>
            <div className="font-mono text-xs text-[#666] tracking-wider">CA: Coming Soon — Stay on the board</div>
          </div>
          <button
            onClick={handleCopy}
            className="flex-shrink-0 font-mono text-[10px] font-bold px-3 py-2 rounded border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all tracking-wider"
          >
            {copied ? "COPIED ✓" : "COPY CA"}
          </button>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "VIEW CHART", color: "#39FF14", href: "#" },
            { label: "JOIN X", color: "#00F5FF", href: "#" },
            { label: "JOIN TELEGRAM", color: "#BF5FFF", href: "#" },
            { label: "SUBMIT CLIP", color: "#FFD700", href: "#submit" },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="font-impact text-sm tracking-wider text-center py-3 rounded border transition-all"
              style={{ borderColor: btn.color, color: btn.color, backgroundColor: `${btn.color}10` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = btn.color;
                (e.currentTarget as HTMLAnchorElement).style.color = "#000";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 16px ${btn.color}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${btn.color}10`;
                (e.currentTarget as HTMLAnchorElement).style.color = btn.color;
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              {btn.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[9px] text-[#333] text-center mt-6 tracking-wider">
          THE TIMELINE IS HUNGRY. THE CLIPS ARE THE ROADMAP. THE BOARD IS THE UTILITY.
        </p>
      </div>
    </section>
  );
}
