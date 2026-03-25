"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed cursor-pointer right-14 bottom-26 z-50 w-10 h-10 md:w-20 md:h-20 rounded-full bg-brand-dark flex items-center justify-center transition hover:opacity-90"
    >
      <ChevronUpIcon className="w-8 h-8 md:w-12 md:h-12  text-white md:stroke-4" />
    </button>
  );
}