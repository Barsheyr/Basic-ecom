import React from "react";
// import images
import HeaderImg from "../assets/images/header-fashion.jpg";
// import Link
import { Link } from "react-router-dom";
import Heroslider from "./Heroslider";

const Hero = () => {
  return (
    <section className="h-[800px] bg-white bg-cover bg-no-repeat bg-center py-24 ">
      <Heroslider />
    </section>
  );
};

export default Hero;
