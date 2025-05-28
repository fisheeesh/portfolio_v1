import React from 'react'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import ScrollToTop from '../components/SocialIcon/ScrollToTop'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}
