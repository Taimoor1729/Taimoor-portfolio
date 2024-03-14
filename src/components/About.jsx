import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "../hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    style={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title} className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>);
}
const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>
                    Introduction
                    <h2 className={styles.sectionHeadText}>
                        Overview.
                    </h2>
                </p>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
            >
                Hello! I'm M.Taimoor, a versatile web and mobile app developer with a strong focus on building robust and user-friendly applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) for web development and React Native for mobile app development. With a passion for creating seamless user experiences and a deep understanding of both web and mobile technologies, I bring innovation and efficiency to every project. </motion.p>
            <div className={"mt-20 flex flex-wrap gap-10"}>
                {services.map((service, index) => {
                    return (<ServiceCard key={service.title} index={index} {...service}/>)
                })}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")
