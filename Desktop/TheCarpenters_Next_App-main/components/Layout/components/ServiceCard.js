import styles from "./ServiceCard.module.css"
import Image from "next/image"

const ServiceCard = ({serviceInfo}) => {
    return (
        <div className={styles.service_card}>
            <Image src={serviceInfo.path} className={styles.service_card_image} width={200} height={150}></Image>
            <div className={styles.service_card_desc_container}>
                <div className={styles.service_card_name}>{serviceInfo.name}</div>
            </div>
        </div>
    );
}

export default ServiceCard;