import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

function ScrollTopBtn() {
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            type="button"
            id="to-top"
            aria-label="Scroll to top"
            className={`
    fixed bottom-8 right-8 z-50
    p-1.5 rounded-full bg-brand text-white
    hover:bg-[#126FFA] outline-none cursor-pointer
    flex items-center justify-center
    transition-all duration-200 ease-in-out
    ${showBtn
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-10 pointer-events-none'}
    `}
        >
            <MdKeyboardArrowUp className='size-6' aria-hidden="true" />
        </button>
    )
}

export default ScrollTopBtn