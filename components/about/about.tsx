import { AiOutlineArrowRight } from "react-icons/ai";
import Wave from "../shared/wave";
import { SectionHeader } from "../shared/section-header";
import { Reveal } from "../shared/reveal";
import { Stats } from "../shared/stats";
import { Socials } from "../shared/socials";

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
                                Hello there! Name&apos;s Swam Yi Phyo,  I&apos;m a passionate full-stack web developer dedicated to building high-performance, SEO-friendly, and responsive websites. I specialize in crafting intuitive digital user experiences that are accessible, scalable, and tailored to individuals and growing businesses.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                Passionate about self-study, I enjoy exploring new concepts and applying them to real-world challenges. My goal is to deliver web solutions that look great and perform seamlessly across all devices. I’m currently working on my university senior project, where I focus on building practical, impactful solutions to meaningful problems.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                On the frontend, I love working with <strong>React.js</strong> and <strong>Next.js</strong>, and I’m also experienced with backend technologies like Spring Boot, Node.js, and serverless platforms like Supabase and Firebase. I excel at planning, finding optimal solutions. AI tools like ChatGPT, Claude, GitHub Copilot, and Structured time management app help me to stay productive.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base max-[480px]:text-left">
                                Outside of tech, I spend time sharpening soft skills like communication, adaptability, and problem-solving. I’m also into football and enjoy playing golf to keep my mind fresh and strategic. I’m always open to new projects, let’s connect and create something great!
                            </p>
                        </Reveal>
                        <Reveal>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-lg font-medium text-brand">
                                    <span>Links</span>
                                    <AiOutlineArrowRight aria-hidden="true" />
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