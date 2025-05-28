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
                <div className="grid grid-cols-[1fr_350px] gap-6 max-[992px]:grid-cols-1">
                    <div>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base first-letter:bg-brand first-letter:text-white first-letter:rounded first-letter:mr-2 first-letter:p-[6px] sm:first-letter:text-[1.4rem] first-letter:text-[1.3rem] first-letter:font-bold first-letter:float-left">
                                Hello there! Name's Swam Yi Phyo, I'm a full-stack web developer. I specialize in creating engaging and responsive websites that cater to individual and small business needs.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                Passionate about delivering user-friendly responsive designs and optimizing site performance, I also provide SEO and copyrighting services to enhance online visibility and engagement.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                I'm specialized in React and Next.js frontend frameworks. I've also worked with backend technologies like Node.js, PostgreSQL and MongoDB, allowing me to build full-stack applications. AI tools such as ChatGPT, Git Copilot, and Claude are also part of my workflow.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base max-[480px]:text-left">
                                When I'm not coding, I dedicate time to improving my soft skills in autonomy, effective communication, adaptability, organization, and resourcefulness. I'm also very passionate about football and golfing.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                I'm always looking for new challenges and opportunities to learn and grow as a developer. If you're interested in working together or have any questions, please don't hesitate to get in touch!
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