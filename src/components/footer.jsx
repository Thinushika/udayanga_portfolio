import React from "react";
import { logo } from "../assets/assets.jsx";



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (


        <footer className="bg-black dark:text-gray-50">
            <div className="flex flex-col p-4  lg:px-16 lg:flex-row divide-gray-400">
                <div className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-start sm:space-x-4 lg:flex-1 lg:justify-start">
                    <a href="home">
                    <img src={logo} alt={"logo"} width={50} height={50} className="mx-1 p-2" />
                    </a>
                </div>
                <div className="flex flex-col justify-end pt-6 lg:pt-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex justify-center lg:justify-end space-x-4  ">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/udayanga-dasunpriya-a3990b25a/" title="LinkedIn"
                                className="flex items-center justify-center lg:justify-end h-10 rounded-full sm:h-10 ">
                                <p className="">Linkedin</p>
                                <i className="bi bi-chevron-right ml-2 px-1 hover:rounded-md font-bold text-white hover:text-black border border-violet-500 hover:bg-violet-500 duration-300"></i>
                            </a>
                        </div>
                        <div className="flex justify-center lg:justify-end space-x-4 lg:w-32">
                            <a href="mailto:udayangadasunpriya24@gmail.com" title="Email"
                                className="flex items-center justify-center lg:justify-end h-10 rounded-full  sm:h-10 ">
                                <p className="">Let's Talk</p>
                                <i className="bi bi-chevron-right ml-2 px-1 hover:rounded-md font-bold text-white hover:text-black border border-amber-500 hover:bg-amber-300 duration-300"></i>
                            </a>
                        </div>
                    </div>
                    <div
                        className="self-center py-4 space-y-4 text-center lg:text-right sm:flex sm:space-y-0 justify-center sm:space-x-4 lg:flex-1 lg:justify-end" style={{width: "max-content"}}>
                        {year} © <a href="#" className="hover:text-teal-400">All Rights Reserved</a>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;