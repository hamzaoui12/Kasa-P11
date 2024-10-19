import styles from "@/styles/components/Carousel.module.scss";

import { useState } from "react";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === pictures.length - 1) {
      setIndex(0);

      return;
    }

    setIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);

      return;
    }

    setIndex((prev) => prev - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <img src={pictures[index]} alt="Housing" />
      {pictures.length > 1 && (
        <>
          <span
            className={`${styles.previous} ${styles.noSelect}`}
            onClick={handlePrevious}
          >
            &lt;
          </span>

          <span
            className={`${styles.next} ${styles.noSelect}`}
            onClick={handleNext}
          >
            &gt;
          </span>
          <span className={`${styles.count} ${styles.noSelect}`}>
            {index + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Carousel;
