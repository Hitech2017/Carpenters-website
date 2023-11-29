import styles from "./TransparentCard.module.css"
import Image from "next/image"

const TransparentCard = ({cardInfo}) => {
    return (
        <div className={styles.transparent_card}>
            <Image src={cardInfo.path} className={styles.transparent_card_image} width={100} height={120}></Image>
            <div className={styles.transparent_card_desc_container}>
                <div className={styles.transparent_card_name}>{cardInfo.name}</div>
            </div>
        </div>
    );
}

export default TransparentCard;