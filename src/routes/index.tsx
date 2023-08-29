import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "../pages/home";
import SignIn from "../pages/login/SignIn";
import Download from "../pages/Download";
import SignUp from "../pages/login/SignUp";
import { useRef } from "react";
import Game from "../pages/Game";

const AppRoutes = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar ref={ref} />}>
          <Route path="/" element={<Home ref={ref} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/games" />
          <Route path="/games/:id" element={<Game/>} />
          <Route path="/instruction" />
          <Route path="/download" element={<Download />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;