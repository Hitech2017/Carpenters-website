import styles from "./about.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about_main}>
        <div className={styles.about_us}>
          <h1>About us</h1>
          <p>
            <span>The Carpenter&apos;s Interior Studio</span> is a design studio
            based out of Chennai, India. We are providing numerous interior
            design solutions from complete home and office makeovers, kitchen
            interiors, wardrobe interiors, and you name it. We have already
            delivered around 15+ home interiors with the help of professional
            Architects, Carpenters and partners. We have also partnered with
            leading paint companies like Indigo, Asian paints, Pidilite and much
            more, to provide quality service and we do not ever compromise on
            the quality of work.
          </p>
          <p>
            At studio we value innovations by conducting various design
            workshops, fun activities to encourage employees to come up with any
            ideas, only the sky is the limit.
          </p>
          <p>We encourage creativity, empathy, honesty, and love.</p>
          <div className={styles.about_cta_wrapper}>
            <h1>Want to be a part of the family?</h1>
            <div className={styles.about_cta}>
              <button className={styles.secondary}>View Projects</button>
              <button>Let&apos;s Talk</button>
            </div>
          </div>
        </div>
        <div className={styles.team_wrapper}>
          <h1>Our Team</h1>
          <div className={styles.profile_wrapper}>
            {/* Profile cards */}
            <div className={styles.profile}>
              <div className={styles.profile_main}>
                <div className={styles.profile_div}>
                  <div className={styles.profile_img_wrapper}>
                    <Image
                      src="/images/madhan_pp.jpeg"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.profile_intro}>
                    <h3>Madhan</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.profile_main}>
                <div className={styles.profile_div}>
                  <div className={styles.profile_img_wrapper}>
                    <Image
                      src="/images/madhan_pp.jpeg"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.profile_intro}>
                    <h3>Santhosh</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
