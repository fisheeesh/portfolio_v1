"use client"

import Lottie from "lottie-react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import cat from '@/app/lottie/cat.json';

function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <div className='min-h-screen flex items-center text-sm px-8 md:text-base justify-center text-center flex-col bg-white'>
            <Lottie
                animationData={cat}
                loop={true}
                autoplay={true}
                style={{ width: '500px', height: '280px' }}
            />
            <p className='font-medium text-7xl'>404</p>
            <p className='max-w-sm mx-auto'>The page you are looking for doesn&apos;t exist. Please return to the homepage.</p>
        </div>
    );
}

export default NotFound;



