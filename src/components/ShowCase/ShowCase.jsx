import { SectionHeader } from '@/ui/SectionHeader'
import { ShowCaseItem } from './ShowCaseItem'
import LinkToGalleryBtn from '@/ui/LinkToGalleryBtn';
import { projects } from '@/data/config';

export default function ShowCase() {

    return (
        <section className="py-24" id="projects">
            <div className="Container">
                <SectionHeader title="Projects" dir="r" />
                <LinkToGalleryBtn />

                <div className="grid grid-cols-2 gap-[3.2rem] max-[768px]:grid-cols-1">
                    {projects.map((project) => {
                        return <ShowCaseItem key={project.title} {...project} />;
                    })}
                </div>

                <LinkToGalleryBtn />
            </div>
        </section>
    )
}
