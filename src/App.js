import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Listing from "./pages/Listing/Listing";
import Header from "./components/Header/Header";
import Detail from "./pages/Detail/Detail";
import AnnouncementForm from "./pages/Form/AnnouncementForm";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Listing />} />
          <Route path="/announcements/:announcementId" element={<Detail />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/form" elements={<AnnouncementForm />} />
          <Route path="/profile" elements={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
