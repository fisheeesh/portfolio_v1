/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineMail
} from "react-icons/ai";

export const Socials = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
            {/* LINKEDIN */}
            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <a
                    className="z-[29] opacity-50 transition duration-200 hover:opacity-100 hover:text-brand max-[360px]:gap-[1.2rem]"
                    href="https://www.linkedin.com/in/fvukelic"
                    target="_blank"
                    rel="nofollow"
                    title="LinkedIn"
                    aria-label="Contact me on LinkedIn">
                    <AiFillLinkedin size="1.6rem" />
                </a>
            </motion.span>

            {/* GITHUB */}
            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <a
                    className="z-[29] opacity-50 transition duration-200 hover:opacity-100 hover:text-brand max-[360px]:gap-[1.2rem]"
                    href="https://github.com/basedhound"
                    target="_blank"
                    rel="nofollow"
                    title="GitHub"
                    aria-label="View my GitHub Profile">
                    <AiFillGithub size="1.6rem" />
                </a>
            </motion.span>

            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <a
                    className="z-[29] opacity-50 transition duration-200 hover:opacity-100 hover:text-brand max-[360px]:gap-[1.2rem]"
                    href="mailto:fvukelic@proton.me"
                    target="_blank"
                    rel="nofollow"
                    title="Email"
                    aria-label="Send me an Email">
                    <AiOutlineMail size="1.6rem" />
                </a>
            </motion.span>
        </div>
    );
};
