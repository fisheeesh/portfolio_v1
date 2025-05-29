import { SectionHeader } from '../../ui/SectionHeader'
import { ShowCaseItem } from './ShowCaseItem'
import LinkToGalleryBtn from '../../ui/LinkToGalleryBtn';

export default function ShowCase() {
    const projects = [
        {
            title: "LitLibrary",
            img: "/gallery/lit-library.webp",
            code: "https://github.com/fisheeesh/lit-library",
            link: "https://www.litlibrary.blog/",
            tech: ["React", "Firebase", "Tailwind", "Context API"],
            desc: "A vibrant blogging platform using React.js and TailwindCSS. It highlights the effective use of Firebase real-time database.",
            modal: <>This is a vibrant blogging platform using React.js and TailwindCSS. It highlights the effective use of Firebase real-time database</>,
        },
        {
            title: "Filmpire",
            img: "/gallery/test.webp",
            code: "https://github.com/fisheeesh/filmpire",
            link: "https://filmpire-ashy.vercel.app/",
            tech: ["React", "TMDB API", "Alan AI", "MUI"],
            desc: "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
            modal: <>Evently is an event management platform, built on Next.js. It serves as a hub for showcasing events, features payment through Stripe, the capability to purchase tickets and manage your own events.</>,
        },
        {
            title: "TWO Website",
            img: "/gallery/thewildoasis-web.webp",
            code: "https://github.com/fisheeesh/the-wild-oasis-website",
            link: "https://the-wild-oasis-website-eta-flame.vercel.app/",
            tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth"],
            desc: "Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
            modal: <>Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
        },
        {
            title: "TWO Dashboard",
            img: "/gallery/thewildoasis-d.webp",
            code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
            link: "https://the-wild-oasis-dashboard-amber.vercel.app/dashboard",
            tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
            desc: "Landing page for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
            modal: <>Landing page design for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
        },
        {
            title: "Chatty",
            img: "/gallery/chatty.webp",
            code: "https://github.com/fisheeesh/chatty",
            link: "https://chatty-1090b.web.app/",
            tech: ["Vue", "Firebase", "Boostrap"],
            desc: "CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support.",
            modal: <>CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support. Built with Next.js and leveraging its server-side rendering capabilities.</>,
        },
        {
            title: "Audionix",
            img: "/gallery/audionix.webp",
            code: "https://github.com/fisheeesh/audionix",
            link: "https://music-b055.web.app/",
            tech: ["Vue", "Pinia", "Firebase", "i18n", "Tailwind", "Howler.js", "VeeValidate"],
            desc: "3D website powered by Three.js featuring interactive elements. Navigate aboard a small plane and explore a floating island.",
            modal: <>This 3D website, built with React and powered by Three.js, features engaging interactive elements. Navigate aboard a small plane to explore a floating island and discover various information. On the contact page, a fox will dynamically react as you fill out the fields!</>,
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
