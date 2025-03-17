"use client";
import style from "./floater.module.css";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

const flipSigns = (arr) => {
  return arr.map((string) => {
    if (string[0] === "-") {
      return string.slice(1);
    } else {
      return `-${string}`;
    }
  })
}

const curve = {
    x: ["0%", "50%", "100%", "150%"],
    y: ["0%", "-33%", "0%", "33%"]
}

const floaterVariants = (duration, downward) => ({
  initial: {x: "0%", y: "0%"},
  beginFloat: {
//    x: ["20%", "10%", "0%", "-20%", "-40%", "-80%", "-160%", "-80%", "-40%", "-20%", "0%", "20%"],
//    y: ["-20%", "0%", "10%", "20%", "40%", "80%", "160%", "80%", "40%", "20%", "0%", "-20%"],
    x: downward ? flipSigns(curve.x) : curve.x,
    y: downward ? flipSigns(curve.y) : curve.y,
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Floaters = () => {
  const { scrollYProgress } = useScroll();
  const [statefulScroll, setScroll] = useState(scrollYProgress.get());
  scrollYProgress.on("change", (e) => setScroll(e));
  const blurAmount = useTransform(scrollYProgress, [0,0.1,0.15,0.35], [36,64,96,200]);
  return (
    <>

      <motion.div 
        variants={floaterVariants(15)}
        style={{ filter: `blur(${blurAmount.get()}px)` }}
        initial="initial"
        animate="beginFloat"
        aria-hidden
        className={`${style['floating-ellipse']} bg-linear-to-b from-primary via-secondary to-[#213742] left-12 bottom-50 w-86 h-86`}/>
      <motion.div 
        variants={floaterVariants(30, true)}
        style={{ filter: `blur(${blurAmount.get()}px)` }}
        initial="initial"
        animate="beginFloat"
        aria-hidden
        className={`${style['floating-ellipse']} bg-secondary -bottom-20 right-48 w-64 h-64`}/>
      <motion.div 
        variants={floaterVariants(25)}
        style={{ filter: `blur(${blurAmount.get()}px)` }}
        initial="initial"
        animate="beginFloat"
        aria-hidden
        className={`${style['floating-ellipse']} bg-secondary left-128 top-5 w-64 h-64`}/>
      <motion.div 
        variants={floaterVariants(20, true)}
        style={{ filter: `blur(${blurAmount.get()}px)` }}
        initial="initial"
        animate="beginFloat"
        aria-hidden
        className={`${style['floating-ellipse']} bg-secondary right-25 top-40 w-56 h-56`}/>
    </>
  )
}

export default Floaters;
