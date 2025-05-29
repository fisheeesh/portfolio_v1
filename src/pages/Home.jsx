import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ShowCase from '../components/ShowCase/ShowCase'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'
import ScrollToTop from '../components/SocialIcon/ScrollToTop'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ShowCase />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    )
}
