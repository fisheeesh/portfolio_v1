import { RiHeart2Fill } from "react-icons/ri";

interface Props {
    activeFilter: string;
    handleFilter: (filter: string) => void;
}

const Filter = ({ activeFilter, handleFilter }: Props) => {
    return (
        <div className="flex flex-wrap justify-center py-4 px-8 gap-2" >
            {["All", "Design", "Next", "React", "Vue", "Backend"].map((filter) => (
                <button
                    key={filter}
                    className={`
                    cursor-pointer font-medium bg-light py-1 px-4 rounded-full opacity-50 transition duration-200 hover:opacity-100 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] 
                    ${activeFilter === filter ? "opacity-100 text-black" : ""
                        }`}
                    onClick={() => handleFilter(filter)}
                    aria-label="Filter options"
                >
                    {filter === "All" ? (
                        <RiHeart2Fill className="text-brand" size="1.1rem" aria-hidden="true" />
                    ) : filter}
                </button>
            ))}
        </div>
    );
};

export default Filter;

