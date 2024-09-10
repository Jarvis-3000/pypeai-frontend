"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggler";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 50) {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setShowHeader(false);
        } else {
          // Scrolling up
          setShowHeader(true);
        }
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Cleanup listener
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1800px] mx-auto relative bg-white dark:bg-slate-500  flex items-center justify-between gap-[20px] h-[70px] px-[96px]">
          {/* Left side */}
          <div className="flex-1 flex items-center justify-between xl:justify-start gap-x-3">
            <Image src="/logo.png" height={50} width={100} alt="logo" />
            <h1 className="text-xl font-semibold ">Pype AI</h1>
          </div>
          {/* Right side */}
          <div className="flex items-center justify-end gap-5">
            <div className="hidden xl:flex-1 xl:flex items-center justify-end gap-x-5">
              <Link href="#features">
                <button className="font-semibold">Features</button>
              </Link>
              <button className="bg-slate-800 dark:bg-slate-50 text-slate-50 font-semibold dark:text-slate-800 py-2 px-4 rounded-lg">
                Launch App
              </button>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
