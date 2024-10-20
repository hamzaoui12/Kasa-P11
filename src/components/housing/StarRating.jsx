import styles from "@/styles/components/StarRating.module.scss";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <svg
        key={index}
        className={index < rating ? styles.filledStar : styles.emptyStar}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="30"
        height="30"
      >
        <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 20.176 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
      </svg>
    );
  });

  return <div className={styles.rating}>{stars}</div>;
};

export default StarRating;
