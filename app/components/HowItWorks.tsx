"use client";

const STEPS = [
  {
    num: "01",
    title: "PICK A BOUNTY",
    desc: "Browse the wanted board. Each bounty is a legal, funny, public challenge. Filter by wanted level and reward size.",
    color: "#39FF14",
    detail: "No weird missions. No assault. No arrests.",
  },
  {
    num: "02",
    title: "COMPLETE THE MISSION",
    desc: "Hit the streets. Get the clip. All missions require willing participants. If someone says no, mission ends. Consent is non-negotiable.",
    color: "#FFD700",
    detail: "NPC energy only. Chaos has rules.",
  },
  {
    num: "03",
    title: "POST & CLAIM",
    desc: "Post the clip on X or TikTok. Submit the link to the board. Community votes. Winners get paid.",
    color: "#00F5FF",
    detail: "The timeline decides the winner.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 relative border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-[10px] text-[#39FF14] tracking-widest mb-3 opacity-60">◆ MISSION BRIEFING ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">HOW IT WORKS</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">THREE STEPS. ZERO EXCUSES. MAX CLIP POTENTIAL.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative p-6 rounded border border-[#1a1a1a] hover:border-opacity-100 transition-all group overflow-hidden"
              style={{
                backgroundColor: "#0a0a0a",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = step.color;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${step.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1a1a1a";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Step number bg */}
              <div
                className="absolute top-4 right-4 font-impact text-7xl opacity-5 select-none"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              {/* Top indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="font-impact text-2xl"
                  style={{ color: step.color, textShadow: `0 0 12px ${step.color}` }}
                >
                  {step.num}
                </div>
                <div className="flex-1 h-px" style={{ backgroundColor: step.color, opacity: 0.3 }} />
              </div>

              <h3 className="font-impact text-xl sm:text-2xl tracking-wider text-white mb-3">{step.title}</h3>
              <p className="font-mono text-xs text-[#888] leading-relaxed mb-4">{step.desc}</p>

              <div
                className="font-mono text-[10px] font-bold tracking-wider px-2 py-1 rounded"
                style={{ color: step.color, backgroundColor: `${step.color}15`, border: `1px solid ${step.color}30` }}
              >
                {step.detail}
              </div>

              {/* Arrow connector */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 font-mono text-[#333] text-lg">▶</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
