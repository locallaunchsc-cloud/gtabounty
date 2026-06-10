"use client";

export default function StickySubmitButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 pointer-events-none">
      <a
        href="#submit"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full font-impact text-lg tracking-widest py-3.5 rounded text-black transition-all"
        style={{
          backgroundColor: "#39FF14",
          boxShadow: "0 0 30px rgba(57,255,20,0.7), 0 -4px 20px rgba(57,255,20,0.3)",
        }}
      >
        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
        SUBMIT CLIP
      </a>
    </div>
  );
}
