import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ResumeBtn from "@/ui/ResumeBtn";

function Dropdown({ isOpen, toggle }) {
    return (
        <div
            className={`fixed left-0 w-full h-full bg-[#151418] z-[999] flex flex-col items-center justify-center transition ease-in-out duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
            onClick={toggle}
        >
            <button
                className="text-white text-[2rem] absolute top-8 right-8 cursor-pointer"
                onClick={toggle}
                aria-label="Close menu"
            >
                <FaTimes aria-hidden="true" />
            </button>

            <nav className="flex flex-col items-center justify-center space-y-8">
                <ScrollLink
                    to="about"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Projects
                </ScrollLink>
                <ScrollLink
                    to="certification"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Certif.
                </ScrollLink>
                <ScrollLink
                    to="contact"
                    className="text-white text-[1.7rem] cursor-pointer hover:text-gray-400"
                    onClick={toggle}
                >
                    Contact
                </ScrollLink>
            </nav>

            <div className="mt-20 flex justify-center text-[1.7rem]">
                <ResumeBtn />
            </div>
        </div>
    );
}

export default Dropdown;