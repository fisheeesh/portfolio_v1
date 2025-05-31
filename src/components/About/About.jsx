import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../../ui/SectionHeader";
import { Reveal } from "../../utils/Reveal";
import Wave from "../../ui/Wave";
import { Stats } from "../../ui/Stats";
import { Socials } from "../../ui/Socials";

const About = () => {
    return (
        <>
            <Wave />
            <section id="about" className="relative z-[10] w-[90%] max-w-[1150px] mx-auto overflow-hidden px-4 max-[480px]:text-[1.6rem]">
                <SectionHeader title="About" dir="l" />
                <div className="grid grid-cols-[1fr_360px] gap-6 max-[992px]:grid-cols-1">
                    <div>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base first-letter:bg-brand first-letter:text-white first-letter:rounded first-letter:mr-2 first-letter:p-[6px] sm:first-letter:text-[1.4rem] first-letter:text-[1.3rem] first-letter:font-bold first-letter:float-left">
                                Hello there! Name's Swam Yi Phyo, I'm a full-stack web developer with a strong passion for building intuitive and high-performing web experiences. My focus is on crafting responsive, accessible, and user-first websites for individuals and growing businesses.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                Passionate about self-study, I enjoy exploring new concepts and applying them to real-world challenges. I’m currently working on my university senior project, where I focus on building practical, impactful solutions to meaningful problems.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                On the frontend, I love working with <strong>React.js</strong> and <strong>Next.js</strong>, and I’m also experienced with backend technologies like Spring Boot, Node.js, and serverless platforms like Supabase and Firebase. I excel at planning, finding optimal solutions. AI tools like ChatGPT, Claude, GitHub Copilot, and structured time planning apps help me to stay sharp and productive.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base max-[480px]:text-left">
                                Outside of tech, I spend time sharpening soft skills like communication, adaptability, and problem-solving. I’m also deeply into football and enjoy playing golf to keep my mind fresh and strategic.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                I’m always up for exciting new projects and love connecting with like-minded people. Let’s chat if you’ve got something in mind!
                            </p>
                        </Reveal>
                        <Reveal>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-lg font-medium text-brand">
                                    <span>Links</span>
                                    <AiOutlineArrowRight />
                                </div>
                                <Socials />
                            </div>
                        </Reveal>
                    </div>
                    <Stats />
                </div>
            </section>
        </>
    );
};

export default About;