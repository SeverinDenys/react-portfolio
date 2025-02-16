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
          <h3>"{certificate.certificateName}"</h3>
          <a
            href={certificate.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {certificate.icon && (
              <img
                src={certificate.icon}
                alt={`Certificate icon for ${certificate.certificateName}`}
              />
            )}
          </a>
        </div>
      ))}

      {certificatesData.length > 3 && (
        <div className="projects__show-more">
          <button
            className="projects__button"
            onClick={() =>
              setShowAllCertificates(!showAllCertificates)
            }
            aria-label={
              showAllCertificates
                ? "Collapse certificates list"
                : "Expand certificates list"
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
