import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Home from "../pages/home";
import SignIn from "../pages/login/SignIn";
import Download from "../pages/Download";

const AppRoutes =() => {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/games" />
                <Route path="/instruction" />
                <Route path="/download" element={<Download />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
} 

export default AppRoutes;