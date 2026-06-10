"use client";
import { useState } from "react";

const BOUNTY_OPTIONS = [
  "#001 — The Onboard ($25)",
  "#002 — Ticker Test ($50)",
  "#003 — Chart Therapist ($75)",
  "#004 — Gas Station Oracle ($150)",
  "#005 — The Side Quest NPC ($200)",
  "#006 — Memecoin Confessional ($400)",
  "#007 — Crypto Help Desk ($500)",
  "#008 — Boss: Street Game Show ($1,000)",
];

export default function SubmitClipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    handle: "",
    wallet: "",
    twitter: "",
    tiktok: "",
    bounty: "",
    description: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.consent || !form.handle || !form.bounty) return;
    setSubmitted(true);
  };

  const inputClass = `
    w-full bg-[#0a0a0a] border border-[#1f1f1f] text-[#ddd] font-mono text-xs px-3 py-2.5 rounded
    focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_8px_rgba(57,255,20,0.2)]
    transition-all placeholder-[#333] tracking-wide
  `;

  return (
    <section id="submit" className="py-20 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-[10px] text-[#39FF14] tracking-widest mb-3 opacity-60">◆ SUBMIT TO THE BOARD ◆</div>
          <h2 className="font-impact text-4xl sm:text-5xl tracking-wider text-white">SUBMIT YOUR CLIP</h2>
          <p className="font-mono text-sm text-[#555] mt-3 tracking-wider">
            POST IT. LINK IT. CLAIM IT.
          </p>
        </div>

        {submitted ? (
          <div
            className="relative p-8 text-center rounded border"
            style={{
              borderColor: "#39FF14",
              backgroundColor: "rgba(57,255,20,0.06)",
              boxShadow: "0 0 40px rgba(57,255,20,0.2)"
            }}
          >
            {/* HUD corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]" />

            <div className="font-mono text-[10px] text-[#39FF14] tracking-widest mb-4 opacity-60 animate-pulse">
              ◆ TRANSMISSION RECEIVED ◆
            </div>

            <div
              className="font-impact text-3xl sm:text-5xl tracking-wider mb-4"
              style={{ color: "#39FF14", textShadow: "0 0 20px #39FF14" }}
            >
              CLIP SUBMITTED
            </div>
            <p className="font-impact text-lg sm:text-2xl tracking-wider text-white mb-2">TO THE WANTED BOARD.</p>
            <p className="font-mono text-xs text-[#666] mt-4">
              The community votes. Winners get paid. Keep watching the board.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 font-mono text-xs text-[#444] hover:text-[#39FF14] tracking-wider transition-colors"
            >
              ← SUBMIT ANOTHER CLIP
            </button>
          </div>
        ) : (
          <div
            className="relative p-6 sm:p-8 rounded border border-[#1a1a1a]"
            style={{ backgroundColor: "#090909" }}
          >
            <div className="flex flex-col gap-4">
              {/* Handle */}
              <div>
                <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                  ◆ CREATOR HANDLE / NAME *
                </label>
                <input
                  name="handle"
                  value={form.handle}
                  onChange={handleChange}
                  placeholder="@yourtwitterhandle"
                  className={inputClass}
                />
              </div>

              {/* Wallet */}
              <div>
                <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                  ◆ WALLET ADDRESS (FOR PAYMENT)
                </label>
                <input
                  name="wallet"
                  value={form.wallet}
                  onChange={handleChange}
                  placeholder="0x... or Solana address"
                  className={inputClass}
                />
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                    ◆ X / TWITTER LINK
                  </label>
                  <input
                    name="twitter"
                    value={form.twitter}
                    onChange={handleChange}
                    placeholder="https://x.com/..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                    ◆ TIKTOK / REELS / SHORTS
                  </label>
                  <input
                    name="tiktok"
                    value={form.tiktok}
                    onChange={handleChange}
                    placeholder="https://tiktok.com/..."
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Bounty selector */}
              <div>
                <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                  ◆ BOUNTY *
                </label>
                <select
                  name="bounty"
                  value={form.bounty}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">Select a bounty...</option>
                  {BOUNTY_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="font-mono text-[10px] text-[#555] tracking-widest mb-1.5 block">
                  ◆ SHORT DESCRIPTION
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What happened? What was the best moment?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Consent checkbox */}
              <div
                className="flex items-start gap-3 p-4 rounded border border-[#1a1a1a]"
                style={{ backgroundColor: "#050505" }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#39FF14] cursor-pointer"
                  />
                </div>
                <label htmlFor="consent" className="font-mono text-[10px] text-[#666] leading-relaxed cursor-pointer">
                  I confirm this clip was <span className="text-[#39FF14]">legal</span> and <span className="text-[#39FF14]">consensual</span>, and did not involve harassment, assault, threats, weapons, theft, property damage, or non-consensual filming. All participants were willing. If anyone said no, I stopped.
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!form.consent || !form.handle || !form.bounty}
                className="w-full font-impact text-xl tracking-widest py-3 rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: form.consent && form.handle && form.bounty ? "#39FF14" : "#1a1a1a",
                  color: form.consent && form.handle && form.bounty ? "#000" : "#444",
                  boxShadow: form.consent && form.handle && form.bounty ? "0 0 20px rgba(57,255,20,0.4)" : "none",
                }}
              >
                SUBMIT CLIP TO THE BOARD
              </button>

              <p className="font-mono text-[9px] text-[#333] text-center tracking-wider">
                CLIPS REVIEWED BY COMMUNITY // WINNERS ANNOUNCED ON X
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
