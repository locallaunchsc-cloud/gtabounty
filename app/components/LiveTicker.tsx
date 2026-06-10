"use client";

const TICKER_ITEMS = [
  { label: "NEW BOUNTY POSTED", color: "#39FF14", prefix: "🔴 LIVE" },
  { label: "CLIP UNDER REVIEW — @TrenchCam", color: "#FFD700", prefix: "⚡ UPDATE" },
  { label: "BOSS MISSION UNLOCKED — Street Game Show", color: "#FF3131", prefix: "🔥 HOT" },
  { label: "WINNER PAID — Bounty #003 Chart Therapist", color: "#39FF14", prefix: "💰 PAID" },
  { label: "ATLANTA TAKES THE LEAD — City Heat", color: "#00F5FF", prefix: "📍 CITIES" },
  { label: "NEW BOUNTY POSTED — Crypto Help Desk $500", color: "#39FF14", prefix: "🔴 LIVE" },
  { label: "CLIP VIRAL — 1.2M VIEWS @SideQuestShawty", color: "#BF5FFF", prefix: "🚀 VIRAL" },
  { label: "SEASON 001 — THE WANTED BOARD IS LIVE", color: "#FFD700", prefix: "🏆 SEASON" },
  { label: "COLUMBIA SC RISING — City Heat", color: "#00F5FF", prefix: "📍 CITIES" },
  { label: "CLIP SUBMITTED — Bounty #007 Crypto Help Desk", color: "#FFD700", prefix: "📤 SUBMIT" },
];

export default function LiveTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-black border-b border-[#1a1a1a] overflow-hidden relative z-50" style={{ height: "36px" }}>
      {/* Left badge */}
      <div className="absolute left-0 top-0 h-full flex items-center z-10 px-3 bg-[#39FF14]" style={{ minWidth: "80px" }}>
        <span className="font-impact text-black text-xs font-bold tracking-widest">LIVE FEED</span>
      </div>

      <div className="overflow-hidden ml-[80px] h-full flex items-center">
        <div className="ticker-animate flex items-center gap-0 whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mr-12">
              <span
                className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ color: "#000", backgroundColor: item.color, fontSize: "9px" }}
              >
                {item.prefix}
              </span>
              <span
                className="font-mono text-xs font-bold tracking-wider"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
              <span className="text-[#333] text-xs mx-2">///</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
