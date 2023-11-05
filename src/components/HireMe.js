import React from "react";
import Image from "next/image";
import { CircularText } from "./Icons";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0  overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={`fill-dark animate-spin-slow dark:fill-light`}
        />
        <Link
          href="mailto:ayeasin108@gmail.com"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-all dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
