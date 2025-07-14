import { AiFillMail } from "react-icons/ai";
import { Reveal } from "../shared/reveal";
import { Socials } from "../shared/socials";


export const Contact = () => {
    return (
        <section className="py-24 px-4" id="contact">
            <div className="max-w-[750px] mx-auto space-y-4">
                <Reveal width="100%">
                    <h4 className="text-center font-black leading-none text-5xl md:text-[5.5rem]">
                        Contact<span className="text-brand">.</span>
                    </h4>
                </Reveal>

                <Reveal width="100%">
                    <p className="text-center md:text-xl max-[769px]:max-w-md max-[1300px]:max-w-lg mx-auto">
                        Want to collaborate or have a quick chat? Shoot me an email or connect with me on{" "}
                        <a
                            href="https://www.linkedin.com/in/swamyiphyo/"
                            target="_blank"
                            rel="nofollow"
                            aria-label="Connect with me on LinkedIn"
                            className="text-brand border-b-2 hover:border-b-2 font-medium transition duration-200"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </Reveal>

                <Reveal width="100%">
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="mailto:swamyiphyo.dev@gmail.com"
                            target="_blank"
                            rel="nofollow"
                            aria-label="Send me an email"
                            className="flex items-center justify-center md:text-lg gap-2 mb-2 transition hover:text-brand"
                        >
                            <AiFillMail size="24" aria-hidden="true" />
                            <span className="font-medium">swamyiphyo.dev@gmail.com</span>
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