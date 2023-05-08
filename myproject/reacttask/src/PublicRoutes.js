import { Route, Routes } from "react-router";
import React from "react";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Services from "./Component/Services";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Aboutus from "./Component/About us";
import Signup from "./Component/signup";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};
export default PublicRoutes;
