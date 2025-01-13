import hero from "../../images/Denys.jpg";

const Hero = ({ isMenuOpen }) => {
  return (
    <section
      className={`hero__container ${isMenuOpen ? "shifted" : ""}`}
    >
      <div className="hero__content">
        <h1 className="hero__title">Hello👋 I'm Denys</h1>
        <img src={hero} className="hero__img" alt="hero image" />
        <p className="hero__description">
          I'm ukrainian refugee, living in Luzern. On the road to
          become a Front-End Developer. Reach out if you'd like to
          know more!
        </p>
        <a
          href="mailto:denys.severin@gmx.ch"
          className="hero__contactBtn"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
