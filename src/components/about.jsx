import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../util/motion";
import SectionWrapper from "../hoc/wrapper";
import { Link } from "react-router-dom";
import { pdf } from "../assets/assets.jsx";



const About = () => {

    return (
        <>
            <motion.div variants={textVariant()} className={'pt-20 lg:pt-36 px-5 lg:px-16'}>
                <h1 className={"text-[16px] lg:text-[20px]  text-secondary uppercase tracking-wider text-left mt-5 text-teal-500 font-semibold lg:leading-[30px]"}>About</h1>
                <h2 className={`text-white font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[28px] tracking-wider text-left mt-3`}>What I Do</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-5 text-secondary text-[16px]  leading-[29px]  text-left px-5 lg:px-16 font-raleway'
            >
                I'm Udayanga Dasunpriya, a UX Designer skilled in Product Analytics and Design Facilitation with 5+ years of hands-on experience in digital products, with the past four years, focused on User Experience. I’m passionate about pushing products to the next level through a design process that includes data-backed user research, rapid iteration, and visually stunning user-focused UI. I believe our digital experiences should always be joyful and easy. I aim to produce intuitive, immersive designs by integrating innovation and elegance into modular design patterns. I want to push the boundaries of web design while delighting users and serving company needs.
                <br />
                <br />
                <br />
                Years of experience as a UX designer, helped me understand the problems that prevent creative solutions from achieving business objectives. I have a strong belief that approaching creative deliverables with a UX focus can help bridge those gaps and produce work that is efficient, and pleasing ultimately elevating people’s experiences.
                <br />
                <br />
                <br />
                Outside of design, reading books, Play basketball, and enjoy exploring the green outdoors. Let’s create something together! Or get tacos!
            </motion.p>
            <div className={` flex-1 flex items-center justify-center  lg:justify-start px-2 lg:px-16 pb-10 lg:pb-20`}>
                <button
                    className="py-3 px-8 rounded-full text-sm font-bold text-white hover:text-black border-2 border-amber-500 hover:bg-amber-300 duration-300 mt-10">
                    <Link to={pdf} target="_blank" download>Download</Link>
                </button>
            </div>



            <motion.div className={'py-10 lg:py-20 px-5 lg:px-16 bg-white'} variants={textVariant()}>
                <p className={`text-black font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left mb-5 `}>Education</p>

                <motion.ul
                    className=" hover:text-gray-700 text-black"
                    animate={{ x: [0, 100, 0] }}
                    transition={{ ease: "easeOut", duration: 2 }}
                >
                    <motion.li className={"font-raleway sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider  font-bold "}>
                        BSc (Hons) in Information Technology Specializing in Interactive Media
                    </motion.li>
                    <motion.li
                        className={"font-raleway sm:text-[12px] text-[10px] text-secondary uppercase tracking-wider  mb-10"}> 
                        Sri Lanka Institute of Technology, Sri Lanka 2016 - 2020
                    </motion.li>
                    <motion.li className={"font-raleway sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider  font-bold"}>
                        UX Design Professional Certificate
                    </motion.li>
                    <motion.li
                        className={"font-raleway sm:text-[12px] text-[10px] text-secondary uppercase tracking-wider  mb-10"}>
                            Google Career 2021 - 2022
                    </motion.li>
                    <motion.li
                        className={"font-raleway sm:text-[16px] text-[18px] text-secondary uppercase tracking-wider  font-bold"}>
                            Diploma in Web Design & Web Development
                    </motion.li>
                    <motion.li
                        className={"font-raleway sm:text-[12px] text-[10px] text-secondary uppercase tracking-wider "}>
                            Sri Lanka Institute of Technology, Sri Lanka 2022 - 2023
                    </motion.li>
                </motion.ul>

            </motion.div>


        </>
    );
};

export default SectionWrapper(About, "about");