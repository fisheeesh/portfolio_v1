import { Reveal } from "../utils/Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
    return (
        <div
            className="flex items-center gap-[2.4rem] mb-[2.4rem]"
            style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
        >
            <div className="w-full h-0.5 opacity-30 bg-gray-500" />
            <h3>
                <Reveal>
                    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-end ">
                        {title}
                        <span className="text-brand">.</span>
                    </span>
                </Reveal>
            </h3>
        </div>
    );
};
