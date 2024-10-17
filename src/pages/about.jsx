import styles from "@/styles/pages/About.module.scss";
import Banner from "@/components/ui/Banner";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <Banner image={"./images/paysage2.png"} />
    </div>
  );
};

export default AboutPage;
