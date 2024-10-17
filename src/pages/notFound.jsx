import styles from "@/styles/pages/NotFound.module.scss";

import { routes } from "@/routes";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404</h1>
      <span className={styles.description}>
        Oups! La page que vous demandez n&apos;existe pas.
      </span>
      <Link to={routes.home}>
        <span className={styles.redirect}>
          Retournez sur la page d&apos;accueil
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
