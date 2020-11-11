import React, { Component, useState, useEffect } from "react";
import Restaurant from "../components/Restaurant";
require("dotenv").config();

const Restaurants=() => {
  return (
    <div className="Restcontainer">
      <Restaurant />
    </div>
  );
};

export default Restaurants;
