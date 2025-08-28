import React from "react";

const Navbar = () => {
  return (
  <nav
  className="navbar navbar-expand-lg navbar-dark"
  style={{ backgroundColor: "#d62828" }}
>
  <div className="container-fluid">
    {/* Logo / Brand */}
    <a className="navbar-brand fw-bold" href="#">
      🍔 FastBite
    </a>

    {/* Mobile Toggle Button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu Items */}
    <div className="collapse navbar-collapse" id="navbarMenu">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Menu
          </a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="specialsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Specials
          </a>
          <ul className="dropdown-menu" aria-labelledby="specialsDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Burgers
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Pizza
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Drinks
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Family Deals
              </a>
            </li>
          </ul>
        </li>

        {/* My Account (Centered in Navbar) */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle fw-bold text-white"
            href="#"
            id="accountDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="accountDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Sign In
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>

      {/* Order Now Button (Right Side) */}
      <a href="#" className="btn btn-light fw-bold">
        Order 0
      </a>
    </div>
  </div>
</nav>


  );
};

export default Navbar;
