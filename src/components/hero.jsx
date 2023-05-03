import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {
   pdf
} from "../assets/assets.jsx";
const Hero = () => {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/about`;
        navigate(path);
    }

    return (
        <>
            <div className={'max-w-7xl mx-auto sm:px-16 px-6 flex mt-60 flex-row mb-9 items-start gap-5 '}>
                <div>
                    <h1 className={`lg:text-[85px] font-semibold sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[94px] text-white `}>
                        Hi, I'm Udayanga,
                    </h1>
                    <h2 className={`lg:text-[85px] sm:text-[60px] xs:text-[50px] text-[40px] mb-4 font-semibold lg:leading-[94px]`}>
                        a <span className='text-teal-400'> Product Designer.</span>
                    </h2>
                    <p className={`lg:text-[24px] font-normal sm:text-[26px] xs:text-[24px] text-[24px] text-white hover:text-cyan-100 lg:leading-[36px]`}>
                        I create data-driven solutions that elevate human experiences, passionate about focusing on crafting user experiences and designing systems for software, web, and mobile products.<br className='sm:block hidden' />
                    </p>
                </div>
            </div>
            <div className={'max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'}>
                <div className="grid grid-cols-2 gap-5 ">
                    <button
                        onClick={routeChange}
                        className="py-3 px-8 rounded-full text-sm font-bold text-white hover:text-black border-2 border-teal-500 hover:bg-teal-300 duration-300">
                        Read more
                    </button>
                    <button
                        className="py-3 px-8 rounded-full text-sm font-bold text-white hover:text-black border-2 border-amber-500 hover:bg-amber-300 duration-300">
                        <Link to={pdf} target="_blank" download>Resume</Link>
                    </button>
                </div>
            </div>
        </>
    );
};
export default Hero;
