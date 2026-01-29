import { FaTimes } from "react-icons/fa";
import ResumeBtn from "../shared/resume-btn";
import Link from "next/link";

function Dropdown({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) {
    return (
        <div
            className={`fixed left-0 w-full h-full bg-[#151418] z-[999] flex flex-col items-center justify-center transition ease-in-out duration-300 
                ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            onClick={toggle}
        >
            <button
                className="text-white text-[2rem] absolute top-8 right-8 cursor-pointer"
                onClick={toggle}
                aria-label="Close mobile navigation menu"
            >
                <FaTimes aria-hidden="true" />
            </button>

            <nav className="flex flex-col items-center justify-center space-y-8">
                <Link
                    href="/#about"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    About
                </Link>
                <Link
                    href="/#projects"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Projects
                </Link>
                <Link
                    href="/#certification"
                    aria-label="Certifications section"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Certif.
                </Link>
                <Link
                    href="/#contact"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Contact
                </Link>
            </nav>

            <div className="mt-20 flex justify-center text-[1.7rem]">
                <ResumeBtn />
            </div>
        </div>
    );
}

export default Dropdown;