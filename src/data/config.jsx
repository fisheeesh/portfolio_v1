export const statClassName = "rounded-[10px] text-[#000000D0] cursor-default shadow-[0px_2px_5px_rgba(160,170,180,0.6)] bg-[#f5f5f5] py-[5px] px-2.5 m-[5px] flex items-center justify-center text-[15px] font-normal"

export const stackTech = [
    "Vue", "React", "Next.js", "JavaScript", "TypeScript", "Flutter",
    "Tailwind", "Bootstrap", "shadcn/ui", "Node.js", "Express", "MongoDB",
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
            "Javascript",
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
            "Typescript",
            "shadcn/ui",
            "TailwindCSS",
            "Stripe",
            "Paypal",
            "Uploadthing",
            "Jest",
            "Resend Email",
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
            "Focused on mastering modern React and Next.js by building real-world projects from the ground up. Gained experience in reusable and compound components, advanced state management with Redux Toolkit and React Query, and implemented features like authentication, dynamic routing, server-side rendering, and performance optimization. Also explored incremental static regeneration and API handling. Emphasized code scalability, SEO, accessibility, and production-grade performance through best practices.",
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
        title: "TaiwindCSS Training",
        school: "Udemy",
        date: "December 2024 – 12.5 hours",
        link: "https://drive.google.com/file/d/13KTDLzkORPgfoRU2R0NzEGfZ9ZIlp0Jw/view?usp=drive_link",
        description:
            "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in rapidly building responsive UIs using TailwindCSS utility-first classes. Emphasized integrating advanced styling techniques, dark mode support, and component-based design for dynamic and efficient web applications. Developed a deeper understanding of design systems, layout strategies, and maintaining clean, scalable styles across projects.",
        tech: ["HTML", "CSS", "Javascript", "TailwindCSS", "Responsive"],
    },
];

export const projects = [
    {
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore_next",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "Typescript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        desc: "A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal.",
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, responsive UI and more.</>,
    },
    {
        title: "LitLibrary",
        img: "/gallery/lit-library.webp",
        code: "https://github.com/fisheeesh/lit-library",
        link: "https://www.litlibrary.blog",
        tech: ["React", "Firebase", "Tailwind", "Context API", "Zod", "Swiper.js"],
        desc: "A vibrant blogging platform using React.js and TailwindCSS. It highlights the effective use of Firebase real-time database to enable instant content updates.",
        modal: <>📚 A vibrant blogging platform designed to foster a positive and supportive community. Users can share personal growth experiences, life knowledge, advice, and insights while engaging with others' blogs. It’s a place to inspire, learn, and connect. I love writing blogs there too, it’s my way of sharing what I’ve learned and connecting with others.</>,
    },
    {
        title: "TWO Web",
        img: "/gallery/thewildoasis-web.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-website",
        link: "https://www.thewildoasis.co",
        tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth", "Framer Motion"],
        desc: 'A customer facing website of "The Wild Oasis" designed to let users explore and book serene stays with ease, built with Next.js and Supabase. Ensure fast load times and excellent SEO.',
        modal: <>🌐 A customer facing website of "The Wild Oasis" designed to let users explore and book serene stays with ease, built with Next.js and Supabase. It uses SSR, SSG, and ISR to ensure fast load times and excellent SEO — delivering a seamless stay-booking experience for customers. Authentication is secured with Google Sign-In via NextAuth.js</>,
    },
    {
        title: "TWO Dash",
        img: "/gallery/thewildoasis-d.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
        link: "https://www.thewildoasis.xyz",
        tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
        desc: "An internal Hotel Management Dashboard for staff to handle bookings, guests, cabins, and settings, with insights via interactive charts and a clean UI.",
        modal: <>🖥️ An internal Hotel Management Dashboard for staff to manage bookings, check-ins, cabins, user accounts, and hotel settings, while offering business insights through interactive charts and a clean, intuitive dashboard. As it’s secured behind authentication, responsiveness wasn’t prioritized. 🙏 </>,
    },
    {
        title: "Filmpire",
        img: "/gallery/filmpire.webp",
        code: "https://github.com/fisheeesh/filmpire",
        link: "https://www.filmpire.net",
        tech: ["React", "RTK Query", "TMDB API", "Alan AI", "MUI"],
        desc: "A dynamic and fully responsive movie showcase web application built with React and Material UI, powered by The Movie Database (TMDB) API.",
        modal: <>🎬 Filmpire is a dynamic and fully responsive movie showcase web application built with React and Material UI, powered by The Movie Database (TMDB) API. It allows users to explore, search, and interact with a wide collection of movies, offering features like trailers, ratings, and personalized watchlists for an immersive cinematic experience.</>,
    },
    {
        title: "My Portfolio",
        img: "/gallery/portfolio-v2.webp",
        code: "https://github.com/fisheeesh/syp-portfolio",
        link: "https://www.syp.dev",
        tech: ["React", "Tailwind", "Framer Motion"],
        desc: "This is my personal developer portfolio built with React.js, highlights my skills, projects, and certifications with a focus on smooth user interaction.",
        modal: <>🌐 This is my personal developer portfolio built with React.js, styled using TailwindCSS and Material UI (MUI). It highlights my skills, projects, and certifications with a focus on smooth user interaction using libraries like Framer Motion, React Scroll, and React Type Animation. </>,
    },
];

export const galleryShowCases = [
    {
        cat: "🩵, Next",
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore_next",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "Typescript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, responsive UI and more.</>,
    },
    {
        cat: "🩵, React",
        title: "LitLibrary",
        img: "/gallery/lit-library.webp",
        code: "https://github.com/fisheeesh/lit-library",
        link: "https://www.litlibrary.blog",
        tech: ["React", "Firebase", "Tailwind", "Context API", "Zod", "Swpier.js"],
        modal: <>📚 A vibrant blogging platform designed to foster a positive and supportive community. Users can share personal growth experiences, life knowledge, advice, and insights while engaging with others' blogs. It’s a place to inspire, learn, and connect.</>,
    },
    {
        cat: "🩵, React",
        title: "Filmpire",
        img: "/gallery/filmpire.webp",
        code: "https://github.com/fisheeesh/filmpire",
        link: "https://www.filmpire.net",
        tech: ["React", "TMDB API", "Alan AI", "MUI"],
        modal: <>🎬 Filmpire is a dynamic and fully responsive movie showcase web application built with React and Material UI, powered by The Movie Database (TMDB) API. It allows users to explore, search, and interact with a wide collection of movies, offering features like trailers, ratings, and personalized watchlists for an immersive cinematic experience.</>,
    },
    {
        cat: "🩵, Next",
        title: "TWO Web",
        img: "/gallery/thewildoasis-web.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-website",
        link: "https://www.thewildoasis.co",
        tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth", "Framer Motion"],
        modal: <>🌐 A customer facing website of "The Wild Oasis" designed to let users explore and book serene stays with ease, built with Next.js and Supabase. It uses SSR, SSG, and ISR to ensure fast load times and excellent SEO — delivering a seamless stay-booking experience for customers. Authentication is secured with Google Sign-In via NextAuth.js</>,
    },
    {
        cat: "🩵, React",
        title: "TWO Dash",
        img: "/gallery/thewildoasis-d.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
        link: "https://www.thewildoasis.xyz",
        tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
        modal: <>🖥️ An internal Hotel Management Dashboard for staff to manage bookings, check-ins, cabins, user accounts, and hotel settings, while offering business insights through interactive charts and a clean, intuitive dashboard. As it’s secured behind authentication, responsiveness wasn’t prioritized. 🙏 </>,
    },
    {
        cat: "🩵, React",
        title: "My Portfolio",
        img: "/gallery/portfolio-v2.webp",
        code: "https://github.com/fisheeesh/syp-portfolio",
        link: "https://www.syp.dev",
        tech: ["React", "Tailwind", "Framer Motion", "React Type Animation", "React Scroll", "MUI"],
        modal: <>🌐 This is my personal developer portfolio built with React.js, styled using TailwindCSS and Material UI (MUI). It highlights my skills, projects, and certifications with a focus on smooth user interaction using libraries like Framer Motion, React Scroll, and React Type Animation. </>,
    },
    {
        cat: "🩵, Vue",
        title: "Chatty",
        img: "/gallery/chatty.webp",
        code: "https://github.com/fisheeesh/chatty",
        link: "https://chatty-1090b.web.app/",
        tech: ["Vue", "Firebase", "Boostrap"],
        modal: <>💬 A real-time chat application built with Vue.js and Firebase. It allows users to send and receive messages in real-time, providing a seamless and interactive messaging experience.</>,
    },
    {
        cat: "🩵, Vue",
        title: "Audionix",
        img: "/gallery/audionix.webp",
        code: "https://github.com/fisheeesh/audionix",
        link: "https://music-b055.web.app/",
        tech: ["Vue", "Pinia", "Firebase", "i18n", "Tailwind", "Howler.js", "VeeValidate"],
        modal: <>🎵 A modern music application where users can enjoy and manage music in a seamless experience.Audionix offers intuitive tools to explore, upload, and manage your music. Built with Vue 3, Firebase, Pinia, Howler.js and Tailwind CSS, this single-page application (SPA) ensures smooth interactions, an elegant design, and secure features for everyone. It also support mutli-language like English and Burmese</>,
    },
    {
        cat: "🩵, React",
        title: "Fast React Pizza",
        img: "/gallery/fast-react-pizza.webp",
        code: "https://github.com/fisheeesh/fast-react-pizza.git",
        link: "https://fast-react-pizza-six-gamma.vercel.app/",
        tech: ["React", "React Router", "Redux", "Tailwind", "JS"],
        modal: <>🍕 A blazing-fast pizza ordering app built with React, Redux, React Router, and Tailwind CSS. Users can browse pizzas, customize orders, select quantity, and place orders with live delivery tracking and pricing</>
    },
    {
        cat: "🩵, React",
        title: "React Quiz",
        img: "/gallery/react-quiz.webp",
        code: "https://github.com/fisheeesh/quiz.git",
        link: "https://mini-quizz.vercel.app/",
        tech: ["React", "Redux", "JS"],
        modal: <>🧠 A mini quiz app to test your React Mastery.</>
    },
    {
        cat: "🩵, React",
        title: "WorldWise",
        img: "/gallery/theworldwise.webp",
        code: "https://github.com/fisheeesh/worldwise.git",
        link: "https://worldwise-pearl-ten.vercel.app/",
        tech: ["React", "React Leaflet", "React Router", "JS"],
        modal: <>🌍 A mini app that helps users track places they’ve visited around the world. Built with React-Leaflet, it allows users to mark locations on a map, add personal notes or memories, and view them later.</>
    },
    {
        cat: "🩵, Design, React, App",
        title: "RentMate",
        img: "/gallery/rentmate.webp",
        code: "https://github.com/fisheeesh/rentmate.git",
        link: "https://rentmate-xi.vercel.app/",
        tech: ["React", "Tailwind", "Lottie", "JS", "Recharts", "Zod"],
        modal: <>📦 A responsive web application that enables users to rent and lend everyday items in a seamless and secure way. The platform supports two user roles — Renter and Lender, and each user can switch roles anytime.</>
    },
    {
        cat: "🩵, Design",
        title: "Clipboard",
        img: "/gallery/clipboard.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://clip-board-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind"],
        modal: <>🖇️ Landing page design for tracking copy history website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and Javascript.</>
    },
    {
        cat: "🩵, Design",
        title: "LoopStudios",
        img: "/gallery/loop-studio.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://loop-stuido.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>📀 Landing page design for virtual reality production studio website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and Javascript.</>
    },
    {
        cat: "🩵, Design",
        title: "Shortly",
        img: "/gallery/shortly.webp",
        code: "https://github.com/fisheeesh/tailwind_training.git",
        link: "https://shortly-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind"],
        modal: <>⛓️ Landing page design for URL shortening website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind.</>
    },
    {
        cat: "🩵, Design",
        title: "Fylo",
        img: "/gallery/fylo.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://fylo-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>Landing page design for tracking copy history website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and Javascript. It features a clean UI with support for light and dark theme toggling.</>
    },
    {
        cat: "🩵, Design",
        title: "Bookmark",
        img: "/gallery/bookmark.webp",
        code: "https://github.com/fisheeesh/tailwind_training.git",
        link: "https://book-mark-webiste.netlify.app/",
        tech: ["HTML", "CSS", "Tailwind", "JS"],
        modal: <>🔖 Landing page design for bookmarking website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Tailwind and Javascript.</>
    },
    {
        cat: "🩵, Design",
        title: "Portfolio v1",
        img: "/gallery/portfolio-v1.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://fissheeesh.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>🌐 My first personal portfolio design, showcasing a sleek, professional look. Built with HTML, CSS, JavaScript, Bootstrap, and SCSS to ensure clean structure and responsive performance.</>
    },
    {
        cat: "🩵, Design",
        title: "Blog Mastery",
        img: "/gallery/blog-mastery.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://ebook-website-black-nine.vercel.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss"],
        modal: <>📝 Landing page design for blogging website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Boostrap and Scss.</>
    },
    {
        cat: "🩵, Design",
        title: "Carso Training",
        img: "/gallery/carso.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://carso-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>📝 Landing page design for personal training website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, Boostrap and Scss.</>
    },
    {
        cat: "🩵, Design",
        title: "Vera",
        img: "/gallery/vera.webp",
        code: "https://github.com/fisheeesh/bootstrap-training.git",
        link: "https://vera-website-syp.netlify.app/",
        tech: ["HTML", "CSS", "Bootstrap", "Scss", "JS"],
        modal: <>🏢 Landing page design for IT Software Solution company website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, JS, Bootstrap and Scss.</>
    },
    {
        cat: "🩵, Design",
        title: "Skywings",
        img: "/gallery/skywings.webp",
        code: "https://github.com/fisheeesh/skywings.git",
        link: "https://skywings-nu.vercel.app/",
        tech: ["HTML", "CSS", "JS", "Swiper.js"],
        modal: <>✈️ Landing page design for Air tickets booking website featuring a modern and minimalist aesthetic, crafted using HTML, CSS, JS and with the help of Swiper.js.</>
    },
]