"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "What is GTABOUNTY?",
    a: "GTABOUNTY is a real-world bounty board for viral clips. Pick a mission, complete it legally and consensually, post the clip, and win rewards. Think GTA side quests but legal, funny, and filmed.",
  },
  {
    q: "How do I win a bounty?",
    a: "Complete a bounty mission with willing participants, film it, post the clip on X or TikTok, then submit the link on the board. Community votes decide the winner. Best clip gets paid.",
  },
  {
    q: "Are the bounties legal?",
    a: "Yes. Every single one. That's the whole point. Funny is bullish. Charges are bearish. All missions require willing participants. If someone says no, the mission ends. Period.",
  },
  {
    q: "Can I submit clips from any city?",
    a: "Anywhere. Any city. Any country. That said, the City Heat section tracks which cities are putting up the most clips. Represent your city and climb the board.",
  },
  {
    q: "How are winners picked?",
    a: "Community votes on X + view count + vibe. The funniest, most creative, most unhinged (but fully legal and consensual) clips win. No boring clips. No victims. No charges.",
  },
  {
    q: "Is $GTABOUNTY live?",
    a: "Contract coming soon. Season 001 and the bounty board are live now. Join X and Telegram to get the CA when it drops.",
  },
  {
    q: "Can brands sponsor bounties?",
    a: "Yes. Brand-sponsored bounties are in the roadmap. If you want a custom bounty with your brand attached, reach out on X or Telegram.",
  },
  {
    q: "What content is banned?",
    a: "Assault, harassment, threats, property damage, weapons, non-consensual filming, sexual misconduct, targeting vulnerable people, hate speech, or anything that could get someone arrested or hurt. Violators are banned and reported.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] text-[#00F5FF] tracking-widest mb-3 opacity-60">◆ FREQUENTLY ASKED ◆</div>
          <h2 className="font-impact text-4xl sm:text-6xl tracking-wider text-white">FAQ</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            GOT QUESTIONS? HERE'S THE BRIEFING.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-[#1a1a1a] rounded overflow-hidden transition-all"
              style={{ backgroundColor: "#090909" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-all"
                onClick={() => setOpen(open === i ? null : i)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(57,255,20,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                }}
              >
                <span className="font-impact text-sm sm:text-base tracking-wider text-white">{faq.q}</span>
                <span
                  className="font-impact text-xl flex-shrink-0 transition-transform"
                  style={{
                    color: open === i ? "#39FF14" : "#444",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    textShadow: open === i ? "0 0 8px #39FF14" : "none",
                  }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-5 pb-4 border-t border-[#141414]">
                  <p className="font-mono text-xs text-[#888] leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
