"use client";

import { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
  });

  const showToast = (message) => {
    setToast({
      visible: true,
      message,
    });

    setTimeout(() => {
      setToast({
        visible: false,
        message: "",
      });
    }, 2500);
  };

  const addToPlan = (workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }
      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (workoutId) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== workoutId),
    );
    setCompleted((currentCompleted) =>
      currentCompleted.filter((id) => id !== workoutId),
    );
  };

  const addToSaved = (workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }
      return [...currentSaved, workout];
    });
  };

  const removeFromSaved = (workoutId) => {
    setSaved((currentSaved) =>
      currentSaved.filter((item) => item.id !== workoutId),
    );
  };

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
        showToast,
        toast,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
