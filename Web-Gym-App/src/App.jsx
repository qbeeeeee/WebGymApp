import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NavBar from "./Components/NavBar";
import TrackMyWorkout from "./Pages/TrackMyWorkout";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AlreadySignIn from "./Components/PrivateRoute/AlreadySignIn";
import AddWorkout from "./Pages/AddWorkout";
import Graphs from "./Pages/Graphs";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<AlreadySignIn />}>
          <Route path="/signin" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/trackmyworkout" element={<TrackMyWorkout />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/addworkout" element={<AddWorkout />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/graphs" element={<Graphs />} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <NewsLetter isHomepage={isHomepage} />
      <Footer />
    </div>
  );
};

export default App;
