import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

export default function Header({ toggle }) {
    return (
        <div className='Container p-0'>
            <nav className='bg-transparent h-[100px] flex items-center justify-between z-[10]'>
                <div>
                    {/* <h1 className="text-white font-extrabold text-3xl">syp.</h1> */}
                    <img
                        className='w-[47px] h-[47px]'
                        src="/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="flex items-center -mr-6 space-x-[1rem] max-md:hidden">
                    <ScrollLink to="projects" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        Projects
                    </ScrollLink>
                    <ScrollLink to="about" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        About
                    </ScrollLink>
                    <ScrollLink to="contact" className="text-[#777779] flex text-[1.2rem] items-center h-full cursor-pointer hover:text-[#f6f6f6]">
                        Contact
                    </ScrollLink>
                </div>
                <div className="flex items-center mr-6 max-md:hidden">
                    <a
                        className="btn PrimaryBtn"
                        href="https://www.linkedin.com/in/syp-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
                <FaBars onClick={toggle} className="hidden text-white text-[1.8rem] cursor-pointer max-md:block" />
            </nav>
        </div>
    )
}
