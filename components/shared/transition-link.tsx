import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className = "flex items-center justify-center gap-4 pr-[3.25rem] text-[1.3rem] opacity-60 transition-opacity duration-200 ease-in-out hover:opacity-100",
    ...props
}) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const body = document.querySelector("body");

        body?.classList.add("page-transition");

        await sleep(400);
        router.push(href);
        await sleep(400);

        body?.classList.remove("page-transition");
    };

    return (
        <Link {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    );
};
