"use client";

import { usePlan } from "@/context/PlanContext";
import Toast from "@/components/Toast";

export default function ToastContainer() {
  const { toast } = usePlan();

  return <Toast message={toast.message} visible={toast.visible} />;
}
