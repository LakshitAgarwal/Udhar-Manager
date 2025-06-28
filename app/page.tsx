import { Spotlight } from "@/components/ui/spotlight-new";
import { NavbarComp } from "@/components/common/Navbar-comp";
import { Hero } from "@/components/landing/Hero";
import { Enhance } from "@/components/landing/Enhance";


export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <NavbarComp />
      <Hero />
      <Enhance />

    </div>
  );
}
