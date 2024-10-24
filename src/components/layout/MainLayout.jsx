import styles from "@/styles/components/MainLayout.module.scss";

import { Outlet } from "react-router-dom";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const MainLayout = () => {
  return (
    <main>
      <div className={styles.layoutContainer}>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;