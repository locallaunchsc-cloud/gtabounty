# GTABOUNTY — Customization Guide

## Quick Start
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel
```bash
npx vercel
# or push to GitHub and import on vercel.com
```

---

## How to Customize

### 1. Contract Address
Edit `app/components/TokenSection.tsx`:
```tsx
// Find this line:
<div className="font-mono text-xs text-[#666] tracking-wider">CA: Coming Soon — Stay on the board</div>

// Replace with:
<div className="font-mono text-xs text-[#ddd] tracking-wider">CA: YOUR_CONTRACT_ADDRESS_HERE</div>
```

### 2. Social Links
Edit `app/components/TokenSection.tsx` and `app/components/Footer.tsx`:
Replace all `href="#"` with your actual links:
- X: `https://x.com/YOURHANDLE`
- Telegram: `https://t.me/YOURGROUP`
- Chart: `https://dexscreener.com/solana/YOUR_CA`

### 3. Bounty List & Rewards
Edit `app/components/FeaturedBounties.tsx`:
```tsx
const BOUNTIES: Bounty[] = [
  {
    id: "BOUNTY #001",
    title: "YOUR TITLE",
    level: 1,           // 1-5
    reward: "$25",
    bonus: "Bonus condition",
    mission: "Mission description",
    category: "NPC MISSION",
    status: "open",     // "open" | "hot" | "closing"
  },
  // ...add more
];
```

### 4. Brand Colors
Edit `tailwind.config.ts` and `app/globals.css`:
```css
:root {
  --neon: #39FF14;      /* primary neon green */
  --gold: #FFD700;      /* reward gold */
  --danger: #FF3131;    /* hot/danger red */
  --electric: #00F5FF;  /* accent blue */
  --purple: #BF5FFF;    /* accent purple */
}
```

### 5. Live Ticker Items
Edit `app/components/LiveTicker.tsx`:
```tsx
const TICKER_ITEMS = [
  { label: "YOUR MESSAGE", color: "#39FF14", prefix: "🔴 LIVE" },
  // ...
];
```

### 6. City Heat Rankings
Edit `app/components/CityHeat.tsx`:
```tsx
const CITIES = [
  { name: "YOUR CITY", state: "ST", clips: 50, bounties: 3, heat: 90, rank: 1, color: "#FF3131" },
  // ...
];
```

### 7. Leaderboard
Edit `app/components/Leaderboard.tsx` with real creator handles and stats.

### 8. Season Badge
Change "S01" and "SEASON 001" across components as seasons progress.

---

## File Structure
```
app/
├── page.tsx              — Main page (imports all sections)
├── layout.tsx            — HTML layout + metadata
├── globals.css           — Global styles, CSS vars, animations
└── components/
    ├── LiveTicker.tsx     — Top scrolling alert feed
    ├── Navbar.tsx         — Navigation bar
    ├── Hero.tsx           — Landing hero section
    ├── MissionCode.tsx    — "No victims. No charges." block
    ├── HowItWorks.tsx     — 3-step explainer
    ├── WantedLevels.tsx   — 5-star level system
    ├── FeaturedBounties.tsx — Bounty card grid with filters
    ├── CityHeat.tsx       — City vs city rankings
    ├── SubmitClipForm.tsx — Clip submission form
    ├── Rules.tsx          — Safety/legal rules
    ├── Leaderboard.tsx    — Creator rankings table
    ├── TokenSection.tsx   — $GTABOUNTY token info
    ├── Roadmap.tsx        — Phase roadmap
    ├── FAQ.tsx            — Accordion FAQ
    ├── Footer.tsx         — Site footer
    └── StickySubmit.tsx   — Mobile sticky CTA button
```
