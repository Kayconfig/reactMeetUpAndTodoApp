import Card from "../wrappers/Card";
import styles from "./MeetUpItem.module.css";
import { favoritesContext } from "../../store/favorites-context";
import { useContext, useState } from "react";

function MeetUpItem({ image: imgUrl, description, title, address, id }) {
  const {
    exists,
    addFavorite: addMeetupToFavorites,
    removeFavorite,
  } = useContext(favoritesContext);
  const addFavoriteInitialState = exists(id);
  const [addFavorite, setAddFavorite] = useState(addFavoriteInitialState);

  function handleAddFavorites() {
    const meetupdata = {
      image: imgUrl,
      description,
      title,
      address,
      id,
    };
    addMeetupToFavorites(meetupdata);
    setAddFavorite(false);
  }

  function removeFromFavorites() {
    removeFavorite(id);
    setAddFavorite(true);
  }
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img alt="meetup" src={imgUrl} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          {addFavorite ? (
            <button onClick={handleAddFavorites}>To Favorites</button>
          ) : (
            <button onClick={removeFromFavorites}>Remove from Favorites</button>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
