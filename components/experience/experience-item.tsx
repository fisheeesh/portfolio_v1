import { statClassName } from "@/data/config";
import { Reveal } from "../shared/reveal";

interface Props {
    title: string,
    role: string,
    date: string,
    location: string,
    description: string,
    tech: string[]
}

export const ExperienceItem = ({
    title,
    role,
    date,
    location,
    description,
    tech,
}: Props) => {

    return (
        <div className="mb-[2.4rem] space-y-3 pt-0 px-[1.2rem] pb-[2.4rem] border-b border-b-gray-300 max-[480px]:pt-0 max-[480px]:px-0 max-[480px]:pb-[2.4rem]">
            <div className="flex items-center justify-between max-[700px]:flex-col max-[700px]:items-start">
                <Reveal>
                    <span className="font-bold text-2xl">{title}</span>
                </Reveal>
                <Reveal>
                    <span className="font-medium">{date}</span>
                </Reveal>
            </div>

            <div className="flex items-center justify-between max-[700px]:flex-col max-[700px]:items-start">
                <Reveal>
                    <span className="text-brand font-bold">{role}</span>
                </Reveal>
                <Reveal>
                    <span className="font-medium">{location}</span>
                </Reveal>
            </div>
            <Reveal>
                <p className="">{description}</p>
            </Reveal>
            <Reveal>
                <div className="flex flex-wrap">
                    {tech.map((item) => (
                        <span key={item} className={statClassName}>
                            {item}
                        </span>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};
