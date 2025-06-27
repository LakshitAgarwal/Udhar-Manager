"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Cover } from "@/components/ui/cover";
// import { Spotlight } from "@/components/ui/spotlight";
import { Spotlight } from "@/components/ui/spotlight-new";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Spotlight />

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="text-white px-6 py-1 cursor-pointer"
            >
              Login
            </HoverBorderGradient>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </HoverBorderGradient>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-36 px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-tight">
            Track your udhaar. Get your <Cover>paisa back.</Cover>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mt-7 max-w-2xl mx-auto leading-relaxed">
            Forget awkward follow-ups — add the udhaar details once, and we’ll
            remind them via WhatsApp when it’s due.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-3 rounded-full bg-white dark:bg-black text-black dark:text-white font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border border-neutral-200 dark:border-neutral-800">
              Start Managing Debt
            </button>
            <button className="px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
              See How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 px-4">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white">
                Everything you need to become debt-free
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Powerful tools designed to simplify debt management and
                accelerate your path to financial freedom
              </p>
            </div>
          }
        >
          <div className="mx-auto rounded-2xl p-4 bg-neutral-900 dark:bg-neutral-100 min-h-96">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Feature 1 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black">
                  Smart Tracking
                </h3>
                <p className="text-neutral-400 dark:text-neutral-600">
                  Automatically track all your debts, payments, and progress in
                  one secure dashboard
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black">
                  Payoff Strategies
                </h3>
                <p className="text-neutral-400 dark:text-neutral-600">
                  AI-powered recommendations using snowball, avalanche, and
                  custom strategies
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black">
                  Save Money
                </h3>
                <p className="text-neutral-400 dark:text-neutral-600">
                  Calculate interest savings and find the fastest way to
                  eliminate debt
                </p>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}
