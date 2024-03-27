import {FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 mt-12 text-base-content rounded">
            <nav className="flex justify-center flex-wrap gap-4 text-lg">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="flex justify-center flex-wrap gap-4 text-2xl *:cursor-pointer">
                    <a><FaFacebook /></a>
                    <a><FaTwitter /></a>
                    <a><FaInstagram /></a>
                    <a><FaGithub /></a>
                    <a><FaTelegram /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by Book Vibe.</p>
            </aside>
        </footer>
    );
};

export default Footer;
