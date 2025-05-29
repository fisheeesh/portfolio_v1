import { Link, useNavigate } from "react-router-dom";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, className = "flex items-center justify-center gap-4 pr-[3.25rem] text-[1.3rem] opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100", to, ...props }) => {
    const navigate = useNavigate()

    const handleTransition = async (
        e
    ) => {
        e.preventDefault();
        const body = document.querySelector("body");

        body.classList.add("page-transition");

        await sleep(400);
        navigate(to)
        await sleep(400);

        body.classList.remove("page-transition");
    };
    return (
        <Link className={className} {...props} to={to} onClick={handleTransition}>
            {children}
        </Link>
    );
};
