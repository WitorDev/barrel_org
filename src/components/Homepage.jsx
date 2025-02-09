import React from "react";
import bgImage from "../assets/soldier-bg.jpg";
import trainers from "../data/trainers.js";
import content from "../data/content.js";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Homepage() {
  return (
    <main className="h-screen">
      <Hero />
      <Content />
    </main>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden w-full h-2/3">
      <img
        className="w-full h-full object-cover"
        src={bgImage}
        alt="Background"
      />
    </section>
  );
}

export function Content() {
  return (
    <section className="-translate-y-20 mx-auto max-w-screen-xl bg-slate-800 text-white">
      <div className="p-6 shadow-2xl flex-col sm:flex-row flex gap-5 sm:gap-0">
        <TrainerProfiles />
        <TrainerComment />
      </div>
      <div className="mt-5 flex flex-col gap-5 h-[300vh]">
        {content.map((item, index) => {
          return (
            <ResourceCard
              key={index}
              index={index}
              title={item.title}
              content={item.text}
              image={item.image}
              oposite={index % 2 === 0}
            />
          );
        })}
      </div>
    </section>
  );
}

export function ResourceCard({ title, content, image, oposite, index }) {
  const target = useRef(null);
  
  // Track the scroll progress of each individual card
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["end start", "start end"], // Start fading when the card reaches the top
  });

  // Opacity based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]); // Fade in as the card reaches the middle, fade out as it leaves
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.95]);
  return (
    <motion.div
      ref={target}
      style={{ opacity, scale, translateY: `${index * 20}px`}} // Apply the fading effect
      className={`border-t-4 border-t-yellow-500 h-[50vh] mx-4 sticky top-40 flex sm:flex-row flex-col bg-slate-900 p-5 gap-5`}
    >
      {oposite ? (
        <>
          <div>
            <h1 className="text-2xl font-bold mb-5 text-yellow-500">{title}</h1>
            <p className="text-lg font-semibold">{content}</p>
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="Content Image" />
          </div>
        </>
      ) : (
        <>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="Content Image" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-5 text-yellow-500">{title}</h1>
            <p className="text-lg font-semibold">{content}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export function TrainerProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
    }, 10000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-1/2 flex h-[8vh]">
      {trainers.map((trainer, index) => (
        <div
          key={index}
          className={`overflow-hidden border-4 rounded-full w-20 absolute ${
            index === currentIndex
              ? "border-red-500 animate-pulse"
              : "border-yellow-500"
          }`}
          style={{ marginLeft: `${index * 50}px` }} // Adjust the multiplier as needed
        >
          <img src={trainer.image} alt={`${trainer.name} Photo`} />
        </div>
      ))}
    </div>
  );
}

export function TrainerComment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % trainers.length);
        setOpacity(1);
      }, 1000); // Adjust the duration as needed
    }, 10000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[8vh] my-5 sm:my-0 w-full items-center">
      <div
        key={currentIndex}
        style={{ opacity, transition: "opacity 1s ease-in-out" }}
        className="text-justify border-l-4 pl-2 border-l-yellow-500"
      >
        <p>{trainers[currentIndex].comment}</p>
      </div>
    </div>
  );
}
