// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Modal } from "@/ui/Modal";
import { Reveal } from "@/utils/Reveal";

export const GalleryItem = ({ modal, link, img, title, code, tech }) => {
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
            body.style.overflowY = "hidden";
        } else {
            body.style.overflowY = "scroll";
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
                    className="w-full aspect-[16/9] bg-[#232323] cursor-pointer relative rounded-[0.8rem] overflow-hidden">
                    <img
                        className={`transition-all duration-300 absolute -bottom-[40px] rounded-[0.4rem] ${hovered ? "scale-[0.9] rotate-[2deg]" : "scale-[0.85] rotate-0"
                            }`}
                        src={img}
                        alt={`An image of the ${title} project.`}
                        width={1000}
                        height={0}
                    />
                </div>
                <div className="my-5 mx-0 space-y-1">
                    <Reveal width="100%">
                        <div className="flex items-center gap-2">
                            <h4 className="cursor-default font-bold text-[1.5rem] shrink-0 [max-width:calc(100%-150px)] opacity-65 transition duration-200 hover:opacity-100">{title}</h4>
                            <div className="w-full h-0.5 opacity-30 bg-gray-400" />

                            <a className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={code} target="_blank" rel="nofollow" title="GitHub" aria-label="View Code">
                                <AiFillGithub size="2rem" />
                            </a>

                            <a className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={link} target="_blank" rel="nofollow" title="Demo" aria-label="View Website">
                                <BsGlobe size="1.7rem" />
                            </a>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-wrap gap-2 font-medium text-brand mx-0">{tech.join(" - ")}</div>
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
