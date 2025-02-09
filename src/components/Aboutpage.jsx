import manWithRifle from "../assets/aboutImage.jpg";

import React from "react";
import trainers from "../data/trainers.js";

export default function About() {
  return (
    <section className="mx-auto max-w-screen-xl bg-slate-800 sm:text-justify text-xl sm:text-2xl">
      <div className="pt-15 p-6 text-white">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">
          Barrel and Its Mission
        </h1>
        <p className="my-4 leading-relaxed">
          At Barrel, our mission is to empower civilians with military-grade
          knowledge and skills to effectively handle high-risk situations.
          Whether it's defending your home from an invasion or being prepared
          for a national crisis, we provide the training and resources necessary
          to ensure your safety and the safety of your loved ones.
        </p>
        <Image src={manWithRifle} />
        <p className="my-4 leading-relaxed">
          Our comprehensive programs cover a wide range of topics, including
          tactical defense strategies, emergency preparedness, and survival
          techniques. We believe that with the right training, anyone can
          develop the confidence and capability to protect themselves and their
          community in times of need.
        </p>
        <p className="my-4 leading-relaxed">
          Join us at Barrel and become part of a community dedicated to
          resilience, readiness, and responsibility. Together, we can build a
          safer and more secure future for everyone.
        </p>
      </div>

      <div className="pt-15 p-6 bg-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">
          The Barrel Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group hover:shadow-2xl transition-all duration-700 hover:bg-gray-500 bg-gray-700 p-4 text-center">
              <img
                src={trainer.image}
                alt={`${trainer.name} Photo`}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-yellow-500">
                {trainer.name}
              </h2>
            </div>
          ))}
        </div>
        <p className="my-4 leading-relaxed">
          Our team at Barrel is composed of highly skilled professionals with
          extensive backgrounds in military, law enforcement, and emergency
          response. Each member brings a wealth of knowledge and experience to
          our training programs, ensuring that you receive the highest quality
          instruction.
        </p>
      </div>
    </section>
  );
}

export function Image({ src }) {
  return (
    <div className="overflow-hidden max-h-[35vh]">
      <img
        className="w-full h-full object-cover -translate-y-6"
        src={src}
        alt="Company Image"
      />
    </div>
  );
}
