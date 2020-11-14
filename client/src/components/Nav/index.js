import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'


var style = {
    fontSize: "2rem",
    padding: "20px",
    position: "sticky",
}

  


function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav style={style} className="justify-content-center" activeKey="/about">
          <Nav.Item>
            <Nav.Link href="/orderHistory">Order History</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/shophome">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      );
    } else {
      return (
        <Nav style={style} className="justify-content-center" activeKey="/about">
          <Nav.Item>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Shophome">Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav.Item>
        </Nav>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">Roysters</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Navigation;
