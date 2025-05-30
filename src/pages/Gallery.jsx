import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Filter from "../ui/Filter";
import { GalleryItem } from "../ui/GalleryItem";
import { TransitionLink } from "../utils/TransitionLink";
import { useSearchParams } from "react-router-dom";
import { galleryShowCases } from "../data/ProjectData";

const Gallery = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const activeFilter = searchParams.get('category') || "🩵";

    const [filteredProjects, setFilteredProjects] = useState(
        galleryShowCases.filter((project) => project.cat.includes("🩵"))
    );

    const handleFilter = (filter) => {
        searchParams.set('category', filter);
        setSearchParams(searchParams);
        setFilteredProjects(
            galleryShowCases.filter((project) => project.cat.includes(filter))
        );
    };;

    return (
        <>
            <section className="Container" id="gallery">
                {/* Back Home */}
                <div className="flex items-center justify-center relative max-[860px]:flex-col my-3">
                    <TransitionLink
                        className="absolute left-0 max-[860px]:static mt-2"
                        to="/#projects"
                        aria-label="Back to Homepage">
                        <AiOutlineArrowLeft className="transition duration-200 opacity-50 hover:opacity-100 text-3xl max-[860px]:text-2xl" />
                    </TransitionLink>

                    {/* Filter */}
                    <Filter activeFilter={activeFilter} handleFilter={handleFilter} />
                </div>

                {/* Gallery */}
                <section className="grid grid-cols-2 gap-[3.2rem] my-6 max-[860px]:grid-cols-1 max-[860px]:py-0 max-[860px]:px-8 max-[480px]:py-0 max-[480px]:px-4">
                    {filteredProjects.map((project) => (
                        <GalleryItem
                            key={`${project.title}-${activeFilter}`}
                            {...project}
                        />
                    ))}
                </section>
            </section>
        </>
    );
};

export default Gallery