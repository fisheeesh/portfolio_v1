import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Filter from "../ui/Filter";
import { GalleryItem } from "../ui/GalleryItem";
import { TransitionLink } from "../utils/TransitionLink";
import { useSearchParams } from "react-router-dom";

const Gallery = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const activeFilter = searchParams.get('category') || "🩵";

    const [filteredProjects, setFilteredProjects] = useState(
        projects.filter((project) => project.cat.includes("🩵"))
    );

    const handleFilter = (filter) => {
        searchParams.set('category', filter);
        setSearchParams(searchParams);
        setFilteredProjects(
            projects.filter((project) => project.cat.includes(filter))
        );
    };;

    return (
        <>
            <section className="Container" id="gallery">
                {/* Back Home */}
                <div className="flex items-center justify-center relative max-[860px]:flex-col my-3">
                    <TransitionLink
                        className="absolute left-0 max-[860px]:static mt-2"
                        to="/#projects"
                        aria-label="Back to Homepage">
                        <AiOutlineArrowLeft className="transition duration-200 opacity-50 hover:opacity-100 text-3xl max-[860px]:text-2xl" />
                    </TransitionLink>

                    {/* Filter */}
                    <Filter activeFilter={activeFilter} handleFilter={handleFilter} />
                </div>

                {/* Gallery */}
                <section className="grid grid-cols-2 gap-[3.2rem] my-6 max-[860px]:grid-cols-1 max-[860px]:py-0 max-[860px]:px-8 max-[480px]:py-0 max-[480px]:px-4">
                    {filteredProjects.map((project) => (
                        <GalleryItem
                            key={`${project.title}-${activeFilter}`}
                            {...project}
                        />
                    ))}
                </section>

                {/* Up Button */}
                {/* <button
                    className={styles.goUpBtn}
                    style={{ bottom: goUpBtn ? "3rem" : "-50%" }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to top">
                    <AiOutlineArrowUp size="2.4rem" />
                </button> */}
            </section>
        </>
    );
};

const projects = [
    //! P1 -> NEXT.JS -> APPLICATION(S)
    {
        cat: "🩵, App, React",
        title: "LitLibrary",
        img: "/gallery/lit-library.webp",
        code: "https://github.com/fisheeesh/lit-library",
        link: "https://www.litlibrary.blog/",
        tech: ["React", "Firebase", "Tailwind", "Context API"],
        modal: <>This is a vibrant blogging platform using React.js and TailwindCSS. It highlights the effective use of Firebase real-time database</>,
    },
    {
        cat: "🩵, App, Next",
        title: "TWO Website",
        img: "/gallery/thewildoasis-web.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-website",
        link: "https://the-wild-oasis-website-eta-flame.vercel.app/",
        tech: ["React", "Next.js", "Tailwind", "Supabase", "NextAuth"],
        modal: <>Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
    },
    {
        cat: "🩵, App, React",
        title: "TWO Dashboard",
        img: "/gallery/thewildoasis-d.webp",
        code: "https://github.com/fisheeesh/the-wild-oasis-dashboard",
        link: "https://the-wild-oasis-dashboard-amber.vercel.app/dashboard",
        tech: ["React", "Supabase", "React Query", "Styled Components", "Recharts"],
        modal: <>Landing page design for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript. Enhanced with smooth animations powered by ScrollReveal.js library.</>,
    },
    {
        cat: "🩵, App, React",
        title: "Filmpire",
        img: "/gallery/filmpire.webp",
        code: "https://github.com/fisheeesh/filmpire",
        link: "https://filmpire-ashy.vercel.app/",
        tech: ["React", "TMDB API", "Alan AI", "MUI"],
        modal: <>Evently is an event management platform, built on Next.js. It serves as a hub for showcasing events, features payment through Stripe, the capability to purchase tickets and manage your own events.</>,
    },
    {
        cat: "🩵, App, Vue",
        title: "Chatty",
        img: "/gallery/chatty.webp",
        code: "https://github.com/fisheeesh/chatty",
        link: "https://chatty-1090b.web.app/",
        tech: ["Vue", "Firebase", "Boostrap"],
        modal: <>CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support. Built with Next.js and leveraging its server-side rendering capabilities.</>,
    },
    {
        cat: "🩵, App, Vue",
        title: "Audionix",
        img: "/gallery/audionix.webp",
        code: "https://github.com/fisheeesh/audionix",
        link: "https://music-b055.web.app/",
        tech: ["Vue", "Pinia", "Firebase", "i18n", "Tailwind", "Howler.js", "VeeValidate"],
        modal: <>This 3D website, built with React and powered by Three.js, features engaging interactive elements. Navigate aboard a small plane to explore a floating island and discover various information. On the contact page, a fox will dynamically react as you fill out the fields!</>,
    },
    {
        cat: "🩵, Design",
        title: "Blog Mastery",
        img: "/gallery/blog-mastery.webp",
        code: "https://github.com/basedhound/bank-platform_app_next",
        link: "https://horizon-bank-fv.vercel.app",
        tech: ["Next", "Plaid", "Dwolla", "TS"],
        modal: (
            <>
                🍵 Built with Next.js, Horizon is a financial SaaS platform that
                connects to multiple bank accounts, displays transactions in real-time,
                allows users to transfer money to other platform users, and manages
                their finances altogether.
                <br />
                <br />
                🥐 Construit avec Next.js, Horizon est une plateforme SaaS financière
                qui se connecte à plusieurs comptes bancaires, affiche les transactions
                en temps réel, permet aux utilisateurs de transférer de l'argent à
                d'autres utilisateurs de la plateforme et gère leurs finances de manière
                globale.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Bookmark",
        img: "/gallery/bookmark.webp",
        code: "https://demo-sf.vercel.app/",
        link: "https://demo-sf.vercel.app/",
        tech: ["Next", "React", "TS", "MongoDB", "Stripe"],
        modal: (
            <>
                🍵 This is a Next.js starter project designed for fast development,
                featuring NextAuth for authentication, MongoDB for data management, and
                Stripe for payment integration. Built with React, TypeScript, and
                TailwindCSS, it provides a scalable foundation for web apps. It includes
                tools like Axios for HTTP requests, Zod for validation, Mailgun for
                email delivery, and DaisyUI for UI components. With React 18 and Next.js
                14, it's ideal for building sales pages, e-commerce sites, or apps with
                user and payment management.
                <br />
                <br />
                🥐 Il s'agit d'un projet de démarrage Next.js conçu pour un
                développement rapide, avec NextAuth pour l'authentification, MongoDB
                pour la gestion des données et Stripe pour l'intégration des paiements.
                Construit avec React, TypeScript et TailwindCSS, il offre une base
                évolutive pour les applications web. Il inclut des outils comme Axios
                pour les requêtes HTTP, Zod pour la validation, Mailgun pour la gestion
                des e-mails et DaisyUI pour les composants UI. Avec React 18 et Next.js
                14, il est idéal pour créer des pages de vente, des sites e-commerce ou
                des applications avec gestion des utilisateurs et des paiements.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Carso Training",
        img: "/gallery/carso.webp",
        code: "https://github.com/basedhound/pricewise-scraper_app_next",
        link: "https://pricewise-fv.vercel.app",
        tech: ["Next", "Bright Data", "MongoDB", "TS"],
        modal: (
            <>
                🍵 Developed using Next.js and Bright Data's webunlocker, this
                e-commerce product scraping site is designed to assist users in making
                informed decisions. It notifies users when a product drops in price and
                helps competitors by alerting them when the product is out of stock, all
                managed through cron jobs.
                <br />
                <br />
                🥐 Développé avec Next.js et le webunlocker de Bright Data, ce site de
                scraping de produits e-commerce est conçu pour aider les utilisateurs à
                prendre des décisions éclairées. Il informe les utilisateurs lorsque le
                prix d'un produit baisse et aide les concurrents en les alertant lorsque
                le produit est en rupture de stock, le tout géré à travers des tâches
                cron.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Clipboard",
        img: "/gallery/clipboard.webp",
        code: "https://github.com/basedhound/prompt-share_app_next",
        link: "https://prompt-share-fv.vercel.app",
        tech: ["Next", "MongoDB", "Tailwind", "TS"],
        modal: (
            <>
                🍵 Next.js application designed for seamless AI prompt sharing between
                users. Explore, create, and share prompts effortlessly with MongoDB
                integration and secure authentication via NextAuth. Enjoy a modern
                design and responsive interface for optimal user experience.
                <br />
                <br />
                🥐 Application Next.js conçue pour le partage prompts entre
                utilisateurs. Découvrez, créez et partagez des prompts facilement grâce
                à l'intégration MongoDB et à l'authentification sécurisée via NextAuth.
                Profitez d'un design moderne et d'une interface responsive pour une
                expérience utilisateur optimale.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Fylo",
        img: "/gallery/fylo.webp",
        code: "https://github.com/basedhound/figma-clone_app_next",
        link: "https://figpro-fv.vercel.app",
        tech: ["Next", "LiveBlocks", "Fabric", "TS"],
        modal: (
            <>
                🍵 A minimalistic Figma clone to show how to add real-world features
                like live collaboration with cursor chat, comments, reactions, and
                drawing designs (shapes, image upload) on the canvas using fabric.js.
                <br />
                <br />
                🥐 Un clone minimaliste de Figma conçu pour illustrer l'intégration de
                fonctionnalités réalistes telles que la collaboration en temps réel avec
                chat de curseur, commentaires, réactions, ainsi que la création de
                designs (formes, téléchargement d'images) sur le canevas à l'aide de
                fabric.js.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "LoopStudios",
        img: "/gallery/loop-studio.webp",
        code: "https://github.com/basedhound/anime-db_app_next",
        link: "https://animedb-fv.netlify.app",
        tech: ["Next", "Rapid API", "Framer", "TS"],
        modal: (
            <>
                🍵 Explore your favorite anime with this Next.js application powered by
                Shikimori API. Discover new shows, enjoy seamless scrolling through an
                extensive anime database, and experience smooth transitions with Framer
                Motion.
                <br />
                <br />
                🥐 Explorez vos animes préférés facilement avec cette application
                Next.js alimentée par l'API Shikimori. Décrouvrez de nouvelles séries,
                profitez d'un défilement fluide à travers une vaste base de données
                d'animes et d'animations modernes avec Framer Motion.
            </>
        ),
    },
    //! P2 -> NEXT.JS -> UI/X ONLY
    {
        cat: "🩵, Design",
        title: "Portfolio v1",
        img: "/gallery/portfolio-v1.webp",
        code: "https://github.com/basedhound/portfolio-v3_next",
        link: "/",
        tech: ["Next", "Sass", "Framer", "TypeScript"],
        modal: (
            <>
                🍵 This portfolio is a showcase of my skills, built with React and
                powered by Next.js. I've leveraged TypeScript to ensure robust code
                quality and maintainability. A styling system crafted with Sass brings a
                polished visual identity to life. And, with Framer Motion and Anime.js,
                I've added a touch of dynamism with smooth animations and transitions,
                creating an engaging user experience.
                <br />
                <br />
                🥐 Ce portfolio est une vitrine de mes compétences, conçu avec React et
                propulsé par Next.js. J'ai mis à profit TypeScript pour assurer une
                qualité de code robuste et maintenable. Un système de styling conçu avec
                Sass donne vie à une identité visuelle soignée. Et, avec Framer Motion
                et Anime.js, j'ai ajouté une touche de dynamisme avec des animations et
                des transitions fluides, créant une expérience utilisateur engageante.
            </>
        ),
    },
    {
        cat: "🩵, React",
        title: "Fast React Pizza",
        img: "/gallery/fast-react-pizza.webp",
        code: "https://github.com/basedhound/spotlight_portfolio_next",
        link: "https://spotlight-fv.netlify.app",
        tech: ["Next", "Threejs", "Framer", "TS"],
        modal: (
            <>
                🍵 Built with Next.js for handling the user interface, Three.js for
                rendering 3D elements, Framer motion for beautiful animations, and
                styled with TailwindCSS, this portfolio demonstrates the developer's
                skills in a unique manner that creates a lasting impact.
                <br />
                <br />
                🥐 Conçu avec Next.js pour l'interface utilisateur, Three.js pour le
                rendu 3D, Framer Motion pour des animations élégantes, et stylisé avec
                TailwindCSS, ce portfolio illustre les compétences du développeur de
                manière moderne et marquante.
            </>
        ),
    },
    {
        cat: "🩵, React",
        title: "WorldWise",
        img: "/gallery/theworldwise.webp",
        code: "https://github.com/basedhound/spotlight_portfolio_next",
        link: "https://spotlight-fv.netlify.app",
        tech: ["Next", "Threejs", "Framer", "TS"],
        modal: (
            <>
                🍵 Built with Next.js for handling the user interface, Three.js for
                rendering 3D elements, Framer motion for beautiful animations, and
                styled with TailwindCSS, this portfolio demonstrates the developer's
                skills in a unique manner that creates a lasting impact.
                <br />
                <br />
                🥐 Conçu avec Next.js pour l'interface utilisateur, Three.js pour le
                rendu 3D, Framer Motion pour des animations élégantes, et stylisé avec
                TailwindCSS, ce portfolio illustre les compétences du développeur de
                manière moderne et marquante.
            </>
        ),
    },
    {
        cat: "🩵, React",
        title: "React Quiz",
        img: "/gallery/react-quiz.webp",
        code: "https://github.com/basedhound/hilink-travel_ui_next",
        link: "https://hilink-travel-fv.netlify.app",
        tech: ["Next", "Tailwind", "TypeScript"],
        modal: (
            <>
                🍵 Modern landing page design for a travel website built with Next.js,
                TailwindCSS, and TypeScript. This project leverages Next.js for
                server-side rendering (SSR) and static site generation (SSG), enhancing
                performance and SEO while offering features like automatic code
                splitting and API routes. TailwindCSS is used for its utility-first
                approach, enabling rapid UI development with pre-built classes for
                custom design and consistent styling. TypeScript ensures robust and
                maintainable code by providing static typing, which helps in catching
                errors early and improving overall application stability. The
                combination of these technologies results in a high-performance,
                visually appealing landing page tailored for travel enthusiasts.
                <br />
                <br />
                🥐 Page d'accueil au design moderne pour un site de voyage, développée
                avec Next.js, TailwindCSS et TypeScript. Ce projet utilise Next.js pour
                le rendu côté serveur (SSR) et la génération de sites statiques (SSG),
                optimisant les performances et le SEO avec des fonctionnalités comme le
                découpage automatique du code et les routes API. TailwindCSS facilite le
                développement rapide de l'interface utilisateur grâce à ses classes
                utilitaires, permettant un design personnalisé et cohérent. TypeScript
                améliore la robustesse et la maintenabilité du code en offrant une
                typage statique, ce qui permet de détecter les erreurs tôt et d'assurer
                la stabilité de l'application.
            </>
        ),
    },
    {
        cat: "🩵, Design, React, App",
        title: "RentMate",
        img: "/gallery/rentmate.webp",
        code: "https://github.com/basedhound/dashboard_app_react-refine",
        link: "https://dashboard-refine-fv.netlify.app",
        tech: ["React", "Refine", "GraphQL"],
        modal: (
            <>
                🍵 React-based internal tools, admin panels, dashboards, B2B apps with
                flexibility in mind. An open-source, headless React meta-framework,
                developed with a commitment to best practices, flexibility, minimal tech
                debt, and team alignment, could be a perfect fit for dynamic
                environments.
                <br />
                <br />
                🥐 Applications internes, panneaux d'administration, tableaux de bord et
                applications B2B basés sur React, conçus pour offrir une grande
                flexibilité. Développé selon les meilleures pratiques, favorisant la
                flexibilité, minimisant la dette technique et favorisant l'alignement
                d'équipe, idéal pour les environnements dynamiques.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Shortly",
        img: "/gallery/shortly.webp",
        code: "https://github.com/basedhound/3d-tshirts_app_react",
        link: "https://3d-tshirts-fv.netlify.app",
        tech: ["React", "Threejs", "Node", "MongoDB"],
        modal: (
            <>
                🍵 Create your own style with this 3D Customization App. Pick colors,
                add logos, and try AI designs to make your virtual swag unique. Built
                using React.js, Three.js, and OpenAI.
                <br />
                <br />
                🥐 Créez votre propre style avec cette application de personnalisation
                3D. Choisissez vos couleurs, ajoutez des logos et essayez des designs IA
                pour rendre votre style virtuel unique. Réalisée avec React.js, Three.js
                et OpenAI.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Skywings",
        img: "/gallery/skywings.webp",
        code: "https://github.com/basedhound/summarizer-ai_react",
        link: "https://summarize-fv.netlify.app",
        tech: ["React", "OpenAI", "Rapid API"],
        modal: (
            <>
                🍵 Summarize any article with one click using the powerful OpenAI model.
                This web app features a modern interface, allowing users to input
                article URLs for concise AI-generated summaries. It saves summaries
                locally for easy history management and offers copy-to-clipboard
                functionality for effortless sharing. Advanced RTK Query API requests
                optimize data fetching and management.
                <br />
                <br />
                🥐 Résumez n'importe quel article en un clic grâce au puissant modèle
                OpenAI. Cette application web offre une interface moderne et conviviale,
                permettant aux utilisateurs d'entrer des URL d'articles pour obtenir des
                résumés concis générés par l'IA. Les résumés sont enregistrés localement
                pour une gestion facile de l'historique, et une fonction de copie dans
                le presse-papiers facilite le partage. Les requêtes API avancées de RTK
                Query optimisent la récupération et la gestion des données.
            </>
        ),
    },
    {
        cat: "🩵, Design",
        title: "Vera",
        img: "/gallery/vera.webp",
        code: "https://github.com/basedhound/instagram-clone_app_react",
        link: "https://snapgram-fv.vercel.app",
        tech: ["React", "Appwrite", "TanStack"],
        modal: (
            <>
                🍵 Explore social media with this user-friendly platform that has a nice
                look and lots of features. Easily create and explore posts, and enjoy a
                strong authentication system and quick data fetching using React Query
                for a smooth user experience.
                <br />
                <br />
                🥐 Explorez les réseaux sociaux avec cette plateforme conviviale, au
                design élégant et riche en fonctionnalités. Créez et découvrez des
                publications facilement, et bénéficiez d'un système d'authentification
                sécurisé ainsi que d'une récupération rapide des données grâce à React
                Query, pour une expérience utilisateur fluide et agréable.
            </>
        ),
    },
]

export default Gallery