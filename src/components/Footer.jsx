function Footer() {
  return (
    <footer className="border-t border-[#1d2024] bg-[#0b0d0f]">
      <div className="mx-auto flex max-w-[1174px] items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="FitLog logo" className="h-5 w-5" />
          <span className="text-sm font-extrabold tracking-tight text-white">
            FITLOG
          </span>
        </div>

        <p className="text-xs text-[#666b72]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
