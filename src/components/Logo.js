import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="flex item-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 flex items-center justify-center rounded-full bg-dark text-light text-2xl font-bold"
        whileHover={{
            backgroundColor : ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}
      >
        YA
      </MotionLink>
    </div>
  );
}

export default Logo;
