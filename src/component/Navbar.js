import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-base-200 rounded-box flex w-full gap-2 max-sm:flex-col sm:items-center">
        <div class="flex w-full items-center justify-between">
          <div class="navbar-start items-center justify-between max-sm:w-full">
            <Link
              class="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
              to="/"
            >
              Municipality Helper
            </Link>
            <div class="sm:hidden">
              <button
                type="button"
                class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#solid-bg-navbar-collapse"
                aria-controls="solid-bg-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="solid-bg-navbar-collapse"
          class="sm:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-sm:w-full"
        >
          <ul class="menu sm:menu-horizontal flex-nowrap sm:gap-2 p-0 text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reportproblem">Report Problem</Link>
            </li>
            <li>
              <Link to="/track">Track Problem</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
