import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <section className="flex-row col">
          <h2 className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </h2>
          <h2 className="mx-1">
            <Link to="/shophome">
              Shop
            </Link>
          </h2>
          <h2 className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </h2>
        </section>
      );
    } else {
      return (
        <ul className="flex-row col">
          <h2 className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </h2>
          <h2 className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </h2>
          <h2 className="mx-1">
            <Link to="/shophome">
              Shop
            </Link>
          </h2>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 class="roy">
        <Link to="/">
          Roysters
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
