import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./Layout.module.css";
import { gsap } from 'gsap';

// Project Layout Header and Footer wrapper component
function Layout({ children }) {
    const router = useRouter();
    const menu_ref = useRef();
    const q = gsap.utils.selector(menu_ref);
    const tl = useRef();

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            // Close menu
            gsap.to(menu_ref.current, {duration: 0.6, top: "-100vh"});
        } else {
            // Open menu
            // gsap.to(menu_ref.current, {duration: 0.8, top: 0});
            tl.current = gsap.timeline()
            .to(menu_ref.current, {duration: 0.8, top: 0})
            .from(q(".menu_name"),  {duration: 0.8, y: -100}, "-=0.7");
        }

        setOpen(!isOpen);
    };

    const phoneMenu = (route) => {
        router.push(route);
        gsap.to(menu_ref.current, {duration: 0.6, top: "-100vh"});
        setOpen(false);
    }

    return (
        <div className={styles.main_layout} id="root">
            <Header toggleMenu={toggleMenu} isOpen={isOpen} />
            <div className={styles.phone_menu} ref={menu_ref}>
                <ol>
                    <li>
                        <Link href="/">
                            <a className='menu_name' onClick={() => phoneMenu("/")}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="gallery">
                            <a className='menu_name' onClick={() => phoneMenu("gallery")}>Gallery</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="about">
                            <a className='menu_name' onClick={() => phoneMenu("about")}>About</a>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => phoneMenu('contact-us')}>Contact Us</button>
                    </li>
                </ol>
            </div>
            { children }
            <Footer />
        </div>
    );
};

export default Layout;