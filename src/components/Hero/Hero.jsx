import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { TypeAnimation } from 'react-type-animation';
import DropDown from '../DropDown/DropDown';
import Header from '../Header/Header';
import { Link as LinkScroll } from "react-scroll";

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <DropDown isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className='hero-container pb-8 pt-16 pr-4 pl-4 mx-auto flex flex-col'>
                <div className='flex flex-row hero-wrapper'>
                    <div className='hero-left'>
                        <ScrollAnimation animateIn="fadeIn" >
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'Hi, I\'m Swam Yi Phyo.',
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
                                        'A Full-Stack Developer.',
                                        1000,
                                        // 'A BCIT graduate.',
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
                                        // 1000,
                                        // "Or...",
                                        // 1000,
                                        // "Or... I could scroll you by force! Muahaha!",
                                        1000,
                                        "See ya! :)",
                                        500,
                                    ]}
                                    speed={50}
                                    deletionSpeed={65}
                                    wrapper="h5"
                                    repeat={Infinity}
                                />
                            }
                        </ScrollAnimation>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <ScrollAnimation animateIn="fadeIn">
                            <img
                                className='w-auto h-[300px]'
                                src="/man-svgrepo-com.svg"
                                alt="man-svgrepo"
                            />
                        </ScrollAnimation>
                    </div>
                </div>
                {showScrollDown && <ScrollAnimation animateIn="flipInX" offset={0}>
                    <LinkScroll className='scroll-down' to="projects" id="scrollDown">
                        <div className='flex items-center text-[1.3rem] text-[#f6f6f6]'>
                            Scroll down
                            <img
                                className='h-[35px] w-[35px] ml-1.5'
                                src="/scroll-down.svg"
                                alt="scroll-down"
                            />
                        </div>
                    </LinkScroll>
                </ScrollAnimation>}
            </div>
        </main>
    )
}
