
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frame = 0;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Custom websites designed around your business, your audience and the purpose of your online presence.",
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "Interactive web products built with modern frontend technologies and functionality suited to the project.",
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Focused pages that communicate your offer clearly and guide visitors toward the next step.",
  },
  {
    number: "04",
    title: "UI / UX design",
    description:
      "Interface improvements that make digital products easier to understand, navigate and use.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand first.",
    description:
      "Every project starts with its purpose. We establish what needs to be solved before deciding how it should look or work.",
  },
  {
    number: "02",
    title: "Design with intention.",
    description:
      "Typography, spacing, hierarchy and interactions should make the experience clearer, not simply more decorative.",
  },
  {
    number: "03",
    title: "Build for real use.",
    description:
      "The interface should work across screen sizes, respond properly to interaction and support the needs of its users.",
  },
];

const studioValues = [
  ["01", "Clear communication"],
  ["02", "Purposeful design"],
  ["03", "Functional development"],
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4.2 10h11.6m-4.8-4.8 4.8 4.8-4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#777b61] sm:text-[11px]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e9e8e2] text-[#20201c] selection:bg-[#858873]/25">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        <Navbar />
      </div>

      <section className="relative px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-14 lg:pb-32 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-12 z-0 size-120 rounded-full bg-white/65 blur-[110px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex items-center gap-2.5 text-xs text-black/50">
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#20201c]">About</span>
            </div>

            <Eyebrow>About Vextrix Studio</Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 max-w-6xl text-[clamp(3.4rem,8.5vw,8rem)] font-medium leading-[0.91] tracking-[-0.085em]">
              Good digital work
              <span className="mt-1 block font-serif font-normal italic tracking-[-0.055em] text-[#777b61]">
                starts with intention.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 grid gap-8 border-t border-black/10 pt-7 md:grid-cols-[1fr_0.7fr] md:gap-16">
              <p className="max-w-2xl text-lg leading-8 tracking-tight text-[#55554d] sm:text-xl sm:leading-9">
                Vextrix Studio is an independent digital studio founded by
                Jonatan A in Perris, California, focused on building modern
                websites and web applications.
              </p>

              <div className="md:pt-1">
                <p className="max-w-md text-sm leading-7 text-black/55">
                  We bring design and development together to create digital
                  experiences with clear purpose, thoughtful details and
                  functionality that serves the project.
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-3 text-sm font-medium"
                >
                  Talk about your project
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/35 p-6 shadow-[0_25px_80px_rgba(42,42,32,0.05),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl sm:rounded-[32px] sm:p-10 lg:p-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-32 size-90 rounded-full bg-white/70 blur-[90px]"
              />

              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
                <div>
                  <Eyebrow>The studio philosophy</Eyebrow>
                  <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1.04] tracking-[-0.07em] sm:text-6xl">
                    Less noise.
                    <span className="mt-1 block font-serif font-normal italic text-[#777b61]">
                      More substance.
                    </span>
                  </h2>
                </div>

                <div className="max-w-xl space-y-5 text-sm leading-7 text-[#626258] sm:text-base sm:leading-8">
                  <p>
                    A website is more than a visual presentation. It is often
                    the first place people go to understand a business,
                    evaluate a service or decide whether to get in touch.
                  </p>
                  <p>
                    That is why we value clarity, considered design and
                    functional details. Every element should contribute to the
                    experience instead of competing for attention.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 grid gap-4 border-t border-black/10 pt-6 sm:mt-12 sm:grid-cols-3">
                {studioValues.map(([number, label]) => (
                  <div key={number} className="flex items-center gap-3">
                    <span className="text-[11px] text-[#777b61]">
                      {number}
                    </span>
                    <span className="text-sm font-medium text-[#41423c]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/[0.06] bg-white/35 px-5 py-20 backdrop-blur-xl sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_0.6fr] md:items-end">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.07em] sm:text-6xl">
                  Thoughtful design.
                  <span className="mt-1 block font-serif font-normal italic text-[#777b61]">
                    Practical development.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-black/55">
                Different projects require different solutions. Our focus is
                on understanding the need and choosing an appropriate approach.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 divide-y divide-black/10 border-t border-black/10 sm:mt-14">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 65}>
                <article className="group grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-8 sm:py-9 lg:gap-12">
                  <span className="pt-2 text-xs text-[#777b61]">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.055em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-black/55">
                      {service.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden size-10 place-items-center rounded-full border border-black/10 bg-white/30 text-sm backdrop-blur-xl transition-all duration-300 group-hover:border-[#20201c] group-hover:bg-[#20201c] group-hover:text-white sm:grid"
                  >
                    ↗
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-10">
              <Eyebrow>How we approach a project</Eyebrow>
              <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.07em] sm:text-6xl">
                Thought through.
                <span className="mt-1 block font-serif font-normal italic text-[#777b61]">
                  Built with care.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-black/55">
                A straightforward process helps keep decisions focused,
                expectations clear and the work moving in the right direction.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-black/10">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 80}>
                <article className="grid gap-4 border-b border-black/10 py-8 sm:grid-cols-[60px_1fr] sm:gap-6 sm:py-10">
                  <span className="pt-1 text-xs text-[#777b61]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.055em] sm:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/55">
                      {principle.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14 lg:pb-32">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/80 bg-white/40 px-6 py-12 shadow-[0_25px_80px_rgba(30,30,25,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:rounded-[32px] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-40 size-100 rounded-full bg-white/70 blur-[90px]"
            />

            <div className="relative max-w-4xl">
              <Eyebrow>Let’s work together</Eyebrow>

              <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Have something
                <span className="mt-1 block font-serif font-normal italic text-[#777b61]">
                  worth building?
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-black/55 sm:text-base">
                Tell us about your business, your idea or the digital
                experience you want to improve.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex min-h-14 items-center gap-5 rounded-full bg-[#20201c] px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3b3d31] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20201c]"
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-black/10 px-5 py-7 sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex w-fit items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span className="grid size-8 place-items-center rounded-xl bg-[#20201c] text-xs text-white">
              V.
            </span>
            Vextrix Studio
          </Link>

          <p className="text-xs leading-5 text-black/45">
            Independent digital studio · Perris, California
          </p>

          <Link
            href="/contact"
            className="w-fit text-xs text-black/55 transition-colors hover:text-[#20201c]"
          >
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
