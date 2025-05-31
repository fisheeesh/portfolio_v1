import { AiFillMail } from "react-icons/ai";
import { Socials } from "../../ui/Socials";
import { Reveal } from "../../utils/Reveal";

export const Contact = () => {
    return (
        <section className="py-24 px-4" id="contact">
            <div className="max-w-[750px] mx-auto space-y-4 rounded-[1.2rem]">
                <Reveal width="100%">
                    <h4 className="text-center font-black leading-none text-5xl md:text-[5.5rem]">
                        Contact<span className="text-brand">.</span>
                    </h4>
                </Reveal>

                <Reveal width="100%">
                    <p className="text-center md:text-xl">
                        Got a project in mind or just want to chat? Feel free to drop me an email. I'm also active on{" "}
                        <a
                            href="https://www.linkedin.com/in/syp-dev"
                            target="_blank"
                            rel="nofollow"
                            aria-label="Connect with me on LinkedIn"
                            className="text-brand hover:border-b-[1.5px] hover:border-current font-medium transition duration-200"
                        >
                            LinkedIn
                        </a>
                        {" "}if you'd rather connect there.
                    </p>
                </Reveal>

                <Reveal width="100%">
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="mailto:swanphyo444@gmail.com"
                            target="_blank"
                            rel="nofollow"
                            aria-label="Send me an email"
                            className="flex items-center justify-center md:text-lg gap-2 mb-2 transition hover:text-brand"
                        >
                            <AiFillMail size="24" />
                            <span className="font-medium">swanphyo444@gmail.com</span>
                        </a>
                    </div>
                </Reveal>

                <Reveal width="100%">
                    <Socials />
                </Reveal>
            </div>
        </section>
    );
};