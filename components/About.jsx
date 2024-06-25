import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services, socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function ServiceCard({ index, title, icon }) {
    return (
        <Tilt className="w-[250px]">
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <div className="w-16 h-16 object-contain relative">
                        {icon}
                    </div>
                    <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[20px] font-bold text-center w-[80%]">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
}

function About() {
    return (
        <section
            className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
            id="about"
        >
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <p className="sectionSubText text-gray-300">Introduction</p>
                <h2 className="sectionHeadText text-white">Overview.</h2>
            </motion.div>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-4"
            >
                <div>
                    Hello! I&apos;m Sohag Bandyopadhyay, a person with an interest in web development
                    and problem-solving. Currently, I&apos;m a service engineer
                    at Redington Limited, and I&apos;ve completed a full stack (MERN) course
                    and have been working on individual projects for over a year.
                    I have knowledge of HTML, CSS, JavaScript, and React.
                    I am also familiar with frameworks such as Node.js, Next.js, and TailwindCSS.
                </div>
                <div className="w-fit break-words">
                    <Link
                        href="mailto:sohagbandyopadhyay@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break"
                    >
                        <EmailIcon className="w-[30px] h-[30px]" />
                        sohagbandyopadhyay@gmail.com
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
                    {socials.map((social) => (
                        <Link
                            href={social.link}
                            target="_blank"
                            key={social.id}
                            className="w-8 h-8"
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
                <Link
                    href="document/Sohag_Bandyopadhyay_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit"
                >
                    <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
                        <div className="original bg-primary text-white px-7 py-2">
                            Resume
                        </div>
                        <div className="letters">
                            <span>R</span>
                            <span>e</span>
                            <span>s</span>
                            <span>u</span>
                            <span>m</span>
                            <span>e</span>
                        </div>
                    </div>
                </Link>
            </motion.div>

            <div className="mt-14 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </section>
    );
}

export default About;
