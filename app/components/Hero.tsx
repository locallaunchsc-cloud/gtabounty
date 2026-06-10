"use client";
import { useEffect, useState } from "react";

function WantedStars({ count, animate = false }: { count: number; animate?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < count ? "#FFD700" : "#1a1a1a"}
          className={i < count && animate ? "animate-star-pulse" : ""}
          style={i < count ? { filter: "drop-shadow(0 0 4px #FFD700)" } : {}}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const ALERTS = [
  { text: "BOSS MISSION UNLOCKED", color: "#FF3131" },
  { text: "NEW BOUNTY: $500 REWARD", color: "#39FF14" },
  { text: "CLIP GOING VIRAL — 800K VIEWS", color: "#BF5FFF" },
  { text: "ATLANTA LEADS THE BOARD", color: "#00F5FF" },
];

export default function Hero() {
  const [alertIdx, setAlertIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAlertIdx((i) => (i + 1) % ALERTS.length), 3000);
    return () => clearInterval(t);
  }, []);

  const alert = ALERTS[alertIdx];

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 grid-texture overflow-hidden">
      {/* Background scanlines */}
      <div className="scanline absolute inset-0 pointer-events-none opacity-40 z-0" />

      {/* Animated grid pulse */}
      <div className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.04) 0%, transparent 70%)"
        }}
      />

      {/* Corner HUD elements */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-[#333] hidden md:block">
        <div className="text-[#39FF14] text-[10px] mb-1">◆ SYS:ONLINE</div>
        <div>SEASON_001.EXE</div>
        <div>BOARD:ACTIVE</div>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#333] text-right hidden md:block">
        <div className="text-[#FFD700] text-[10px] mb-1">◆ MISSIONS: 8 OPEN</div>
        <div>CLIPS: 247 SUBMITTED</div>
        <div>PAID: $4,200</div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Season badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div
            className="flex items-center gap-2 px-3 py-1.5 border font-mono text-xs font-bold tracking-widest rounded"
            style={{
              borderColor: "#39FF14",
              color: "#39FF14",
              backgroundColor: "rgba(57,255,20,0.08)",
              boxShadow: "0 0 12px rgba(57,255,20,0.3)"
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            SEASON 001: THE WANTED BOARD IS LIVE
          </div>
        </div>

        {/* Mission alert */}
        <div className="mb-4 h-8 flex items-center justify-center">
          <div
            key={alertIdx}
            className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest px-3 py-1 rounded border"
            style={{ borderColor: alert.color, color: alert.color, backgroundColor: `${alert.color}15`, transition: "all 0.3s ease" }}
          >
            <span className="animate-blink">▶</span>
            MISSION ALERT: {alert.text}
          </div>
        </div>

        {/* Main headline */}
        <h1 className="font-impact text-5xl sm:text-7xl md:text-9xl tracking-wider text-white mb-2 leading-none">
          GTA<span style={{ color: "#39FF14", textShadow: "0 0 20px #39FF14, 0 0 40px rgba(57,255,20,0.4)" }}>BOUNTY</span>
        </h1>

        {/* Wanted stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#FFD700"
              style={{
                filter: "drop-shadow(0 0 6px #FFD700)",
                animation: `starPulse ${1.2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Tagline */}
        <p className="font-impact text-xl sm:text-3xl md:text-4xl text-[#FFD700] tracking-wider mb-4"
          style={{ textShadow: "0 0 12px rgba(255,215,0,0.5)" }}>
          REAL-WORLD BOUNTIES FOR VIRAL CLIPS
        </p>

        {/* Sub copy */}
        <p className="font-mono text-sm sm:text-base text-[#888] max-w-2xl mx-auto mb-2 leading-relaxed">
          GTABOUNTY turns the timeline into a mission board. Complete legal side quests, post the clip, and win rewards when the community picks your submission.
        </p>
        <p className="font-mono text-xs sm:text-sm text-[#555] mb-8 tracking-wider">
          "THE TIMELINE IS THE MAP. THE CLIPS ARE THE ROADMAP."
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#bounties"
            className="font-impact text-lg sm:text-xl tracking-widest px-8 py-3 text-black rounded transition-all"
            style={{
              backgroundColor: "#39FF14",
              boxShadow: "0 0 20px rgba(57,255,20,0.6), 0 0 40px rgba(57,255,20,0.2)"
            }}
          >
            VIEW BOUNTIES
          </a>
          <a
            href="#submit"
            className="font-impact text-lg sm:text-xl tracking-widest px-8 py-3 rounded border-2 text-[#FFD700] transition-all"
            style={{
              borderColor: "#FFD700",
              boxShadow: "0 0 16px rgba(255,215,0,0.3)"
            }}
          >
            SUBMIT A CLIP
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { val: "8", label: "OPEN BOUNTIES" },
            { val: "$4.2K", label: "PAID OUT" },
            { val: "247", label: "CLIPS SUBMITTED" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-impact text-2xl sm:text-3xl text-[#39FF14]" style={{ textShadow: "0 0 8px #39FF14" }}>{s.val}</div>
              <div className="font-mono text-[9px] text-[#555] tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14] to-transparent opacity-30" />
    </section>
  );
}
