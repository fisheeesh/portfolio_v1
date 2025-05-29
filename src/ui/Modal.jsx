/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export const Modal = ({
    modal,
    link,
    setIsOpen,
    img,
    isOpen,
    title,
    code,
    tech,
}) => {
    // Blur images
    const [isImageLoading, setImageLoading] = useState(true)

    const content = (
        <div className="h-full fixed top-0 left-0 right-0 z-[9999] py-8 px-[1.2rem] bg-[#11111140] cursor-pointer grid place-items-center overflow-y-scroll backdrop-blur-[12px]" onClick={() => setIsOpen(false)}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[700px] h-fit rounded-[1.2rem] bg-[#fafaff] cursor-auto shadow-[0px_5px_15px_rgba(0,0,0,0.1)]">
                <button className="z-[999] absolute inline-flex justify-center items-center top-1.5 left-[50%] -translate-x-1/2 p-1.5 text-[2.5rem] w-8 h-8 rounded-full opacity-70 text-[#ebecf3] bg-[#232323] cursor-pointer" onClick={() => setIsOpen(false)} aria-label="Close Modal">
                    <MdClose className="opacity-70 transition duration-200 max-[768px]:opacity-100 hover:opacity-100 scale-[1.025]" />
                </button>
                <img
                    src={img}
                    alt={`An image of the ${title} project.`}
                    width={1080}
                    height={608}
                    onLoad={() => setImageLoading(false)}
                    className={`rounded-[1.2rem_1.2rem_0_0] w-full h-auto ${isImageLoading ? 'blur' : 'remove-blur'}`}
                />
                <div className="p-6 space-y-4">
                    <h4 className="text-4xl font-bold ">{title}</h4>
                    <div className="flex flex-wrap font-medium gap-2 text-brand text-lg">{tech.join(" - ")}</div>
                    <div className="flex flex-col gap-[1.2rem]">{modal}</div>
                    <div className="">
                        <p className="font-bold text-2xl mb-[0.8rem]">
                            Links<span className="text-brand">.</span>
                        </p>
                        <div className="flex flex-row justify-between">
                            <div className="flex items-center gap-[1.5rem]">
                                <a className="flex items-center gap-[0.4rem] font-medium text-brand opacity-100 duration-200 hover:opacity-80" target="_blank" rel="nofollow" href={code} title="GitHub" aria-label="View Code">
                                    <AiFillGithub size="2rem" />
                                    Code
                                </a>
                                <a className="flex items-center gap-[0.4rem] font-medium text-brand opacity-100 duration-200 hover:opacity-80" target="_blank" rel="nofollow" href={link} title="Demo" aria-label="View Website">
                                    <BsGlobe size="1.7rem" />
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    if (!isOpen) return <></>;

    // @ts-ignore
    return createPortal(content, document.getElementById("root"));
};
