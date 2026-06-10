"use client";
import { useState } from "react";

const STATUS_STYLES: Record<string, { color: string; bg: string; label: string }> = {
  open: { color: "#39FF14", bg: "rgba(57,255,20,0.12)", label: "OPEN" },
  hot: { color: "#FF3131", bg: "rgba(255,49,49,0.12)", label: "🔥 HOT" },
  closing: { color: "#FFD700", bg: "rgba(255,215,0,0.12)", label: "⚡ CLOSING SOON" },
};

const LEVEL_COLORS: Record<number, string> = {
  1: "#39FF14",
  2: "#7FFF00",
  3: "#FFD700",
  4: "#FF8C00",
  5: "#FF3131",
};

export interface Bounty {
  id: string;
  title: string;
  level: number;
  reward: string;
  bonus: string;
  mission: string;
  category: string;
  status: "open" | "hot" | "closing";
}

function Stars({ count }: { count: number }) {
  const color = LEVEL_COLORS[count] || "#FFD700";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function BountyCard({ bounty }: { bounty: Bounty }) {
  const color = LEVEL_COLORS[bounty.level];
  const status = STATUS_STYLES[bounty.status];

  return (
    <div
      className="relative flex flex-col border border-[#1a1a1a] rounded overflow-hidden transition-all duration-300 group"
      style={{ backgroundColor: "#0a0a0a" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = color;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${color}20, 0 4px 32px rgba(0,0,0,0.5)`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top color stripe */}
      <div className="h-0.5 w-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />

      {/* Header */}
      <div className="flex items-start justify-between gap-2 p-4 pb-3">
        <div>
          <div className="font-mono text-[9px] text-[#444] tracking-widest mb-1">{bounty.id}</div>
          <h3 className="font-impact text-base sm:text-lg tracking-wider text-white leading-tight">{bounty.title}</h3>
        </div>
        <div className="flex-shrink-0 text-right">
          <div
            className="font-mono text-[10px] font-bold px-2 py-0.5 rounded"
            style={{ color: status.color, backgroundColor: status.bg }}
          >
            {status.label}
          </div>
        </div>
      </div>

      {/* Stars + category */}
      <div className="flex items-center gap-3 px-4 pb-3">
        <Stars count={bounty.level} />
        <span className="font-mono text-[9px] text-[#444] tracking-wider uppercase">{bounty.category}</span>
      </div>

      {/* Reward */}
      <div className="px-4 pb-3">
        <div
          className="inline-flex items-center gap-2 font-impact text-2xl tracking-wider"
          style={{ color, textShadow: `0 0 12px ${color}60` }}
        >
          {bounty.reward}
        </div>
      </div>

      {/* Mission */}
      <div className="px-4 pb-3 flex-1">
        <div className="font-mono text-[9px] text-[#444] tracking-widest mb-1">▸ MISSION</div>
        <p className="font-mono text-xs text-[#888] leading-relaxed">{bounty.mission}</p>
      </div>

      {/* Bonus */}
      <div className="px-4 pb-4">
        <div
          className="font-mono text-[9px] px-2 py-1 rounded border"
          style={{ color: "#FFD700", borderColor: "rgba(255,215,0,0.2)", backgroundColor: "rgba(255,215,0,0.05)" }}
        >
          BONUS: {bounty.bonus}
        </div>
      </div>

      {/* Submit button */}
      <div className="px-4 pb-4">
        <a
          href="#submit"
          className="block w-full text-center font-impact tracking-widest text-sm py-2 rounded border transition-all"
          style={{
            borderColor: color,
            color: color,
            backgroundColor: `${color}10`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = color;
            (e.currentTarget as HTMLAnchorElement).style.color = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${color}10`;
            (e.currentTarget as HTMLAnchorElement).style.color = color;
          }}
        >
          SUBMIT CLIP
        </a>
      </div>
    </div>
  );
}

const BOUNTIES: Bounty[] = [
  {
    id: "BOUNTY #001",
    title: "THE ONBOARD",
    level: 1,
    reward: "$25",
    bonus: "+$10 if they ask 'is this legal?'",
    mission: "Explain Pump.fun or memecoins to a total stranger in 30 seconds. Willing participant only.",
    category: "NPC MISSION",
    status: "open",
  },
  {
    id: "BOUNTY #002",
    title: "TICKER TEST",
    level: 1,
    reward: "$50",
    bonus: "Funniest wrong answer gets extra",
    mission: "Get a willing stranger to say $GTABOUNTY and guess what it means.",
    category: "NPC MISSION",
    status: "hot",
  },
  {
    id: "BOUNTY #003",
    title: "CHART THERAPIST",
    level: 2,
    reward: "$75",
    bonus: "Best motivational quote wins",
    mission: "Show someone a red cooked chart and ask what life advice they'd give the trader.",
    category: "AWKWARD MISSION",
    status: "open",
  },
  {
    id: "BOUNTY #004",
    title: "GAS STATION ORACLE",
    level: 3,
    reward: "$150",
    bonus: "Best character gets pinned to the board",
    mission: "Ask 5 willing people at a gas station what coin they'd buy based only on the name. Get it on camera.",
    category: "TRENCH QUEST",
    status: "closing",
  },
  {
    id: "BOUNTY #005",
    title: "THE SIDE QUEST NPC",
    level: 3,
    reward: "$200",
    bonus: "Best NPC energy wins",
    mission: "Walk up to a willing stranger and say 'I need a side quest.' Complete whatever harmless mission they give you.",
    category: "TRENCH QUEST",
    status: "open",
  },
  {
    id: "BOUNTY #006",
    title: "MEMECOIN CONFESSIONAL",
    level: 4,
    reward: "$400",
    bonus: "Best confession gets pinned",
    mission: "Set up a tiny public booth. Ask willing people to confess their worst financial decision.",
    category: "WANTED MISSION",
    status: "hot",
  },
  {
    id: "BOUNTY #007",
    title: "CRYPTO HELP DESK",
    level: 4,
    reward: "$500",
    bonus: "Funniest confused person wins",
    mission: "Set up a public help desk sign: 'Ask Me About Memecoins.' Record reactions from willing participants.",
    category: "WANTED MISSION",
    status: "closing",
  },
  {
    id: "BOUNTY #008",
    title: "BOSS: STREET GAME SHOW",
    level: 5,
    reward: "$1,000",
    bonus: "Best crowd reaction wins the full bounty",
    mission: "Host a public 'Guess The Market Cap' game show with willing participants. Film the whole thing.",
    category: "BOSS BOUNTY",
    status: "hot",
  },
];

const FILTERS = [
  { label: "ALL", value: 0 },
  { label: "⭐ LVL 1", value: 1 },
  { label: "⭐⭐ LVL 2", value: 2 },
  { label: "⭐⭐⭐ LVL 3", value: 3 },
  { label: "⭐⭐⭐⭐ LVL 4", value: 4 },
  { label: "⭐⭐⭐⭐⭐ LVL 5", value: 5 },
];

export default function FeaturedBounties() {
  const [filter, setFilter] = useState(0);

  const filtered = filter === 0 ? BOUNTIES : BOUNTIES.filter((b) => b.level === filter);

  return (
    <section id="bounties" className="py-20 px-4 border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-[10px] text-[#FF3131] tracking-widest mb-3 opacity-70">◆ ACTIVE BOUNTIES ◆ SEASON 001 ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">THE WANTED BOARD</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            8 BOUNTIES. ONE TIMELINE. UNLIMITED CLIP POTENTIAL.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="font-mono text-[10px] tracking-wider px-3 py-1.5 rounded border transition-all"
              style={
                filter === f.value
                  ? { borderColor: "#39FF14", color: "#000", backgroundColor: "#39FF14" }
                  : { borderColor: "#2a2a2a", color: "#666", backgroundColor: "transparent" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((bounty) => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </div>
    </section>
  );
}
