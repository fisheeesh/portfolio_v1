import cat from '@/assets/cat.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [navigate])

    return (
        <div className='min-h-screen flex items-center text-sm px-8 md:text-base justify-center text-center flex-col bg-white'>
            <DotLottieReact
                src={cat}
                loop
                autoplay
                style={{ width: '500px', height: '280px' }}
            />
            <p className='font-medium text-7xl'>404</p>
            <p className='max-w-sm mx-auto'>The page you are looking for doesn't exist. Please return to the homepage.</p>
        </div>
    );
}

export default NotFound;



