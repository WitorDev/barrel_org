import React, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import bgImage from "../assets/soldier-bg.jpg";
import studentsPicture from "../assets/student.jpg";
import trainers from "../data/trainers.js";
import content from "../data/content.js";
import studentsList from "../data/students.js";
import Footer from "./Footer.jsx";

export default function Homepage() {
  return (
    <div className="h-screen">
      <main>
        <Hero />
        <Content />
        <Students />
      </main>
      <Footer />
    </div>
  );
}

function Students() {
  const [studentIndex, setStudentIndex] = useState(0);
  const student = studentsList[studentIndex];

  return (
    <section className="text-center flex justify-center items-center relative border-t-4 border-yellow-500">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-30"
          src={studentsPicture}
          alt="Students Image"
        />
      </div>
      <div className="relative max-w-screen-md flex flex-col sm:flex-row text-white bg-slate-800 shadow-2xl m-4 sm:m-20">
        <div className="max-h-[300px] sm:max-h-full sm:max-w-1/3 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={student.image}
            alt="Student Image"
          />
        </div>
        <motion.div
          viewport={{ once: true, margin: "-200px" }}
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          className="p-8"
        >
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-5">What our students think</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-yellow-500 font-bold text-4xl mb-4">
              {student.name}
            </h1>
            <p className="text-2xl mb-8 text-center">{student.comment}</p>
            <div className="flex gap-4">
              <motion.button
                whileTap={{ scale: 0.5 }}
                className="bg-yellow-500 text-slate-800 p-2 rounded-full hover:bg-yellow-600 transition"
                onClick={() =>
                  setStudentIndex(
                    (studentIndex - 1 + studentsList.length) % studentsList.length
                  )
                }
              >
                <BsArrowLeft size={30} />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.5 }}
                className="bg-yellow-500 text-slate-800 p-2 rounded-full hover:bg-yellow-600 transition"
                onClick={() =>
                  setStudentIndex((studentIndex + 1) % studentsList.length)
                }
              >
                <BsArrowRight size={30} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="h-[30vh] bg-slate-800"></div>
    </section>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden w-full max-h-[80vh]">
      <img
        className="w-full h-full object-cover"
        src={bgImage}
        alt="Background"
      />
    </section>
  );
}

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="-translate-y-20 mx-auto max-w-screen-xl bg-slate-800 text-white">
      <div className="p-6 shadow-2xl flex-col sm:flex-row flex gap-5 sm:gap-0">
        <TrainerProfiles currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        <TrainerComment currentIndex={currentIndex} />
      </div>
      <div className="mt-5 flex flex-col gap-5 h-[240vh]">
        {content.map((item, index) => (
          <ResourceCard
            key={index}
            index={index}
            title={item.title}
            content={item.text}
            image={item.image}
            oposite={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

function ResourceCard({ title, content, image, oposite, index }) {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["end start", "start end"],
  });
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.55]);

  return (
    <motion.div
      ref={target}
      style={{ scale, translateY: `${index * 20}px` }}
      className={`border-t-4 border-t-yellow-500 h-[50vh] mx-4 sticky top-40 flex sm:flex-row flex-col bg-slate-900 p-5 gap-5`}
    >
      {oposite ? (
        <>
          <div className="sm:w-1/2">
            <h1 className="text-4xl font-bold mb-5 text-yellow-500">{title}</h1>
            <p className="text-2xl font-semibold">{content}</p>
          </div>
          <div className="overflow-hidden">
            <img
              className="bg-yellow-500/50 w-full h-full object-cover"
              src={image}
              alt="Content Image"
            />
          </div>
        </>
      ) : (
        <>
          <div className="overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Content Image"
            />
          </div>
          <div className="sm:w-1/2">
            <h1 className="text-4xl font-bold mb-5 text-yellow-500">{title}</h1>
            <p className="text-2xl font-semibold">{content}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

function TrainerProfiles({ currentIndex, setCurrentIndex }) {
  return (
    <div className="w-1/2 flex h-[8vh] mb-2 sm:mb-0 cursor-pointer">
      {trainers.map((trainer, index) => (
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          key={index}
          className={`hover:border-6 transition-all overflow-hidden border-4 rounded-full w-20 absolute ${
            index === currentIndex
              ? "border-red-500 animate-pulse"
              : "border-yellow-500"
          }`}
          style={{ marginLeft: `${index * 50}px` }}
          onClick={() => setCurrentIndex(index)}
        >
          <img src={trainer.image} alt={`${trainer.name} Photo`} />
        </motion.div>
      ))}
    </div>
  );
}

function TrainerComment({ currentIndex }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setOpacity(1);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
