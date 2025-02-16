const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#soft-skills">Soft Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
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
