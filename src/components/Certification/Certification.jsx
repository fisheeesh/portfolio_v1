import { SectionHeader } from '../../ui/SectionHeader';
import { CertificationItem } from './CertificationItem';

export default function Certification() {
    const certification = [
        {
            title: "Web Developer",
            school: "OpenClassrooms",
            date: "November 2022",
            link: "https://drive.google.com/file/d/1CNXBUrmcpHzEprEyA40yxcpp0ogD3Ahy/view?usp=sharing",
            description:
                "Focused on frontend skills, backend API integration, and building APIs from scratch. Developed responsive web apps, enhanced webpage dynamics, optimized site performance, and managed projects from start to finish under mentorship and examination. Key project: Groupomania, a full-stack social media platform built with the MERN stack.",
            tech: [
                "React",
                "JavaScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Sass",
                "Bootstrap",
                "Git",
                "SEO",
            ],
        },
        {
            title: "Responsive Web Design",
            school: "freeCodeCamp",
            date: "January 2024 – 300 hours",
            link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
            description:
                "Focused on content structuring with HTML and design principles with CSS. Developed skills in responsive design, Flexbox, CSS Grid, SEO, and accessibility through 20 projects. Emphasized modern techniques and best practices for crafting well-structured and accessible web pages.",
            tech: [
                "HTML",
                "CSS",
                "Responsive",
                "Design",
                "Flexbox",
                "Grid",
                "SEO",
                "Accessibility",
            ],
        },
        {
            title: "JavaScript Algorithms & Data Structures",
            school: "freeCodeCamp",
            date: "September 2024 – 300 hours",
            link: "https://github.com/basedhound/freeCodeCamp_javascript-algorithms-and-data-structures",
            description:
                "Focused on mastering JavaScript fundamentals, including variables, arrays, objects, loops, functions, and the DOM. Developed skills in Object-Oriented Programming (OOP), Functional Programming, and algorithmic thinking. Gained experience in working with local storage and fetching data using APIs. Emphasized practical applications and best practices for creating interactive and efficient web applications.",
            tech: [
                "JavaScript",
                "Functions",
                "DOM",
                "OOP",
                "Algorithmic Thinking",
                "API Fetching",
            ],
        },
        {
            title: "Front End Development Libraries",
            school: "freeCodeCamp",
            date: "January 2024 – 300 hours",
            link: "https://github.com/basedhound/freeCodeCamp_frontend-libraries",
            description:
                "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in quickly styling websites with Bootstrap and extending CSS styles with Sass. Developed expertise in creating Single Page Applications (SPAs) using React and Redux through practical projects like a shopping cart application. Emphasized integrating advanced styling and state management techniques for dynamic and efficient web applications.",
            tech: ["React", "Redux", "Bootstrap", "Sass", "Single Page Application"],
        },
    ];

    return (
        <section className="py-24" id="projects">
            <div className="Container">
                <SectionHeader title="Certification" dir="l" />
                {certification.map((item) => (
                    <CertificationItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}
