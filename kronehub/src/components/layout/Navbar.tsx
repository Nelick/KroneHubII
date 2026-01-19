"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Tasks", href: "/tasks" },
  { label: "Schedule", href: "/schedule" },
  { label: "Announcements", href: "/announcements" },
  { label: "Time", href: "/time" },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Glass top bar */}
      <div className="border-b border-border/40 bg-card/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo container */}
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-border/50 bg-card/70 shadow-sm">
              <Image
                src="/hotel-logo.png"
                alt="Hotel logo"
                width={40}
                height={40}
                priority
                className="h-full w-full object-contain p-1"
              />
            </div>

            <div className="leading-tight">
              <p className="text-base font-semibold text-text">KroneHub</p>
              <p className="text-xs text-muted">Hotel internal dashboard</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    "border border-transparent",
                    "text-muted hover:text-text hover:bg-card/40",
                    active && "bg-card/60 text-text border-border/50 shadow-sm",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <span className="kh-badge hidden sm:inline-flex">
              Tokyo Night 🌙
            </span>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="kh-btn cursor-pointer list-none select-none">
                Menu
              </summary>

              <div className="absolute right-0 mt-2 w-60 overflow-hidden rounded-2xl border border-border/50 bg-card/90 shadow-lg backdrop-blur-md">
                <div className="p-2">
                  {NAV_ITEMS.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cx(
                          "block rounded-xl px-3 py-2 text-sm transition",
                          active
                            ? "bg-card/60 text-text"
                            : "text-muted hover:bg-card/40 hover:text-text",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
