"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
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
import Link from "next/link";
import { useState } from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export const NavbarComp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isSignedIn, user } = useUser();

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

  const UserAvatar = () => (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
      >
        <Image
          src={user?.imageUrl || "/placeholder-avatar.png"}
          alt={user?.fullName || "User"}
          width={32}
          height={32}
          className="rounded-full border-2 border-gray-600 hover:border-gray-400 transition-colors"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            <p className="font-semibold">{user?.fullName}</p>
            <p className="text-gray-500 dark:text-gray-400">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <SignOutButton>
            <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  );

  const LoginButton = () => (
    <Link href="/sign-in">
      <div className="flex items-center gap-4">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="text-white px-3 py-0.5 cursor-pointer"
        >
          Login
        </HoverBorderGradient>
      </div>
    </Link>
  );

  return (
    <div>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {isSignedIn ? <UserAvatar /> : <LoginButton />}
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

            {isSignedIn ? (
              <div className="flex w-full flex-col gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 px-2">
                  <Image
                    src={user?.imageUrl || "/placeholder-avatar.png"}
                    alt={user?.fullName || "User"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {user?.fullName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {user?.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-full text-left px-2 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                    Dashboard
                  </div>
                </Link>
                <SignOutButton>
                  <button
                    className="w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            ) : (
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
            )}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};
