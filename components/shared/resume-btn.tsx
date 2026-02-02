export default function ResumeBtn() {
    return (
        <a
            className="btn primaryBtn relative group overflow-hidden"
            href="https://drive.google.com/file/d/1avRoJmSAvCtP0cdRIoJSBDfqDPijYegf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check out my Resume"
        >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            Resume
        </a>
    )
}
