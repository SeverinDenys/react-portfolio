import React, { useState } from "react";
import { certificatesData } from "../../../certificates";

const Certificates = () => {
  const [showAllCertificates, setShowAllCertificates] =
    useState(false);

  const displayedCertificates = showAllCertificates
    ? certificatesData
    : certificatesData.slice(0, 3);

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      {displayedCertificates.map((certificate, index) => (
        <div className="certificates-holder" key={index}>
          <h4>"{certificate.certificateName}"</h4>
          <a
            href={certificate.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {certificate.icon && (
              <img
                src={certificate.icon}
                alt={`${certificate.certificateName} icon`}
                // style={{ width: "20px", marginLeft: "8px" }}
              />
            )}
          </a>
        </div>
      ))}

      {certificatesData.length && (
        <div className="projects__show-more">
          <button
            className="projects__button"
            onClick={() =>
              setShowAllCertificates(!showAllCertificates)
            }
          >
            {showAllCertificates ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificates;
