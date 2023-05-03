import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../util/motion";
import SectionWrapper from "../hoc/wrapper";
import { heroImage, process } from "../assets/assets";



const Skill = () => {

    return (
        <>
            <div className="py-10 lg:py-20 px-5 lg:px-16 bg-white">
                <motion.div variants={textVariant()}>
                    <p className={`text-black font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left`}>UX Process</p>
                </motion.div>

                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[16px] text-black tracking-wider  text-left font-raleway'
                >
                    Focusing on figuring out the right problem to solve is the core of my <span className={'font-extrabold text-amber-600'}>  UX process </span>. From research to testing the prototypes, <br /> I always aim to focus on a <span className={'font-extrabold text-amber-600'}> user-centric approach </span>through iterative sprints.
                    <br />
                    <br />
                    <br />
                    Whether it's <span className={'font-extrabold text-amber-600'}>  facilitating workshops </span> or getting hands-on,<span className={'font-extrabold text-amber-600'}> working collaboratively </span> allows me to discover the most suitable principles for each project. I'm flexible enough to adapt the UX process when the project calls for it.
                    <br />
                    <br />
                    <br />

                </motion.p>
                <img
                    src={process}
                    className="h-auto max-w-full hero container max-w-screen-lg mx-auto pb-10"
                    alt="image" />

            </div>

            <motion.div className={'py-10 lg:py-20 px-5 lg:px-16'} variants={textVariant()}>
                <h1 className={`text-white font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left mb-5 `}>Core Skills</h1>
                <h2 className={'mt-4 text-secondary text-[16px] tracking-wider text-left font-raleway'}>I always strive to bring together the right techniques and methods to achieve the best possible outcome by working collaboratively. Here’s the spread of my core skills:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20  gap-y-3 sm:mx-5 md:mx-10 lg:mx-7 mt-20 place-items-center">
                    <div className="flex flex-col justify-center align-middle text-center py-5 lg:py-0">
                        <div className={'font-extrabold text-[16px] font-raleway'}>UX RESEARCH</div>
                        <div className={'text-neutral-400 text-[14px] font-raleway mt-5'}>Problem Statement</div>
                        <div className={'text-neutral-400 text-[14px] font-raleway'}>Hypothesis</div>
                        <div className={'text-neutral-400 text-[14px] font-raleway'}>Methods & Workshops</div>
                        <div className={'text-neutral-400 text-[14px] font-raleway'}>Usability Studies</div>
                        <div className={'text-neutral-400 text-[14px] font-raleway'}>Synthesis</div>
                    </div>


                    <div className="flex flex-col justify-center align-middle text-center py-5 lg:py-0">
                        <div className={'font-extrabold text-[16px] font-raleway'}> UX DESIGN</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway mt-5'}>Design Goal</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>User-centric-approch</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Wireframe</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Prototype</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Usability Testing</div>
                    </div>


                    <div className="flex flex-col justify-center align-middle text-center py-5 lg:py-0">
                        <div className={'font-extrabold text-[16px] font-raleway'}>UI DESIGN</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway mt-5'}>Design System</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Style Guide</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Layout</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Visual Interface</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Responsive Design</div>
                    </div>

                    <div className="flex flex-col justify-center align-middle text-center py-5 lg:py-0">
                        <div className={'font-extrabold text-[16px] font-raleway'}>PRODUCT ANALYTICS</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway mt-5'}>PRODUCT ANALYTICS</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Web Analytics</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Compititve Analysis</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Data Insights</div>
                        <div className={'text-neutral-400  text-[14px] font-raleway'}>Metrics and KPIs</div>
                    </div>

                </div>


            </motion.div>



        </>
    );
};

export default SectionWrapper(Skill, "skill");