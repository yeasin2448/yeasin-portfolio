import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/yeasin.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>JsyDesignx | About Page</title>
        <meta name="description" content="about yeasin arafat" />
      </Head>
      <TransitionEffect />
      <main className="w-ful flex items-center flex-col dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 xl:text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <div className="flex flex-col gap-4 font-medium">
                <p>
                  Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                  passion for creating beautiful, functional, and user-centered
                  digital experiences. With 4 years of experience in the field.
                  I am always looking for new and innovative ways to bring my
                  clients' visions to life.
                </p>
                <p>
                  I believe that design is about more than just making things
                  look pretty – it's about solving problems and creating
                  intuitive, enjoyable experiences for users.
                </p>
                <p>
                  Whether I'm working on a website, mobile app, or other digital
                  product, I bring my commitment to design excellence and
                  user-centered thinking to every project I work on. I look
                  forward to the opportunity to bring my skills and passion to
                  your next project.
                </p>
              </div>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  " />
              <Image
                src={profilePic}
                alt="profile-image"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw
                "
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          {/* skills area start hear */}
          <Skills />
          {/* experience area start hear */}
          <Experience />
          {/* education area start hear */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
