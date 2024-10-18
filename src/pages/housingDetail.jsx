import styles from "@/styles/pages/HousingDetail.module.scss";

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { routes } from "@/routes";
import housingsData from "@/data/housings.json";
const HousingDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchHousingById = (id) => {
    return housingsData.find((housing) => housing.id === id);
  };

  const housing = fetchHousingById(id);

  useEffect(() => {
    if (!housing) {
      navigate(routes.notFound, { replace: true });
    }
  }, [housing, navigate]);

  if (!housing) {
    return null;
  }

  const [firstName, lastName] = housing.host.name.split(" ");

  return (
    <div className={styles.housingDetailContainer}>
      <div className={styles.informations}>
        <div className={styles.block1}>
          <div className={styles.location}>
            <h1>{housing.title}</h1>
            <p>{housing.location}</p>
          </div>
          <div className={styles.host}>
            <div>
              <p>{firstName}</p>
              <p>{lastName}</p>
            </div>
            <img src={housing.host.picture} alt={housing.host.name} />
          </div>
        </div>
        <div className={styles.block2}>
        <div className={styles.tags}>
            {housing.tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
          <div className={styles.ratingAndHost}>
            <div className={styles.hostMobile}>
              <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <img src={housing.host.picture} alt={housing.host.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingDetailPage;
