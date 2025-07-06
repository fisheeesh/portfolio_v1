import About from '@/components/About/About'
import Certification from '@/components/Certification/Certification'
import { Contact } from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import ShowCase from '@/components/ShowCase/ShowCase'
import FixSocialIcon from '@/components/SocialIcon/FixSocialIcon'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ShowCase />
            <Certification />
            <Contact />
            <FixSocialIcon />
            <Footer />
        </>
    )
}
