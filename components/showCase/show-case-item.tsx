import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import Image from 'next/image';
import { Reveal } from '../shared/reveal';
import { Modal } from "../shared/modal";

interface Props {
    modal: JSX.Element;
    link: string;
    desc: string;
    img: string;
    title: string;
    code: string;
    tech: string[];
}

export const ShowCaseItem = ({
    modal,
    link,
    desc,
    img,
    title,
    code,
    tech,
}: Props) => {
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen) {
            body!.style.overflowY = "hidden";
        } else {
            body!.style.overflowY = "scroll";
        }
    }, [isOpen]);

    return (
        <>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75 }}>
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setIsOpen(true)}
                    className="relative overflow-hidden cursor-pointer aspect-[17/9] rounded-[0.8rem] bg-[#232323] flex items-center justify-center"
                >
                    <Image
                        className={`transition-all duration-300 absolute -bottom-[60px] rounded-[0.4rem] ${hovered ? "scale-[0.9] rotate-[2deg]" : "scale-[0.85] rotate-0"
                            }`}
                        src={img}
                        alt={`An image of the ${title} project.`}
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="my-3 mx-0 space-y-2">
                    <Reveal width="100%">
                        <div className="flex items-center gap-2">
                            <h4 className="font-bold text-[1.6rem] shrink-0 [max-width:calc(100%-150px)]">{title}</h4>
                            <div className="w-full h-0.5 opacity-30 bg-gray-400" />

                            <a className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={code} target="_blank" rel="nofollow" title="GitHub" aria-label="View Code">
                                <AiFillGithub size="2rem" aria-hidden="true" />
                            </a>

                            <a className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={link} target="_blank" rel="nofollow" title="Demo" aria-label="View Website">
                                <BsGlobe size="1.7rem" aria-hidden="true" />
                            </a>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-wrap gap-2 font-medium text-brand mx-0">{tech.join(" - ")}</div>
                    </Reveal>
                    <Reveal>
                        <p className="font-normal">
                            {desc} <br />
                            <span className="inline-block font-medium mt-3 text-brand cursor-pointer opacity-100 transition duration-200 hover:opacity-80" onClick={() => setIsOpen(true)} aria-label="View Details">Details {">"}</span>
                        </p>
                    </Reveal>
                </div>
            </motion.div>
            <Modal
                modal={modal}
                link={link}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                img={img}
                title={title}
                code={code}
                tech={tech}
            />
        </>
    );
};
