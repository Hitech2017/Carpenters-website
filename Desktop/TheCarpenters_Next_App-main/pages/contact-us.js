import styles from "./contact-us.module.css";
import Image from 'next/image';

function ContactUs() {
    return <div className={styles.contact_container}>
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_img_wrapper}>
                <Image src="/images/contact.jpg" width={3400} height={3400} />
            </div>
            <div className={styles.contact_form}>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter your name" id="name" type={"text"} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input placeholder="example@gmail.com" id="email" type={"email"}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input placeholder="9999999999" id="phone" type={"text"}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="A brief description of your enquiry!" ></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
}

export default ContactUs;