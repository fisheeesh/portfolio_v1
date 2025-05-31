import { SectionHeader } from '../../ui/SectionHeader';
import { CertificationItem } from './CertificationItem';

export default function Certification() {
    const certification = [
        {
            title: "React Mastery Course",
            school: "JS Mastery",
            date: "May 2025",
            link: "https://drive.google.com/file/d/1oGhEhGqJJ9MnUEJX9bbjgcaIv0DxOeC4/view?usp=drive_link",
            description:
                "Focused on mastering advanced JavaScript tools including React.js, Material UI, and Alan AI. Gained practical, hands-on experience building interactive applications, tailored for intermediate to expert-level development. Emphasized real-world use cases and modern UI development techniques.",
            tech: [
                "React",
                "Javascript",
                "Material UI",
                "RTK Query",
                "Alan AI",
                "TMDB API",
            ],
        },
        {
            title: "The Ultimate Next.js Course",
            school: "Udemy",
            date: "Apirl 2025 - 84 hours",
            link: "https://drive.google.com/file/d/1ylevOCDzma2KW4jV3stSWZ-PooKqrmb4/view?usp=drive_link",
            description:
                "Focused on mastering modern React and Next.js by building real-world projects. Gained experience in reusable components, compound components, advanced state management with Redux Toolkit and React Query and worked with features like authentication, routing, and performance optimization.  Emphasized best practices, scalability and performance for production-ready applications.",
            tech: [
                "React",
                "JavaScript",
                "Next.js",
                "Supabase",
                "Redux",
                "TailwindCSS",
                "Styled Components",
                "React Query",
                "SSR",
                "SSG",
                "ISR",
            ],
        },
        {
            title: "Vue Developer Bootcamp",
            school: "Zero To Mastery",
            date: "December 2024 – 28 hours",
            link: "https://drive.google.com/file/d/1L8KSCABrmednoIESiKgFVzJZnWWYbuxW/view?usp=drive_link",
            description:
                "Focused on building enterprise-level Vue 3 applications using modern tools and best practices. Gained hands-on experience with the Composition API, Pinia for state management, Vue Router, and Firebase integration. Emphasized performance, scalability, testing (Vitest, E2E), and clean UI with TailwindCSS. Developed skills in authentication, PWAs, internationalization, and architectural decision-making for large-scale projects.",
            tech: [
                "Vue",
                "Javascript",
                "Pinia",
                "i18n",
                "Firebase",
                "TailwindCSS",
                "PWA",
                "Vitest",
            ],
        },
        {
            title: "TaiwindCSS Training",
            school: "Udemy",
            date: "December 2024 – 12.5 hours",
            link: "https://drive.google.com/file/d/13KTDLzkORPgfoRU2R0NzEGfZ9ZIlp0Jw/view?usp=drive_link",
            description:
                "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in quickly styling websites with TailwindCass. Emphasized integrating advanced styling techniques for dynamic and efficient web applications.",
            tech: ["HTML", "CSS", "Javascript", "TailwindCSS", "Responsive"],
        },
        {
            title: "Bootstrap Training",
            school: "Udemy",
            date: "November 2024 – 13.5 hours",
            link: "https://drive.google.com/file/d/1uzwRaurA42mj9DuaIiaL7eCepYql6gjf/view?usp=drive_link",
            description:
                "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in quickly styling websites with Bootstrap and extending CSS styles with Sass. Developed skills in responsive design, Flexbox, CSS Grid and accessibility through 5 projects. Emphasized modern techniques and best practices for crafting well-structured and accessible web pages.",
            tech: ["HTML", "CSS", "Javascript", "Bootstrap", "Sass", "Responsive"],
        },
    ];

    return (
        <section className="py-24" id="certification">
            <div className="Container">
                <SectionHeader title="Certification" dir="l" />
                {certification.map((item) => (
                    <CertificationItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
