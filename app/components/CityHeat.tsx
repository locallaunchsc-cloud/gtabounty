"use client";
import { useState, useEffect } from "react";

const CITIES = [
  { name: "ATLANTA", state: "GA", clips: 58, bounties: 3, heat: 97, rank: 1, color: "#FF3131" },
  { name: "MIAMI", state: "FL", clips: 47, bounties: 2, heat: 89, rank: 2, color: "#FF8C00" },
  { name: "HOUSTON", state: "TX", clips: 41, bounties: 2, heat: 82, rank: 3, color: "#FFD700" },
  { name: "NYC", state: "NY", clips: 36, bounties: 2, heat: 74, rank: 4, color: "#7FFF00" },
  { name: "LA", state: "CA", clips: 29, bounties: 1, heat: 63, rank: 5, color: "#39FF14" },
  { name: "COLUMBIA", state: "SC", clips: 18, bounties: 1, heat: 51, rank: 6, color: "#00F5FF" },
];

function HeatBar({ heat, color }: { heat: number; color: string }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(heat), 300);
    return () => clearTimeout(t);
  }, [heat]);

  return (
    <div className="relative h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      />
    </div>
  );
}

const RANK_ICONS = ["👑", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣"];

export default function CityHeat() {
  return (
    <section id="city-heat" className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] text-[#00F5FF] tracking-widest mb-3 opacity-60">◆ CITY VS CITY ◆ LIVE RANKINGS ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">CITY HEAT</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            WHICH CITY HAS THE MOST UNHINGED (AND LEGAL) CLIP GAME?
          </p>
        </div>

        {/* Map grid texture background */}
        <div
          className="relative rounded border border-[#1a1a1a] overflow-hidden"
          style={{ backgroundColor: "#090909" }}
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 border-b border-[#1a1a1a]">
            <div className="col-span-1 font-mono text-[9px] text-[#333] tracking-wider">RANK</div>
            <div className="col-span-3 font-mono text-[9px] text-[#333] tracking-wider">CITY</div>
            <div className="col-span-2 font-mono text-[9px] text-[#333] tracking-wider hidden sm:block">CLIPS</div>
            <div className="col-span-2 font-mono text-[9px] text-[#333] tracking-wider hidden sm:block">BOUNTIES</div>
            <div className="col-span-4 font-mono text-[9px] text-[#333] tracking-wider">HEAT INDEX</div>
          </div>

          {CITIES.map((city, i) => (
            <div
              key={city.name}
              className="grid grid-cols-12 gap-2 items-center px-4 sm:px-6 py-4 border-b border-[#0f0f0f] transition-all"
              style={{ backgroundColor: i === 0 ? "rgba(255,49,49,0.04)" : "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = `${city.color}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = i === 0 ? "rgba(255,49,49,0.04)" : "transparent";
              }}
            >
              {/* Rank */}
              <div className="col-span-1 font-impact text-lg" style={{ color: city.color }}>
                {RANK_ICONS[i]}
              </div>

              {/* City */}
              <div className="col-span-3">
                <div className="font-impact text-base sm:text-xl tracking-wider text-white">{city.name}</div>
                <div className="font-mono text-[9px] text-[#444]">{city.state}</div>
              </div>

              {/* Clips */}
              <div className="col-span-2 hidden sm:block">
                <div className="font-impact text-lg" style={{ color: city.color }}>{city.clips}</div>
                <div className="font-mono text-[9px] text-[#444]">CLIPS</div>
              </div>

              {/* Bounties */}
              <div className="col-span-2 hidden sm:block">
                <div className="font-impact text-lg text-white">{city.bounties}</div>
                <div className="font-mono text-[9px] text-[#444]">COMPLETED</div>
              </div>

              {/* Heat bar */}
              <div className="col-span-4 flex flex-col gap-1">
                <HeatBar heat={city.heat} color={city.color} />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px]" style={{ color: city.color }}>{city.heat}%</span>
                  {i === 0 && (
                    <span
                      className="font-mono text-[8px] px-1.5 py-0.5 rounded font-bold"
                      style={{ color: "#000", backgroundColor: city.color }}
                    >
                      LEADING
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="px-4 sm:px-6 py-4 bg-[#080808] flex items-center justify-between">
            <p className="font-mono text-[10px] text-[#444] tracking-wider">
              REPRESENT YOUR CITY. COMPLETE A BOUNTY.
            </p>
            <a
              href="#bounties"
              className="font-mono text-[10px] font-bold tracking-wider px-3 py-1.5 rounded border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all"
            >
              VIEW BOUNTIES
            </a>
          </div>
        </div>

        {/* Sub note */}
        <p className="text-center font-mono text-[10px] text-[#333] mt-4 tracking-wider">
          RANKINGS BASED ON SUBMITTED CLIPS & COMMUNITY VOTES // UPDATED DAILY
        </p>
      </div>
    </section>
  );
}
