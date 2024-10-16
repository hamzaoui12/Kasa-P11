import styles from "@/styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src="./images/logo2.png" alt="Logo" />
      <p>&copy; 2020 Kasa. Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
