/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { fadeIn } from '../../data/motion';

export default function Contact() {
    const [showTooltip, setShowTooltip] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText("swanphyo444@gmail.com");
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 700);
    };
    return (
        <div className='my-20 mx-0' id='contact'>
            <div className='Container'>
                <div className="SectionTitle">Get In Touch</div>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="BigCard">
                        <div className='flex items-center flex-row justify-around flex-wrap gap-y-4'>
                            <div className='flex items-center justify-center flex-wrap gap-x-5 gap-y-2.5'>
                                <span className='text-[1rem] font-normal min-[576px]:text-xl min-[992px]:text-2xl'>swanphyo444@gmail.com</span>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    open={showTooltip}
                                    onClose={() => setShowTooltip(false)}
                                    title="Copied!"
                                    TransitionComponent={Zoom}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    placement="bottom"
                                >
                                    <IconButton onClick={copyToClipboard} >
                                        <MdContentCopy size={25} className='cursor-pointer text-[#151418]' />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <a
                                className="btn PrimaryBtn btn-shadow"
                                href="mailto:swanphyo444@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Send Email
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
