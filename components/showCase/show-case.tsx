import { projects } from '@/data/config';
import { SectionHeader } from '../shared/section-header';
import LinkToGalleryBtn from '../shared/link-to-gallery-btn';
import { ShowCaseItem } from './show-case-item';

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
