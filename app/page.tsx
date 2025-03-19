import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
//import InvestmentPlans from "@/components/sections/InvestmentPlans";
// Import other sections

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Add other sections */}
    </main>
  );
}
