import { AiOutlineArrowRight } from 'react-icons/ai';
import { TransitionLink } from './transition-link';

export default function LinkToGalleryBtn() {
    return (
        <div className='flex justify-center py-8 font-medium'>
            <TransitionLink href="/gallery" aria-label="View Full Gallery">
                <AiOutlineArrowRight className='animate-point' size="1.2rem" aria-hidden="true" />
                Full Gallery
            </TransitionLink>
        </div>
    )
}
