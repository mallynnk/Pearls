import React, { Component, useState, useEffect } from "react";
import Faqs from "../components/Faq";
require("dotenv").config();

const Faq =() => {
  return (
    <div className="container">
      <Faqs />
    </div>
  );
};

export default Faq;