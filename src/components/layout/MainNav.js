import { Link } from "react-router-dom";
import styles from "./mainNav.module.css";
import { favoritesContext } from "../../store/favorites-context";
import { useContext } from "react";

function MainNavigation() {
  const { favorites } = useContext(favoritesContext);
  return (
    <header>
      <nav className={`${styles.nav}`}>
        <ul>
          <li>
            <Link to="/allmeetups">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites{" "}
              <span className={styles.favoritesCount}> {favorites.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/newmeetups">Add New Meetups</Link>
          </li>

          <li>
            <Link to="/todos">Todo Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
