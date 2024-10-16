import styles from "@/styles/components/HousingCard.module.scss";

import { Link } from "react-router-dom";
import { routes } from "@/routes";

const HousingCard = ({ housing }) => {
  return (
    <Link to={`${routes.housingDetail}/${housing.id}`}>
      <div className={styles.housingCardContainer}>
        <img src={housing.cover} alt={housing.title} />
        <span className={styles.title}>{housing.title}</span>
      </div>
    </Link>
  );
};

export default HousingCard;
