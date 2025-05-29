import { Reveal } from "../../utils/Reveal";

export const CertificationItem = ({
    title,
    school,
    date,
    link,
    description,
    tech,
}) => {

    return (
        <div className="mb-[2.4rem] space-y-3 pt-0 px-[1.2rem] pb-[2.4rem] border-b border-b-gray-300 max-[480px]:pt-0 max-[480px]:px-0 max-[480px]:pb-[2.4rem]">
            <div className="flex items-center justify-between max-[600px]:flex-col max-[600px]:items-start">
                <Reveal>
                    <span className="font-bold text-2xl">{title}</span>
                </Reveal>
                <Reveal>
                    <span className="font-medium">{date}</span>
                </Reveal>
            </div>

            <div className="flex items-center justify-between max-[600px]:flex-col max-[600px]:items-start">
                <Reveal>
                    <span className="text-brand font-bold">{school}</span>
                </Reveal>
                <Reveal>
                    <a
                        href={link}
                        className="transition font-medium duration-200 hover:text-brand"
                        target="_blank"
                        rel="nofollow"
                        title="View Certificate"
                        aria-label="View Certificate"
                    >
                        Certificate
                    </a>
                </Reveal>
            </div>
            <Reveal>
                <p className="">{description}</p>
            </Reveal>
            <Reveal>
                <div className="flex flex-wrap">
                    {tech.map((item) => (
                        <span key={item} className="rounded-[10px] text-[#000000D0] cursor-default shadow-[0px_2px_5px_rgba(160,170,180,0.6)] bg-[#f5f5f5] py-[5px] px-2.5 m-[5px] flex items-center justify-center text-[15px] font-normal ">
                            {item}
                        </span>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};
