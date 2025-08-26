import { certification } from '@/data/config';
import { SectionHeader } from '../shared/section-header';
import { CertificationItem } from './certification-item';

export default function Certification() {
    return (
        <section className="pb-16" id="certification">
            <div className="Container">
                <SectionHeader title="Certification" dir="l" />
                {certification.map((item) => (
                    <CertificationItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
