import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [citizen, setCitizen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const hideMenu=()=>{
    setIsMenuOpen(false)
  }
  return (
    <>
      <nav className="navbar bg-base-200 rounded-box flex w-full gap-2 max-sm:flex-col sm:items-center">
        <div className="flex w-full items-center justify-between">
          <div className="navbar-start items-center justify-between max-sm:w-full">
            <Link
              className="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
              to="/"
            >
              Municipality Helper
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#solid-bg-navbar-collapse"
                aria-controls="solid-bg-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span
                  className={`icon-[tabler--menu-2] size-4 ${
                    isMenuOpen ? "hidden" : "block"
                  }`}
                ></span>
                <span
                  className={`icon-[tabler--x] size-4 ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="solid-bg-navbar-collapse"
          // className={`sm:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-sm:w-full ${
          //   isMenuOpen ? "block" : "hidden"
          // } w-full sm:w-auto`}
          className={`sm:flex sm:items-center sm:justify-end 
            sm:navbar-end   grow basis-full overflow-hidden transition-[height] duration-300 max-sm:w-full ${
            isMenuOpen ? "block" : "hidden"
          } w-full sm:w-auto`}
        >
          <ul className="menu sm:menu-horizontal flex-nowrap sm:gap-2 p-0 text-base">
            <li onClick={hideMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={hideMenu}>
                  <Link to="/reportproblem">Report Problem</Link>
              </li>

            {/* <li onClick={hideMenu}>
              <Link to="/track">Track Problem</Link>
            </li> */}

            <li onClick={hideMenu}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
