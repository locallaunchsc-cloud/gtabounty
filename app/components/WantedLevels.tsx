"use client";

const LEVELS = [
  {
    stars: 1,
    name: "NPC MISSION",
    range: "$5 – $25",
    diff: "ENTRY LEVEL",
    color: "#39FF14",
    desc: "Easy public interactions. No sweat.",
    examples: [
      "Explain Pump.fun to a stranger in 30 seconds",
      "Get someone to say the ticker",
      "Ask a cashier to rate the coin name",
    ],
  },
  {
    stars: 2,
    name: "AWKWARD MISSION",
    range: "$25 – $75",
    diff: "MILD CRINGE",
    color: "#7FFF00",
    desc: "Embarrassing but harmless. Deploy the audacity.",
    examples: [
      "Ask strangers if memecoins are a red flag",
      "Wear a sign that says 'I bought the top'",
      "Get someone to roast your portfolio",
    ],
  },
  {
    stars: 3,
    name: "TRENCH QUEST",
    range: "$75 – $200",
    diff: "PUBLIC CONFIDENCE",
    color: "#FFD700",
    desc: "You need actual courage for this one.",
    examples: [
      "Ask 5 people what coin they'd ape based on name only",
      "Get an old head to explain memecoins",
      "Host a 30-second pitch battle with strangers",
    ],
  },
  {
    stars: 4,
    name: "WANTED MISSION",
    range: "$200 – $500",
    diff: "BIG SPECTACLE",
    color: "#FF8C00",
    desc: "You're making a scene. A legal one.",
    examples: [
      "Set up a tiny 'Crypto Help Desk'",
      "Dress like a side-quest NPC in public",
      "Host a street debate on memecoins vs lottery tickets",
    ],
  },
  {
    stars: 5,
    name: "BOSS BOUNTY",
    range: "$500 – $2,000+",
    diff: "LEGENDARY",
    color: "#FF3131",
    desc: "Clip this and the timeline remembers forever.",
    examples: [
      "Create a public game show with willing strangers",
      "Get 20 people to join a chant",
      "Throw a pop-up challenge event",
    ],
  },
];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? color : "#1a1a1a"}
          style={i < count ? { filter: `drop-shadow(0 0 4px ${color})` } : {}}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function WantedLevels() {
  return (
    <section id="wanted-levels" className="py-20 px-4 relative border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] text-[#FFD700] tracking-widest mb-3 opacity-60">◆ THREAT ASSESSMENT SYSTEM ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">WANTED LEVEL SYSTEM</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            MORE STARS = BIGGER BOUNTY = MORE UNHINGED (LEGALLY)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LEVELS.map((level) => (
            <div
              key={level.stars}
              className="relative p-5 rounded border border-[#1a1a1a] flex flex-col gap-3 transition-all cursor-default"
              style={{ backgroundColor: "#0a0a0a" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = level.color;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${level.color}25, 0 0 48px ${level.color}10`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Threat level badge */}
              <div
                className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded self-start"
                style={{ color: level.color, backgroundColor: `${level.color}20`, border: `1px solid ${level.color}40` }}
              >
                LVL {level.stars}
              </div>

              <Stars count={level.stars} color={level.color} />

              <div>
                <div className="font-impact text-sm tracking-wider text-white">{level.name}</div>
                <div className="font-mono text-[10px] text-[#555] mt-0.5">{level.diff}</div>
              </div>

              <div
                className="font-impact text-lg tracking-wider"
                style={{ color: level.color, textShadow: `0 0 8px ${level.color}60` }}
              >
                {level.range}
              </div>

              <p className="font-mono text-[10px] text-[#666] leading-relaxed">{level.desc}</p>

              <div className="border-t border-[#1a1a1a] pt-3 flex flex-col gap-1.5">
                {level.examples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span style={{ color: level.color }} className="text-[10px] flex-shrink-0 mt-0.5">▸</span>
                    <span className="font-mono text-[10px] text-[#666] leading-tight">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
