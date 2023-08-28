import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "../pages/home";
import SignIn from "../pages/login/SignIn";
import Download from "../pages/Download";
import SignUp from "../pages/login/SignUp";
import { useRef } from "react";

const AppRoutes = () => {
  const ref: React.RefObject<HTMLInputElement> = useRef();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar ref={ref} />}>
          <Route path="/" element={<Home ref={ref} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/games" />
          <Route path="/instruction" />
          <Route path="/download" element={<Download />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;