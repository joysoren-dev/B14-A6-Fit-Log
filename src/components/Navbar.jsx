"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const isWorkoutsActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <nav className="w-full border-b border-[#1d2024] bg-[#0b0d0f]">
      <div className="mx-auto flex h-[74px] max-w-[1174px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="FitLog logo" className="h-5 w-5" />

          <span className="text-[17px] font-extrabold tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1">
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

        {/* Plan & Saved Counters */}
        <div className="flex items-center gap-6">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-sm text-[#9b9fa5]">Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b6ff00] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-sm text-[#9b9fa5]">Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#42464d] text-[11px] font-bold text-[#9b9fa5]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
