import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import error from '@/assets/error.lottie'
import { Link } from 'react-router-dom';

function ErrorElement() {

    return (
        <div className='min-h-screen flex items-center text-sm px-8 md:text-base justify-center text-center flex-col bg-white'>
            <DotLottieReact
                src={error}
                loop
                autoplay
                style={{ width: '480px', height: '280px' }}
            />
            <h1 className='mb-3 max-w-sm mx-auto'>Something went wrong on our end. Please try refreshing the page or come back later.</h1>
            <Link to='/' className='transition duration-300 rounded-full font-medium hover:text-brand'>
                &larr; Go Back
            </Link>
        </div>
    );
}

export default ErrorElement;



