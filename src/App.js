import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Listing from "./pages/Listing/Listing";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";
import AnnouncementForm from "./pages/Form/AnnouncementForm";
import FiltersList from "./components/FiltersList/FiltersList";
import MyFavourites from "./pages/MyFavourites/MyFavourites";
import MyAdverts from "./pages/MyAdverts/MyAdverts";
import MapView from "./components/MapView/MapView";
import useUser from "./hooks/useUser";
import Logout from "./pages/Logout/Logout";

function App() {
  const { loggedUser } = useUser();

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)) {
      const { token } = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
      );
      const loggedInUser = jwtDecode(token);
      loggedUser(loggedInUser);
    }
  }, [loggedUser]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Listing />} />
          <Route path="announcements/:city/filters" element={<FiltersList />} />
          <Route path="announcements/mapa" element={<MapView />} />
          <Route path="/announcements/:id" element={<Detail />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/announcements/new" element={<AnnouncementForm />} />
          <Route path="/myfavourites" element={<MyFavourites />} />
          <Route path="/myadverts" element={<MyAdverts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
