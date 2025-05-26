import React from 'react'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import ScrollToTop from '../components/SocialIcon/ScrollToTop'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}
