import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Header from "./Components/Header";


const PublicRoutes =() =>{
    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
        </Routes>
    )
};

export default PublicRoutes;
