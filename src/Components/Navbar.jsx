import { useState } from "react";

const Navbar = () => {
  const container = document.querySelector(".container");
  const [navOpen, setnavOpen] = useState("closed");

  const handleClick = () => {
    if (navOpen === "closed") {
      setnavOpen("open");
    } else {
      setnavOpen("closed");
    }
  };

  container.className = `container ${navOpen}`;
  return (
    <div className="container-nav">
      <div className="nav-circle" onClick={handleClick}></div>
    </div>
  );
};

export default Navbar;
