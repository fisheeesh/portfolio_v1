import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import DropDown from '../dropDown/drop-down';
import Header from '../header/header';
import { fadeIn, flipInX } from '@/data/motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <main>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <div className='hero-container'>
                <div className='hero-wrapper'>
                    <div className='hero-left'>
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    "Hi, I'm Swam Yi Phyo.",
                                    () => setShowSubtitle(true)
                                ]}
                                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                                wrapper="h1"
                                repeat={0}
                            />
                            {showSubtitle &&
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        500,
                                        'A Full-Stack Web Developer.',
                                        1000,
                                        'A Full-Stack Web Developer.',
                                        1000,
                                        'I design and code beautifully simple things, and I love what I do.',
                                        1000,
                                        'A problem solver.',
                                        1000,
                                        'An innovative thinker.',
                                        1000,
                                        'A....',
                                        1000,
                                        'A.... cool guy?',
                                        1000,
                                        'Consistensyp... ahaha',
                                        1000,
                                        "Ok...",
                                        1000,
                                        "Ok...  I'm running out of ideas...",
                                        1000,
                                        "Uhh...",
                                        1000,
                                        "Uhh... you can scroll down to see my projects now...",
                                        300,
                                        () => setShowScrollDown(true),
                                        1000,
                                        "Seriously, my projects are really cool, go check them out!",
                                        1000,
                                        "You're uh...",
                                        1000,
                                        "You're uh... still here?",
                                        1000,
                                        "Ok, this has been fun, but I'm gonna restart the loop now...",
                                        1000,
                                        "See ya! :)",
                                        500,
                                    ]}
                                    speed={50}
                                    deletionSpeed={65}
                                    wrapper="h2"
                                    repeat={Infinity}
                                />
                            }
                        </motion.div>
                    </div>

                    <div className='flex-1 flex justify-center'>
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/assets/man-svgrepo-com.svg"
                                alt="man-svgrepo"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </div>
                </div>

                {showScrollDown &&
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0 }}
                        variants={flipInX}
                        style={{ transformStyle: 'preserve-3d', perspective: 600 }}
                    >
                        <Link className='flex justify-start cursor-pointer absolute animate-scroll max-[992px]:relative max-[992px]:justify-center max-[992px]:mt-8' href="/#about" id="scrollDown">
                            <div className='flex items-center text-[1.3rem] text-light'>
                                Scroll down
                                <Image
                                    src="/assets/scroll-down.svg"
                                    alt="scroll-down"
                                    width={35}
                                    height={35}
                                    className="ml-1.5"
                                />
                            </div>
                        </Link>
                    </motion.div>
                }
            </div>
        </main>
    );
}