import React, { Component, useState, useEffect } from "react";
import Restaurant from "../components/Restaurant";
import Footer from "../components/Footer/Footer"
require("dotenv").config();

const Restaurants=() => {
  return (
    <div className="">
      <Restaurant />
      <Footer />
    </div>
  );
};

export default Restaurants;
