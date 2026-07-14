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
            <section id="about" className="relative z-[10] w-[90%] max-w-[1150px] mx-auto overflow-hidden pb-36 px-4 max-[480px]:text-[1.6rem]">
                <SectionHeader title="About" dir="l" />
                <div className="grid grid-cols-[1fr_360px] gap-6 max-[992px]:grid-cols-1">
                    <div>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base first-letter:bg-brand first-letter:text-white first-letter:rounded first-letter:mr-2 first-letter:p-[6px] sm:first-letter:text-[1.4rem] first-letter:text-[1.3rem] first-letter:font-bold first-letter:float-left">
                                Hello there! Name&apos;s Swam Yi Phyo, a full-stack developer who genuinely likes building things I can be proud of. I care about clean code, minimalist UI, and shipping stuff that actually works in production, not just demos. Most of my time goes into figuring out the right way to solve a problem before writing a single line, then building it out so it&apos;s fast, scalable, and clean across every device.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base">
                                On the frontend I lean on <strong>React</strong> and <strong>Next.js</strong> with TypeScript, and on the backend I work mostly with <strong>FastAPI </strong> and Node.js. I also work a lot with agentic coding these days, wiring up AI tools and harnesses to move faster and offload the grunt work while I focus on architecture and the hard decisions. Having built real enterprise systems and built a lot alongside AI, big and complex is right where I want to be..
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="mb-6 text-[15px] sm:text-base max-[480px]:text-left">
                                Outside of code, I&apos;m into golf to keep my head clear, and I&apos;m a big Naruto guy. Always down for a good project, so let&apos;s connect and build something worth building.
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