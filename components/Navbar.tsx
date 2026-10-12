
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6">
            <nav
                aria-label="Main navigation"
                className="relative isolate mx-auto flex min-h-17 w-full max-w-5xl items-center justify-between gap-3 rounded-[23px] border border-white/70 bg-white/55 px-4 py-2.5 shadow-[0_12px_40px_rgba(20,25,35,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 hover:bg-white/65 sm:px-5"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 rounded-[23px] bg-linear-to-br from-white/40 via-transparent to-white/10"
                />

                <Link
                    href="/"
                    aria-label="Vextrix home"
                    onClick={() => setMenuOpen(false)}
                    className="flex shrink-0 items-center gap-2.5 text-[19px] font-semibold tracking-[-0.9px] text-[#17191d]"
                >
                    <span className="grid size-9 place-items-center rounded-xl bg-[#191b20] text-base font-semibold text-white shadow-sm">
                        V
                    </span>
                    <span>vextrix</span>
                </Link>

                <div className="hidden items-center gap-1 rounded-[17px] border border-white/60 bg-white/25 p-1 shadow-inner md:flex">
                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={active ? "page" : undefined}
                                className={`rounded-xl border px-4 py-2.5 text-[13px] font-medium transition-all duration-200 ${active
                                        ? "border-white/80 bg-white/75 text-[#17191d] shadow-[0_2px_8px_rgba(20,25,35,0.06)]"
                                        : "border-transparent text-[#646871] hover:bg-white/60 hover:text-[#17191d]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex shrink-0 items-center gap-2">
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="group inline-flex min-h-10 items-center gap-2 rounded-[14px] border border-white/80 bg-[#191b20] px-4 text-xs font-medium text-white shadow-[0_3px_10px_rgba(20,25,35,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#303238] active:translate-y-0"
                    >
                        Let&apos;s talk
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                            ↗
                        </span>
                    </Link>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="grid size-10 shrink-0 place-items-center rounded-[14px] border border-white/70 bg-white/45 text-[#191b20] transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191b20] md:hidden"
                    >
                        <span className="flex w-4.25 flex-col gap-1.25">
                            <span
                                className={`h-[1.5px] w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[3.25px] rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`h-[1.5px] w-full rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[-3.25px] -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>

                <div
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    aria-hidden={!menuOpen}
                    className={`absolute inset-x-0 top-[calc(100%+10px)] rounded-[22px] border border-white/75 bg-white/75 p-2.5 shadow-[0_16px_45px_rgba(20,25,35,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-200 md:hidden ${menuOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible pointer-events-none -translate-y-2 opacity-0"
                        }`}
                >
                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                tabIndex={menuOpen ? 0 : -1}
                                aria-current={active ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                                className={`mb-1 block rounded-xl px-4 py-3 text-sm transition-colors last:mb-0 ${active
                                        ? "bg-white/80 font-medium text-[#17191d] shadow-sm"
                                        : "text-[#646871] hover:bg-white/60 hover:text-[#17191d]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
