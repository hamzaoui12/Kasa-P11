import styles from "@/styles/pages/Home.module.scss";

import { useState, useEffect } from "react";
import Banner from "@/components/ui/Banner";
import HousingCard from "@/components/housing/HousingCard";
import housingsData from "@/data/housings.json";

const HomePage = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    setHousings(housingsData);
  }, []);

  return (
    <>
      <div>
        <Banner
          image={"./images/paysage1.png"}
          text={"Chez vous, partout et ailleurs"}
        />
      </div>
      <div className={styles.housingsContainer}>
        {housings.map((housing) => {
          return <HousingCard key={housing.id} housing={housing} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
