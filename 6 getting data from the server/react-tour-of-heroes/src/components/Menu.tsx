import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <>
      <h2>Top Heroes</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
    </>
  );
};

export default Menu;
