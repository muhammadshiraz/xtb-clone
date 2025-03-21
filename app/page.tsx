import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Offer from "@/components/sections/Offer";
import Solutions from "@/components/sections/Solutions";
import Fees from "@/components/sections/Fees";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Offer />
      <Solutions />
      <Fees />
      {/* Add other sections */}
    </main>
  );
}
