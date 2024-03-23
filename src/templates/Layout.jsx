import SideBar from "./SideBar";
import TopBar from "./TopBar";

import styles from "./styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <main>
        <SideBar />
        <section className={styles["main-section"]}>
          <TopBar />
          {children}
        </section>
      </main>
    </>
  );
}

export default Layout;
