"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";

function ClockIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
    >
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function MyPlan() {
  const {
    plan,
    saved,
    completed = [],
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    showToast,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const workouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0b0d0f] px-6 py-10 text-white">
      <div className="mx-auto max-w-[1174px]">
        {/* Header */}
        <section className="mb-9">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#b6ff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="text-4xl font-black uppercase tracking-[-0.03em] md:text-[42px]">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#8e939a]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Metrics */}
        <section className="mb-8 overflow-hidden rounded-[14px] border border-[#24282d] bg-[#15181c]">
          <div className="grid grid-cols-1 divide-y divide-[#24282d] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="px-5 py-5 md:px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#727780]">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-black leading-none text-[#b6ff00]">
                {plan.length}
              </p>
            </div>

            <div className="px-5 py-5 md:px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#727780]">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-black leading-none text-white">
                {totalMinutes}
              </p>
            </div>

            <div className="px-5 py-5 md:px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#727780]">
                Calories
              </p>

              <p className="mt-2 text-3xl font-black leading-none text-white">
                {totalCalories}
              </p>
            </div>
          </div>
        </section>

        {/* Tabs + Sort */}
        <div className="mb-4 flex flex-col gap-4 border-b border-[#24282d] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1 rounded-[10px] border border-[#24282d] bg-[#15181c] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-[7px] px-4 py-2 text-xs font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#24282d] text-white"
                  : "text-[#777d85] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-[7px] px-4 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#24282d] text-white"
                  : "text-[#777d85] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#777d85]">Sort By</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="appearance-none rounded-full border border-[#42464d] bg-[#15181c] py-2 pl-4 pr-9 text-xs font-semibold text-white outline-none transition focus:border-[#b6ff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <ChevronDownIcon />
            </div>
          </div>
        </div>

        {/* Workout List Container */}
        <section className="rounded-[14px] border border-[#24282d] bg-[#111417] p-3 md:p-4">
          {sortedWorkouts.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[10px] border border-[#24282d] bg-[#15181c] px-6 text-center">
              <p className="text-[11px] font-bold tracking-[0.14em] text-[#b6ff00]">
                NOTHING HERE YET
              </p>

              <p className="mt-3 max-w-[420px] text-sm leading-6 text-[#8e939a]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 rounded-full bg-[#b6ff00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#c5ff33]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedWorkouts.map((workout) => {
                const isDone = completed.includes(workout.id);

                return (
                  <article
                    key={workout.id}
                    className="rounded-[13px] border border-[#2a2e34] bg-[#15181c] p-3 transition hover:border-[#3a3f46] md:p-4"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                      {/* Thumbnail */}
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-[150px] w-full shrink-0 rounded-[10px] object-cover sm:h-[170px] lg:h-[94px] lg:w-[140px]"
                      />

                      {/* Workout Information */}
                      <div className="min-w-0 flex-1">
                        <h2 className="truncate text-base font-bold uppercase tracking-tight text-white">
                          {workout.name}
                        </h2>

                        <p className="mt-1 text-xs text-[#7f858d]">
                          {workout.equipment}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-[#9b9fa5]">
                          <span className="flex items-center gap-1.5 text-[#b6ff00]">
                            <ClockIcon />
                            <span className="text-[#9b9fa5]">
                              {workout.duration} min
                            </span>
                          </span>

                          <span className="flex items-center gap-1.5 text-[#b6ff00]">
                            <FlameIcon />
                            <span className="text-[#9b9fa5]">
                              {workout.caloriesBurned} kcal
                            </span>
                          </span>

                          <span className="flex items-center gap-1.5 text-[#b6ff00]">
                            <StarIcon />
                            <span className="text-[#9b9fa5]">
                              {workout.rating}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">
                        <Link
                          href={`/workout/${workout.id}`}
                          className="inline-flex items-center justify-center rounded-full border border-[#42464d] px-4 py-2 text-[11px] font-semibold text-white transition hover:border-white"
                        >
                          View Details
                        </Link>

                        {activeTab === "plan" && (
                          <button
                            onClick={() => {
                              markAsDone(workout.id);
                              showToast("Workout marked as done");
                            }}
                            disabled={isDone}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold transition ${
                              isDone
                                ? "border border-[#b6ff00] bg-transparent text-[#b6ff00]"
                                : "bg-[#b6ff00] text-black hover:bg-[#c5ff33]"
                            }`}
                          >
                            <CheckIcon />
                            {isDone ? "Done" : "Mark as Done"}
                          </button>
                        )}

                        <button
                          onClick={() => {
                            if (activeTab === "plan") {
                              removeFromPlan(workout.id);

                              setTimeout(() => {
                                showToast("Removed from today's plan");
                              }, 0);
                            } else {
                              removeFromSaved(workout.id);

                              setTimeout(() => {
                                showToast("Removed from saved");
                              }, 0);
                            }
                          }}
                          aria-label={`Remove ${workout.name}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#777d85] transition hover:bg-[#24282d] hover:text-white"
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
