import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Footer from "./components/footer.jsx";
import Experience from "./components/exp.jsx";
import Tech from "./components/tech.jsx";
import Skill from "./components/skills.jsx";
import Contact from "./components/contact.jsx";
import Project from './components/projects';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./util/motion";


const Home = ({ component }) => {
    return (
        <div className='relative z-0 bg-primary '>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Project/>
            </div>
            <Footer />
        </div>
    );
}

const Ab = ({ component }) => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
            </div>
            <About />
            <Experience />
            <Skill className="py-0" />
            <Tech className="py-0"/>
            <Footer />
        </div>
    );
}

const Contacts = ({ component }) => {
    return (
        <div className='px-0 mx-0 relative z-0 '>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-primary'>
                <Navbar />
            </div>
            <Contact />
            <Footer />
        </div>
    );
}

const Projects = ({ component }) => {
    return (
        <div className='px-0 mx-0 relative z-0 '>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-primary'>
                <Navbar />
            </div>
            <div className="sm:px-16 px-6 pt-12 lg:pt-24 sm:pb-10 pb-10  mx-auto relative z-0" >
                <motion.div variants={textVariant()} className={"mt-24"}>
                    <h1
                        className={`font-semibold sm:text-[16px] lg:text-[20px] text-secondary uppercase tracking-wider text-violet-500 text-left mt-5`}
                    >
                        my works{" "}
                    </h1>
                    <h2
                        className={`font-semibold md:leading-[70px] md:text-[64px] sm:text-[50px] xs:text-[40px] text-[30px] text-left `}
                    >
                        Projects
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
            <Project/>
            <Footer />
        </div>
    );
}


const AppLayout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Ab />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/project" element={<Projects />} />
                {/*<Route path="/admin" element={<Admin />} />*/}
            </Routes>
        </BrowserRouter>

    );
};

export default AppLayout;