import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import styles from "./Header.module.css";

// Common Header for the project
function Header({ toggleMenu, isOpen }) {
  return (
    <div className={styles.nav_bar}>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/TextPlugin.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/EasePack.min.js"></Script>
      <div className={styles.nav_bar_section}>
        <div>
          <Link href="#">
            <a>
              <Image src="/images/logo.png" width={260} height={78} />
            </a>
          </Link>
        </div>
        <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Header;
