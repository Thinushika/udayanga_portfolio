import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import SectionWrapper  from "../hoc/wrapper";
import { textVariant } from "../util/motion";

const experiences = [

    {
        title: "UI / UX Designer",
        company_name: "Medfuture Medical Healthcare Recruitment Ltd",
        location:"Sri Lanka",
        date: "Jan 2021 - Present",

    },
    {
        title: "UX Designer",
        company_name: "Magellan Champlain",
        location:"Sri Lanka",
        date: " 2019 - 2021",

    },
    {
        title: "UI Designer ( Internship )",
        company_name: "Courage in Action",
        location:"Canada",
        date: "2018 - 2019",

    },
    {
        title: "Web Designer",
        company_name: "Sapphire Capital Group",
        location:"Sri Lanka",
        date: "2017 - 2018",

    },



];

const ExperienceCard = ({ experience }) => {



    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgba(165,85,218,0)",
                color: "#ffffff",
            }}
            contentArrowStyle={{ borderRight: "4px solid  #232631" }}
            date={experience.date}
            iconStyle={{  background: "rgb(16,15,15)"}}

        >
            <div>
                <h3 className='text-teal-300 text-[24px] font-bold font-raleway'>{experience.title}</h3>
                <p
                    className='font-raleway text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}

                </p>
                <p
                    className='font-raleway text-secondary text-[14px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.location}

                </p>



            </div>


        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <div className="py-10 lg:py-20 px-5 lg:px-16">
            <motion.div variants={textVariant()}>
                <h2 className={`text-white font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left`}>
                    Work Experience
                </h2>


            </motion.div>

            <div className='mt-5 flex flex-col '>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");