import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const services = [
  {
    number: "01",
    title: "Custom websites",
    description:
      "A clear, credible home for your business, designed around your audience and the action you want them to take.",
    tags: ["Web design", "Development", "SEO foundations"],
    mark: "↗",
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "Useful digital products with thoughtful flows, complete states and interfaces that stay out of the way.",
    tags: ["React", "TypeScript", "Full-stack"],
    mark: "⌘",
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Focused pages that explain one offer clearly and guide visitors toward a relevant next step.",
    tags: ["Clear messaging", "Responsive", "Performance"],
    mark: "↗",
  },
  {
    number: "04",
    title: "UI / UX redesign",
    description:
      "Make an existing product easier to understand and use with clearer flows, stronger hierarchy and consistent components.",
    tags: ["UX improvements", "Visual systems", "Refinement"],
    mark: "◫",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Align on your audience, goals, constraints and what the project needs to accomplish.",
    detail: "Set the direction",
  },
  {
    number: "02",
    title: "Shape the experience",
    description:
      "Map the key flows and states, then define a visual system that supports them.",
    detail: "UX meets UI",
  },
  {
    number: "03",
    title: "Build & test",
    description:
      "Develop responsively, check accessibility and test important paths across screen sizes.",
    detail: "Design meets code",
  },
  {
    number: "04",
    title: "Refine & launch",
    description:
      "Review the details, resolve edge cases and prepare the project for the real world.",
    detail: "Ready to go",
  },
];

const principles = [
  {
    number: "01",
    title: "Purpose",
    description:
      "Every choice should support the project goal or help the person using it.",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "The message, hierarchy and next step should be easy to understand.",
  },
  {
    number: "03",
    title: "Partnership",
    description:
      "You work directly with the person designing and building your project.",
  },
];

const capabilities = [
  "Strategy & direction",
  "UX flows & interface design",
  "Frontend development",
  "Responsive experiences",
  "Performance & accessibility",
  "Launch support",
];

const experiencePoints = [
  {
    number: "01",
    title: "Find what you need",
    description: "A clear structure makes information easier to scan.",
  },
  {
    number: "02",
    title: "Know what to do",
    description: "Useful actions make the next step feel natural.",
  },
  {
    number: "03",
    title: "Feel confident",
    description: "Consistent details build trust across every screen.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#62645a]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-[#20211e] selection:bg-[#dfe1d4] selection:text-[#20211e]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#20211e] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-[#878b75] focus:ring-offset-2"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <section
          id="home"
          aria-labelledby="home-title"
          className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:min-h-[760px] lg:px-16 lg:py-32 xl:px-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 top-8 -z-10 size-[460px] rounded-full bg-white/80 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-40 -z-10 size-[380px] rounded-full bg-[#e8e9df]/75 blur-[110px]"
          />

          <div className="relative mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-20">
            <div className="relative z-10">
              <div className="mb-8 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#e7e7df] bg-white/80 px-3.5 py-2 text-xs text-[#55574e] shadow-[0_4px_18px_rgba(35,35,28,0.04)]">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#7b8264]"
                />
                <span>Independent digital studio</span>
                <span aria-hidden="true" className="text-[#a2a398]">
                  /
                </span>
                <span>Perris, California</span>
              </div>

              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#62645a]">
                Vextrix Studio
              </p>

              <h1
                id="home-title"
                className="max-w-4xl text-[clamp(3.5rem,7.5vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.075em]"
              >
                Digital work.
                <span className="block text-[#73766a]">Thoughtfully</span>
                <span className="block">made.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#5f6158] sm:text-lg sm:leading-8">
                We design and build clear, credible websites and web
                applications that help people understand what you do—and take
                the next step.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#20211e] px-7 text-sm font-medium text-white shadow-[0_8px_22px_rgba(32,33,30,0.12)] transition-colors duration-200 hover:bg-[#383930] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  Start a project
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </Link>

                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#dfe0d8] bg-white/70 px-6 text-sm font-medium text-[#3d3e38] transition-colors duration-200 hover:border-[#c9cbbf] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  See our services
                  <span aria-hidden="true" className="text-[#696b60]">
                    ↓
                  </span>
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#e1e2da] pt-5 text-xs text-[#5f6158] sm:gap-x-7">
                <span>Based in California</span>
                <span
                  aria-hidden="true"
                  className="hidden size-1 rounded-full bg-[#a2a398] sm:block"
                />
                <span>Working remotely worldwide</span>
                <span
                  aria-hidden="true"
                  className="hidden size-1 rounded-full bg-[#a2a398] sm:block"
                />
                <span>English / Español</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 -z-10 rounded-[40px] bg-white/70 blur-2xl"
              />

              <div className="rounded-[30px] border border-[#e1e2da] bg-white p-2.5 shadow-[0_24px_70px_rgba(35,35,28,0.07)]">
                <div className="overflow-hidden rounded-[22px] bg-[#f3f4ee]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#e1e2da] bg-white/70 px-5 py-4 sm:px-6">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#20211e] text-sm font-semibold text-white">
                        V
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold tracking-tight">
                          Vextrix Studio
                        </p>
                        <p className="mt-0.5 text-xs text-[#62645a]">
                          Digital craftsmanship
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#e8eade] px-3 py-1.5 text-[10px] font-medium text-[#4f5344]">
                      Our approach
                    </span>
                  </div>

                  <div className="px-5 py-8 sm:px-7 sm:py-10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#62645a]">
                      Designed around people
                    </p>

                    <h2 className="mt-4 max-w-sm text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[0.96] tracking-[-0.07em]">
                      Make the next step clear.
                    </h2>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-[#5f6158]">
                      A good experience helps people understand, choose and
                      move forward without unnecessary friction.
                    </p>

                    <div className="mt-7 border-t border-[#dfe0d8]">
                      {experiencePoints.map((point) => (
                        <div
                          key={point.number}
                          className="grid grid-cols-[28px_1fr] gap-3 border-b border-[#dfe0d8] py-4 sm:grid-cols-[32px_1fr]"
                        >
                          <span className="pt-0.5 text-[11px] tabular-nums text-[#696b60]">
                            {point.number}
                          </span>

                          <div>
                            <p className="text-sm font-medium text-[#292a25]">
                              {point.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-[#5f6158]">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e1e2da] bg-white/60 px-5 py-4 text-[10px] font-medium uppercase tracking-[0.13em] text-[#55574e] sm:px-7">
                    <span>Designed with intent</span>
                    <span>Built with care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#services"
            className="absolute bottom-7 right-10 hidden items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#5f6158] transition-colors hover:text-[#20211e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4 lg:flex"
          >
            Discover our services
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section
          id="services"
          aria-labelledby="services-title"
          className="scroll-mt-24 border-y border-[#e3e4dc] bg-white/70 px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Eyebrow>Services</Eyebrow>

                <h2
                  id="services-title"
                  className="max-w-2xl text-4xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl"
                >
                  The right experience
                  <span className="block text-[#73766a]">
                    for the next step.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#5f6158]">
                We start with what your audience needs to understand or do, then
                shape the right digital solution.
              </p>
            </div>

            <div className="mt-14 grid gap-3 md:grid-cols-2 lg:gap-4">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group flex min-h-[280px] flex-col rounded-[26px] border border-[#e3e4dc] bg-white p-6 transition-colors duration-200 hover:border-[#cfd1c5] sm:p-8 motion-reduce:transition-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tabular-nums text-[#5f6158]">
                      {service.number}
                      <span aria-hidden="true" className="px-1.5">
                        /
                      </span>
                      Service
                    </span>

                    <span
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-full border border-[#dfe0d8] text-base text-[#4f5148] transition-colors duration-200 group-hover:border-[#20211e] group-hover:bg-[#20211e] group-hover:text-white motion-reduce:transition-none"
                    >
                      {service.mark}
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-medium tracking-[-0.045em] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#5f6158]">
                    {service.description}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[#e1e2da] bg-[#f7f7f4] px-3 py-1.5 text-[11px] text-[#4f5148]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          aria-labelledby="process-title"
          className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>How we work</Eyebrow>

              <h2
                id="process-title"
                className="max-w-lg text-4xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl"
              >
                Clear steps.
                <span className="block text-[#73766a]">Better outcomes.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#5f6158]">
                Good digital work is more than a polished screen. It takes
                clear decisions, considered interactions and care through
                launch.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#292a25] transition-colors hover:text-[#656a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4"
              >
                Tell us what you have in mind
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="border-t border-[#dfe0d8]">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-3 border-b border-[#dfe0d8] py-6 sm:grid-cols-[52px_minmax(0,1fr)_150px] sm:gap-5 sm:py-7"
                >
                  <span className="pt-1 text-xs tabular-nums text-[#5f6158]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#5f6158]">
                      {step.description}
                    </p>
                  </div>

                  <span className="self-start pt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#62645a] sm:text-right">
                    {step.detail}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="studio"
          aria-labelledby="studio-title"
          className="scroll-mt-24 border-y border-[#e3e4dc] bg-white/70 px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-24">
            <div>
              <Eyebrow>The studio</Eyebrow>

              <h2
                id="studio-title"
                className="max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl"
              >
                Small studio.
                <span className="block text-[#73766a]">
                  Personal attention.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#4f5148]">
                Vextrix Studio is an independent digital studio based in
                Perris, California. We build modern websites and web
                applications with a focus on thoughtful design, performance and
                clean development.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#5f6158]">
                You work directly with the person making your project—fewer
                unnecessary layers, clear communication and a process shaped
                around your goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Perris, California",
                  "Remote worldwide",
                  "English / Español",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dfe0d8] bg-white px-4 py-2 text-xs text-[#4f5148]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#292a25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4"
              >
                Get to know the studio
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </Link>
            </div>

            <div className="rounded-[28px] border border-[#e1e2da] bg-white p-6 shadow-[0_12px_35px_rgba(35,35,28,0.035)] sm:p-9">
              <div className="mb-6 flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-[15px] bg-[#20211e] text-lg font-semibold text-white">
                  V
                </div>

                <div>
                  <p className="font-semibold tracking-tight">
                    Vextrix Studio
                  </p>
                  <p className="mt-1 text-xs text-[#5f6158]">
                    Independent digital studio
                  </p>
                </div>
              </div>

              <ul>
                {principles.map((principle, index) => (
                  <li
                    key={principle.number}
                    className={`grid grid-cols-[34px_1fr] gap-3 py-5 ${index < principles.length - 1
                        ? "border-b border-[#e1e2da]"
                        : ""
                      }`}
                  >
                    <span className="pt-0.5 text-[11px] tabular-nums text-[#5f6158]">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {principle.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#5f6158]">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-title"
          className="px-5 py-24 sm:px-8 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>What goes into the work</Eyebrow>

              <h2
                id="capabilities-title"
                className="max-w-lg text-4xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-5xl"
              >
                Thought through.
                <span className="block text-[#73766a]">
                  Built to be useful.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#5f6158]">
                Every decision should make the experience easier to understand,
                use and trust.
              </p>
            </div>

            <ul className="flex content-start flex-wrap gap-2.5">
              {capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm ${index < 2
                      ? "border-[#d6d8cb] bg-[#e9ebdf] text-[#44473b]"
                      : "border-[#dfe0d8] bg-white/70 text-[#4f5148]"
                    }`}
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 text-[10px] text-[#62645a]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-28 lg:px-16 lg:pb-32 xl:px-24"
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#20211e] px-6 py-14 text-[#f7f7f4] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-36 size-[400px] rounded-full bg-white/[0.07] blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-44 left-1/3 size-[320px] rounded-full bg-[#9ba184]/20 blur-[90px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d0d2c5]">
                  Have something in mind?
                </p>

                <h2
                  id="contact-title"
                  className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.07em] sm:text-6xl lg:text-7xl"
                >
                  Let&apos;s make your next step
                  <span className="block text-[#c5c8b7]">
                    feel effortless.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-[#e0e1da] sm:text-base">
                  Share the idea, challenge or next step you’re working toward.
                  We can start with a simple conversation and shape the right
                  approach together.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-5 self-start rounded-full bg-[#f7f7f4] px-7 text-sm font-medium text-[#20211e] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#20211e] lg:self-end motion-reduce:transition-none"
              >
                Start a conversation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </Link>
            </div>

            <div className="relative mt-12 flex flex-col gap-3 border-t border-white/20 pt-5 text-xs text-[#e0e1da] sm:flex-row sm:items-center sm:justify-between">
              <a
                href="mailto:vextrixstudio@outlook.com"
                className="w-fit transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#20211e]"
              >
                vextrixstudio@outlook.com
              </a>

              <span>
                Start with an idea. We can shape the rest together.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e1e2da] px-5 py-7 sm:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex w-fit items-center gap-2.5 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4"
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-[10px] bg-[#20211e] text-xs text-white"
            >
              V
            </span>
            Vextrix Studio
          </Link>

          <p className="text-xs leading-5 text-[#5f6158]">
            Thoughtfully built in Perris, California.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5 text-xs text-[#4f5148]">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-[#20211e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[#20211e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#858a70] focus-visible:ring-offset-4"
                >
                  Contact <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}