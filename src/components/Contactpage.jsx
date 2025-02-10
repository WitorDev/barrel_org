import React from "react";
import Footer from "./Footer";
import { div } from "framer-motion/client";

export default function Contactpage() {
  return (
    <div>
      <section className="mb-20 pt-15 px-6 text-4xl text-yellow-500 font-bold mx-auto max-w-screen-xl">
        <h1>Contact Us</h1>
        <form className="text-white text-xl mt-8 space-y-6 font-light">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 shadow focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 shadow focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 shadow focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
}
