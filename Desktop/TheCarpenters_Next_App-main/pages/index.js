import Head from "next/head";
// import YoutubeEmbed from "./YoutubeEmbed";
import styles from "../styles/Home.module.css";
import NavBar from "./navbar";
import logo from "../styles/Logo.png";
import intDesign from "../public/images/Interior-design-sample-hp.svg";
import Image from "next/image";
import kitchen from "../styles/kitchen.svg";
import sofa from "../styles/sofa.svg";
import woods from "../styles/woods.svg";
import videoButton from "../styles/playbutton.svg";
import scroller from "../styles/scrolldown.svg";
import BackDrop from "./backdrop";
// import design1 from "../styles/design1.jpg";
import ServicesGrid from "../components/Layout/components/ServiceCardsOnGrid";
import TransparentCard from "../components/Layout/components/TransparentCard";
import TileSlider from "../components/Layout/components/SimpleTileSlider";
import { useRouter } from "next/router";

const embedInfo = {
  embedId: "_Ecl_XEETEA",
  title: "Why Us?",
};

const servicesData = [
  {
    key: 1,
    name: "Bedroom Works",
    desc: " Blah Blah ",
    path: "/images/bedroom-sample.jpg",
  },
  {
    key: 2,
    name: "Living Room",
    desc: " Blah Blah ",
    path: "/images/living-room-sample.jpg",
  },
  {
    key: 3,
    name: "Modular Kitchen",
    desc: " Blah Blah ",
    path: "/images/kitchen-sample.jpg",
  },
  {
    key: 4,
    name: "Wardrobes",
    desc: " Blah Blah ",
    path: "/images/cupboard-sample.jpg",
  },
  {
    key: 5,
    name: "Dining Space",
    desc: " Blah Blah ",
    path: "/images/Dining-decor-sample.jpg",
  },
  {
    key: 6,
    name: "Water Works",
    desc: " Blah Blah ",
    path: "/images/bathroom-interior-sample.jpg",
  },
  {
    key: 7,
    name: "WFH Setup",
    desc: " Blah Blah ",
    path: "/images/wfh-home-office.jpg",
  },
  {
    key: 8,
    name: "Spl TV Setup",
    desc: " Blah Blah ",
    path: "/images/Tv-decors-sample.jpg",
  },
];

const trademarksData = [
  {
    key: 1,
    name: "Max 45 Days Completion",
    desc: " Blah Blah ",
    path: "/images/1_45days_completion.svg",
  },
  {
    key: 2,
    name: "100+ Happy Customers",
    desc: " Blah Blah ",
    path: "/images/2_happy_customers.svg",
  },
  {
    key: 3,
    name: "Best-in Class Carpenters",
    desc: " Blah Blah ",
    path: "/images/3_best_carpenters.svg",
  },
  {
    key: 4,
    name: "10+ Yrs Material Warranty",
    desc: " Blah Blah ",
    path: "/images/4_warranty.svg",
  },
];

const tiles = [
  { key: 1, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
  { key: 2, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
  { key: 3, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
  { key: 4, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
  { key: 5, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
  { key: 6, desc: "Ramapuram, Chennai", path: "/images/wfh-home-office.jpg" },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.home_root}>
        <Head>
          <title>TCIS</title>
          <meta name="keywords" content="The Carpenter's Interior studio" />
        </Head>
        <div className={styles.home_section + " " + styles.home_section_banner}>
          {/*{ <div className={styles.home_scroller}>
            <Image src={scroller}></Image>
          </div>*/}
          <div className={styles.home_promo_slogan_container}>
            <div
              className={
                styles.home_promo_slogan_line +
                " " +
                styles.home_promo_slogan_line1
              }
            >
              GIVE LIFE TO YOUR DREAM DESIGNS{" "}
            </div>
            <div
              className={
                styles.home_promo_slogan_line +
                " " +
                styles.home_promo_slogan_line2
              }
            >
              WITH OUR SOULFUL CARVINGS.
            </div>
            <div className={styles.home_promo_border_style}></div>
          </div>
          <div className={styles.home_section_right_banner}>
            <div className={styles.home_section_logo_container}>
              <Image src={logo} className={styles.home_banner_logo}></Image>
              <div className={styles.home_section_company_name}>
                The Carpenter&apos;s Interior Studio
              </div>
              <div className={styles.home_section_company_tag}>
                We create Heaven.
              </div>
            </div>
            <div className={styles.home_video_playButton}>
              <Image src={videoButton}></Image>
            </div>
          </div>
        </div>
        <div
          className={styles.home_section + " " + styles.home_section_banner_2}
        >
          <div className={styles.home_promo_image_container}>
            <Image
              src={intDesign}
              className={styles.home_banner_int_design}
              width={1000}
              height={900}
            ></Image>
          </div>
          <div className={styles.home_section_right_banner_2}>
            <div className={styles.home_section_banner2_title}>
              A Modern Interiors
            </div>
            <div className={styles.home_section_banner2_title_part}>
              Design Studio
            </div>
            <div className={styles.home_section_banner2_promo_text_1}>
              &quot;Every great design begins with an even better story.&quot;
            </div>
            <div className={styles.home_section_banner2_promo_text_2}>
              What&apos;s Yours?
            </div>
            <button
              className={styles.home_contact_button}
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Share with Us
            </button>
          </div>
        </div>
        <div
          className={styles.home_section + " " + styles.home_section_services}
        >
          <div className={styles.home_section_topContainer}>
            <Image
              src={logo}
              className={styles.home_section_logo}
              width={120}
              height={120}
            ></Image>
            <div className={styles.home_section_title}>
              Our Specialized Services in
            </div>
          </div>
          <ServicesGrid servicesData={servicesData}></ServicesGrid>
        </div>
        <div className={styles.home_section + " " + styles.home_section_choose}>
          <div className={styles.home_section_topContainer}>
            <Image
              src={logo}
              className={styles.home_section_logo}
              width={120}
              height={120}
            ></Image>
            <div className={styles.home_section_title}>
              Why The Carpenter&apos;s?
            </div>
          </div>
          <div className={styles.home_choose_container}>
            <div className={styles.home_choose_trades_container}>
              {/* <YoutubeEmbed embedId="1" embedInfo={embedInfo}/>*/}
              {trademarksData.map((trade, index) => (
                <TransparentCard key={index} cardInfo={trade}></TransparentCard>
              ))}
            </div>
            <div className={styles.home_choose_text}>
              <div className={styles.home_choose_reason_2}>
                With the Experience-rich Architects & Designers in place, We
                assure you a great quality for long-term on everything from
                Modular Kitchen, wardrobe & bathroom interiors to lot more.
              </div>
              <div className={styles.home_choose_reason_1}>
                Want to be a part of it?
              </div>
              <button
                className={styles.home_contact_button}
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Share with Us
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            styles.home_section + " " + styles.home_section_testimonials
          }
        >
          <div className={styles.home_section_topContainer}>
            <Image
              src={logo}
              className={styles.home_section_logo}
              width={120}
              height={120}
            ></Image>
            <div className={styles.home_section_title}>Our Testimonials</div>
          </div>
          <div className={styles.home_section_testimonial_slogan}>
            We consider Customer satisfaction and their feedback as the essence
            of our growth!
          </div>
          <div className={styles.home_section_testimonials_slider}>
            <TileSlider tiles={tiles}></TileSlider>
          </div>
        </div>
      </div>
    </>
  );
}
