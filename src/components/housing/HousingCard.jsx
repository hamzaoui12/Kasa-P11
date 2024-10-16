import styles from "@/styles/components/HousingCard.module.scss";

import { Link } from "react-router-dom";


const HousingCard = ({ housing }) => {
  return (
    <Link >
      <div className={styles.housingCardContainer}>
        <img src={housing.cover} alt={housing.title} />
        <span className={styles.title}>{housing.title}</span>
      </div>
    </Link>
  );
};

export default HousingCard;
