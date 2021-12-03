import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllMeetUpPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import TodosRoot from "./components/TodosRoot";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import { FavoritesProvider } from "./store/favorites-context";
import dotenv from "dotenv";

dotenv.config();

function App() {
  return (
    <FavoritesProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/todos" element={<TodosRoot />}></Route>
          <Route path="/allmeetups" element={<AllMeetUpPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/newmeetups" element={<NewMeetUpPage />}></Route>
        </Routes>
      </Layout>
    </FavoritesProvider>
  );
}

export default App;
