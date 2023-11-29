import styles from "./ServiceCardsOnGrid.module.css";
import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ servicesData }) => {
  return (
    <div className={styles.services_grid}>
      {servicesData.map((service, index) => (
        <ServiceCard key={index} serviceInfo={service}></ServiceCard>
      ))}
    </div>
  );
};

export default ServicesGrid;
