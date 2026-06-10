import LiveTicker from "./components/LiveTicker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionCode from "./components/MissionCode";
import HowItWorks from "./components/HowItWorks";
import WantedLevels from "./components/WantedLevels";
import FeaturedBounties from "./components/FeaturedBounties";
import CityHeat from "./components/CityHeat";
import SubmitClipForm from "./components/SubmitClipForm";
import Rules from "./components/Rules";
import Leaderboard from "./components/Leaderboard";
import TokenSection from "./components/TokenSection";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickySubmit from "./components/StickySubmit";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LiveTicker />
      <Navbar />
      <Hero />
      <MissionCode />
      <HowItWorks />
      <WantedLevels />
      <FeaturedBounties />
      <CityHeat />
      <SubmitClipForm />
      <Rules />
      <Leaderboard />
      <TokenSection />
      <Roadmap />
      <FAQ />
      <Footer />
      <StickySubmit />
      {/* Mobile bottom padding for sticky button */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
