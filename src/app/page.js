"use client";

import Navbar from "@/components/Navbar";

import { useEffect, useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(Array.isArray(data) ? data : data.value || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workouts:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen bg-[#1e1e1f] text-white">
      {/* Main Website */}
      <div className="mx-auto min-h-screen max-w-[1174px] bg-[#0b0d0f]">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <main className="px-6 py-8">
          <section className="relative min-h-[430px] overflow-hidden rounded-[16px] border border-[#24282d] bg-[#15181c]">
            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[430px] items-center px-10 py-14 md:px-12">
              <div className="max-w-[600px]">
                <p className="mb-5 text-xs font-bold tracking-[0.12em] text-[#b6ff00]">
                  WORKOUT LIBRARY
                </p>

                <h1 className="max-w-[600px] text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[44px]">
                  TRAIN WITH INTENT. LOG
                  <br />
                  EVERY SET.
                </h1>

                <p className="mt-6 max-w-[470px] text-sm leading-6 text-[#9b9fa5]">
                  FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                  it into today's plan, and watch the week's work add up.
                </p>

                <a
                  href="#library"
                  className="mt-7 inline-flex rounded-full bg-[#b6ff00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#c5ff33]"
                >
                  BROWSE WORKOUTS
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <img
              src="/assets/banner.png"
              alt="Workout training"
              className="absolute right-6 top-1/2 h-[82%] w-[38%] -translate-y-1/2 object-contain md:right-10"
            />
          </section>

          {/* Library */}
          <section id="library" className="py-20">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold tracking-[0.12em] text-[#b6ff00]">
                THE LIBRARY
              </p>

              <h2 className="text-4xl font-black tracking-tight text-white">
                WORKOUTS
              </h2>

              <p className="mt-3 text-sm text-[#8e939a]">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            {/* Temporary cards */}
            {loading ? (
              <div className="flex min-h-[300px] items-center justify-center rounded-[14px] border border-[#24282d] bg-[#15181c]">
                <p className="text-sm text-[#8e939a]">Loading workouts...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                  <div
                    key={workout.id}
                    className="overflow-hidden rounded-[14px] border border-[#24282d] bg-[#15181c]"
                  >
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-[220px] w-full object-cover"
                    />

                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                          <span
                            key={muscle}
                            className="rounded-full border border-[#343941] px-3 py-1 text-[11px] text-[#9b9fa5]"
                          >
                            {muscle}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {workout.name}
                      </h3>

                      <p className="mt-2 text-sm text-[#8e939a]">
                        {workout.equipment}
                      </p>

                      <div className="mt-4 flex items-center gap-4 text-xs text-[#8e939a]">
                        <span>{workout.duration} min</span>
                        <span>{workout.caloriesBurned} cal</span>
                        <span>★ {workout.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#1d2024] px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="FitLog logo"
                className="h-5 w-5"
              />

              <span className="text-sm font-extrabold text-white">FITLOG</span>
            </div>

            <p className="text-xs text-[#666b72]">
              © 2026 FitLog. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
