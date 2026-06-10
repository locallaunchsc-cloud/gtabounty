"use client";

const LEADERS = [
  { rank: 1, handle: "@TrenchCam", bounty: "#004 Gas Station Oracle", views: "1.2M", reward: "$150", status: "PAID", badge: "SEASON MVP" },
  { rank: 2, handle: "@SideQuestShawty", bounty: "#005 The Side Quest NPC", views: "890K", reward: "$200", status: "PAID", badge: "VIRAL KING" },
  { rank: 3, handle: "@GasStationGuru", bounty: "#007 Crypto Help Desk", views: "644K", reward: "$500", status: "PAID", badge: "" },
  { rank: 4, handle: "@ChartTherapist", bounty: "#003 Chart Therapist", views: "412K", reward: "$75", status: "PAID", badge: "" },
  { rank: 5, handle: "@NPCWrangler", bounty: "#002 Ticker Test", views: "298K", reward: "$50", status: "UNDER REVIEW", badge: "" },
];

const RANK_COLORS = ["#FFD700", "#C0C0C0", "#CD7F32", "#666", "#555"];
const RANK_ICONS = ["👑", "🥈", "🥉", "4", "5"];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] text-[#FFD700] tracking-widest mb-3 opacity-60">◆ SEASON 001 ◆ TOP RUNNERS ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">WANTED BOARD</h2>
          <h2 className="font-impact text-3xl sm:text-5xl tracking-wider" style={{ color: "#FFD700", textShadow: "0 0 16px rgba(255,215,0,0.4)" }}>
            LEADERBOARD
          </h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            THE CLIPS DON'T LIE.
          </p>
        </div>

        <div className="rounded border border-[#1a1a1a] overflow-hidden" style={{ backgroundColor: "#090909" }}>
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 border-b border-[#141414] bg-[#0a0a0a]">
            <div className="col-span-1 font-mono text-[9px] text-[#333] tracking-wider">#</div>
            <div className="col-span-3 font-mono text-[9px] text-[#333] tracking-wider">CREATOR</div>
            <div className="col-span-3 font-mono text-[9px] text-[#333] tracking-wider hidden sm:block">BOUNTY</div>
            <div className="col-span-2 font-mono text-[9px] text-[#333] tracking-wider">VIEWS</div>
            <div className="col-span-2 font-mono text-[9px] text-[#333] tracking-wider">REWARD</div>
            <div className="col-span-1 font-mono text-[9px] text-[#333] tracking-wider hidden sm:block">STATUS</div>
          </div>

          {LEADERS.map((l, i) => (
            <div
              key={l.handle}
              className="grid grid-cols-12 gap-2 items-center px-4 sm:px-6 py-4 border-b border-[#0d0d0d] transition-all"
              style={{ backgroundColor: i === 0 ? "rgba(255,215,0,0.03)" : "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(57,255,20,0.03)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = i === 0 ? "rgba(255,215,0,0.03)" : "transparent"; }}
            >
              {/* Rank */}
              <div className="col-span-1">
                <span className="font-impact text-xl" style={{ color: RANK_COLORS[i] }}>{RANK_ICONS[i]}</span>
              </div>

              {/* Handle */}
              <div className="col-span-3">
                <div className="font-mono text-xs font-bold text-white">{l.handle}</div>
                {l.badge && (
                  <div
                    className="font-mono text-[8px] px-1.5 py-0.5 rounded mt-1 inline-block font-bold"
                    style={{ color: "#000", backgroundColor: "#FFD700" }}
                  >
                    {l.badge}
                  </div>
                )}
              </div>

              {/* Bounty */}
              <div className="col-span-3 hidden sm:block">
                <div className="font-mono text-[10px] text-[#666]">{l.bounty}</div>
              </div>

              {/* Views */}
              <div className="col-span-2">
                <div className="font-impact text-base" style={{ color: "#BF5FFF", textShadow: "0 0 6px rgba(191,95,255,0.4)" }}>
                  {l.views}
                </div>
              </div>

              {/* Reward */}
              <div className="col-span-2">
                <div className="font-impact text-base" style={{ color: "#39FF14", textShadow: "0 0 6px rgba(57,255,20,0.4)" }}>
                  {l.reward}
                </div>
              </div>

              {/* Status */}
              <div className="col-span-1 hidden sm:block">
                <span
                  className="font-mono text-[8px] px-1.5 py-0.5 rounded font-bold"
                  style={
                    l.status === "PAID"
                      ? { color: "#39FF14", backgroundColor: "rgba(57,255,20,0.12)" }
                      : { color: "#FFD700", backgroundColor: "rgba(255,215,0,0.12)" }
                  }
                >
                  {l.status}
                </span>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 bg-[#080808] text-center">
            <p className="font-mono text-[9px] text-[#333] tracking-wider">
              LEADERBOARD UPDATED DAILY // YOUR CLIP COULD BE HERE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
