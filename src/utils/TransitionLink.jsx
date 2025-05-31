import { Link, useNavigate } from "react-router-dom";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
    children,
    className = "flex items-center justify-center gap-4 pr-[3.25rem] text-[1.3rem] opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100",
    to,
    ...props
}) => {
    const navigate = useNavigate();

    const handleTransition = async (e) => {
        e.preventDefault();
        const body = document.querySelector("body");

        body.classList.add("page-transition");
        await sleep(400);

        //* Check if the destination has a hash (like /#projects)
        if (to.includes('#')) {
            const [path, hash] = to.split('#');
            navigate(path);

            //* Wait for navigation to complete, then scroll to the hash element
            await sleep(400);

            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    //* If element not found, scroll to top
                    window.scrollTo(0, 0);
                }
            } else {
                //* No hash, scroll to top
                window.scrollTo(0, 0);
            }
        } else {
            //* Regular navigation without hash - scroll to top first
            window.scrollTo(0, 0);
            navigate(to);
            await sleep(400);
            //* Ensure we're at the top after navigation
            window.scrollTo(0, 0);
        }

        body.classList.remove("page-transition");
    };

    return (
        <Link
            to={to}
            className={className}
            onClick={handleTransition}
            {...props}
        >
            {children}
        </Link>
    );
};