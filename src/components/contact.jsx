import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../util/motion";
import SectionWrapper from "../hoc/wrapper";

const Contact = () => {
  return (
    <>
      <div className="sm:px-16 px-6  pt-12 lg:pt-24 sm:pb-10 pb-10  mx-auto relative z-0" >
        <motion.div variants={textVariant()} className={"mt-24"}>
          <h1
            className={`font-semibold sm:text-[16px] lg:text-[20px] text-secondary uppercase tracking-wider text-violet-500 text-left mt-5`}
          >
            Get in Touch{" "}
          </h1>
          <h2
            className={`font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left `}
          >
            Let's talk
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 mb-12 text-secondary lg:leading-[36px] lg:text-[24px] font-normal sm:text-[26px] xs:text-[24px] text-[24px]  text-left"
        >
          I love engaging with new clients and our community. If you have an
          inquiry or any other questions, reach out!
        </motion.p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-16 px-6 sm:py-10 py-10 bg-white">
        <div class="px-0 sm:px-4">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className=" text-black text-[16px]  leading-[30px]  text-left mt-9"
          >
            +94 76 379 5193
            <br />
            udayangadasunpriya24@gmail.com
          </motion.p>
        </div>
        <div class="px-0 sm:px-4">
          <section className="my-10">
            <div className=" mx-auto max-w-screen-md">
              <form action="#" className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
              <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-black dark:black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-black dark:black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder=""
                    required
                  />
                </div>
              </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black dark:black"
                  >
                    Your email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="abcd@post.com"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-black dark:black"
                  >
                    Your message*
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-8 rounded-lg text-sm font-bold text-white bg-black w-full hover:text-black border-2 border-black hover:bg-white  hover:border-black duration-300"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
