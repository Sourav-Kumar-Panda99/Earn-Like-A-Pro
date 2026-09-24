import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CommunityHighlights } from "@/components/CommunityHighlights";
import { Benefits } from "@/components/Benefits";
import { TelegramPreview } from "@/components/TelegramPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CommunityHighlights />
        <Benefits />
        <TelegramPreview />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
