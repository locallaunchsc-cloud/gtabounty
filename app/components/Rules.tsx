"use client";

const RULES = [
  { icon: "✗", rule: "No touching strangers without consent", detail: "Any physical contact = mission failed. End it." },
  { icon: "✗", rule: "No sexual harassment or sexual content", detail: "Non-consensual sexual anything is disqualified and reported." },
  { icon: "✗", rule: "No threats, weapons, or property damage", detail: "Chaos is content. Destruction is a felony." },
  { icon: "✗", rule: "No harassing workers or blocking businesses", detail: "They're on the clock. Respect that." },
  { icon: "✗", rule: "No filming people who clearly say no", detail: "Camera down. Mission over. No debate." },
  { icon: "✗", rule: "No fake emergencies", detail: "911 is not a prop." },
  { icon: "✗", rule: "No hate, slurs, or targeting protected groups", detail: "This ain't that. Violators are banned and reported." },
  { icon: "✗", rule: "No targeting homeless or vulnerable people", detail: "Engagement off someone's suffering is not a bounty." },
  { icon: "✓", rule: "If someone says no — the mission ends", detail: "Full stop. No exceptions. That's the code.", isGreen: true },
];

export default function Rules() {
  return (
    <section id="rules" className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] text-[#FF3131] tracking-widest mb-3 opacity-70">◆ NON-NEGOTIABLE ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">
            FUNNY IS BULLISH.
          </h2>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider" style={{ color: "#FF3131", textShadow: "0 0 16px rgba(255,49,49,0.4)" }}>
            CHARGES ARE BEARISH.
          </h2>
          <p className="font-mono text-sm text-[#555] mt-4 tracking-wider max-w-xl mx-auto">
            GTABOUNTY is for legal, consensual, funny public content only. This is the street code. It is not optional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RULES.map((r, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-4 rounded border transition-all ${r.isGreen ? "border-[#39FF14]/30 bg-[#39FF14]/04" : "border-[#1a1a1a]"}`}
              style={{
                backgroundColor: r.isGreen ? "rgba(57,255,20,0.04)" : "#090909",
                gridColumn: r.isGreen ? "1 / -1" : "auto",
              }}
            >
              <span
                className="font-impact text-2xl flex-shrink-0 mt-0.5"
                style={{
                  color: r.isGreen ? "#39FF14" : "#FF3131",
                  textShadow: r.isGreen ? "0 0 8px #39FF14" : "0 0 8px #FF3131",
                }}
              >
                {r.icon}
              </span>
              <div>
                <div className={`font-impact text-sm sm:text-base tracking-wider ${r.isGreen ? "text-[#39FF14]" : "text-white"}`}>
                  {r.rule}
                </div>
                <div className="font-mono text-[10px] text-[#555] mt-1 leading-relaxed">{r.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission code callout */}
        <div className="mt-8 p-4 rounded border border-[#FFD700]/20 text-center" style={{ backgroundColor: "rgba(255,215,0,0.04)" }}>
          <p className="font-mono text-xs text-[#FFD700] tracking-wider">
            CLIPS THAT VIOLATE THESE RULES WILL BE DISQUALIFIED AND REPORTED. NO EXCEPTIONS.
            <br />
            <span className="text-[#555] mt-1 block">CONSENT REQUIRED. NPC ENERGY ENCOURAGED. CHARGES ARE NOT WELCOME.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
