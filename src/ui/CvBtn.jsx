import { AiOutlineDownload } from 'react-icons/ai'

export default function CvBtn() {
    return (
        <a
            className="btn primaryBtn"
            href="https://www.linkedin.com/in/syp-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check out my CV"
        >
            CV
            <AiOutlineDownload size="1.4rem" aria-hidden="true" />
        </a>
    )
}
