"use client"

import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { galleryShowCases } from "@/data/config";
import Filter from "@/components/gallery/filter";
import { GalleryItem } from "@/components/gallery/gallery-item";
import { TransitionLink } from "@/components/shared/transition-link";
import ScrollTopBtn from "@/components/shared/scroll-top-btn";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Gallery = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const filterParams = searchParams.get('category') ?? '🩵'
    const [activeFilter, setActiveFilter] = useState(filterParams);

    const [filteredProjects, setFilteredProjects] = useState(
        galleryShowCases.filter((project) => project.cat.includes(activeFilter))
    );

    const handleFilter = (filter: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('category', filter)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        setActiveFilter(filter);
        setFilteredProjects(
            galleryShowCases.filter((project) => project.cat.includes(filter))
        );
    };

    return (
        <>
            <section className="Container" id="gallery">
                {/* Back Home */}
                <div className="flex items-center justify-center relative max-[860px]:flex-col my-3">
                    <TransitionLink
                        className="absolute left-0 max-[860px]:static mt-2"
                        href="/#projects"
                        aria-label="Back to Homepage">
                        <AiOutlineArrowLeft aria-hidden="true" className="transition duration-200 opacity-50 hover:opacity-100 text-3xl max-[860px]:text-2xl" />
                    </TransitionLink>

                    {/* Filter */}
                    <Filter activeFilter={activeFilter} handleFilter={handleFilter} />
                </div>

                {/* Gallery */}
                <section className="grid grid-cols-2 gap-10 max-[860px]:grid-cols-1 max-[860px]:gap-y-4 max-[480px]:px-4">
                    {filteredProjects.map((project) => (
                        <GalleryItem
                            key={`${project.title}-${activeFilter}`}
                            {...project}
                        />
                    ))}
                </section>

                <ScrollTopBtn />
            </section>
        </>
    );
};

export default Gallery