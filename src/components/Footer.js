import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium dark:text-light dark:border-light sm:text-base">
      <Layout className="flex items-center justify-between gap-2 py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Right reserved</span>
        <div className="flex items-center gap-2">
          Build With
          <span className="text-primary text-2xl dark:text-primaryDark">&#9825;</span>
          by &nbsp;
          <Link href="https://jsydesignx.com" target="_blank" className="underline underline-offset-3">
            jsydesignX
          </Link>
        </div>
        <Link  href="https://www.messenger.com/t/100002541272108" target="_blank" className="underline underline-offset-3">Say Hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
