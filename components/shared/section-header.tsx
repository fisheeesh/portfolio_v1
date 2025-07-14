import { Reveal } from "./reveal";

interface Props {
    title: string;
    dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
    return (
        <div
            className="flex items-center gap-3 mb-[2.4rem]"
            style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
        >
            <div className="w-full h-0.5 opacity-30 bg-gray-400" />
            <h3>
                <Reveal>
                    <span className="text-4xl md:text-5xl font-black text-end leading-tight">
                        {title}
                        <span className="text-brand">.</span>
                    </span>
                </Reveal>
            </h3>
        </div>
    );
};
