import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__menu" onClick={toogleHamburger}>
        <div className="hamburgerIcon">
          {!isOpen ? (
            <svg
              className="hamburgerIconBtn"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="hamburgerIconBtnCross"
              fill="#000000"
              height="10px"
              width="10px"
              viewBox="0 0 490 490"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
		489.292,457.678 277.331,245.004 489.292,32.337"
              />
            </svg>
          )}
        </div>

        <ul
          className={isOpen ? "navbar__open" : "navbar__close"}
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
