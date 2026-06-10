import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTABOUNTY — Real-World Bounties for Viral Clips",
  description: "GTABOUNTY turns the timeline into a mission board. Complete legal side quests, post the clip, and win rewards. Side quests for the trenches.",
  keywords: "GTABOUNTY, memecoin, bounty board, viral clips, side quests, crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
