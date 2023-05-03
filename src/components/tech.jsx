import React from "react";
import SectionWrapper from "../hoc/wrapper";
import {
    ai,
    ax,
    bl,
    bt,
    cs,
    fg,
    ht,
    id,
    iv,
    jm,
    jss,
    ma,
    nt,
    ps,
    sk,
    xd
} from "../assets/assets.jsx";
import { motion } from "framer-motion";
import { textVariant } from "../util/motion.jsx";


const Tech = () => {

    return (
        <>
            <div className="py-10 lg:py-20 px-5 lg:px-16 bg-white">
                <motion.div variants={textVariant()}>
                    <h1 className={`text-black font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-leftr`}>Tools</h1>
                    <h2 className={' font-raleway mt-4 text-secondary text-[16px] tracking-wider  text-leftr text-black'}>These are the preferred tools that I've been working on to streamline my creative process. I'm
                        always open to learning new methodologies, approaches, and strategies to hone my craft.</h2>
                </motion.div>


                <div className=" flex justify-center align-middle w-full">
                    <div className="grid grid-cols-4 gap-1  lg:w-9/12  mt-20 place-items-center">
                        <div>
                            <a href="https://www.adobe.com/products/illustrator.html" target="_blank">
                                <img src={ai} alt={"ai"} width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.axure.com/" target="_blank">
                                <img src={ax} alt={"ax"} width={80} height={80} className={"brightness-200"} />
                            </a>
                        </div>
                        <div>
                            <a href="https://balsamiq.com/" target="_blank">
                                <img src={bl} alt={"bl"} width={90} height={90} />
                            </a>
                        </div>
                        <div>
                            <a href="https://getbootstrap.com/" target="_blank">
                                <img src={bt} alt={"bt"} width={60} height={60} />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.w3schools.com/css/" target="_blank">
                                <img src={cs} alt={"cs"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.w3schools.com/html/default.asp" target="_blank">
                                <img src={ht} alt={"ht"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.w3schools.com/js/" target="_blank">
                                <img src={jss} alt={"jss"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.sketch.com/" target="_blank">
                                <img src={sk} alt={"sk"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.adobe.com/products/indesign.html" target="_blank">
                                <img src={id} alt={"id"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.invisionapp.com/" target="_blank">
                                <img src={iv} alt={"iv"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.justinmind.com/" target="_blank">
                                <img src={jm} alt={"jm"} className="mt-10 brightness-200" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://helpx.adobe.com/support/xd.html" target="_blank">
                                <img src={xd} alt={"xd"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>

                        <div>
                            <a href="https://marvelapp.com/" target="_blank">
                                <img src={ma} alt={"ma"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.figma.com/" target="_blank">
                                <img src={fg} alt={"fg"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.notion.so/">
                                <img src={nt} alt={"nt"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.adobe.com/products/photoshop.html" target="_blank">
                                <img src={ps} alt={"ps"} className="mt-10" width={60} height={60} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SectionWrapper(Tech, "tech");
