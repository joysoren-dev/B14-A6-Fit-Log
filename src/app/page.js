"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c4.5 0 7-3 7-6.8 0-3.2-1.8-5.4-4.2-7.7.1 2.2-.8 3.6-2.1 4.5.2-3.6-1.6-6.8-4.1-8.9.1 3.5-2.6 5.8-2.6 9.3C6 18.7 8.7 22 12 22Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

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
    <main className="min-h-screen bg-[#0b0d0f] text-white">
      <div className="mx-auto max-w-[1174px]">
        {/* Hero Section */}
        <div className="px-6 py-8">
          <section className="relative min-h-[430px] overflow-hidden rounded-[16px] border border-[#24282d] bg-[#15181c]">
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
                  it into today&apos;s plan, and watch the week&apos;s work add
                  up.
                </p>

                <a
                  href="#library"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#b6ff00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#c5ff33]"
                >
                  BROWSE WORKOUTS
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

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

            {loading ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[14px] border border-[#24282d] bg-[#15181c]">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#24282d] border-t-[#b6ff00]" />
                <p className="mt-4 text-sm text-[#8e939a]">
                  Loading workouts...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                  <Link
                    key={workout.id}
                    href={`/workout/${workout.id}`}
                    className="block overflow-hidden rounded-[14px] border border-[#24282d] bg-[#15181c] transition hover:border-[#b6ff00]"
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
                            className="rounded-full bg-[#b6ff00] px-3 py-1 text-[10px] font-bold text-black"
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

                      <div className="mt-4 flex items-center gap-4 text-xs text-[#9b9fa5]">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon />
                          {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FlameIcon />
                          {workout.caloriesBurned} cal
                        </span>

                        <span className="flex items-center gap-1.5">
                          <StarIcon />
                          {workout.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
