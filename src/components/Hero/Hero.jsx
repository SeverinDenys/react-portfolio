import hero from "../../images/denys.png";
import pdfCV from "../../documents/CV_Denys_Severin.pdf";

const Hero = () => {
  return (
    <section>
      <div className="hero__content">
        <div>
          <h1 className="hero__title">Hello👋 I'm Denys</h1>
          <p className="hero__description">
            I'm an Ukrainian refugee living in Luzern, currently on
            the journey to becoming a Front-End Developer. Feel free
            to reach out if you'd like to know more!
          </p>
          <a
            href={pdfCV}
            download="CV_Denys_Severin.pdf"
            className="hero__contactBtn"
          >
            DOWNLOAD CV
          </a>
        </div>
        <div>
          <img
            src={hero}
            className="hero__img"
            alt="the image of Denys Severin. Author of this react portfolio page"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
