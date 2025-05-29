const Filter = ({ activeFilter, handleFilter }) => {
    return (
        <div className="flex flex-wrap justify-center py-4 px-8 gap-2" >
            {["🩵", "App", "Design", "Next", "React", "Vue"].map((filter) => (
                <button
                    key={filter}
                    className={`
                    cursor-pointer font-medium bg-[#f6f6f6] py-1 px-4 rounded-full opacity-50 transition duration-200 hover:opacity-100 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] 
                    ${activeFilter === filter ? "opacity-100 text-black" : ""
                        }`}
                    onClick={() => handleFilter(filter)}
                    aria-label="Filter options"
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Filter;

