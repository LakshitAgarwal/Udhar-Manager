import { Spotlight } from "@/components/ui/spotlight-new";
import { NavbarComp } from "@/components/common/Navbar-comp";
import { Hero } from "@/components/landing/Hero";
import { WhatWeOffer } from "@/components/landing/WhatWeOffer";
import { Enhance } from "@/components/landing/Enhance";
import { Reviews } from "@/components/landing/Reviews";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <NavbarComp />
      <Hero />
      <Enhance />
      <WhatWeOffer />
      <Reviews />
    </div>
  );
}
