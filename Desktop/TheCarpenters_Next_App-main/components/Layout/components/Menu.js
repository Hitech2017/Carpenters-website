import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.css';
import { Turn as Hamburger } from 'hamburger-react';

// Common Menu for the project
function Menu({ toggleMenu, isOpen }) {
    const router = useRouter();
    return <div className={styles.menu_section}>
        <div className={styles.ham}>
            <Hamburger toggled={isOpen} toggle={toggleMenu} color="#4760FF" size={40} />
        </div>
        <ol>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="gallery">
                    <a>Gallery</a>
                </Link>
            </li>
            <li>
                <Link href="about">
                    <a>About</a>
                </Link>
            </li>
            {/* <li>
                <Link href="#">
                    <a>Contact</a>
                </Link>
            </li> */}
        </ol>
        <button onClick={() => {router.push("/contact-us")}}>Contact Us</button>
    </div>
};

export default Menu;