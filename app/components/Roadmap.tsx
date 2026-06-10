"use client";

const PHASES = [
  {
    num: "01",
    label: "LAUNCHED",
    title: "LAUNCH THE WANTED BOARD",
    desc: "8 bounties live. Season 001 active. The timeline is the map.",
    color: "#39FF14",
    done: true,
  },
  {
    num: "02",
    label: "INCOMING",
    title: "DAILY BOUNTIES",
    desc: "New missions drop every 24 hours. Different levels. Different cities. No two days the same.",
    color: "#39FF14",
    done: false,
  },
  {
    num: "03",
    label: "INCOMING",
    title: "CREATOR LEADERBOARD",
    desc: "Season rankings. City rankings. Most viral clip gets its own bounty named after them.",
    color: "#FFD700",
    done: false,
  },
  {
    num: "04",
    label: "BUILDING",
    title: "CITY VS CITY MISSIONS",
    desc: "Atlanta vs Miami. NYC vs LA. City-specific bounties. The map heats up.",
    color: "#FF8C00",
    done: false,
  },
  {
    num: "05",
    label: "COMING",
    title: "BOSS BOUNTY EVENTS",
    desc: "Live bounty events. IRL pop-ups. The board leaves the timeline.",
    color: "#FF3131",
    done: false,
  },
  {
    num: "06",
    label: "ENDGAME",
    title: "THE TIMELINE BECOMES THE MAP",
    desc: "Full clip economy. Brand-sponsored bounties. Every city. Everywhere.",
    color: "#BF5FFF",
    done: false,
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] text-[#BF5FFF] tracking-widest mb-3 opacity-60">◆ THE MISSION PATH ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">ROADMAP</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            WHERE IT'S GOING. WHEN IT'S GETTING THERE.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1a1a1a] hidden sm:block" />

          <div className="flex flex-col gap-4">
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                className="relative flex gap-4 sm:gap-8 items-start p-5 rounded border border-[#1a1a1a] transition-all"
                style={{ backgroundColor: "#090909" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = phase.color;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${phase.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Phase number */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center font-impact text-base"
                    style={{
                      backgroundColor: phase.done ? phase.color : "transparent",
                      border: `2px solid ${phase.color}`,
                      color: phase.done ? "#000" : phase.color,
                      boxShadow: `0 0 8px ${phase.color}40`,
                    }}
                  >
                    {phase.done ? "✓" : phase.num}
                  </div>
                  <div
                    className="font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      color: phase.done ? "#000" : phase.color,
                      backgroundColor: phase.done ? phase.color : `${phase.color}20`,
                    }}
                  >
                    {phase.label}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-impact text-lg sm:text-xl tracking-wider text-white mb-2">{phase.title}</h3>
                  <p className="font-mono text-xs text-[#666] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
