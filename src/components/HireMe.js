import React from "react";
import Image from "next/image";
import { CircularText } from "./Icons";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={`text-dark animate-spin-slow`} />
        <Link
          href="mailto:ayeasin108@gmail.com"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-all"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;
