/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/motion'
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function FixSocialIcon() {
    return (
        <div className='fixed top-[48%] left-[1.5rem] -translate-y-1/2 max-[1000px]:mt-8 max-[1000px]:relative max-[1000px]:top-0 max-[1000px]:left-0'>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <ul className='block max-[1000px]:flex gap-5 max-[1000px]:justify-center max-[1000px]:items-center list-none'>
                    <li className='mb-5 max-[1000px]:mb-0'>
                        <a
                            className='text-[2.3rem] text-[#777779] hover:text-[#3986FA] max-[1000px]:text-[2.5rem] max-[1000px]:text-[#151418] max-[1000px]:hover:text-[#3986FA]'
                            href="https://www.linkedin.com/in/pedro-sales-muniz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            className='text-[2.3rem] text-[#777779] hover:text-[#3986FA] max-[1000px]:text-[2.5rem] max-[1000px]:text-[#151418] max-[1000px]:hover:text-[#3986FA]'
                            href="https://github.com/salesp07"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}
