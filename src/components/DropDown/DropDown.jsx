import { AiOutlineDownload } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

function Dropdown({ isOpen, toggle }) {
    return (
        <div
            className={`fixed left-0 w-full h-full bg-[#151418] z-[999] flex flex-col items-center justify-center transition ease-in-out duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            onClick={toggle}
        >
            <FaTimes
                className="text-white text-[2rem] absolute top-8 right-8 cursor-pointer"
                onClick={toggle}
            />

            <div className="flex flex-col items-center justify-center space-y-8">
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
            </div>

            <div className="mt-20 flex justify-center text-[1.7rem]">
                <a
                    className="btn primaryBtn"
                    href="https://www.linkedin.com/in/syp-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CV
                    <AiOutlineDownload size="1.5rem" />
                </a>
            </div>
        </div>
    );
}

export default Dropdown;