import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/utils/Reveal";
import { extraTech, stackTech, statClassName } from "@/data/config";

export const Stats = () => {
    const renderItems = (items) =>
        items.map((item) => (
            <span key={item} className={statClassName}>
                {item}
            </span>
        ));

    return (
        <div className="relative">
            <Reveal>
                <div>
                    <h4 className="flex items-center mb-1">
                        <AiFillCode aria-hidden="true" size="2.4rem" color="#3986FA" />
                        <span className="font-bold relative ml-1.5 text-[1.6rem]">Stack</span>
                    </h4>
                    <div className="flex flex-wrap mb-4">{renderItems(stackTech)}</div>
                </div>
            </Reveal>

            <Reveal>
                <div>
                    <h4 className="flex items-center mb-1 mt-0.5">
                        <AiFillCode aria-hidden="true" size="2.4rem" color="#3986FA" />
                        <span className="font-bold relative ml-1.5 text-[1.6rem]">+</span>
                    </h4>
                    <div className="flex flex-wrap">{renderItems(extraTech)}</div>
                </div>
            </Reveal>
        </div>
    );
};