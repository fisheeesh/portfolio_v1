import React from 'react'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import ScrollToTop from '../components/SocialIcon/ScrollToTop'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <FixSocialIcon />
            <Footer/>
            <ScrollToTop />
        </>
    )
}
