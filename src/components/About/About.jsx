import { stackList } from "../../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
    return (
        <div className="mt-20" id="about">
            <div className="Container">
                <div className="SectionTitle">About Me</div>
                <div className="BigCard">
                    <ScrollAnimation animateIn="fadeInLeft">
                        <img
                            className="max-w-[120px] mx-auto mb-4"
                            src="/man-svgrepo-com.svg"
                            alt="man-svgrepo"
                        />
                    </ScrollAnimation>
                    <div className="AboutBio">
                        <ScrollAnimation animateIn="fadeInLeft">
                            Hello! My name is <strong>Swam Yi Phyo</strong>. I'm originally from Myanmar and have been living in Thailand for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
                        </ScrollAnimation>

                        <br /><br />

                        <ScrollAnimation animateIn="fadeInLeft">
                            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Software Engineering program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
                            Throughout my studies at MFU, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.
                        </ScrollAnimation>

                        <br /><br />

                        <ScrollAnimation animateIn="fadeInLeft">
                            Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
                            <div className="tagline2">
                                I have become confident using the following technologies:
                            </div>
                        </ScrollAnimation>


                        <div className="flex flex-wrap justify-center mx-auto -mb-8">
                            {stackList.map((stack, index) => (
                                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                                    <div className="tech flex flex-col items-center max-w-[100px] min-w-[100px] mb-8" key={index}>
                                        <img className="h-10 w-10 pb-[5px]" src={stack.img} alt={stack.name} />
                                        <div className="text-[14px]">{stack.name}</div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
