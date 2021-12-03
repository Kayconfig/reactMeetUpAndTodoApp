import { useContext } from "react";
import { favoritesContext } from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";
function FavoritesPage() {
  const { favorites } = useContext(favoritesContext);
  return (
    <div>
      <div>
        <h1>Favorites</h1>
      </div>
      <MeetUpList meetups={favorites} />
    </div>
  );
}

export default FavoritesPage;
