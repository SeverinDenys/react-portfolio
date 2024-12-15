import hero from "../../images/Denys.jpg";

const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__content">
        <h1 className="hero__title">Hello. I'm Denys</h1>
        <img src={hero} className="hero__img" alt="hero image" />
        <p className="hero__description">
          I'm aspiring Front-End Developer. Reach out if you'd like to
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
