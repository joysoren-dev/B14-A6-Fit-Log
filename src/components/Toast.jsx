"use client";

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed right-6 top-24 z-[100]">
      <div className="flex items-center gap-2 rounded-full border border-[#3a3f46] bg-[#15181c] px-5 py-3 text-sm font-semibold text-white shadow-2xl">
        <span className="text-[#b6ff00]">
          <CheckIcon />
        </span>
        {message}
      </div>
    </div>
  );
}
