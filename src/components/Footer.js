import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Layout>
        <span>Right</span>
        <Link href="/">Yeasin AR</Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
}

export default Footer;
