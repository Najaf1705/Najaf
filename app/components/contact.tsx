"use client";
import React from "react";
import { sendEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8f8ff] dark:bg-[#1e1e2f] text-gray-900 dark:text-gray-200 text-center justify-center items-center mt-20 flex flex-col h-auto gap-4 border border-gray-300 dark:border-gray-700 rounded-lg p-6 sm:p-8 scroll-mt-28"
    >
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Contact Me
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        Please contact me directly via{" "}
        <a
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500"
          href="mailto:najafshaikh1705@gmail.com"
        >
          najafshaik1705@gmail.com
        </a>{" "}
        or through the form below.
      </p>
      <form
        className="flex flex-col gap-3 text-center items-center w-full max-w-xl mx-auto"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <label className="mt-6 w-full sm:w-96">
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-600 dark:text-gray-400"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              type="email"
              required
              className="w-full text-sm text-gray-800 dark:text-gray-100 bg-transparent outline-none"
              placeholder="Email"
              maxLength={500}
            />
          </div>
        </label>
        <textarea
          name="message"
          required
          className="w-full sm:w-96 h-32 p-2 text-sm text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          placeholder="Write your message here..."
          maxLength={5000}
        ></textarea>

        <button
          type="submit"
          className="group relative inline-flex py-2 w-full sm:w-36 items-center justify-center overflow-hidden rounded-full bg-gray-700 border border-black/5 font-semibold text-white duration-500 dark:bg-[#818cf8]"
        >
          <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
            Submit
          </div>
          <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </form>
    </section>
  );
}
