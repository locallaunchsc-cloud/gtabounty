"use client";

export default function MissionCode() {
  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative border-2 rounded p-6 sm:p-10 text-center overflow-hidden"
          style={{
            borderColor: "#39FF14",
            backgroundColor: "rgba(57,255,20,0.04)",
            boxShadow: "0 0 40px rgba(57,255,20,0.15), inset 0 0 40px rgba(57,255,20,0.03)"
          }}
        >
          {/* HUD corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]" />

          <div className="font-mono text-[10px] text-[#39FF14] tracking-widest mb-4 opacity-60">
            ◆ MISSION CODE ◆ SEASON 001 ◆ READ BEFORE YOU RUN ◆
          </div>

          <p
            className="font-impact text-4xl sm:text-6xl md:text-7xl tracking-wider text-white leading-tight mb-6"
          >
            NO VICTIMS.{" "}
            <span style={{ color: "#39FF14", textShadow: "0 0 20px #39FF14" }}>NO CHARGES.</span>{" "}
            <span style={{ color: "#FFD700", textShadow: "0 0 16px #FFD700" }}>NO BORING CLIPS.</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              {
                icon: "✓",
                color: "#39FF14",
                text: "Consent required on every mission",
              },
              {
                icon: "✓",
                color: "#39FF14",
                text: "NPC energy strongly encouraged",
              },
              {
                icon: "✓",
                color: "#39FF14",
                text: "Funny is bullish. Charges are bearish.",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 font-mono text-xs text-[#aaa] text-left p-3 rounded border border-[#1a1a1a]"
              >
                <span className="text-lg font-bold flex-shrink-0" style={{ color: item.color }}>
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-[#555] mt-6 tracking-wider">
            WE WANT VIRAL CLIPS, NOT POLICE REPORTS.
          </p>
        </div>
      </div>
    </section>
  );
}
