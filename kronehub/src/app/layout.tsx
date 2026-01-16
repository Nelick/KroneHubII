import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "KroneHub",
  description: "Internal hotel operations dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>

        <footer className="mx-auto max-w-6xl px-4 pb-6 pt-8 text-sm text-muted">
          <div className="border-t border-border/40 pt-4">
            KroneHub — Internal tool
          </div>
        </footer>
      </body>
    </html>
  );
}
