import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import CvBtn from "@/ui/CvBtn";

export default function Header({ toggle }) {
    return (
        <header className="Container" style={{ padding: 0 }}>
            <nav
                className="bg-transparent h-[100px] flex items-center justify-between z-[10]"
                aria-label="Main navigation"
            >
                <div>
                    <a href="#top" aria-label="Go to top">
                        <img
                            className="w-[47px] h-[47px]"
                            src="/logo.png"
                            alt="Swam Yi Phyo logo"
                        />
                    </a>
                </div>

                <ul className="flex items-center -mr-6 space-x-[1rem] max-md:hidden">
                    <li>
                        <ScrollLink
                            to="about"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]"
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]"
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="certification"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]"
                        >
                            Certif.
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>

                <div className="flex items-center mr-6 max-md:hidden">
                    <CvBtn />
                </div>

                <button
                    onClick={toggle}
                    aria-label="Open menu"
                    className="hidden text-white text-[1.8rem] cursor-pointer max-md:block"
                >
                    <FaBars aria-hidden="true" />
                </button>
            </nav>
        </header>
    );
}