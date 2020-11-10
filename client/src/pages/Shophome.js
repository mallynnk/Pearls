import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';


const Home = () => {
  return (
    <div className="container">
      <div class="categoryMenu">
      <CategoryMenu />
      </div>
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
