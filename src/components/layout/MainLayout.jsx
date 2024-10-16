import styles from "@/styles/components/MainLayout.module.scss";

import { Outlet } from "react-router-dom";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";


const MainLayout = () => {
  return (
    <>
      <main className={styles.layoutContainer}>
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
