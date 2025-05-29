import { SectionHeader } from '../../ui/SectionHeader'
import { ShowCaseItem } from './ShowCaseItem/ShowCaseItem'
import LinkToGalleryBtn from '../../ui/LinkToGalleryBtn';

export default function ShowCase() {
    const projects = [
        {
            title: "iPhone 15",
            img: "/gallery/iphone.webp",
            code: "https://github.com/basedhound/iPhone-15_ui_react",
            link: "https://iphone15-fv.vercel.app",
            tech: ["React", "Three.js", "Tailwind", "GSAP"],
            desc: "A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of Three.js and GSAP for 3D and animations.",
            modal: <>This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.</>,
        },
        {
            title: "Evently",
            img: "/gallery/evently.webp",
            code: "https://github.com/basedhound/event-platform_app_next",
            link: "https://evently-fv.vercel.app",
            tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
            desc: "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
            modal: <>Evently is an event management platform, built on Next.js. It serves as a hub for showcasing events, features payment through Stripe, the capability to purchase tickets and manage your own events.</>,
        },
        {
            title: "Travel Agency",
            img: "/gallery/travel2.webp",
            code: "https://github.com/basedhound/travel-agency-2_ui",
            link: "https://travel-2-fv.netlify.app",
            tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
            desc: "Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
            modal: <>Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
        },
        {
            title: "Sushi Restaurant",
            img: "/gallery/sushi2.webp",
            code: "https://github.com/basedhound/sushi-restaurant-2_ui",
            link: "https://sushi-2-fv.netlify.app",
            tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
            desc: "Landing page for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
            modal: <>Landing page design for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
        },
        {
            title: "Imaginify",
            img: "/gallery/canva.webp",
            code: "https://github.com/basedhound/canva-clone_app_next",
            link: "https://imaginify-fv.vercel.app",
            tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
            desc: "AI image platform featuring advanced image processing: restoration, recoloring, object removal, generative filling, and background removal.",
            modal: <>An AI image SaaS platform with advanced image processing, secure payments and powerful search. Features: restoration, recoloring, object removal, generative filling, and background removal.</>,
        },
        {
            title: "Car Hub",
            img: "/gallery/carhub.webp",
            code: "https://github.com/basedhound/car-hub_app_next",
            link: "https://carhub-fv.netlify.app/",
            tech: ["Next.js", "React", "TypeScript", "Tailwind"],
            desc: "CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support.",
            modal: <>CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support. Built with Next.js and leveraging its server-side rendering capabilities.</>,
        },
        {
            title: "3D Portfolio",
            img: "/gallery/island3d.webp",
            code: "https://github.com/basedhound/3d-island_portfolio_react",
            link: "https://3d-island-fv.vercel.app",
            tech: ["React", "Three.js", "Three Fiber", "Tailwind", "Vite"],
            desc: "3D website powered by Three.js featuring interactive elements. Navigate aboard a small plane and explore a floating island.",
            modal: <>This 3D website, built with React and powered by Three.js, features engaging interactive elements. Navigate aboard a small plane to explore a floating island and discover various information. On the contact page, a fox will dynamically react as you fill out the fields!</>,
        },
        {
            title: "Podcast AI",
            img: "/gallery/podcast.webp",
            code: "https://github.com/basedhound/podcastr-ai_app_next",
            link: "https://podcastr-fv.vercel.app",
            tech: ["OpenAI", "Next.js", "React", "TypeScript", "Tailwind"],
            desc: "AI platform that enables users to create podcasts with features like text-to-audio conversion, image generation and seamless playback.",
            modal: <>A cutting-edge AI SaaS platform that empowers users to create, discover, and enjoy podcasts with advanced features such as text-to-audio conversion using multi-voice AI powered by OpenAI API, podcast thumbnail image generation, and seamless playback. The platform includes secure authentication using Clerk, ensuring a safe and personalized user experience.</>,
        },
    ];

    return (
        <section className="py-24" id="projects">
            <div className="Container">
                <SectionHeader title="Projects" dir="r" />
                <LinkToGalleryBtn />

                <div className="grid grid-cols-2 gap-[3.2rem] max-[768px]:grid-cols-1">
                    {projects.map((project) => {
                        return <ShowCaseItem key={project.title} {...project} />;
                    })}
                </div>

                <LinkToGalleryBtn />
            </div>
        </section>
    )
}
