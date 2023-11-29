import styles from "./Footer.module.css";
import Link from "next/link";

// Common footer for the project
function Footer() {
  return (
    <div className={styles.footer_component}>
      <div className={styles.footer_section}>
        <div className={styles.footer_cta}>
          <div className={styles.footer_card}>
            <p className="heading">Services</p>
            <ol>
              <li>
                <p>Kitchen interiors</p>
              </li>
              <li>
                <p>Bathroom interiors</p>
              </li>
              <li>
                <p>Bedroom interiors</p>
              </li>
              <li>
                <p>Wardrobe interiors</p>
              </li>
            </ol>
          </div>
          <div className={styles.footer_card}>
            <p className="heading">Contact</p>
            <ol>
              <li>
                <p>+91-9840201922</p>
              </li>
              <li>
                <p className="email">info@thecarpentersinteriorstudio.com</p>
              </li>
            </ol>
          </div>
          <div className={styles.footer_card}>
            <p className="heading">Location</p>
            <ol>
              <li>
                <p>
                  No.18, Sri Moogambigai Nagar, Kattupakkam, Chennai 600 056
                </p>
              </li>
            </ol>
          </div>
          <div className={`${styles.footer_card} ${styles.icons}`}>
            <ul>
              <li>
                <Link href="#">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_privacy}>
          <div className={styles.footer_copyright}>
            <p>
              <span>&#169;</span> All Rights Reserved The Carpenter&apos;s
              Interior Studio
            </p>
            <p>
              Designed by <a>Totalinc.corp</a>
            </p>
          </div>
          <div className={styles.footer_pri}>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
