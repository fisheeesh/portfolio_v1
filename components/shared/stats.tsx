import { stackTech, statClassName } from "@/data/config";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "./reveal";

export const Stats = () => {
    const renderItems = (items: string[]) =>
        items.map((item) => (
            <span key={item} className={statClassName}>
                {item}
            </span>
        ));

    return (
        <div className="relative">
            <Reveal>
                <div>
                    <h3 className="flex items-center mb-2">
                        <AiFillCode aria-hidden="true" size="2.4rem" color="#3986FA" />
                        <span className="font-bold relative ml-1.5 text-[1.6rem]">Stack & Tools</span>
                    </h3>
                    <div className="flex flex-wrap mb-4">{renderItems(stackTech)}</div>
                </div>
            </Reveal>
        </div>
    );
};