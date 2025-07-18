import { FaBars } from "react-icons/fa";
import ResumeBtn from "../shared/resume-btn";
import Image from "next/image";
import Link from "next/link";

export default function Header({ toggle }: { toggle: () => void }) {
    return (
        <header className="Container" style={{ padding: 0 }}>
            <nav
                className="bg-transparent h-[100px] flex items-center justify-between z-[10]"
                aria-label="Main navigation"
            >
                <div className="mt-0.5">
                    <Image
                        src="/assets/logo.png"
                        priority
                        alt="Swam Yi Phyo logo"
                        width={54}
                        height={54}
                    />
                </div>

                <ul className="flex items-center -mr-6 space-x-[1rem] max-md:hidden">
                    <li>
                        <Link
                            href="/#about"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-light"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-light"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            aria-label="Certifications section"
                            href="/#certification"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-light"
                        >
                            Certif.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#contact"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-light"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center mr-6 max-md:hidden">
                    <ResumeBtn />
                </div>

                <button
                    onClick={toggle}
                    aria-label="Open mobile navigation menu"
                    className="hidden text-white text-[1.8rem] cursor-pointer max-md:block"
                >
                    <FaBars aria-hidden="true" />
                </button>
            </nav>
        </header>
    );
}