import { experiences } from "@/data/config";
import { ExperienceItem } from "./experience-item";
import { SectionHeader } from "../shared/section-header";

export default function Experience() {
    return (
        <section className="pb-36" id="experience">
            <div className="Container">
                <SectionHeader title="Experience" dir="l" />
                {experiences.map((item) => (
                    <ExperienceItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
