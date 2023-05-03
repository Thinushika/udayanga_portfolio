import React from "react";
import {
    winely,
    primer,
    envisage,
    dailyBuzz
} from "../assets/assets.jsx";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../hoc/wrapper";

const projects = [

    {
        id:"winely",
        title: "Winely",
        techstack: ["ios", "Android"],
        image: winely,
        link: "https://udayanga2423.wixsite.com/portfolio/general-8",

    },
    {
        id:"primer",
        title: "Primer",
        techstack: ["Web", "Responsive"],
        image: primer,
        link: "https://udayanga2423.wixsite.com/portfolio/copy-of-payday",

    },
    {
        id:"envisage",
        title: "Envisage",
        techstack: ["ios", "Android"],
        image: envisage,
        link: "https://udayanga2423.wixsite.com/portfolio/copy-of-payday-1",

    },
    {
        id:"dailybuzz",
        title: "Daily Buzz",
        techstack: ["Web", "Responsive"],
        image: dailyBuzz,
        link: "https://udayanga2423.wixsite.com/portfolio/copy-of-envisage",

    },




];

const Project = () => {
    return (
        <>
            {
                projects.map((project, index) => {
                    return (
                        <div id={project.id} className={`grid grid-cols-1 md:grid-cols-2 text-black bg-white  ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} key={index}>
                            <div class="px-0 sm:px-4 flex flex-col justify-center py-20 lg:py-0" style={{ order: index % 2 !== 0 ? '2' : '1' }}>
                                <div className="pl-0 lg:pl-32 text-center lg:text-start">
                                    <h2 className="text-[48px] lg:text-[70px] font-bold">{project.title}</h2>
                                    <div className="text-[20px] list-disc flex flex-row pb-5 justify-center lg:justify-start">
                                        {project.techstack.map((tech, i) => (
                                            <div className="flex align-middle justify-items-center">
                                                <span className="flex w-2 h-2 rounded-3xl bg-slate-800 mr-2" style={{alignSelf:"center"}}></span>
                                                <span className="mr-10" key={i}>{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a href={project.link}>
                                        <button className="bg-white border-black hover:bg-black hover:text-white hover:rounded-lg border text-black text-[16px] px-8 py-2 duration-300">See more</button>
                                    </a>
                                </div>
                            </div>
                            <div class="px-0 flex flex-col justify-center align-middle" style={{ order: index % 2 !== 0 ? '1' : '2' }}>
                                <img src={project.image} alt="" className="" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default SectionWrapper(Project, "project");