"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutsActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1d2024] bg-[#0b0d0f]">
      <div className="mx-auto max-w-[1174px] px-4 sm:px-6">
        <div className="flex h-[74px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <img src="/assets/logo.png" alt="FitLog logo" className="h-5 w-5" />

            <span className="text-[17px] font-extrabold tracking-tight text-white">
              FITLOG
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 sm:flex">
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isWorkoutsActive
                  ? "border border-[#42464d] text-[#b6ff00]"
                  : "border border-transparent text-[#8e939a] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isPlanActive
                  ? "border border-[#42464d] text-[#b6ff00]"
                  : "border border-transparent text-[#8e939a] hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <span className="text-xs text-[#9b9fa5] sm:text-sm">Plan</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b6ff00] text-[11px] font-bold text-black">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <span className="text-xs text-[#9b9fa5] sm:text-sm">Saved</span>

              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#42464d] text-[11px] font-bold text-[#9b9fa5]">
                {saved.length}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#42464d] text-[#b6ff00] sm:hidden"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-[#1d2024] py-3 sm:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                  isWorkoutsActive
                    ? "bg-[#15181c] text-[#b6ff00]"
                    : "text-[#8e939a]"
                }`}
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                  isPlanActive
                    ? "bg-[#15181c] text-[#b6ff00]"
                    : "text-[#8e939a]"
                }`}
              >
                My Plan
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
