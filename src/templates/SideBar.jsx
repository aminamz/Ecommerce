import styles from "./styles/SideBar.module.css";

function SideBar() {
  return (
    <aside className={styles["side-bar"]}>
      <h1>AnyShop</h1>
      <div>
        <h3>Categories</h3>
        <ul>
          <li>Men</li>
          <li>Wemen</li>
          <li>Jewlery</li>
          <li>Accessories</li>
        </ul>
      </div>
      <footer>
        <p>Allright reserved &copy;</p>
      </footer>
    </aside>
  );
}

export default SideBar;
