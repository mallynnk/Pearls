import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import Hero from "../components/Heros";
import Footer from "../components/Footer/Footer"


const Home = () => {
  return (
    <div> 
    <Hero></Hero>
    <div className="container">
      <div class="categoryMenu">
      <CategoryMenu />
      </div>
      <ProductList />
      <Cart />
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
