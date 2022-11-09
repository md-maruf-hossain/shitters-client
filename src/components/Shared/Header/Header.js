import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { GrServices, GrDocument } from "react-icons/gr";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleUserLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-slate-200 border-b-2 border-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className="btn btn-ghost" to="/services">
                Service
              </Link>
              <Link className="btn btn-ghost" to="/blog">
                Blog
              </Link>
              <Link className="btn btn-ghost" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          SHUTTER
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="btn btn-ghost" to="/services">
              Service
            </Link>
            <Link className="btn btn-ghost" to="/blog">
              Blog
            </Link>
            <Link className="btn btn-ghost" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
      {/* user */}

      {user ? (
        <>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link className="btn btn-ghost">
                    <GrDocument className="text-xl" />
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link className="btn btn-ghost">
                    <GrServices className="text-xl" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link onClick={handleUserLogOut} className="btn btn-ghost text-red-500">
                    <IoIosLogOut className="text-xl text-red-500" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link className="btn btn-ghost" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
