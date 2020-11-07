import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <Link to="/shophome">Shop</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <section className="flex-row">
          <h3 className="mx-1">
            <Link to="/signup">Signup</Link>
          </h3>
          <h3 className="mx-1">
            <Link to="/login">Login</Link>
          </h3>
          <h3 className="mx-1">
            <Link to="/shophome">Shop</Link>
          </h3>
          <h3 className="mx-1">
            <Link to="/restaurants">Restaurants</Link>
          </h3>
          <h3 className="mx-1">
            <Link to="/faq">FAQ</Link>
          </h3>
        </section>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Roysters</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
