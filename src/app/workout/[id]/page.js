"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutDetails({ params }) {
  const { addToPlan, addToSaved } = usePlan();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [workoutId, setWorkoutId] = useState(null);

  useEffect(() => {
    params.then((value) => {
      setWorkoutId(value.id);
    });
  }, [params]);

  useEffect(() => {
    if (!workoutId) return;

    fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutId}`)
      .then((response) => response.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load workout:", error);
        setLoading(false);
      });
  }, [workoutId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] text-white">
        <p className="text-sm text-[#8e939a]">Loading workout...</p>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] text-white">
        <p className="text-sm text-[#8e939a]">Workout not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">
      <div className="mx-auto max-w-[1174px] px-6 py-10">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-[#9b9fa5] hover:text-[#b6ff00]"
        >
          ← Back to workouts
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-[16px] border border-[#24282d] bg-[#15181c]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#b6ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-[#9b9fa5]">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">
                  EQUIPMENT
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.equipment}
                </p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">
                  DIFFICULTY
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">SETS</p>
                <p className="mt-2 text-sm font-semibold">{workout.sets}</p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">REPS</p>
                <p className="mt-2 text-sm font-semibold">{workout.reps}</p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">DURATION</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">CALORIES</p>
                <p className="mt-2 text-sm font-semibold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-[10px] border border-[#24282d] bg-[#15181c] p-4">
                <p className="text-[10px] font-bold text-[#666b72]">RATING</p>
                <p className="mt-2 text-sm font-semibold">★ {workout.rating}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-xs font-bold tracking-[0.12em] text-[#b6ff00]">
                INSTRUCTIONS
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b6ff00] text-xs font-bold text-black">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-6 text-[#9b9fa5]">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToPlan(workout)}
                className="rounded-full bg-[#b6ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#c5ff33]"
              >
                + Add to today&apos;s plan
              </button>

              <button
                onClick={() => addToSaved(workout)}
                className="rounded-full border border-[#42464d] px-6 py-3 text-sm font-bold text-white transition hover:border-[#b6ff00] hover:text-[#b6ff00]"
              >
                ♡ Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
