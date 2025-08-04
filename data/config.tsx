export const statClassName = "rounded-[10px] text-[#000000D0] cursor-default shadow-[0px_2px_5px_rgba(160,170,180,0.6)] bg-[#f5f5f5] py-[5px] px-2.5 m-[5px] flex items-center justify-center text-[15px] font-normal"

export const stackTech = [
    "Vue", "React", "Next.js", "JavaScript", "TypeScript", "Flutter",
    "Tailwind CSS", "Bootstrap", "shadcn/ui", "Node.js", "Express", "MongoDB",
    "PostgreSQL", "MySQL", "Jest", "Firebase", "Supabase"
];

export const extraTech = [
    "Arc", "Git", "GitHub", "Structured", "Prisma", "Postman", "Vercel", "Figma",
    "ChatGPT", "Claude", "Git Copilot"
];

export const certification = [
    {
        title: "JavaScript Algorithms and Data Structures",
        school: "freeCodeCamp",
        date: "July 2025 - 300 hours",
        link: "https://github.com/fisheeesh/freeCodeCamp_DSA",
        description:
            "Focued on mastering core JavaScript concepts such as variables, arrays, objects, loops, functions, and manipulating the DOM. Enhanced proficiency in Object-Oriented and Functional Programming, while sharpening problem-solving and algorithmic thinking. Gained hands-on experience with browser storage and integrating external data using APIs. Focused on building dynamic, responsive web applications through real-world use cases and coding best practices.",
        tech: [
            "JavaScript",
            "Algorithms Thinking",
            "OOP",
            "API Fetching",
            "Functions",
            "DOM",
        ],
    },
    {
        title: "Next.js E-commerce 2025",
        school: "Udemy",
        date: "June 2025 - 22.5 hours",
        link: "https://drive.google.com/file/d/1BtjnZ5bMwNl7QZClbBAVgXoxR75XZ9PZ/view?usp=drive_link",
        description:
            "Focused on mastering advanced Next.js by building a full-featured ecommerce platform from scratch. Gained practical experience with real payment integrations using PayPal and Stripe, including production-level Stripe webhooks. Built full authentication with NextAuth and managed products, orders, and users through a powerful admin dashboard. Developed and validated forms using Zod and React Hook Form, implemented image uploads with Uploadthing, and added email functionality via Resend. Also gained experience in unit testing critical features with Jest to ensure application reliability and maintainability.",
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "shadcn/ui",
            "Tailwind CSS",
            "Stripe",
            "Paypal",
            "Uploadthing",
            "Jest",
            "Resend",
            "Next Auth",
            "PostgreSQL",
            "Prisma"
        ],
    },
    {
        title: "React Mastery Course",
        school: "JS Mastery",
        date: "May 2025",
        link: "https://drive.google.com/file/d/1oGhEhGqJJ9MnUEJX9bbjgcaIv0DxOeC4/view?usp=drive_link",
        description:
            "Focused on mastering advanced JavaScript tools like React.js, Material UI, and Alan AI. Built real-time, interactive apps using component-driven architecture and modern UI techniques. Gained hands-on experience with Redux Toolkit, RTK Query, and integrating voice-based features via Alan AI. Emphasized responsive design, performance, scalability, and accessibility, while integrating third-party APIs and building reusable custom components.",
        tech: [
            "React",
            "JavaScript",
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
            "Focused on mastering modern React and Next.js by building real-world projects from the ground up. Gained experience in reusable and compound components, advanced state management with Redux Toolkit and React Query, and implemented features like authentication, dynamic routing, server-side rendering, and performance optimization. Also explored incremental static regeneration and API handling. Emphasized code scalability, SEO, accessibility, and production-grade performance through best practices.",
        tech: [
            "React",
            "JavaScript",
            "Next.js",
            "Supabase",
            "Redux",
            "Tailwind CSS",
            "Styled Components",
            "React Query",
            "SSR",
            "SSG",
            "ISR",
        ],
    },
    {
        title: "TaiwindCSS Training",
        school: "Udemy",
        date: "December 2024 – 12.5 hours",
        link: "https://drive.google.com/file/d/13KTDLzkORPgfoRU2R0NzEGfZ9ZIlp0Jw/view?usp=drive_link",
        description:
            "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in rapidly building responsive UIs using Tailwind CSS utility-first classes. Emphasized integrating advanced styling techniques, dark mode support, and component-based design for dynamic and efficient web applications. Developed a deeper understanding of design systems, layout strategies, and maintaining clean, scalable styles across projects.",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive"],
    },
];

export const projects = [
    {
        title: "DevFlow",
        img: "/gallery/devflow.webp",
        code: "https://github.com/fisheeesh/devflow",
        link: "https://www.devflow.forum",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "GroqAI", "MongoDB", "Mongoose"],
        desc: "A modern Q&A platform built with Next.js and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries.",
        modal:
            <>
                A modern Q&A platform built with Next.js 15, React 19, and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries. The platform emphasizes performance, usability, and clean UI, with a strong focus on scalable architecture and advanced database queries.
                <br /><br />One of the core challenges in building DevFlow was designing a scalable and flexible MongoDB schema and choosing between an array of references and creating multiple collections to manage complex relationships between users, questions, answers, tags, and activity logs. Integrating AI assistance via Groq while maintaining performance and response speed required careful architectural decisions. Implementing an advanced global search system with efficient filtering, sorting, and tag-based recommendation system also lead to late night grinds. Balancing feature-rich functionality with optimal performance, SEO, and clean user experience was a constant challenge.
                <br /><br />I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved in my newfound understanding of NoSQL database design and advanced aggregation pipelines. Working with Groq AI helped me learn how to integrate AI in a way that adds real value to users. I also learned the importance of code organization, consistent refactoring, and optimizing for readability and scalability. This project taught me how to design a production-grade application that is not only functional but also performant, secure, and SEO-friendly ultimately helping me grow into a more confident and capable full-stack developer.
            </>
    },
    {
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        desc: "A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal.",
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, and responsive UI. I designed both customer-facing and admin interfaces, implemented role-based access control, and handled edge cases like failed transactions and stock availability.
            <br /><br />This project gave me deep hands-on experience with e-commerce logic, scalable backend design, and full-stack payment flows. I tested over 100 transactions in sandbox mode for both PayPal and Stripe to ensure reliability, proper webhook handling, and graceful error management. Prostore helped me solidify my knowledge of building production-grade applications with real-world complexity and a strong focus on performance and user experience.</>,
    },
    {
        title: "TWO Web",
        img: "/gallery/thewildoasis-web.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-website",
        link: "https://www.thewildoasis.co",
        tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth", "Framer Motion"],
        desc: 'A customer facing website of "The Wild Oasis" designed to let users explore and book serene stays with ease, built with Next.js and Supabase. Ensure fast load times and excellent SEO.',
        modal: <>🌐 A customer facing website of &quot;The Wild Oasis&quot; designed to let users explore and book serene stays with ease, built with Next.js and Supabase. It uses a combination of SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration) to balance performance and freshness, resulting in up to 40% faster load times across key booking and browsing pages. Authentication is secured using Google Sign-In via NextAuth.js, providing users with a simple and secure login experience.
            <br /><br />This project focuses on performance-first rendering strategies, smooth UX, and clean UI design powered by Tailwind CSS and Framer Motion. Users can explore cabin options with dynamic content, filter by availability, and view details without delay. I carefully structured data fetching logic and page generation methods to boost SEO. Building this platform helped me master hybrid rendering in Next.js and deliver a seamless, production-ready experience.</>,
    },
    {
        title: "TWO Dash",
        img: "/gallery/thewildoasis-d.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
        link: "https://www.thewildoasis.xyz",
        tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
        desc: "An internal Hotel Management Dashboard for staff to handle bookings, guests, cabins, and settings, with insights via interactive charts and a clean UI.",
        modal: (
            <>
                🖥️ A clean and efficient Hotel Management Dashboard built with React, Supabase, React Query, and Recharts. It enables staff to manage bookings, check-ins, cabins, guest records, and hotel settings with features like role-based access control, filtering, pagination, and data validation for smooth handling of large datasets. The dashboard uses Recharts to visualize booking stats, occupancy trends, and revenue, providing actionable insights. Real-time sync with Supabase ensures up-to-date information and a responsive interface.
                <br /><br />
                React Query’s caching optimizes performance by minimizing repeated data fetching and instantly displaying cached results. This reduces server load and keeps data fresh automatically, so staff always see the latest booking and occupancy updates without needing manual refreshes.
            </>
        ),
    },
    {
        title: "LitLibrary",
        img: "/gallery/lit-library.webp",
        code: "https://github.com/fisheeesh/lit-library",
        link: "https://www.litlibrary.blog",
        tech: ["React", "Firebase", "Tailwind", "Context API", "Zod", "Swiper.js"],
        desc: "A vibrant blogging platform using React.js and Tailwind CSS. It highlights the effective use of Firebase real-time database to enable instant content updates.",
        modal: <>📚 A vibrant blogging platform designed to foster a positive and supportive community. Users can share personal growth experiences, life knowledge, advice, and insights while engaging with others&apos; blogs. It’s a place to inspire, learn, and connect. I love writing blogs there too, it’s my way of sharing what I’ve learned and connecting with others. <br /><br />This was actually my very first React project, and it taught me a lot about building component-based UIs and managing real-time state. It also includes a real-time notification feature using Firebase, alerting users instantly when new content or interactions happen. Working on LitLibrary helped me explore schema validation with Zod, and gave me confidence in creating a fully functional interactive web app.</>,
    },
    {
        title: "My Portfolio",
        img: "/gallery/portfolio-v2.webp",
        code: "https://github.com/fisheeesh/syp-portfolio",
        link: "https://www.syp.dev",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        desc: "This is my personal developer portfolio built with Next.js, highlights my skills, projects, and certifications with a focus on smooth user interaction.",
        modal: <>🌐 This is my personal developer portfolio built with Next.js, styled using Tailwind CSS. It highlights my skills, projects, and certifications with a focus on smooth user interaction using libraries like Framer Motion, React Scroll, and React Type Animation. <br /><br />It represents my current learning, clean code habits, and visual preferences as a developer.</>,
    },
];

export const galleryShowCases = [
    {
        cat: "All, Next",
        title: "DevFlow",
        img: "/gallery/devflow.webp",
        code: "https://github.com/fisheeesh/devflow",
        link: "https://www.devflow.forum",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "GroqAI", "MongoDB", "Mongoose"],
        modal:
            <>
                A modern Q&A platform built with Next.js 15, React 19, and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries. The platform emphasizes performance, usability, and clean UI, with a strong focus on scalable architecture and advanced database queries.
                <br /><br />One of the core challenges in building DevFlow was designing a scalable and flexible MongoDB schema and choosing between an array of references and creating multiple collections to manage complex relationships between users, questions, answers, tags, and activity logs. Integrating AI assistance via Groq while maintaining performance and response speed required careful architectural decisions. Implementing an advanced global search system with efficient filtering, sorting, and tag-based recommendation system also lead to late night grinds. Balancing feature-rich functionality with optimal performance, SEO, and clean user experience was a constant challenge.
                <br /><br />I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved in my newfound understanding of NoSQL database design and advanced aggregation pipelines. Working with Groq AI helped me learn how to integrate AI in a way that adds real value to users. I also learned the importance of code organization, consistent refactoring, and optimizing for readability and scalability. This project taught me how to design a production-grade application that is not only functional but also performant, secure, and SEO-friendly ultimately helping me grow into a more confident and capable full-stack developer.
            </>
    },
    {
        cat: "All, Next",
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, and responsive UI. I designed both customer-facing and admin interfaces, implemented role-based access control, and handled edge cases like failed transactions and stock availability.
            <br /><br />This project gave me deep hands-on experience with e-commerce logic, scalable backend design, and full-stack payment flows. I tested over 100 transactions in sandbox mode for both PayPal and Stripe to ensure reliability, proper webhook handling, and graceful error management. Prostore helped me solidify my knowledge of building production-grade applications with real-world complexity and a strong focus on performance and user experience.</>,
    },
    {
        cat: "All, React",
        title: "LitLibrary",
        img: "/gallery/lit-library.webp",
        code: "https://github.com/fisheeesh/lit-library",
        link: "https://www.litlibrary.blog",
        tech: ["React", "Firebase", "Tailwind", "Context API", "Zod", "Swpier.js"],
        modal: <>📚 A vibrant blogging platform designed to foster a positive and supportive community. Users can share personal growth experiences, life knowledge, advice, and insights while engaging with others&apos; blogs. It’s a place to inspire, learn, and connect. I love writing blogs there too — it’s my way of sharing what I’ve learned and connecting with others. <br /><br />This was actually my very first React project, and it taught me a lot about building component-based UIs and managing real-time state. It also includes a real-time notification feature using Firebase, alerting users instantly when new content or interactions happen. Working on LitLibrary helped me explore schema validation with Zod, and gave me confidence in creating a fully functional interactive web app.</>,
    },
    {
        cat: "All, React",
        title: "Filmpire",
        img: "/gallery/filmpire.webp",
        code: "https://github.com/fisheeesh/filmpire",
        link: "https://www.filmpire.net",
        tech: ["React", "TMDB API", "Alan AI", "MUI"],
        modal: (
            <>
                🎬 Filmpire is a dynamic and fully responsive movie showcase platform built with React and Material UI, powered by The Movie Database (TMDB) API. Users can explore trending and top-rated films, search by genre, view trailers, see ratings, and build a personalized watchlist and engaging cinematic experience. I created custom API endpoints using RTK Query to fetch and cache movie data efficiently, allowing for smoother performance and seamless interaction with the TMDB API.
                <br /><br />
                I also integrated Alan AI to enable voice command interactions, which gave me hands-on experience in building voice-powered user interfaces.
            </>
        ),
    },
    {
        cat: "All, Next",
        title: "TWO Web",
        img: "/gallery/thewildoasis-web.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-website",
        link: "https://www.thewildoasis.co",
        tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth", "Framer Motion"],
        modal: <>🌐 A customer facing website of &quot;The Wild Oasis&quot; designed to let users explore and book serene stays with ease, built with Next.js and Supabase. It uses a combination of SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration) to balance performance and freshness, resulting in up to 40% faster load times across key booking and browsing pages. Authentication is secured using Google Sign-In via NextAuth.js, providing users with a simple and secure login experience.
            <br /><br />This project focuses on performance-first rendering strategies, smooth UX, and clean UI design powered by Tailwind CSS and Framer Motion. Users can explore cabin options with dynamic content, filter by availability, and view details without delay. I carefully structured data fetching logic and page generation methods to boost SEO. Building this platform helped me master hybrid rendering in Next.js and deliver a seamless, production-ready experience.</>,
    },
    {
        cat: "All, React",
        title: "TWO Dash",
        img: "/gallery/thewildoasis-d.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
        link: "https://www.thewildoasis.xyz",
        tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
        modal: (
            <>
                🖥️ A clean and efficient Hotel Management Dashboard built with React, Supabase, React Query, and Recharts. It enables staff to manage bookings, check-ins, cabins, guest records, and hotel settings with features like role-based access control, filtering, pagination, and data validation for smooth handling of large datasets. The dashboard uses Recharts to visualize booking stats, occupancy trends, and revenue, providing actionable insights. Real-time sync with Supabase ensures up-to-date information and a responsive interface.
                <br /><br />
                React Query’s caching optimizes performance by minimizing repeated data fetching and instantly displaying cached results. This reduces server load and keeps data fresh automatically, so staff always see the latest booking and occupancy updates without needing manual refreshes.
            </>
        ),
    },
    {
        cat: "All, Next",
        title: "My Portfolio",
        img: "/gallery/portfolio-v2.webp",
        code: "https://github.com/fisheeesh/syp-portfolio",
        link: "https://www.syp.dev",
        tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        modal: <>🌐 This is my personal developer portfolio built with Next.js, styled using Tailwind CSS. It highlights my skills, projects, and certifications with a focus on smooth user interaction using libraries like Framer Motion, React Scroll, and React Type Animation. <br /><br />It represents my current learning, clean code habits, and visual preferences as a developer.</>,
    },
    {
        cat: "All, Vue",
        title: "Chatty",
        img: "/gallery/chatty.webp",
        code: "https://github.com/fisheeesh/chatty",
        link: "https://chatty-1090b.web.app/",
        tech: ["Vue", "Firebase", "Boostrap"],
        modal: <>💬 A real-time chat application built with Vue.js and Firebase. It allows users to send and receive messages in real-time, providing a seamless and interactive messaging experience.</>,
    },
    {
        cat: "All, Vue",
        title: "Audionix",
        img: "/gallery/audionix.webp",
        code: "https://github.com/fisheeesh/audionix",
        link: "https://music-b055.web.app/",
        tech: ["Vue", "Pinia", "Firebase", "i18n", "Tailwind", "Howler.js", "VeeValidate"],
        modal: <>🎵 A modern music application where users can enjoy and manage music in a seamless experience.Audionix offers intuitive tools to explore, upload, and manage your music. Built with Vue 3, Firebase, Pinia, Howler.js and Tailwind CSS, this single-page application (SPA) ensures smooth interactions, an elegant design, and secure features for everyone. It also support mutli-language like English and Burmese</>,
    },
    {
        cat: "All, React",
        title: "Fast React Pizza",
        img: "/gallery/fast-react-pizza.webp",
        code: "https://github.com/fisheeesh/fast-react-pizza.git",
        link: "https://fast-react-pizza-six-gamma.vercel.app/",
        tech: ["React", "React Router", "Redux", "Tailwind", "JS"],
        modal: <>🍕 A blazing-fast pizza ordering app built with React, Redux, React Router, and Tailwind CSS. Users can browse pizzas, customize orders, select quantity, and place orders with live delivery tracking and pricing</>
    },
    {
        cat: "All, React",
        title: "React Quiz",
        img: "/gallery/react-quiz.webp",
        code: "https://github.com/fisheeesh/quiz.git",
        link: "https://mini-quizz.vercel.app/",
        tech: ["React", "Redux", "JS"],
        modal: <>🧠 A mini quiz app to test your React Mastery.</>
    },
    {
        cat: "All, React",
        title: "WorldWise",
        img: "/gallery/theworldwise.webp",
        code: "https://github.com/fisheeesh/worldwise.git",
        link: "https://worldwise-pearl-ten.vercel.app/",
        tech: ["React", "React Leaflet", "React Router", "JS"],
        modal: <>🌍 A mini app that helps users track places they’ve visited around the world. Built with React-Leaflet, it allows users to mark locations on a map, add personal notes or memories, and view them later.</>
    },
    {
        cat: "All, Design, React, App",
        title: "RentMate",
        img: "/gallery/rentmate.webp",
        code: "https://github.com/fisheeesh/rentmate.git",
        link: "https://rentmate-xi.vercel.app/",
        tech: ["React", "Tailwind", "Lottie", "JS", "Recharts", "Zod"],
        modal: <>📦 A responsive web application that enables users to rent and lend everyday items in a seamless and secure way. The platform supports two user roles — Renter and Lender, and each user can switch roles anytime.</>
    },
    {
        cat: "All, Design",
        title: "Clipboard",
        img: "/gallery/clipboard.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://clip-board-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind"],
        modal: <>🖇️ Landing page design for tracking copy history website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and JavaScript.</>
    },
    {
        cat: "All, Design",
        title: "LoopStudios",
        img: "/gallery/loop-studio.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://loop-stuido.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>📀 Landing page design for virtual reality production studio website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and JavaScript.</>
    },
    {
        cat: "All, Design",
        title: "Shortly",
        img: "/gallery/shortly.webp",
        code: "https://github.com/fisheeesh/tailwind_training.git",
        link: "https://shortly-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind"],
        modal: <>⛓️ Landing page design for URL shortening website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind.</>
    },
    {
        cat: "All, Design",
        title: "Fylo",
        img: "/gallery/fylo.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://fylo-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>Landing page design for tracking copy history website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and JavaScript. It features a clean UI with support for light and dark theme toggling.</>
    },
    {
        cat: "All, Design",
        title: "Bookmark",
        img: "/gallery/bookmark.webp",
        code: "https://github.com/fisheeesh/tailwind_training.git",
        link: "https://book-mark-webiste.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>🔖 Landing page design for bookmarking website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and JavaScript.</>
    },
    {
        cat: "All, Design",
        title: "Portfolio v1",
        img: "/gallery/portfolio-v1.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://fissheeesh.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>🌐 My first personal portfolio design, showcasing a sleek, professional look. Built with HTML, CSS, JavaScript, Bootstrap, and SCSS to ensure clean structure and responsive performance.</>
    },
    {
        cat: "All, Design",
        title: "Blog Mastery",
        img: "/gallery/blog-mastery.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://ebook-website-black-nine.vercel.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss"],
        modal: <>📝 Landing page design for blogging website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Boostrap and Scss.</>
    },
    {
        cat: "All, Design",
        title: "Carso Training",
        img: "/gallery/carso.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://carso-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>📝 Landing page design for personal training website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Boostrap and Scss.</>
    },
    {
        cat: "All, Design",
        title: "Vera",
        img: "/gallery/vera.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://vera-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>🏢 Landing page design for IT Software Solution company website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, JS, Bootstrap and Scss.</>
    },
    {
        cat: "All, Design",
        title: "Skywings",
        img: "/gallery/skywings.webp",
        code: "https://github.com/fisheeesh/skywings.git",
        link: "https://skywings-nu.vercel.app/",
        tech: ["HTML", "CSS", "JS", "Swiper.js"],
        modal: <>✈️ Landing page design for Air tickets booking website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, JS and with the help of Swiper.js.</>
    },
]