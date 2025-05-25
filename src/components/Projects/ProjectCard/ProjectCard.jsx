import { ProjectList } from "../../../data/ProjectData";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectCard() {
    return (
        <>
            {ProjectList.map((list, index) => (
                <ScrollAnimation animateIn="animate__fadeIn" key={index}>
                    <div className="grid gap-8 mb-16 grid-cols-1 pb-8 overflow-hidden rounded-[10px] shadow-custom min-[992px]:grid-cols-2 min-[992px]:border-b-0 min-[992px]:pb-0">
                        <div className="justify-self-center h-full">
                            <img className="object-cover" src={list.img} alt={list.name} />
                        </div>
                        <div className="flex flex-col justify-center items-center min-[992px]:items-start mt-4">
                            <h4 className="text-[1.5rem] font-normal">{list.title}</h4>
                            <p className="font-normal max-w-[95%] mt-2.5 mb-4 text-[#000000D0] text-center min-[992px]:text-start">{list.description}</p>
                            <div className="flex flex-wrap justify-center min-[992px]:justify-start">
                                {list.tech_stack.map((tech, index) => (
                                    <div className="rounded-[10px] text-[#000000D0] cursor-default shadow-[0px_2px_5px_rgba(160,170,180,0.6)] bg-[#f5f5f5] py-[5px] px-2.5 m-[5px] flex items-center justify-center text-[15px] font-normal " key={index}>{tech}</div>
                                ))}
                            </div>
                            <div className="h-[70px] flex items-center">
                                {list.github_url.length > 0 && (
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>
                                )}
                                {list.demo_url.length > 0 && (
                                    <a
                                        className="btn PrimaryBtn btn-shadow"
                                        href={list.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Demo ➜
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ))}
        </>
    )
}
