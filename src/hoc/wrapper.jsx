
import { motion } from "framer-motion";
import { staggerContainer } from "../util/motion";

const Wrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={``}
            >
        <span className='span' id={idName}>
          {/* &nbsp; */}
        </span>

                <Component />
            </motion.section>
        );
    };

export default Wrapper