const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__title">
        Portfolio
      </a>
      <div className="navbar__menu">
        <ul className="navbar__menuItems">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">projects</a>
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
