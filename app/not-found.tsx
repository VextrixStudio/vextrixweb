
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#f7f7f4] text-[#20211e] selection:bg-[#dfe1d4] selection:text-[#20211e]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 size-120 rounded-full bg-white/90 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-105 rounded-full bg-[#e8e9df]/70 blur-[110px]"
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          aria-label="Vextrix Studio home"
          className="group flex w-fit items-center gap-3"
        >
          <span className="grid size-10 place-items-center rounded-[14px] bg-[#20211e] text-sm font-semibold text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.04]">
            V
          </span>

          <span className="text-sm font-semibold tracking-tight">
            Vextrix Studio
          </span>
        </Link>

        <span className="hidden text-xs text-[#85867b] sm:block">
          Independent digital studio
        </span>
      </header>

      <section className="relative flex flex-1 items-center justify-center px-5 py-16 sm:px-8">
        <div className="relative w-full max-w-3xl text-center">
          <div className="relative mx-auto mb-10 flex size-36 items-center justify-center sm:size-44">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/90 bg-white/40 shadow-[0_24px_80px_rgba(35,35,28,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute inset-3 rounded-full border border-white/90 bg-gradient-to-br from-white/80 via-white/25 to-[#e9e9e1]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]"
            />

            <span className="relative text-[2.7rem] font-medium tracking-[-0.09em] text-[#85867b] sm:text-5xl">
              404
            </span>

            <span
              aria-hidden="true"
              className="absolute right-5 top-5 size-2 rounded-full bg-[#92977d] shadow-[0_0_14px_rgba(146,151,125,0.35)]"
            />
          </div>

          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#85867b] sm:text-[11px]">
            A little off course
          </p>

          <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
            Nothing here.
            <span className="mt-2 block text-[#96978d]">
              Let&apos;s get you back.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#73746b] sm:text-base sm:leading-8">
            The page you&apos;re looking for may have moved, or the address
            might not be right. Let&apos;s find your way back to something useful.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex min-h-13 items-center justify-center gap-4 rounded-full bg-[#20211e] px-7 text-sm font-medium text-white shadow-[0_8px_24px_rgba(32,33,30,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#363730] hover:shadow-[0_12px_32px_rgba(32,33,30,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-2"
            >
              Back to home
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#e3e3dc] bg-white/55 px-6 text-sm font-medium text-[#3d3e38] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl transition duration-300 hover:border-[#d4d4cb] hover:bg-white/90"
            >
              Contact the studio
            </Link>
          </div>

          <div className="mx-auto mt-16 flex max-w-sm items-center justify-center gap-4 text-[10px] uppercase tracking-[0.17em] text-[#a0a196]">
            <span className="h-px flex-1 bg-[#e4e4dd]" />
            <span>Vextrix Studio</span>
            <span className="h-px flex-1 bg-[#e4e4dd]" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 border-t border-[#e4e4dd] px-6 py-6 text-xs text-[#85867b] sm:flex-row sm:px-10 lg:px-16">
        <span>Thoughtfully built in California.</span>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="transition-colors hover:text-[#20211e]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-colors hover:text-[#20211e]"
          >
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
