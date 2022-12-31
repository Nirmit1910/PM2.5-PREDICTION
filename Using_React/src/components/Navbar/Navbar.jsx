import { React, useState } from "react";
import "./navbar.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="PM_navbar gradient__bg">
      <div className="PM_navbar-links">
      <a href="#home">Home</a>
      <a href="#predict">Predict</a>
      <a href="#precautions">Precautions</a>
      </div>
    </div>
  );
};

export default Navbar;
