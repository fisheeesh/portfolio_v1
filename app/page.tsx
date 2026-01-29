"use client"

import About from "@/components/about/about"
import Certification from "@/components/certification/certification"
import { Contact } from "@/components/contact/contact"
import Experience from "@/components/experience/experience"
import Footer from "@/components/footer/footer"
import Hero from "@/components/hero/hero"
import ScrollTopBtn from "@/components/shared/scroll-top-btn"
import ShowCase from "@/components/showCase/show-case"
import FixedSocialIcons from "@/components/socialIcons/fixed-social-icons"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ShowCase />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
      <FixedSocialIcons />
      <ScrollTopBtn />
    </>
  )
}
