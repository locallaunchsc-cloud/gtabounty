"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12 px-4" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-impact text-2xl tracking-widest text-white mb-2">
              GTA<span style={{ color: "#39FF14" }}>BOUNTY</span>
            </div>
            <p className="font-mono text-xs text-[#444] leading-relaxed mb-4">
              "Complete the mission.<br />Post the clip.<br />Win the bounty."
            </p>
            <div
              className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold px-2 py-1 rounded"
              style={{ color: "#39FF14", backgroundColor: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
              SEASON 001 ACTIVE
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div className="font-mono text-[10px] text-[#333] tracking-widest mb-4">◆ NAVIGATE</div>
            <div className="flex flex-col gap-2">
              {[
                { label: "View Bounties", href: "#bounties" },
                { label: "Wanted Levels", href: "#wanted-levels" },
                { label: "City Heat", href: "#city-heat" },
                { label: "Submit Clip", href: "#submit" },
                { label: "Rules", href: "#rules" },
                { label: "Leaderboard", href: "#leaderboard" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-xs text-[#555] hover:text-[#39FF14] transition-colors tracking-wider"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <div className="font-mono text-[10px] text-[#333] tracking-widest mb-4">◆ COMMUNITY</div>
            <div className="flex flex-col gap-2">
              {[
                { label: "X / Twitter", href: "#", color: "#00F5FF" },
                { label: "Telegram", href: "#", color: "#BF5FFF" },
                { label: "View Chart", href: "#", color: "#39FF14" },
                { label: "Submit Clip", href: "#submit", color: "#FFD700" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-mono text-xs tracking-wider transition-colors"
                  style={{ color: "#555" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = l.color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#555"; }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#0f0f0f] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] text-[#2a2a2a] tracking-wider">
            GTABOUNTY IS FOR LEGAL, CONSENSUAL, FUNNY PUBLIC CONTENT ONLY. NOT AFFILIATED WITH ROCKSTAR GAMES OR TAKE-TWO INTERACTIVE.
          </p>
          <div className="font-mono text-[9px] text-[#2a2a2a] tracking-wider">
            $GTABOUNTY // SEASON 001
          </div>
        </div>
      </div>
    </footer>
  );
}
