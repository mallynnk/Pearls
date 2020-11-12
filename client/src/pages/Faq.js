import React, { Component, useState, useEffect } from "react";
import Faqs from "../components/Faq";
import Hero from "../components/Heros";
import Footer from "../components/Footer/Footer"
require("dotenv").config();

const Faq =() => {
  return (
    <div className="">
       <Hero>

  </Hero>
  <div className="container">
      <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default Faq;