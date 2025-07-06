import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

function ScrollToTop() {
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
            className={`${showBtn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
    p-1.5 outline-none cursor-pointer rounded-full bg-brand text-white hover:bg-[#126FFA] transition duration-300
    flex fixed bottom-5 right-5 z-50 items-center justify-center`}>
            <MdKeyboardArrowUp className='size-6' />
        </button>
    )
}

export default ScrollToTop