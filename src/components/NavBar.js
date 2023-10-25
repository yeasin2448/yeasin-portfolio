import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
  UpWorkIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        absolute -bottom-0.5 left-0 h-[1px] bg-dark group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-2" />
      </nav>
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <Logo />
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-3">
        <motion.a
          href="https://www.linkedin.com/in/yeasin-arafat-b0bb54237/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yeasin-arafat-b0bb54237/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yeasin-arafat-b0bb54237/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yeasin-arafat-b0bb54237/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yeasin-arafat-b0bb54237/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <UpWorkIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
