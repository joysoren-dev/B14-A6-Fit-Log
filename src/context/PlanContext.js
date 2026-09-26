"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Add a workout to today's plan
  const addToPlan = (workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  // Remove a workout from today's plan
  const removeFromPlan = (workoutId) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== workoutId),
    );

    setCompleted((currentCompleted) =>
      currentCompleted.filter((id) => id !== workoutId),
    );
  };

  // Save a workout for later
  const addToSaved = (workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  // Remove a workout from saved
  const removeFromSaved = (workoutId) => {
    setSaved((currentSaved) =>
      currentSaved.filter((item) => item.id !== workoutId),
    );
  };

  // Mark a workout as completed
  const markAsDone = (workoutId) => {
    setCompleted((currentCompleted) => {
      if (currentCompleted.includes(workoutId)) {
        return currentCompleted;
      }

      return [...currentCompleted, workoutId];
    });
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        completed,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
