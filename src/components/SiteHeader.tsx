"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PentLogo } from "@/components/PentLogo";
import { PentButton } from "@/components/PentButton";
import { navLinks } from "@/lib/data";
import { figma } from "@/lib/figma-tokens";
import { cn } from "@/lib/utils";

const mobileMenuLinks = [
  { label: "Home", href: "#home", active: true },
  ...navLinks
    .filter((link) => link.label !== "Home")
    .map((link) => ({ label: link.label, href: link.href, active: link.active })),
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const h = figma.header;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "relative z-50 w-full px-4 md:px-8 lg:px-[80px]",
        menuOpen && "menu-open",
      )}
    >
      <div
        className="relative mx-auto flex w-full max-w-[1280px] items-center justify-between"
        style={{
          height: h.height,
          borderRadius: h.borderRadius,
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Logo */}
        <Link href="#home" onClick={closeMenu} aria-label="PentAi home" className="shrink-0">
          <PentLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "px-10 font-medium transition-colors",
                "text-[15px] leading-6 tracking-[0.005em]",
                link.active ? "text-[#ECEDEE]" : "text-[#4C5155] hover:text-[#ECEDEE]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden lg:flex">
            <PentButton size="lg">Dashboard</PentButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={cn(
                "block h-[2px] w-6 rounded bg-[#ECEDEE] transition-all duration-200",
                menuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-6 rounded bg-[#ECEDEE] transition-all duration-200",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-6 rounded bg-[#ECEDEE] transition-all duration-200",
                menuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[35] lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            className="absolute left-0 right-0 top-[calc(100%+12px)] z-40 mx-4 flex flex-col rounded-2xl border border-[#343434] bg-[#232323] p-3 lg:hidden"
            aria-label="Mobile menu"
          >
            <ul className="flex list-none flex-col gap-1 m-0 p-0">
              {mobileMenuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block w-full rounded-[10px] px-4 py-3 text-[15px] font-medium transition-colors",
                      link.active
                        ? "bg-[#282828] text-[#ECEDEE]"
                        : "text-[#4C5155] hover:bg-white/[0.04] hover:text-[#ECEDEE]",
                    )}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}