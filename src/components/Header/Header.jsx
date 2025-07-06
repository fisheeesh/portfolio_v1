import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export default function Header({ toggle }) {
    return (
        <div className='Container' style={{ padding: 0 }}>
            <nav className='bg-transparent h-[100px] flex items-center justify-between z-[10]'>
                <div>
                    <img
                        className='w-[47px] h-[47px]'
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="flex items-center -mr-6 space-x-[1rem] max-md:hidden">
                    <ScrollLink to="about" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        About
                    </ScrollLink>
                    <ScrollLink to="projects" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        Projects
                    </ScrollLink>
                    <ScrollLink to="certification" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        Certif.
                    </ScrollLink>
                    <ScrollLink to="contact" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        Contact
                    </ScrollLink>
                </div>
                <div className="flex items-center mr-6 max-md:hidden">
                    <a
                        className="btn primaryBtn"
                        href="https://www.linkedin.com/in/syp-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                        <AiOutlineDownload size="1.4rem" />
                    </a>
                </div>
                <FaBars onClick={toggle} className="hidden text-white text-[1.8rem] cursor-pointer max-md:block" />
            </nav>
        </div>
    )
}
