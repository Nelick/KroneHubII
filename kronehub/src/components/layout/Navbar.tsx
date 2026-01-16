// Enable client-side rendering for this component
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Define navigation menu items with labels and their corresponding routes
const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Tasks", href: "/tasks" },
  { label: "Schedule", href: "/schedule" },
  { label: "Announcements", href: "/announcements" },
  { label: "Time", href: "/time" },
];

/**
 * Utility function to conditionally combine CSS class names
 * Filters out falsy values and joins the remaining classes with spaces
 * @param classes - Array of class strings that may include false, undefined, or null values
 * @returns Combined class string
 */
function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Navbar component - Main navigation header for the KroneHub dashboard
 * Features a sticky header with desktop and mobile navigation
 */
export default function Navbar() {
  // Get the current pathname to determine which nav item is active
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Glass background bar - sticky header with frosted glass effect */}
      <div className="border-b border-border/40 bg-card/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Brand section - Logo and app name */}
          <Link href="/" className="flex items-center gap-3">
            {/* Brand icon placeholder */}
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-border/50 bg-card/70 shadow-sm">
              <Image
                src="/logo.png"
                alt="KroneHub logo"
                width={40}
                height={40}
                className="h-full w-full object-contain p-1"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-base font-semibold text-text">KroneHub</p>
              <p className="text-xs text-muted">Hotel internal dashboard</p>
            </div>
          </Link>

          {/* Desktop navigation - Hidden on mobile screens (md: breakpoint and up) */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              // Determine if the current nav item is active
              // Special handling for home route (exact match) vs other routes (starts with)
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    // Base styles for all nav items
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    "border border-transparent",
                    // Default state - muted color with hover effects
                    "text-muted hover:text-text hover:bg-card/40",
                    // Active state - highlighted background and border
                    active && "text-text bg-card/60 border-border/50 shadow-sm",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side content - Badge and mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme badge - Hidden on small screens */}
            <span className="kh-badge hidden sm:inline-flex">
              Tokyo Night 🌙
            </span>

            {/* Mobile menu button - Only visible on mobile screens (hidden at md: breakpoint) */}
            <details className="relative md:hidden">
              {/* Menu summary/toggle button */}
              <summary className="kh-btn cursor-pointer list-none select-none">
                Menu
              </summary>

              {/* Mobile dropdown menu - Positioned absolutely relative to details element */}
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-border/50 bg-card/90 shadow-lg backdrop-blur-md">
                <div className="p-2">
                  {/* Render navigation items in mobile menu */}
                  {navItems.map((item) => {
                    // Determine if the current nav item is active
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cx(
                          // Block layout for full-width mobile nav items
                          "block rounded-xl px-3 py-2 text-sm transition",
                          // Conditional styling based on active state
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
