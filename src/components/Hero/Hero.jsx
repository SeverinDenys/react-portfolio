import hero from "../../images/Denys.jpg";
import pdfCV from "../../documents/CV_Denys_Severin.pdf";

const Hero = ({ isMenuOpen }) => {
  return (
    <section
      className={`hero__container ${isMenuOpen ? "shifted" : ""}`}
    >
      <div className="hero__content">
        <h1 className="hero__title">Hello👋 I'm Denys</h1>
        <img
          src={hero}
          className="hero__img"
          alt="the image of Denys Severin. Author of this react portfolio page"
        />
        <p className="hero__description">
          I'm an Ukrainian refugee living in Luzern, currently on the
          journey to becoming a Front-End Developer. Feel free to
          reach out if you'd like to know more!
        </p>
        <a
          href={pdfCV}
          download="CV_Denys_Severin.pdf"
          className="hero__contactBtn"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
