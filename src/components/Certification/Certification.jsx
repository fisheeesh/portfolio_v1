import { SectionHeader } from '@/ui/SectionHeader';
import { certification } from '@/data/config';
import { CertificationItem } from './CertificationItem';

export default function Certification() {
    return (
        <section className="py-24" id="certification">
            <div className="Container">
                <SectionHeader title="Certification" dir="l" />
                {certification.map((item) => (
                    <CertificationItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
