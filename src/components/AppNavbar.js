import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavbar = ({ isAuth, login, logout }) => {
  return (
    <Navbar dark color="dark" expand="md"  className="border-bottom p-3">
      <NavbarBrand
        tag={() => (
          <Link className="p-2 text-light" to="/">
            Home
          </Link>
        )}
      />
      <Nav className="mr-auto ">
        <NavItem>
          <Link to="/admin">Admin Dash</Link>
        </NavItem>
        <NavItem>
          <button onClick={() => (isAuth ? logout() : login())}>
            {" "}
            {isAuth ? "Logout" : "Login"}{" "}
          </button>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
