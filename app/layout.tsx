"use client";

import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { RiSearchLine } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Journal | Era of Blogging",
  description: "Step into the modern era of blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  return (
    <html lang="en">
      <body className={mukta.className}>
        <nav className="w-full flex justify-center">
          <div className="window-size py-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-6 items-center justify-between md:justify-normal">
              <Image
                src={"./logo-outline-black.svg"}
                width={40}
                height={40}
                alt="Journal Logo"
              />
              <label className="items-center bg-slate-200 rounded-md text-neutral-500 relative hidden md:flex">
                <RiSearchLine className="absolute ml-2" />
                <input
                  type="text"
                  className="w-64 h-8 pl-8 pr-2 rounded-md bg-transparent focus:outline-slate-400 text-base"
                />
              </label>
              <button
                className="flex flex-col gap-1 group md:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <div
                  className={`w-6 h-[3px] bg-black rounded-md transition ${
                    navbarOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-[3px] bg-black rounded-md transition ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-[3px] bg-black rounded-md transition ${
                    navbarOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                ></div>
              </button>
            </div>
            <div
              className={`text-lg origin-top flex flex-col gap-3 p-4 rounded-md fixed right-6 left-6 top-20 transition bg-slate-200 border-solid border-2 border-slate-400 md:border-0 md:bg-transparent md:static md:items-center md:gap-5 md:flex-row md:p-0 md:rounded-none ${
                navbarOpen ? "" : "scale-y-0 md:scale-y-100"
              }`}
            >
              <Link href={""} className="hover:text-slate-500 transition">
                Home
              </Link>
              <Link
                href={""}
                className="border-slate-500 md:px-4 md:py-1 rounded-md md:border-2 hover:md:bg-slate-500 transition hover:text-slate-500 hover:md:text-white"
              >
                Sign in
              </Link>
            </div>
          </div>
        </nav>
        <main className="window-size mt-8">{children}</main>
      </body>
    </html>
  );
}
