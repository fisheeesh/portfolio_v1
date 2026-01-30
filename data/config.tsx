export const statClassName = "rounded-[10px] text-[#000000D0] cursor-default shadow-[0px_2px_5px_rgba(160,170,180,0.6)] bg-[#f5f5f5] py-[5px] px-2.5 m-[5px] flex items-center justify-center text-[15px] font-normal"

export const stackTech = [
    "Next.js", "React.js", "TypeScript", "JavaScript",
    "Node.js", "Express.js", "Python", "FastAPI", "Tanstack Query",
    "Redux", "Zustand", "Framer Motion",
    "Tailwind", "shadcn/ui", "MongoDB",
    "PostgreSQL", "Redis", "Firebase", "Supabase", "Git", "GitHub",
    "Prisma", "Mongoose", "Docker", "Antigravity", "Notion", "Nginx", "Cloudflare", "SEO"
]

export const experiences = [
    {
        title: "Full-Stack Developer",
        role: "Freelance - Internship",
        date: 'October 2024 - Present',
        location: "Bangkok, Thailand",
        description: "Leading the migration of zcrLog to version 3, a centralized security log management platform serving enterprise clients. Redesigned the entire frontend architecture to improve performance, scalability, and user experience while implementing multi-tenant access control, licensing integration, and AI-powered analysis features. Collaborated with the team to deploy production infrastructure, optimize database queries for high-volume log data, and establish containerized deployment workflows. Gained practical experience in DevOps practices, networking concepts, and cybersecurity fundamentals including on-premise vs SaaS architectures.",
        tech: [
            "React",
            "TanStack Query",
            "Zustand",
            "FastAPI",
            "ClickHouse",
            "Redis",
            "Keygen",
            "Vector",
            "Cloudflare",
            "Nginx",
            "VMware"
        ],
    },
]

export const certification = [
    {
        title: "Full-Stack Developer Class",
        school: "CodeCafe Lab",
        date: "August 2025 - 300 hours",
        link: "https://drive.google.com/file/d/1WllGNrEyonlFczW9diDHecyJGpNnGS5F/view?usp=sharing",
        description:
            "Completed an intensive, project-based program covering modern full-stack engineering from React + TypeScript to Node.js/Express APIs. Built a production-ready RESTful backend with PostgreSQL and Prisma, including strict request validation, layered JWT/refresh authentication, RBAC, and secure file uploads with Multer. Implemented queue workers with Redis for background jobs like image processing and cache invalidation. On the frontend, delivered data-driven UX using React Router loaders/actions, TanStack Query patterns, and persistent global state with Zustand while supporting optimistic updates, infinite scrolling, and protected routes. ",
        tech: [
            "React",
            "TypeScript",
            "Express.js",
            "React Router",
            "Tanstack Query",
            "Zustand",
            "shadcn/ui",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Queue Workers",
            "RESTful",
            "GraphQL"
        ]
    },
    {
        title: "Google AI Essentials",
        school: "Coursera",
        date: "August 2025 - 7 hours",
        link: "https://coursera.org/share/e74998025c12efcf84fdb6e31338c979",
        description:
            "Developed practical skills using generative AI tools to boost productivity by generating ideas, creating content, and accelerating daily tasks. Mastered writing clear, effective prompts to obtain precise AI outputs for summarizing, tagline creation, and problem-solving. Applied responsible AI practices by identifying biases and minimizing potential harm. Learned strategies to stay informed in the rapidly evolving AI landscape.",
        tech: [
            "Generative AI",
            "Innovation",
            "Prompt Engineering",
            "Data Ethics",
            "Productivity Software",
            "Machine Learning"
        ],
    },
    {
        title: "The Ultimate Next.js 15 Course",
        school: "JS Mastery",
        date: "August 2025 - 100 hours",
        link: "https://drive.google.com/file/d/1eab2lYUFbBXa9NwQRK0QvsG2Wfxitqtn/view?usp=sharing",
        description:
            "Gained deep expertise in modern React patterns and advanced Next.js 15 features, including server-side rendering, SEO optimization, and performance tuning. Built a production-grade Q&A platform integrating Groq AI for intelligent assistance. Designed flexible, scalable MongoDB schemas and implemented complex queries with advanced Mongoose aggregation pipelines. Developed a custom recommendation engine from scratch, leveraging user activities. Strengthened skills in authentication, secure route handling, and building elegant, responsive UIs using shadcn/ui and Tailwind CSS.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "NextAuth",
            "MongoDB",
            "Mongoose",
            "shadcn/ui",
            "Tailwind CSS",
            "Groq AI",
            "SSR",
            "SSG",
            "ISR",
        ],
    },
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
        title: "EMC Web",
        img: "/gallery/ata-web.webp",
        code: "https://github.com/fisheeesh/emc-web",
        link: "https://emotioncheckinsystem.com",
        tech: ["React", "Express.js", "Tanstack Query", "PostgreSQL", "GroqAI"],
        desc: "My university senior project's a comprehensive AI-powered full-stack employee well-being platform that bridges attendance management with emotional health monitoring.",
        modal: <>
            🎓 My university senior project&apos;s a comprehensive AI-powered full-stack employee well-being platform that bridges attendance management with emotional health monitoring. Features AI-powered text analysis, real-time dashboards, CSV imports, real-time email notify, and rich MDX content editing to help organizations create healthier work environments. Employees check in daily via a mobile app, sharing their feelings through emoji selections and short notes, while HR and Super Admins access a powerful web dashboard displaying emotion trends, attendance patterns, and actionable insights through intuitive charts and reports.
            <br /><br /> This project marks a significant milestone in my development journey, pushing me far beyond my previous capabilities. Building on the foundation I established with Furnivo, I integrated advanced features like AI-powered sentiment analysis using GroqAI to automatically detect emotional patterns in employee notes, Cloudinary for scalable image management, bulk CSV uploads for efficient data import, and MDX editor integration for creating rich, dynamic content. The combination of real-time emotion tracking with traditional attendance data required careful database design, complex query optimization, and thoughtful UX considerations to ensure both privacy and actionable insights. I implemented role-based access control (RBAC) to separate employee, HR, and Super Admin permissions, designed responsive data visualization components, and built sophisticated filtering and reporting systems that transform raw emotional data into meaningful organizational insights.
            <br /><br /> Working on this project truly matured me as a full-stack developer. Beyond strengthening my core skills with React, Express.js, and PostgreSQL, I gained invaluable experience integrating AI capabilities into real-world applications—from handling API rate limits and error fallbacks to designing user-friendly interfaces that make AI feel natural and helpful rather than intrusive. I learned to architect systems that handle sensitive employee data responsibly, implementing proper encryption, secure authentication, and privacy-first design patterns. The challenge of combining emotional intelligence with technical infrastructure taught me how to balance multiple stakeholder needs: employees wanting privacy and ease of use, HR teams needing actionable insights, and administrators requiring comprehensive control. I mastered designing scalable database schemas with complex relationships between users, check-ins, emotions, and organizational hierarchies, processing bulk CSV uploads with proper validation and error handling, and implementing real-time email notifications as background tasks to enhance API response times and maintain system performance. Creating intuitive content editing experiences with MDX further expanded my technical toolkit. This project showed me that being a mature full-stack developer isn&apos;t just about writing code, it&apos;s about understanding the human problems you&apos;re solving, designing thoughtful solutions, and building systems that genuinely improve people&apos;s lives. The Emotion Check-in System transformed me from someone who could build features into someone who could architect complete, production-ready solutions that create real impact.
        </>,
    },
    {
        title: "EMC Mob",
        img: "/gallery/ata-mob.webp",
        code: "https://github.com/fisheeesh/emc-mob",
        link: "https://github.com/fisheeesh/emc-mob",
        tech: ["Dart", "Flutter", "Flutter Secure Storage", "SQLite"],
        desc: "My university senior project's employee-facing mobile app with AI-powered emotion scoring to help HR teams understand and support employee well-being through data-driven insights.",
        modal: <>
            📱 The mobile counterpart to my Emotion Check-in System, designed specifically for employees to seamlessly log their daily attendance and emotional state. This Flutter application serves as the primary touchpoint where employees share their feelings through intuitive emoji selections and optional notes, which are then analyzed by AI to generate emotion scores that help HR teams identify patterns and provide timely support.
            <br /><br /> This marked my first experience building a mobile application that integrates with a custom REST API, and it taught me invaluable lessons about mobile development best practices. I focused heavily on writing clean, maintainable code with proper project structure, separating concerns across models, services, controllers, and UI layers. To optimize performance and reduce unnecessary database queries, I implemented intelligent memory caching strategies using SQLite for local data persistence, combined with Flutter Secure Storage for handling sensitive authentication tokens and user credentials securely. I learned to balance between local data availability for offline-first experiences and server synchronization for real-time updates. Working with Flutter&apos;s reactive UI framework challenged me to think differently about state management and widget lifecycle, while integrating with the backend API taught me about handling network requests, error states, loading indicators, and graceful fallbacks in mobile environments.
            <br /><br /> Building this mobile app deepened my understanding of full-stack development from an entirely new perspective, creating seamless experiences across web dashboards and mobile interfaces while maintaining data consistency and security. I&apos;m actively continuing development on this project, gaining more insights with each feature I implement. My goal is to deploy this application on the Google Play Store, making it accessible to real organizations looking to improve their workplace culture and employee well-being. This journey from concept to production-ready mobile app is shaping me into a more versatile developer capable of building complete ecosystem solutions ^_^
        </>,
    },
    {
        title: "DevFlow",
        img: "/gallery/devflow.webp",
        code: "https://github.com/fisheeesh/devflow",
        link: "https://www.devflow.forum",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "GroqAI", "MongoDB", "Mongoose"],
        desc: "A modern Q&A platform built with Next.js and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries.",
        modal:
            <>
                🤖 A modern Q&A platform built with Next.js 15, React 19, and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries. The platform emphasizes performance, usability, and clean UI, with a strong focus on scalable architecture and advanced database queries.
                <br /><br />One of the core challenges in building DevFlow was designing a scalable and flexible MongoDB schema and choosing between an array of references and creating multiple collections to manage complex relationships between users, questions, answers, tags, and activity logs. Building the recommendation system entirely from scratch was one of the most challenging yet rewarding aspects of the project. Integrating AI assistance via Groq while maintaining performance and response speed required careful architectural decisions. Implementing an advanced global search system with efficient filtering and sorting also lead to late night grinds. Balancing feature-rich functionality with optimal performance, SEO, and clean user experience was a constant challenge.
                <br /><br />I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved in my newfound understanding of NoSQL database design, handling atomic functions with mongoose transactions and advanced aggregation pipelines. Working with Groq AI helped me learn how to integrate AI in a way that adds real value to users. Creating a custom recommendation system from the ground up was a standout highlight of the project, offering both a challenging and highly rewarding learning experience. I also learned the importance of code organization, consistent refactoring, and optimizing for readability and scalability. This project taught me how to design a production-grade application that is not only functional but also performant, secure, and SEO-friendly ultimately helping me grow into a more confident and capable full-stack developer.
            </>
    },
    {
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        desc: "A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal.",
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, and responsive UI. I designed both customer-facing and admin interfaces, implemented role-based access control, automated email confirmations for orders upon placement and shipment, and handled edge cases like failed transactions and stock availability. One cool feature is that I implemented session cart for guest users and they can add and remove items from cart without login to the platform.
            <br /><br />This project gave me deep hands-on experience with e-commerce logic, some real-world atomic funcationality, scalable backend design, and full-stack payment flows. I tested over 100 transactions in sandbox mode for both PayPal and Stripe to ensure reliability, proper webhook handling, and graceful error management. Prostore helped me solidify my knowledge of building production-grade applications with real-world complexity and a strong focus on performance and user experience.</>,
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
        title: "Furnivo",
        img: "/gallery/furnivo.webp",
        code: "https://github.com/fisheeesh/furnivo",
        link: "https://github.com/fisheeesh/furnivo",
        tech: ["React", "Express.js", "Zustand", "Tanstack Query", "PostgreSQL"],
        desc: "A full-stack modern furniture marketplace built with React.js + React Router, TypeScript, Zustand and shadcn/ui on the frontend, and Node.js, Express.js, Prisma, and PostgreSQL on the backend.",
        modal: <>
            🛋️  A full-stack modern furniture marketplace built with React.js + React Router, TypeScript, Zustand and shadcn/ui on the frontend, and Node.js, Express.js, Prisma, and PostgreSQL on the backend. It features JWT authentication, file uploads with Multer, and background job processing using BullMQ with Redis.
            <br /><br /> My first full-stack application with a custom REST API backend, marking a shift from my previous experience with serverless or Next.js servers. I gained hands-on experience building and structuring an Express.js backend, handling middleware, integrating Prisma ORM with MySQL, PostgreSQL, and SQLite, and implementing secure JWT-based authentication flows, including registration, OTP verification, password reset, and token rotation. I also learned to optimize performance and scalability by offloading heavy tasks to background workers using BullMQ and Redis for tasks like image processing and cache invalidation. On the frontend, I strengthened my skills with React Router’s loaders, actions, and forms, API integration with TanStack Query, and global state management using Zustand. I mastered keeping data alive across routes, handling loading states, infinite scrolling, query caching, protected routes, and request interceptors with Axios. Beyond technical skills, I learned the importance of balancing code organization, performance, and security while maintaining a smooth user experience, which helped me grow into a more confident full-stack developer.
            <br /><br /> I could spend all day describing the lessons I learned while working on this project, but the most important involved gaining a solid understanding of backend fundamentals and production-ready REST API design. I gained hands-on experience building and structuring an Express.js backend, handling middleware, integrating Prisma ORM with multiple databases, and implementing secure authentication with token rotation. Learning to offload heavy tasks to background workers using BullMQ and Redis was a game-changer for performance and scalability. On the frontend, I strengthened my skills with React Router’s loaders and actions, API integration with TanStack Query, and global state management using Zustand. I mastered using React Router’s Form, useFetcher for actions, and useNavigation for handling loading states, while keeping data alive across routes. I developed solid concepts like infinite scrolling, query caching, protected routes, and request interceptors with Axios. Beyond technical skills, I learned how crucial it is to balance code organization, performance, and security while maintaining a smooth user experience. This project helped me grow into a more confident full-stack developer with a clearer understanding of both frontend and backend problem-solving.
        </>,
    },
];

export const galleryShowCases = [
    {
        cat: "All",
        title: "EMC Web",
        img: "/gallery/ata-web.webp",
        code: "https://github.com/fisheeesh/emc-web",
        link: "https://emotioncheckinsystem.com",
        tech: ["React", "Express.js", "Tanstack Query", "PostgreSQL", "GroqAI"],
        modal: <>
            🎓 My university senior project&apos;s a comprehensive AI-powered full-stack employee well-being platform that bridges attendance management with emotional health monitoring. Features AI-powered text analysis, real-time dashboards, CSV imports, real-time email notify, and rich MDX content editing to help organizations create healthier work environments. Employees check in daily via a mobile app, sharing their feelings through emoji selections and short notes, while HR and Super Admins access a powerful web dashboard displaying emotion trends, attendance patterns, and actionable insights through intuitive charts and reports.
            <br /><br /> This project marks a significant milestone in my development journey, pushing me far beyond my previous capabilities. Building on the foundation I established with Furnivo, I integrated advanced features like AI-powered sentiment analysis using GroqAI to automatically detect emotional patterns in employee notes, Cloudinary for scalable image management, bulk CSV uploads for efficient data import, and MDX editor integration for creating rich, dynamic content. The combination of real-time emotion tracking with traditional attendance data required careful database design, complex query optimization, and thoughtful UX considerations to ensure both privacy and actionable insights. I implemented role-based access control (RBAC) to separate employee, HR, and Super Admin permissions, designed responsive data visualization components, and built sophisticated filtering and reporting systems that transform raw emotional data into meaningful organizational insights.
            <br /><br /> Working on this project truly matured me as a full-stack developer. Beyond strengthening my core skills with React, Express.js, and PostgreSQL, I gained invaluable experience integrating AI capabilities into real-world applications—from handling API rate limits and error fallbacks to designing user-friendly interfaces that make AI feel natural and helpful rather than intrusive. I learned to architect systems that handle sensitive employee data responsibly, implementing proper encryption, secure authentication, and privacy-first design patterns. The challenge of combining emotional intelligence with technical infrastructure taught me how to balance multiple stakeholder needs: employees wanting privacy and ease of use, HR teams needing actionable insights, and administrators requiring comprehensive control. I mastered designing scalable database schemas with complex relationships between users, check-ins, emotions, and organizational hierarchies, processing bulk CSV uploads with proper validation and error handling, and implementing real-time email notifications as background tasks to enhance API response times and maintain system performance. Creating intuitive content editing experiences with MDX further expanded my technical toolkit. This project showed me that being a mature full-stack developer isn&apos;t just about writing code, it&apos;s about understanding the human problems you&apos;re solving, designing thoughtful solutions, and building systems that genuinely improve people&apos;s lives. The Emotion Check-in System transformed me from someone who could build features into someone who could architect complete, production-ready solutions that create real impact.
        </>,
    },
    {
        cat: "All, Backend",
        title: "EMC Mob",
        img: "/gallery/ata-mob.webp",
        code: "https://github.com/fisheeesh/emc-mob",
        link: "https://github.com/fisheeesh/emc-mob",
        tech: ["Dart", "Flutter", "Flutter Secure Storage", "SQLite"],
        modal: <>
            📱 The mobile counterpart to my Emotion Check-in System, designed specifically for employees to seamlessly log their daily attendance and emotional state. This Flutter application serves as the primary touchpoint where employees share their feelings through intuitive emoji selections and optional notes, which are then analyzed by AI to generate emotion scores that help HR teams identify patterns and provide timely support.
            <br /><br /> This marked my first experience building a mobile application that integrates with a custom REST API, and it taught me invaluable lessons about mobile development best practices. I focused heavily on writing clean, maintainable code with proper project structure, separating concerns across models, services, controllers, and UI layers. To optimize performance and reduce unnecessary database queries, I implemented intelligent memory caching strategies using SQLite for local data persistence, combined with Flutter Secure Storage for handling sensitive authentication tokens and user credentials securely. I learned to balance between local data availability for offline-first experiences and server synchronization for real-time updates. Working with Flutter&apos;s reactive UI framework challenged me to think differently about state management and widget lifecycle, while integrating with the backend API taught me about handling network requests, error states, loading indicators, and graceful fallbacks in mobile environments.
            <br /><br /> Building this mobile app deepened my understanding of full-stack development from an entirely new perspective, creating seamless experiences across web dashboards and mobile interfaces while maintaining data consistency and security. I&apos;m actively continuing development on this project, gaining more insights with each feature I implement. My goal is to deploy this application on the Google Play Store, making it accessible to real organizations looking to improve their workplace culture and employee well-being. This journey from concept to production-ready mobile app is shaping me into a more versatile developer capable of building complete ecosystem solutions ^_^
        </>,
    },
    {
        cat: "All, Next",
        title: "DevFlow",
        img: "/gallery/devflow.webp",
        code: "https://github.com/fisheeesh/devflow",
        link: "https://www.devflow.forum",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "GroqAI", "MongoDB", "Mongoose"],
        modal:
            <>
                🤖 A modern Q&A platform built with Next.js 15, React 19, and integrated Groq AI assistance. Developers can ask questions, share knowledge, and receive intelligent help to improve their queries. The platform emphasizes performance, usability, and clean UI, with a strong focus on scalable architecture and advanced database queries.
                <br /><br />One of the core challenges in building DevFlow was designing a scalable and flexible MongoDB schema and choosing between an array of references and creating multiple collections to manage complex relationships between users, questions, answers, tags, and activity logs. Building the recommendation system entirely from scratch was one of the most challenging yet rewarding aspects of the project. Integrating AI assistance via Groq while maintaining performance and response speed required careful architectural decisions. Implementing an advanced global search system with efficient filtering and sorting also lead to late night grinds. Balancing feature-rich functionality with optimal performance, SEO, and clean user experience was a constant challenge.
                <br /><br />I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved in my newfound understanding of NoSQL database design, handling atomic functions with mongoose transactions and advanced aggregation pipelines. Working with Groq AI helped me learn how to integrate AI in a way that adds real value to users. Creating a custom recommendation system from the ground up was a standout highlight of the project, offering both a challenging and highly rewarding learning experience. I also learned the importance of code organization, consistent refactoring, and optimizing for readability and scalability. This project taught me how to design a production-grade application that is not only functional but also performant, secure, and SEO-friendly ultimately helping me grow into a more confident and capable full-stack developer.
            </>
    },
    {
        cat: "All, Next",
        title: "Prostore",
        img: "/gallery/prostore.webp",
        code: "https://github.com/fisheeesh/prostore",
        link: "https://www.theprostore.shop",
        tech: ["Next.js", "TypeScript", "shadcn/ui", "PayPal", "Stripe", "PostgreSQL"],
        modal: <>🛒  A full featured Ecommerce platform from scratch using Next.js, TypeScript, shadcn/ui, PostgreSQL, and Prisma. Integrated secure and flexible payment options with Stripe and PayPal, supporting both one-time and multi-product purchases. Features include user authentication, admin panel product management, shopping cart, order history, checkout process, and responsive UI. I designed both customer-facing and admin interfaces, implemented role-based access control, automated email confirmations for orders upon placement and shipment, and handled edge cases like failed transactions and stock availability. One cool feature is that I implemented session cart for guest users and they can add and remove items from cart without login to the platform.
            <br /><br />This project gave me deep hands-on experience with e-commerce logic, some real-world atomic funcationality, scalable backend design, and full-stack payment flows. I tested over 100 transactions in sandbox mode for both PayPal and Stripe to ensure reliability, proper webhook handling, and graceful error management. Prostore helped me solidify my knowledge of building production-grade applications with real-world complexity and a strong focus on performance and user experience.</>,
    },
    {
        cat: "All, React, Backend",
        title: "Furnivo",
        img: "/gallery/furnivo.webp",
        code: "https://github.com/fisheeesh/furnivo",
        link: "https://github.com/fisheeesh/furnivo",
        tech: ["React", "Express.js", "Zustand", "Tanstack Query", "PostgreSQL"],
        modal: <>
            🛋️  A full-stack modern furniture marketplace built with React.js + React Router, TypeScript, Zustand and shadcn/ui on the frontend, and Node.js, Express.js, Prisma, and PostgreSQL on the backend. It features JWT authentication, file uploads with Multer, and background job processing using BullMQ with Redis.
            <br /><br /> My first full-stack application with a custom REST API backend, marking a shift from my previous experience with serverless or Next.js servers. I gained hands-on experience building and structuring an Express.js backend, handling middleware, integrating Prisma ORM with MySQL, PostgreSQL, and SQLite, and implementing secure JWT-based authentication flows, including registration, OTP verification, password reset, and token rotation. I also learned to optimize performance and scalability by offloading heavy tasks to background workers using BullMQ and Redis for tasks like image processing and cache invalidation. On the frontend, I strengthened my skills with React Router’s loaders, actions, and forms, API integration with TanStack Query, and global state management using Zustand. I mastered keeping data alive across routes, handling loading states, infinite scrolling, query caching, protected routes, and request interceptors with Axios. Beyond technical skills, I learned the importance of balancing code organization, performance, and security while maintaining a smooth user experience, which helped me grow into a more confident full-stack developer.
            <br /><br /> I could spend all day describing the lessons I learned while working on this project, but the most important involved gaining a solid understanding of backend fundamentals and production-ready REST API design. I gained hands-on experience building and structuring an Express.js backend, handling middleware, integrating Prisma ORM with multiple databases, and implementing secure authentication with token rotation. Learning to offload heavy tasks to background workers using BullMQ and Redis was a game-changer for performance and scalability. On the frontend, I strengthened my skills with React Router’s loaders and actions, API integration with TanStack Query, and global state management using Zustand. I mastered using React Router’s Form, useFetcher for actions, and useNavigation for handling loading states, while keeping data alive across routes. I developed solid concepts like infinite scrolling, query caching, protected routes, and request interceptors with Axios. Beyond technical skills, I learned how crucial it is to balance code organization, performance, and security while maintaining a smooth user experience. This project helped me grow into a more confident full-stack developer with a clearer understanding of both frontend and backend problem-solving.
        </>,
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