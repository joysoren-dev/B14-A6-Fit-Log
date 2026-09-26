export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-74px)] items-center justify-center bg-[#0b0d0f] px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b6ff00]">
          404
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm text-[#8e939a]">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
