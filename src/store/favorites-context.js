import { createContext, useState } from "react";
const favoritesContext = createContext({ favorites: [] });

function FavoritesProvider({ children }) {
  const [favorites, setFavorite] = useState([]);

  function addFavorite(meetup) {
    //ensures that we get the previous state
    if (!favorites.find((favorite) => favorite.id === meetup.id)) {
      setFavorite((prevState) => {
        return [...prevState, meetup];
      });
    }
  }

  function removeFavorite(id) {
    setFavorite((prevState) => {
      return [...prevState.filter((favorite) => favorite.id !== id)];
    });
  }
  function exists(id) {
    return !favorites.some((favorite) => favorite.id === id);
  }

  return (
    <favoritesContext.Provider
      value={{ favorites, addFavorite, exists, removeFavorite }}
    >
      {children}
    </favoritesContext.Provider>
  );
}

export { FavoritesProvider, favoritesContext };
