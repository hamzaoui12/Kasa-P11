import styles from "@/styles/components/NavBar.module.scss";


import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <img src="./images/logo.png" alt="Logo" />
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink >Accueil</NavLink>
          </li>
          <li>
            <NavLink >A propos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
