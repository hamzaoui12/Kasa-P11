import styles from "@/styles/components/Banner.module.scss";

const Banner = ({ image, text }) => {
  return (
    <div className={styles.bannerContainer}>
      <img src={image} alt="Paysage" />

      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Banner;
