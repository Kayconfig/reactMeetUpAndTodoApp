import styles from "./Layout.module.css";
import MainNavigation from "./MainNav";

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.container}>{children}</main>
    </div>
  );
}

export default Layout;
